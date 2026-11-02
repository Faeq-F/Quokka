using Hardcodet.Wpf.TaskbarNotification;
using Quokka.PluginArch;
using System;
using System.Diagnostics;
using System.Windows;

namespace Quokka
{

  public partial class App
  {
    private TaskbarIcon? notifyIcon;

    ///<summary>
    ///Opens the PlugBoard folder within the user's file manager.
    ///</summary>
    public static void OpenPlugBoard()
    {
      using Process folderopener = new();
      folderopener.StartInfo.FileName = (string)Current.Resources["FileManager"];
      folderopener.StartInfo.Arguments = Environment.CurrentDirectory + "\\PlugBoard\\";
      folderopener.Start();
    }

    ///<summary>
    ///Opens the app settings file in the user's text editor.
    ///</summary>
    public static void OpenSettingsFile()
    {
      using Process fileOpener = new();
      fileOpener.StartInfo.FileName = (string)Current.Resources["TextEditor"];
      fileOpener.StartInfo.Arguments =
          Environment.CurrentDirectory + "\\Config\\settings.json";
      fileOpener.Start();
    }

    /// <summary>
    /// Opens the specified plugin's directory within the user's file manager.
    /// </summary>
    /// <param name="pluginName">The name of the plugin folder.</param>
    public static void OpenPluginFolder(string pluginName)
    {
      ArgumentNullException.ThrowIfNull(pluginName);
      string pluginDir = System.IO.Path.Combine(Environment.CurrentDirectory, "PlugBoard", pluginName, "Plugin");

      if (!System.IO.Directory.Exists(pluginDir))
      {
        pluginDir = System.IO.Path.Combine(Environment.CurrentDirectory, "PlugBoard");
      }

      if (System.IO.Directory.Exists(pluginDir))
      {
        Process.Start("explorer.exe", pluginDir);
      }
    }

    /// <summary>
    /// Opens the specified plugin's settings file in the user's text editor.
    /// </summary>
    /// <param name="pluginName">The name of the plugin folder.</param>
    public static void OpenPluginSettingsFile(string pluginName)
    {
      ArgumentNullException.ThrowIfNull(pluginName);
      string settingsPath = System.IO.Path.Combine(Environment.CurrentDirectory, "PlugBoard", pluginName, "Plugin", "settings.json");
      if (!System.IO.File.Exists(settingsPath))
      {
        settingsPath = System.IO.Path.Combine(Environment.CurrentDirectory, "PlugBoard", pluginName, "settings.json");
      }

      if (System.IO.File.Exists(settingsPath))
      {
        string? textEditor = Current?.Resources["TextEditor"] as string;
        if (!string.IsNullOrEmpty(textEditor) && System.IO.File.Exists(textEditor))
        {
          using Process fileOpener = new();
          fileOpener.StartInfo.FileName = textEditor;
          fileOpener.StartInfo.Arguments = settingsPath;
          fileOpener.Start();
        }
        else
        {
          Process.Start(new ProcessStartInfo
          {
            FileName = settingsPath,
            UseShellExecute = true
          });
        }
      }
    }

    /// <summary>
    /// Restarts the Quokka application.
    /// </summary>
    public static void RestartApp()
    {
      string exePath = Process.GetCurrentProcess().MainModule?.FileName ?? Environment.ProcessPath ?? string.Empty;
      if (!string.IsNullOrEmpty(exePath))
      {
        ProcessStartInfo startInfo = new(exePath)
        {
          WorkingDirectory = AppDomain.CurrentDomain.BaseDirectory,
          UseShellExecute = true
        };
        Process.Start(startInfo);
      }
      Current.Shutdown();
    }


    ///<summary>
    ///The end point for the app. Runs all of the plugin OnAppShutdown methods,
    ///unhooks the keyboard listener and disposes of the tray task.
    ///</summary>
    ///<param name="e">The arguments for the Exit event.</param>
    protected override void OnExit(ExitEventArgs e)
    {
      //run anything needed for plugins on app exit
      try
      {
        if (Plugins is not null)
        {
          foreach (Plugin plugin in Plugins)
          {
            plugin.OnAppShutdown();
          }
        }
      }
      catch (Exception ex)
      {
        ShowErrorMessageBox(ex, "Error with a plugin calling its OnAppShutdown()");
      }
      notifyIcon?.Dispose();
      base.OnExit(e);
    }

    private static void CreateSearchWindow(object? sender, KeyPressedEventArgs e)
    {
      if (Current.MainWindow is null)
      {
        Current.MainWindow = new SearchWindow();
        Current.MainWindow.Show();
      }
    }

  }
}
