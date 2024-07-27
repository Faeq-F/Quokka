using Hardcodet.Wpf.TaskbarNotification;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Quokka.PluginArch;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Windows;
using System.Windows.Media;
using static Quokka.Settings.SettingParsers;

namespace Quokka {

  ///<summary>
  ///The Quokka app
  ///<br /><br />
  ///Includes:<br />
  ///Illustration by Icons 8 from Ouch! - https://icons8.com<br />
  ///https://intercom.help/icons8-7fb7577e8170/en/articles/5534926-universal-multimedia-license-agreement-for-icons8<br />
  ///Feather by Cole Bemis<br />
  ///https://github.com/feathericons/feather/blob/main/LICENSE<br />
  /// Varela Round by Joe Prince<br />
  /// https://fonts.google.com/specimen/Varela+Round/about<br />
  ///wpf-notifyIcon - CPOL-1.02<br />
  ///https://github.com/hardcodet/wpf-notifyicon/blob/develop/LICENSE<br />
  ///KeyboardHook by Christian Liensberger<br />
  ///Obtained from https://web.archive.org/web/20141017230556/http://www.liensberger.it:80/web/blog/?p=207<br />
  ///JSON.Net - MIT license<br />
  ///https://github.com/JamesNK/Newtonsoft.Json/blob/master/LICENSE.md
  ///XAMLFlair - MIT License<br />
  ///https://github.com/XamlFlair/XamlFlair/blob/master/LICENSE<br />
  ///References from a Plugin Architecture by Nagaraj M<br />
  ///https://www.c-sharpcorner.com/article/simple-plugin-architecture-using-reflection-with-wpf-projects/
  ///</summary>

  public partial class App : Application {

    private KeyboardHook hook = new KeyboardHook();

    /// <summary>
    /// The entry point for the app. Loads all of the settings in the app settings file,
    /// plugins available in the PlugBoard, the SearchWindow HotKey and the tray task.
    /// Also runs all of the plugins' OnAppStartup() methods.
    /// </summary>
    /// <param name="e">The arguments for the Startup event.</param>
    protected override void OnStartup(StartupEventArgs e) {
      base.OnStartup(e);

      applyAppSettings(
          JObject.Parse(
              File.ReadAllText(Environment.CurrentDirectory + "\\Config\\settings.json")
          )
      );

      LoadPlugins();

      XamlFlair.Animations.OverrideDefaultSettings(duration: 200);

      notifyIcon = (TaskbarIcon) FindResource("NotifyIcon");
      notifyIcon.Icon = new Icon(
          File.OpenRead(Environment.CurrentDirectory + "\\Config\\Resources\\QuokkaTray.ico")
      );

      try {
        hook.KeyPressed += new EventHandler<KeyPressedEventArgs>(CreateSearchWindow);
        hook.RegisterHotKey((ModifierKeys) Current.Resources["WindowHotKeyModifier"], (System.Windows.Forms.Keys) Current.Resources["WindowHotKey"]);
      } catch (InvalidOperationException exception) {
        System.Windows.MessageBox.Show(
            exception.Message + "\n" + exception.StackTrace,
            "Error",
            MessageBoxButton.OK,
            MessageBoxImage.Error
        );
      }

    }

    #region AppsSettings

    private string[] IntSettings = { "MaxResults" };
    private string[] ScreenDimensionsSettings = { "WindowWidth", "ListContainerMaxHeight" };
    private string[] SpecialSettings = { "AppFont", "WindowTopMargin", "ListItemIconColumnWidth", "WindowHotKey", "WindowHotKeyModifier" };
    private string[] StringSettings = { "IgnoreMaxResultsFlag", "SearchFieldPlaceholder", "FileManager", "TextEditor" };

