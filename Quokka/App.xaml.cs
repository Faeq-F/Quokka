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

      applyAppSettings();

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
      _listener.OnKeyPressed += _listener_OnKeyPressed;
      _listener.HookKeyboard();

      //create the notifyIcon (it's a resource declared in NotifyIconResources.xaml
      notifyIcon = (TaskbarIcon) FindResource("NotifyIcon");
      notifyIcon.Icon = new Icon(File.OpenRead(Environment.CurrentDirectory + "\\Config\\Resources\\QuokkaTray.ico"));

    }

    private void applyAppSettings() {
      String[] specialCases = { "WindowTopMargin" };
      String[] screenDimensionSettings = { "WindowWidth" };
      String[] thicknessIndicators = { "thickness", "padding", "size", "margin" };
      String[] brushIndicators = { "color" };

      string JsonString = File.ReadAllText(Environment.CurrentDirectory + "\\Config\\settings.json");
      Settings.Settings appSettings = JsonConvert.DeserializeObject<Settings.Settings>(JsonString);

      JObject obj = JObject.Parse(JsonString);

      loop:
      foreach (var entry in obj) {
        if (entry.Value.ToString().Contains("{")) {
          try {
            obj = JObject.Parse(entry.Value.ToString()); //cannot go through other settings once obj changes
          } catch (Exception e) {
            System.Windows.MessageBox.Show(entry.Value.ToString(), "Could not Parse", MessageBoxButton.OK, MessageBoxImage.Error);
          }
          goto loop;
        } else {
          System.Windows.MessageBox.Show(entry.Key + "\n\n" + entry.Value, "", MessageBoxButton.OK, MessageBoxImage.Information);
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