using Hardcodet.Wpf.TaskbarNotification;
using Newtonsoft.Json;
using Quokka.Settings;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Windows;

namespace Quokka
{

  ///<summary>
  ///The Quokka app
  ///</summary>
  public partial class App : Application, IDisposable
  {

    private readonly KeyboardHook hook = new();
    private readonly SettingsService _settingsService = new();

    /// <summary>
    /// The entry point for the app. Loads all of the settings in the app settings file,
    /// plugins available in the PlugBoard, the SearchWindow HotKey and the tray task.
    /// Also runs all of the plugins' OnAppStartup() methods.
    /// </summary>
    /// <param name="e">The arguments for the Startup event.</param>
    protected override async void OnStartup(StartupEventArgs e)
    {
      ArgumentNullException.ThrowIfNull(e);

      base.OnStartup(e);

      // Set working directory to the application assembly directory to ensure correct relative paths
      Environment.CurrentDirectory = AppDomain.CurrentDomain.BaseDirectory;

      bool noElevationArg = false;
      foreach (string arg in e.Args)
      {
        if (arg.Equals("--no-elevation", StringComparison.OrdinalIgnoreCase))
        {
          noElevationArg = true;
          break;
        }
      }

      if (!noElevationArg && !IsRunAsAdmin())
      {
        try
        {
          ProcessStartInfo processInfo = new()
          {
            FileName = Process.GetCurrentProcess().MainModule?.FileName ?? Environment.ProcessPath ?? string.Empty,
            WorkingDirectory = AppDomain.CurrentDomain.BaseDirectory,
            UseShellExecute = true,
            Verb = "runas",
            Arguments = "--no-elevation"
          };
          Process.Start(processInfo);
          Current.Shutdown();
          return;
        }
        catch (System.ComponentModel.Win32Exception)
        {
          // User clicked "No" on the UAC prompt or canceled.
          // If we don't get elevation, we continue running with standard privileges.
        }
      }

      notifyIcon = (TaskbarIcon)FindResource("LoadingNotifyIcon");
      notifyIcon.Icon = new Icon(File.OpenRead(Environment.CurrentDirectory + "\\Config\\Resources\\LoadingQuokkaTray.ico"));

      try
      {
        string settingsPath = Path.Combine(Environment.CurrentDirectory, "Config", "settings.json");
        await _settingsService.LoadAppSettings(settingsPath).ConfigureAwait(true);
      }
      catch (JsonReaderException exception)
      {
        ShowErrorMessageBox(exception, "Could not parse settings");
        Environment.Exit(-1);
      }

      await LoadPluginsAsync().ConfigureAwait(true);

      try
      {
        hook.KeyPressed += CreateSearchWindow;
        hook.RegisterHotKey((ModifierKeys)Current.Resources["WindowHotKeyModifier"], (System.Windows.Forms.Keys)Current.Resources["WindowHotKey"]);
      }
      catch (InvalidOperationException exception)
      {
        ShowErrorMessageBox(exception, "Could not register the hotkey");
      }

      notifyIcon.Dispose();
      notifyIcon = (TaskbarIcon)FindResource("NotifyIcon");
      notifyIcon.Icon = new Icon(File.OpenRead(Environment.CurrentDirectory + "\\Config\\Resources\\QuokkaTray.ico"));

    }

    private void Application_DispatcherUnhandledException(object sender, System.Windows.Threading.DispatcherUnhandledExceptionEventArgs e)
    {
      ShowErrorMessageBox(e.Exception, "Unknown error!");
      e.Handled = true;
    }

    /// <summary>
    /// Displays a message box to the user with an error icon and an OK button, or executes a custom error action if overridden.
    /// </summary>
    public static Action<Exception, string> ShowErrorMessageBox { get; set; } = (exception, title) =>
    {
      ArgumentNullException.ThrowIfNull(exception);

      string details = exception.Message;
      if (exception.InnerException != null)
      {
        details += $"\n\nInner Exception: {exception.InnerException.Message}";
      }

      string? rawStackTrace = exception.InnerException?.StackTrace ?? exception.StackTrace;
      if (!string.IsNullOrEmpty(rawStackTrace))
      {
        string[] lines = rawStackTrace.Split('\n');
        IEnumerable<string> quokkaLines = lines.Where(l => l.Contains("Quokka", StringComparison.Ordinal) || l.Contains("Plugin", StringComparison.Ordinal));
        string filteredTrace = quokkaLines.Any()
          ? string.Join('\n', quokkaLines)
          : string.Join('\n', lines.Take(15)); // Helps find source instead of where it bubbled to
        details += $"\n\nStack Trace:\n{filteredTrace}";
      }

      MessageBox.Show(
        details,
        title,
        MessageBoxButton.OK,
        MessageBoxImage.Error
      );
    };

    private static bool IsRunAsAdmin()
    {
      try
      {
        System.Security.Principal.WindowsIdentity id = System.Security.Principal.WindowsIdentity.GetCurrent();
        System.Security.Principal.WindowsPrincipal principal = new(id);
        return principal.IsInRole(System.Security.Principal.WindowsBuiltInRole.Administrator);
      }
      catch
      {
        return false;
      }
    }

    /// <summary>
    /// Releases unmanaged and optionally managed resources.
    /// </summary>
    /// <param name="disposing"><c>true</c> to release both managed and unmanaged resources; <c>false</c> to release only unmanaged resources.</param>
    protected virtual void Dispose(bool disposing)
    {
      if (disposing)
      {
        hook.Dispose();
        notifyIcon?.Dispose();
      }
    }

    /// <summary>
    /// Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
    /// </summary>
    public void Dispose()
    {
      Dispose(true);
      GC.SuppressFinalize(this);
    }
  }
}