    private void applyAppSettings(JObject obj) {
      foreach (var entry in obj) {
        // recurse until attribute-value pairs obtained
        if (entry.Value!.ToString().Contains("{")) {
          try {
            applyAppSettings(JObject.Parse(entry.Value.ToString()));
          } catch (JsonReaderException e) {
            MessageBox.Show(
                entry.Value.ToString() + "\n\n\n" + e.Message + "\n\n\n" + e.StackTrace,
                "Could not Parse",
                MessageBoxButton.OK,
                MessageBoxImage.Error
            );
          }
        } else {
          // applying settings based on type
          if (SpecialSettings.Contains(entry.Key)) {
            switch (entry.Key) {
              case "WindowTopMargin":
                Current.Resources[entry.Key] = parseThicknessSetting("0," + parseScreenDimensionsSetting(entry.Value.ToString()) + ",0,0");
                break;
              case "ListItemIconColumnWidth":
                Current.Resources[entry.Key] = new GridLength(double.Parse(entry.Value.ToString()));
                break;
              case "WindowHotKey":
                Current.Resources[entry.Key] = (System.Windows.Forms.Keys) Enum.Parse(typeof(System.Windows.Forms.Keys), entry.Value.ToString(), true);
                break;
              case "WindowHotKeyModifier":
                Current.Resources[entry.Key] = (ModifierKeys) Enum.Parse(typeof(ModifierKeys), entry.Value.ToString(), true);
                break;
              case "AppFont":
                Current.Resources[entry.Key] = new System.Windows.Media.FontFamily(Path.GetFullPath("./Config/Resources/#") + entry.Value.ToString());
                break;
            }
          } else if (StringSettings.Contains(entry.Key)) {
            Current.Resources[entry.Key] = entry.Value.ToString();
          } else if (ScreenDimensionsSettings.Contains(entry.Key)) {
            Current.Resources[entry.Key] = parseScreenDimensionsSetting(entry.Value.ToString());
          } else if (IntSettings.Contains(entry.Key)) {
            Current.Resources[entry.Key] = int.Parse(entry.Value.ToString());
          } else if (entry.Key.Contains("Color")) {
            Current.Resources[entry.Key] = new BrushConverter().ConvertFromString(entry.Value.ToString()) as SolidColorBrush;
            Resources[entry.Key] = new BrushConverter().ConvertFromString(entry.Value.ToString()) as SolidColorBrush;
          } else if (entry.Key.Contains("Rounding")) {
            Current.Resources[entry.Key] = parseCornerRadiusSetting(entry.Value.ToString());
          } else if (
                entry.Key.Contains("Opacity")
                || entry.Key.Contains("Direction")
                || entry.Key.Contains("Radius")
                || entry.Key.Contains("Depth")
                || entry.Key.Contains("Size")
                || entry.Key.Contains("Height")
                || entry.Key.Contains("Width")
            ) {
            Current.Resources[entry.Key] = double.Parse(entry.Value.ToString());
          } else if (entry.Key.Contains("HorizontalAlignment")) {
            Current.Resources[entry.Key] = parseHorizontalAlignmentSetting(entry.Value.ToString());
          } else if (entry.Key.Contains("RenderingBias")) {
            Current.Resources[entry.Key] = parseRenderingBiasSetting(entry.Value.ToString());
          } else if (entry.Key.Contains("Padding") || entry.Key.Contains("Thickness") || entry.Key.Contains("Margin")) {
            Current.Resources[entry.Key] = parseThicknessSetting(entry.Value.ToString());
          } else if (entry.Key.Contains("VerticalAlignment")) {
            Current.Resources[entry.Key] = parseVerticalAlignmentSetting(entry.Value.ToString());
          } else if (entry.Key.Contains("Visibility")) {
            Current.Resources[entry.Key] = parseVisibilitySetting(entry.Value.ToString());
          }
        }
      }
    }

    #endregion AppsSettings

    #region plugins

    ///<summary>
    ///A list of all plugins available in the PlugBoard.
    ///</summary>
    public static List<IPlugger> plugins = new List<IPlugger>();

