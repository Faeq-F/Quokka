using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace Quokka.PluginArch
{
  /// <summary>
  /// Represents the result of a plugin loading operation.
  /// </summary>
  public class PluginLoadResult
  {
    /// <summary>
    /// Gets the collection of loaded <see cref="Plugin"/> instances.
    /// </summary>
    public Collection<Plugin> LoadedPlugins { get; } = new();

    /// <summary>
    /// Gets a dictionary mapping plugin names to a value indicating whether they possess a custom context pane.
    /// </summary>
    public Dictionary<string, bool> HasContextPane { get; } = new();
  }

  /// <summary>
  /// Provides services for discovering, loading, and inspecting Quokka plugins.
  /// </summary>
  public class PluginLoader
  {
    private readonly string _plugBoardPath;

    /// <summary>
    /// Initializes a new instance of the <see cref="PluginLoader"/> class.
    /// </summary>
    /// <param name="plugBoardPath">The path to the PlugBoard directory.</param>
    /// <exception cref="ArgumentNullException">
    /// <paramref name="plugBoardPath"/> is <see langword="null"/>.
    /// </exception>
    public PluginLoader(string plugBoardPath)
    {
      ArgumentNullException.ThrowIfNull(plugBoardPath);
      _plugBoardPath = plugBoardPath;
    }

    /// <summary>
    /// Discovers and loads all plugins from the configured PlugBoard path asynchronously in parallel.
    /// </summary>
    /// <param name="showError">A delegate to show error messages during the loading process.</param>
    /// <param name="cancellationToken">A token to monitor for cancellation requests.</param>
    /// <returns>
    /// A task that represents the asynchronous load operation. The task result contains a <see cref="PluginLoadResult"/> containing the loaded plugins and context pane info.
    /// </returns>
    /// <exception cref="ArgumentNullException">
    /// <paramref name="showError"/> is <see langword="null"/>.
    /// </exception>
    public async Task<PluginLoadResult> LoadAsync(Action<Exception, string> showError, CancellationToken cancellationToken = default)
    {
      ArgumentNullException.ThrowIfNull(showError);

      PluginLoadResult result = new();

      if (!Directory.Exists(_plugBoardPath))
      {
        return result;
      }

      cancellationToken.ThrowIfCancellationRequested();
      string[] pluginDirs = Directory.GetDirectories(_plugBoardPath);

      // Load all plugin assemblies concurrently across background tasks
      IEnumerable<Task<(Plugin? plugin, string pluginName, bool hasContextPane)?>> loadTasks = pluginDirs.Select(dir => Task.Run(() =>
      {
        cancellationToken.ThrowIfCancellationRequested();
        return LoadPluginFromDirectory(dir, showError, cancellationToken);
      }, cancellationToken));

      (Plugin? plugin, string pluginName, bool hasContextPane)?[] loadedItems = await Task.WhenAll(loadTasks).ConfigureAwait(false);

      foreach ((Plugin? plugin, string pluginName, bool hasContextPane)? item in loadedItems)
      {
        if (item.HasValue && item.Value.plugin is not null)
        {
          result.LoadedPlugins.Add(item.Value.plugin);
          result.HasContextPane[item.Value.pluginName] = item.Value.hasContextPane;
        }
      }

      return result;
    }

    private (Plugin? plugin, string pluginName, bool hasContextPane)? LoadPluginFromDirectory(string pluginDir, Action<Exception, string> showError, CancellationToken cancellationToken)
    {
      cancellationToken.ThrowIfCancellationRequested();

      try
      {
        if (!string.IsNullOrWhiteSpace(pluginDir) && Directory.Exists(pluginDir))
        {
          string dllPath = GetPluggerDll(pluginDir);
          if (string.IsNullOrWhiteSpace(dllPath) || !File.Exists(dllPath))
          {
            return null;
          }

          Assembly assembly = Assembly.LoadFile(dllPath);
          Type[] types;
          try
          {
            types = assembly.GetTypes();
          }
          catch (ReflectionTypeLoadException ex)
          {
            types = ex.Types.OfType<Type>().ToArray();
          }

          Type? type = types.FirstOrDefault(t => typeof(Plugin).IsAssignableFrom(t) && t.IsClass && !t.IsAbstract && !t.IsInterface);

          if (type is not null)
          {
            if (Activator.CreateInstance(type) is not Plugin plugin || string.IsNullOrWhiteSpace(plugin.PluginName))
            {
              return null;
            }

            string pluginName = pluginDir.Substring((_plugBoardPath.EndsWith('\\') ? _plugBoardPath : _plugBoardPath + "\\").Length);
            bool hasContextPane = false;

            foreach (Type assemblyType in types)
            {
              if (assemblyType.ToString().Equals(pluginName + ".ContextPane", StringComparison.Ordinal))
              {
                hasContextPane = true;
                break;
              }
            }

            return (plugin, pluginName, hasContextPane);
          }
        }
      }
      catch (OperationCanceledException)
      {
        throw;
      }
      catch (Exception ex)
      {
        string folderName = Path.GetFileName(pluginDir) ?? pluginDir;
        showError(ex, $"Error loading the plugin \"{folderName}\"");
      }

      return null;
    }

    /// <summary>
    /// Gets the absolute path to the assembly DLL file of the plugin at the specified directory.
    /// </summary>
    /// <param name="connector">The directory path of the plugin connector.</param>
    /// <returns>
    /// The absolute path to the plugin DLL file; otherwise, <see cref="string.Empty"/>.
    /// </returns>
    private static string GetPluggerDll(string connector)
    {
      if (string.IsNullOrWhiteSpace(connector) || !Directory.Exists(connector))
      {
        return string.Empty;
      }

      try
      {
        string[] files = Directory.GetFiles(
            Path.GetFullPath(connector),
            "*.dll",
            SearchOption.AllDirectories
        );
        foreach (string file in files)
        {
          try
          {
            bool? isPlugin = FileVersionInfo.GetVersionInfo(file)?.ProductName?.StartsWith("Plugin", StringComparison.Ordinal);
            if (isPlugin is true)
            {
              return file;
            }
          }
          catch (Exception ex) when (ex is IOException or UnauthorizedAccessException or BadImageFormatException or System.Security.SecurityException)
          {
            // Skip unreadable or corrupted DLL files safely
          }
        }
      }
      catch (Exception ex) when (ex is IOException or UnauthorizedAccessException or System.Security.SecurityException)
      {
        // Safe directory read failure fallback
      }

      return string.Empty;
    }
  }
}
