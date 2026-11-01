using Quokka;
using Quokka.PluginArch;
using System.IO;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

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
        foreach (string dir in Directory.GetDirectories(_originalCurrentDirectory, "TempPlugBoard_*"))
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

      // Reset the plugins collection and context pane dictionary so we start clean
      App.Plugins.Clear();
      App.HasContextPane.Clear();

      // Mock ShowErrorMessageBox to prevent any modal dialog boxes
      App.ShowErrorMessageBox = (_, _) => { };

      // Register AssemblyResolve to bridge assembly loading context gaps
      AppDomain.CurrentDomain.AssemblyResolve += ResolveQuokkaAssembly;
    }

    private Assembly? ResolveQuokkaAssembly(object? sender, ResolveEventArgs args) =>
      args.Name.StartsWith("Quokka,", StringComparison.OrdinalIgnoreCase)
        ? typeof(App).Assembly
        : null;

    /// <summary>
    /// Verifies that <c>LoadAsync</c> discovers, loads, and starts plugins successfully.
    /// </summary>
    [Fact]
    public async Task TestLoadPlugins_DiscoversAndLoadsPlugins()
    {
      // 1. Copy the compiled plugin's folder structure from BuildOutput for integration testing
      const string sourcePlugBoard = @"C:\Users\faeqf\Documents\git\Quokka\BuildOutput\Quokka\PlugBoard";
      const string pluginSubDir = "PluginCalculator";
      string sourcePluginDir = Path.Combine(sourcePlugBoard, pluginSubDir, "Plugin");
      string destPluginDir = Path.Combine(_tempPlugBoardPath, "PlugBoard", pluginSubDir, "Plugin");

      if (Directory.Exists(sourcePluginDir))
      {
        Directory.CreateDirectory(destPluginDir);
        foreach (string file in Directory.GetFiles(sourcePluginDir))
        {
          File.Copy(file, Path.Combine(destPluginDir, Path.GetFileName(file)), overwrite: true);
        }
      }

      // 2. Instantiate and run PluginLoader directly
      string plugBoardPath = Path.Combine(_tempPlugBoardPath, "PlugBoard");
      PluginLoader loader = new(plugBoardPath);
      PluginLoadResult result = await loader.LoadAsync((_, _) => { });

      // 3. Assertions
      if (Directory.Exists(sourcePluginDir))
      {
        result.LoadedPlugins.Should().NotBeEmpty();
        result.LoadedPlugins.Should().Contain(p => p.PluginName == "Calculator");
        result.HasContextPane.Should().ContainKey("PluginCalculator");
        result.HasContextPane["PluginCalculator"].Should().BeTrue();
      }
    }

    /// <summary>
    /// Verifies that <c>LoadAsync</c> discovers and loads plugins successfully.
    /// </summary>
    [Fact]
    public async Task TestLoadAsync_DiscoversAndLoadsPlugins()
    {
      // 1. Copy the compiled plugin's folder structure from BuildOutput for integration testing
      const string sourcePlugBoard = @"C:\Users\faeqf\Documents\git\Quokka\BuildOutput\Quokka\PlugBoard";
      const string pluginSubDir = "PluginCalculator";
      string sourcePluginDir = Path.Combine(sourcePlugBoard, pluginSubDir, "Plugin");
      string destPluginDir = Path.Combine(_tempPlugBoardPath, "PlugBoard", pluginSubDir, "Plugin");

      if (Directory.Exists(sourcePluginDir))
      {
        Directory.CreateDirectory(destPluginDir);
        foreach (string file in Directory.GetFiles(sourcePluginDir))
        {
          File.Copy(file, Path.Combine(destPluginDir, Path.GetFileName(file)), overwrite: true);
        }
      }

      // 2. Instantiate and run PluginLoader directly
      string plugBoardPath = Path.Combine(_tempPlugBoardPath, "PlugBoard");
      PluginLoader loader = new(plugBoardPath);
      PluginLoadResult result = await loader.LoadAsync((_, _) => { });

      // 3. Assertions
      if (Directory.Exists(sourcePluginDir))
      {
        result.LoadedPlugins.Should().NotBeEmpty();
        result.LoadedPlugins.Should().Contain(p => p.PluginName == "Calculator");
        result.HasContextPane.Should().ContainKey("PluginCalculator");
        result.HasContextPane["PluginCalculator"].Should().BeTrue();
      }
    }

    /// <summary>
    /// Verifies that <c>LoadAsync</c> respects the cancellation token and throws.
    /// </summary>
    [Fact]
    public async Task TestLoadAsync_WithCanceledToken_CancelsOperation()
    {
      string plugBoardPath = Path.Combine(_tempPlugBoardPath, "PlugBoard");
      PluginLoader loader = new(plugBoardPath);
      using CancellationTokenSource cts = new();
      cts.Cancel();
      Func<Task> action = () => loader.LoadAsync((_, _) => { }, cts.Token);
      await action.Should().ThrowAsync<OperationCanceledException>();
    }

    /// <summary>
    /// Verifies that invalid or non-existent plugin directories do not cause crashes.
    /// </summary>
    [Fact]
    public async Task TestLoadAsync_WithInvalidDirectory_HandlesGracefully()
    {
      string invalidPath = Path.Combine(_tempPlugBoardPath, "NonExistentFolder");
      PluginLoader loader = new(invalidPath);
      PluginLoadResult result = await loader.LoadAsync((_, _) => { });
      result.LoadedPlugins.Should().BeEmpty();
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
      GC.SuppressFinalize(this);
    }
  }
}
