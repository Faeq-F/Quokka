using Quokka.PluginArch;
using Quokka.TheQuokkaPlugin;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace Quokka
{
  public partial class App
  {

    /// <summary>
    /// Gets the collection of all plugins available in the PlugBoard.
    /// </summary>
    public static Collection<Plugin> Plugins { get; private set; } = new();

    /// <summary>
    /// Gets a dictionary mapping plugin names to a value indicating whether they possess a custom context pane.
    /// </summary>
    public static Dictionary<string, bool> HasContextPane { get; private set; } = new();

    /// <summary>
    /// Discovers, loads, and initializes all plugins located inside the <c>PlugBoard</c> directory asynchronously, supporting cancellation.
    /// </summary>
    /// <param name="cancellationToken">A token to monitor for cancellation requests.</param>
    /// <returns>A <see cref="Task"/> representing the asynchronous operation.</returns>
    public static async Task LoadPluginsAsync(CancellationToken cancellationToken = default)
    {
      string plugBoardPath = Path.Combine(Environment.CurrentDirectory, "PlugBoard");
      if (Directory.Exists(plugBoardPath))
      {
        PluginLoader loader = new(plugBoardPath);
        PluginLoadResult result = await loader.LoadAsync(ShowErrorMessageBox, cancellationToken).ConfigureAwait(false);

        Collection<Plugin> allPlugins = new(result.LoadedPlugins) { new PluginQuokka() };
        Plugins = allPlugins;

        HasContextPane = result.HasContextPane;

        // run anything needed for plugins on app startup
        foreach (Plugin plugin in Plugins)
        {
          cancellationToken.ThrowIfCancellationRequested();

          try
          {
            plugin.OnAppStartup();
          }
          catch (Exception ex)
          {
            ShowErrorMessageBox(ex, $"Error with the \"{plugin.PluginName}\" plugin calling its OnAppStartup()");
          }
        }
      }
    }
  }
}
