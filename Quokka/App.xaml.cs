using Hardcodet.Wpf.TaskbarNotification;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Quokka.PluginArch;
using Quokka.Settings;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Windows;
using System.Windows.Media;

namespace Quokka {
  /// <summary>
  /// Interaction logic for App.xaml
  /// <br>
  /// Includes wpf-notifyIcon - CPOL:
  /// https://github.com/hardcodet/wpf-notifyicon/blob/develop/LICENSE
  /// <br>
  /// Includes LowLevelKeyboardListener from Dylan's Web
  /// License is in class file & at http://www.dylansweb.com/2014/10/low-level-global-keyboard-hook-sink-in-c-net/
  /// <br>
  /// Includes JSON.Net - MIT license
  /// https://github.com/JamesNK/Newtonsoft.Json/blob/master/LICENSE.md
  /// </summary>

  public partial class App : System.Windows.Application {
    private TaskbarIcon? notifyIcon;
    private LowLevelKeyboardListener? _listener;
    private string detectedKeys = "";

    public static Settings.Settings AppSettings { get; set; }
    public static dynamic StyleSettings { get; set; }

    public static List<IPlugger>? plugins { private set; get; }

    protected override void OnStartup(StartupEventArgs e) {
      base.OnStartup(e);
      //grab settings
      string fileName = Environment.CurrentDirectory + "\\Config\\settings.json";
      string jsonString = File.ReadAllText(fileName);
      AppSettings = JsonConvert.DeserializeObject<Settings.Settings>(jsonString)!;
      //dynamic StyleSettings = JsonConvert.DeserializeObject<dynamic>(jsonString)!;
      //Settings.Settings appSettings = JsonConvert.DeserializeObject<Settings.Settings>(JsonString);
      applyAppSettings(JObject.Parse(JsonString));

      // grab plugins and run startup
      plugins = new List<IPlugger>();
      if (Directory.Exists(Environment.CurrentDirectory + "\\PlugBoard")) {
        try {
          foreach (var plugin in Directory.GetDirectories(Environment.CurrentDirectory + "\\PlugBoard\\")) {
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
          System.Windows.MessageBox.Show(ex.Message + "\n" + ex.StackTrace, "Internal Error", MessageBoxButton.OK, MessageBoxImage.Error);
        }
      }

      //keyboard listener for search window shortcut
      _listener = new LowLevelKeyboardListener();
      _listener.OnKeyPressed += _listener_OnKeyPressed!;
      _listener.HookKeyboard();

      //create the notifyIcon (it's a resource declared in NotifyIconResources.xaml
      notifyIcon = (TaskbarIcon) FindResource("NotifyIcon");
      notifyIcon.Icon = new Icon(File.OpenRead(Environment.CurrentDirectory + "\\Config\\Resources\\QuokkaTray.ico"));

    }

    //Fields for Settings
    String[] specialCases = { "WindowTopMargin", "SearchFieldPlaceholder", "DropShadowBlurRadius", "DropShadowOpacity", "DropShadowShadowDepth", "DropShadowRenderingBias" };
    String[] screenDimensionSettings = { "WindowWidth", "ListContainerMaxHeight" };
    String[] txtSize = { "SearchFieldTxtSize", "SearchFieldPlaceholderSize", "ListItemIconSize", "ListItemNameSize", "ListItemDescSize" };
    String[] thicknessIndicators = { "thickness", "padding", "size", "margin" };
    String[] brushIndicators = { "color" };
    string JsonString = File.ReadAllText(Environment.CurrentDirectory + "\\Config\\settings.json");

    private void applyAppSettings(JObject obj) {
      foreach (var entry in obj) {
        if (entry.Value.ToString().Contains("{")) {
          try {
            applyAppSettings(JObject.Parse(entry.Value.ToString()));
          } catch (Exception e) {
            System.Windows.MessageBox.Show(entry.Value.ToString() + "\n\n\n" + e.Message + "\n\n\n" + e.StackTrace, "Could not Parse", MessageBoxButton.OK, MessageBoxImage.Error);
          }
        } else {
          if (specialCases.Contains(entry.Key)) {
            if (entry.Key == "WindowTopMargin") {
              Application.Current.Resources[entry.Key] = SettingParsers.parseThicknessSetting("0," + SettingParsers.parseScreenDimensionsSetting(entry.Value.ToString()) + ",0,0");
            } else if (entry.Key == "SearchFieldPlaceholder") {
              Application.Current.Resources[entry.Key] = entry.Value.ToString();
            } else if (entry.Key == "DropShadowRenderingBias") {
              if (entry.Value.ToString() == "Quality") {
                Application.Current.Resources[entry.Key] = System.Windows.Media.Effects.RenderingBias.Quality;
              } else if (entry.Value.ToString() == "Quality") {
                Application.Current.Resources[entry.Key] = System.Windows.Media.Effects.RenderingBias.Performance;
              }
            } else if (entry.Key == "DropShadowBlurRadius" || entry.Key == "DropShadowOpacity" || entry.Key == "DropShadowShadowDepth") {
              Application.Current.Resources[entry.Key] = double.Parse(entry.Value.ToString());
            }
          } else if (screenDimensionSettings.Contains(entry.Key)) {
            Application.Current.Resources[entry.Key] = SettingParsers.parseScreenDimensionsSetting(entry.Value.ToString());
          } else if (txtSize.Contains(entry.Key) || entry.Key.ToString().Contains("Height") || entry.Key.ToString().Contains("Width")) {
            Application.Current.Resources[entry.Key] = double.Parse(entry.Value.ToString());
          } else if (entry.Key.ToString().Contains("Font")) {
            Application.Current.Resources[entry.Key] = new System.Windows.Media.FontFamily(entry.Value.ToString());
          } else if (entry.Key.ToString().Contains("Rounding")) {
            Application.Current.Resources[entry.Key] = new CornerRadius(int.Parse(entry.Value.ToString()));
          } else {
            foreach (String i in thicknessIndicators) {
              if (entry.Key.ToString().ToLower().Contains(i)) {
                Application.Current.Resources[entry.Key] = SettingParsers.parseThicknessSetting(entry.Value.ToString());
              }
            }
            foreach (String i in brushIndicators) {
              if (entry.Key.ToString().ToLower().Contains(i)) {
                Application.Current.Resources[entry.Key] = new BrushConverter().ConvertFromString(entry.Value.ToString()) as SolidColorBrush;
                Resources[entry.Key] = new BrushConverter().ConvertFromString(entry.Value.ToString()) as SolidColorBrush;
              }
            }
          }
        }
      }
    }

    public static void OpenSettingsFile() {
      using Process fileOpener = new Process();
      fileOpener.StartInfo.FileName = "notepad";
      fileOpener.StartInfo.Arguments = Environment.CurrentDirectory + "\\Config\\settings.json";
      fileOpener.Start();
    }

    public static void OpenPlugBoard() {
      using Process folderOpener = new Process();
      folderOpener.StartInfo.FileName = "explorer";
      folderOpener.StartInfo.Arguments = Environment.CurrentDirectory + "\\PlugBoard\\";
      folderOpener.Start();
    }

    private string GetPluggerDll(string connector) {
      var files = Directory.GetFiles(System.IO.Path.GetFullPath(connector), "*.dll", SearchOption.AllDirectories);
      foreach (var file in files) {
        if (FileVersionInfo.GetVersionInfo(file).ProductName.StartsWith("Plugin_")) return file;
      }
      return string.Empty;
    }

    protected override void OnExit(ExitEventArgs e) {
      //run anything needed for plugins on app exit
      try {
        foreach (IPlugger plugin in plugins) {
          plugin.OnAppShutdown();
        }
      } catch (Exception ex) {
        System.Windows.MessageBox.Show(ex.Message + "\n" + ex.StackTrace, "Internal Error", MessageBoxButton.OK, MessageBoxImage.Error);
      }
      _listener.UnHookKeyboard();
      notifyIcon.Dispose(); //the icon would clean up automatically, but this is cleaner
      base.OnExit(e);
    }

    //Work around for 'The root Visual of a VisualTarget cannot have a parent' error introduced with .NET 4.5.2
    private void Application_LoadCompleted(object sender, System.Windows.Navigation.NavigationEventArgs e) {
      this.notifyIcon.ToolTipText = "Quokka";
    }

    //launching search window
    void _listener_OnKeyPressed(object sender, KeyPressedArgs e) {
      //refresh hook to prevent app hanging
      _listener.UnHookKeyboard();
      _listener.HookKeyboard();

      //save memory - sometimes requires pressing the shortcut twice
      if (detectedKeys.Length > 20) detectedKeys = "";

      detectedKeys += e.KeyPressed.ToString();

      if (detectedKeys.Contains(AppSettings?.GeneralSettings.WindowHotKey)) {
        bool windowOpen = false;
        foreach (var wnd in App.Current.Windows) { if (wnd is SearchWindow) { windowOpen = true; break; } }
        if (!windowOpen) {
          App.Current.MainWindow = new SearchWindow();
          App.Current.MainWindow.Show();
          detectedKeys = "";
        }
      }
    }
  }
}