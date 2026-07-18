using Quokka;
using Quokka.PluginArch;
using System.IO;
using System.Reflection;

namespace Tests.PluginArch
{
  /// <summary>
  /// Integration tests for the plugin discovery, loading, and startup architecture.
  /// Uses <c>PluginCalculator</c> to demonstrate plugin loading.
  /// </summary>
  public class TestPluginLoading : IDisposable
  {
    private readonly string _tempPlugBoardPath;
    private readonly string _originalCurrentDirectory;

    /// <summary>
    /// Initializes a new instance of the <see cref="TestPluginLoading"/> class and sets up the temporary PlugBoard directory.
    /// </summary>
    public TestPluginLoading()
    {
      _originalCurrentDirectory = Environment.CurrentDirectory;

      // Clean up legacy temp plugboard directories from previous runs
      try
      {
        foreach (var dir in Directory.GetDirectories(_originalCurrentDirectory, "TempPlugBoard_*"))
        {
          try
          {
            Directory.Delete(dir, recursive: true);
          }
          catch
          {
            // Ignore if locked by another concurrent test runner instance
          }
        }
      }
      catch
      {
        // Ignore directory enumeration failures
      }

      // Create a unique temporary directory inside the test execution folder
      string uniqueId = Guid.NewGuid().ToString("N");
      _tempPlugBoardPath = Path.Combine(_originalCurrentDirectory, "TempPlugBoard_" + uniqueId);
      Directory.CreateDirectory(_tempPlugBoardPath);
      Directory.CreateDirectory(Path.Combine(_tempPlugBoardPath, "PlugBoard"));

      // Set the CurrentDirectory to our temp folder so App.LoadPlugins finds it
      Environment.CurrentDirectory = _tempPlugBoardPath;

      // Reset the plugins collection so we start clean
      var pluginsField = typeof(App).GetField("plugins", BindingFlags.NonPublic | BindingFlags.Static);
      if (pluginsField != null)
      {
        var list = pluginsField.GetValue(null) as System.Collections.ObjectModel.Collection<Plugin>;
        list?.Clear();
      }

      var hasContextPaneField = typeof(App).GetField("hasContextPane", BindingFlags.NonPublic | BindingFlags.Static);
      if (hasContextPaneField != null)
      {
        var dict = hasContextPaneField.GetValue(null) as System.Collections.Generic.Dictionary<string, bool>;
        dict?.Clear();
      }

      // Mock ShowErrorMessageBox to prevent any modal dialog boxes
      App.ShowErrorMessageBox = (exception, title) => { };

      // Register AssemblyResolve to bridge assembly loading context gaps
      AppDomain.CurrentDomain.AssemblyResolve += ResolveQuokkaAssembly;
    }

    private Assembly? ResolveQuokkaAssembly(object sender, ResolveEventArgs args)
    {
      if (args.Name.StartsWith("Quokka,", StringComparison.OrdinalIgnoreCase))
      {
        return typeof(App).Assembly;
      }
      return null;
    }

    /// <summary>
    /// Verifies that <c>LoadPlugins</c> discovers, loads, and starts plugins successfully.
    /// </summary>
    [Fact]
    public void TestLoadPlugins_DiscoversAndLoadsPlugins()
    {
      // 1. Copy the compiled plugin's folder structure from BuildOutput for integration testing
      string sourcePlugBoard = @"C:\Users\faeqf\Documents\git\Quokka\BuildOutput\Quokka\PlugBoard";
      string pluginSubDir = "PluginCalculator";
      string sourcePluginDir = Path.Combine(sourcePlugBoard, pluginSubDir, "Plugin");
      string destPluginDir = Path.Combine(_tempPlugBoardPath, "PlugBoard", pluginSubDir, "Plugin");

      if (Directory.Exists(sourcePluginDir))
      {
        Directory.CreateDirectory(destPluginDir);
        foreach (var file in Directory.GetFiles(sourcePluginDir))
        {
          File.Copy(file, Path.Combine(destPluginDir, Path.GetFileName(file)), overwrite: true);
        }
      }

      // 2. Invoke LoadPlugins via Reflection
      MethodInfo? loadPluginsMethod = typeof(App).GetMethod("LoadPlugins", BindingFlags.NonPublic | BindingFlags.Static);
      loadPluginsMethod.Should().NotBeNull();
      loadPluginsMethod!.Invoke(null, null);

      // 3. Assertions
      App.Plugins.Should().NotBeEmpty();
      App.Plugins.Should().Contain(p => p.PluginName == "PluginQuokka"); // internal plugin is always loaded

      if (Directory.Exists(sourcePluginDir))
      {
        App.Plugins.Should().Contain(p => p.PluginName == "Calculator");
      }
    }

    /// <summary>
    /// Cleans up the temporary PlugBoard directory and restores the original current directory.
    /// </summary>
    public void Dispose()
    {
      AppDomain.CurrentDomain.AssemblyResolve -= ResolveQuokkaAssembly;
      Environment.CurrentDirectory = _originalCurrentDirectory;
      try
      {
        if (Directory.Exists(_tempPlugBoardPath))
        {
          Directory.Delete(_tempPlugBoardPath, recursive: true);
        }
      }
      catch
      {
        // Ignore cleanup errors in tests
      }
    }
  }
}