    //returns the absolute path to the plugin's DLL
    private string GetPluggerDll(string connector) {
      string[] files = Directory.GetFiles(
          System.IO.Path.GetFullPath(connector),
          "*.dll",
          SearchOption.AllDirectories
      );
      foreach (string file in files) {
        if (FileVersionInfo.GetVersionInfo(file).ProductName.StartsWith("Plugin_"))
          return file;
      }
      return string.Empty;
    }

    // grab plugins and run startup methods
    private void LoadPlugins() {
      if (Directory.Exists(Environment.CurrentDirectory + "\\PlugBoard")) {
        try {
          foreach (
              var plugin in Directory.GetDirectories(
                  Environment.CurrentDirectory + "\\PlugBoard\\"
              )
          ) {
            if (plugin != "") {
              string dllPath = GetPluggerDll(plugin);
              Assembly _Assembly = Assembly.LoadFile(dllPath);
              var types = _Assembly.GetTypes()?.ToList();
              var type = types?.Find(a => typeof(IPlugger).IsAssignableFrom(a));
              plugins.Add((IPlugger) Activator.CreateInstance(type));
            }
          }
          //run anything needed for plugins on app startup
          foreach (IPlugger plugin in plugins) {
            plugin.OnAppStartup();
          }
        } catch (Exception ex) {
          System.Windows.MessageBox.Show(
              ex.Message + "\n" + ex.StackTrace,
              "Internal Error",
              MessageBoxButton.OK,
              MessageBoxImage.Error
          );
        }
      }
    }

    #endregion plugins

    #region trayTask

    private TaskbarIcon? notifyIcon;

    ///<summary>
    ///Opens the PlugBoard folder within Windows file explorer.
    ///</summary>


    public static void OpenPlugBoard() {
      using Process folderOpener = new Process();
      folderOpener.StartInfo.FileName = "explorer";
      folderOpener.StartInfo.Arguments = Environment.CurrentDirectory + "\\PlugBoard\\";
      folderOpener.Start();
    }


    ///<summary>
    ///Opens the app settings file in notepad.
    ///</summary>


    public static void OpenSettingsFile() {
      using Process fileOpener = new Process();
      fileOpener.StartInfo.FileName = "notepad";
      fileOpener.StartInfo.Arguments =
          Environment.CurrentDirectory + "\\Config\\settings.json";
      fileOpener.Start();
    }


    ///<summary>
    ///The end point for the app. Runs all of the plugin OnAppShutdown methods,
    ///unhooks the keyboard listener and disposes of the tray task.
    ///</summary>
    ///<param name="e">The arguments for the Exit event.</param>


    protected override void OnExit(ExitEventArgs e) {
      //run anything needed for plugins on app exit
      try {
        foreach (IPlugger plugin in plugins) {
          plugin.OnAppShutdown();
        }
      } catch (Exception ex) {
        System.Windows.MessageBox.Show(
            ex.Message + "\n" + ex.StackTrace,
            "Internal Error",
            MessageBoxButton.OK,
            MessageBoxImage.Error
        );
      }
      notifyIcon.Dispose(); //the icon would clean up automatically, but this is cleaner
      base.OnExit(e);
    }

    private void CreateSearchWindow(object? sender, KeyPressedEventArgs e) {
      bool windowOpen = false;
      foreach (var wnd in Current.Windows) {
        if (wnd is SearchWindow) {
          windowOpen = true;
          break;
        }
      }
      if (!windowOpen) {
        Current.MainWindow = new SearchWindow();
        Current.MainWindow.Show();
      }
    }

    //Work around for 'The root Visual of a VisualTarget cannot have a parent' error introduced with .NET 4.5.2
    private void Application_LoadCompleted(
        object sender,
        System.Windows.Navigation.NavigationEventArgs e
    ) {
      this.notifyIcon.ToolTipText = "Quokka";
    }

    #endregion trayTask
  }
}
