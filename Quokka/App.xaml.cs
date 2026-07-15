using Hardcodet.Wpf.TaskbarNotification;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Drawing;
using System.IO;
using System.Windows;

namespace Quokka
{

  ///<summary>
  ///The Quokka app
  ///</summary>
  public partial class App : Application, IDisposable
  {

    private readonly KeyboardHook hook = new();

    /// <summary>
    /// The entry point for the app. Loads all of the settings in the app settings file,
    /// plugins available in the PlugBoard, the SearchWindow HotKey and the tray task.
    /// Also runs all of the plugins' OnAppStartup() methods.
    /// </summary>
    /// <param name="e">The arguments for the Startup event.</param>
    protected override void OnStartup(StartupEventArgs e)
    {
      base.OnStartup(e);

      // Set working directory to the application assembly directory to ensure correct relative paths
      Environment.CurrentDirectory = AppDomain.CurrentDomain.BaseDirectory;

      bool noElevationArg = false;
      foreach (var arg in e.Args)
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
          var processInfo = new System.Diagnostics.ProcessStartInfo
          {
            FileName = System.Diagnostics.Process.GetCurrentProcess().MainModule.FileName,
            WorkingDirectory = AppDomain.CurrentDomain.BaseDirectory,
            UseShellExecute = true,
            Verb = "runas",
            Arguments = "--no-elevation"
          };
          System.Diagnostics.Process.Start(processInfo);
          Application.Current.Shutdown();
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
        ApplyAppSettings(JObject.Parse(File.ReadAllText(Environment.CurrentDirectory + "\\Config\\settings.json")));
      }
      catch (JsonReaderException exception)
      {
        ShowErrorMessageBox(exception, "Could not parse settings");
        Environment.Exit(-1);
      }

      LoadPlugins();

      XamlFlair.Animations.OverrideDefaultSettings(duration: (double)App.Current.Resources["AnimationDuration"]);

      try
      {
        hook.KeyPressed += new EventHandler<KeyPressedEventArgs>(CreateSearchWindow);
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
      if (exception == null)
        throw new ArgumentNullException(nameof(exception));

      MessageBox.Show(
            $"{exception.Message}\n\n{exception.StackTrace}",
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
        System.Security.Principal.WindowsPrincipal principal = new System.Security.Principal.WindowsPrincipal(id);
        return principal.IsInRole(System.Security.Principal.WindowsBuiltInRole.Administrator);
      }
      catch
      {
        return false;
      }
    }

    protected virtual void Dispose(bool disposing)
    {
      if (disposing)
      {
        hook.Dispose();
        notifyIcon?.Dispose();
      }
    }

    public void Dispose()
    {
      Dispose(true);
      GC.SuppressFinalize(this);
    }
  }
}
