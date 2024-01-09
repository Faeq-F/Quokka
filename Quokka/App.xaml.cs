using Hardcodet.Wpf.TaskbarNotification;
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
  /**
     * <summary>
     * Interaction logic for App.xaml
     * <br /><br />
     * Includes:<br />
     * wpf-notifyIcon - CPOL:<br />
     * https://github.com/hardcodet/wpf-notifyicon/blob/develop/LICENSE<br />
     * LowLevelKeyboardListener from Dylan's Web - License is in class file & at<br />
     * http://www.dylansweb.com/2014/10/low-level-global-keyboard-hook-sink-in-c-net/<br />
     * JSON.Net - MIT license<br />
     * https://github.com/JamesNK/Newtonsoft.Json/blob/master/LICENSE.md
     * Fluent UI Icons<br />
     * https://github.com/microsoft/fluentui-system-icons/blob/main/LICENSE
     * </summary>
     */

  public partial class App : System.Windows.Application {

    protected override void OnStartup(StartupEventArgs e) {
      base.OnStartup(e);
      applyAppSettings(JObject.Parse(File.ReadAllText(Environment.CurrentDirectory + "\\Config\\settings.json")));

      LoadPlugins();

      //keyboard listener for search window shortcut
      _listener = new LowLevelKeyboardListener();
      _listener.OnKeyPressed += _listener_OnKeyPressed!;
      _listener.HookKeyboard();

      //create the notifyIcon (it's a resource declared in NotifyIconResources.xaml
      notifyIcon = (TaskbarIcon) FindResource("NotifyIcon");
      notifyIcon.Icon = new Icon(File.OpenRead(Environment.CurrentDirectory + "\\Config\\Resources\\QuokkaTray.ico"));
    }

    #region keyboardShortcut

    private LowLevelKeyboardListener? _listener;
    private string detectedKeys = "";

    //launching search window
    private void _listener_OnKeyPressed(object sender, KeyPressedArgs e) {
      //refresh hook to prevent app hanging
      _listener.UnHookKeyboard();
      _listener.HookKeyboard();

      //save memory - sometimes requires pressing the shortcut twice
      if (detectedKeys.Length > 20) detectedKeys = "";

      detectedKeys += e.KeyPressed.ToString();

      if (detectedKeys.Contains((string) Application.Current.Resources["WindowHotKey"])) {
        bool windowOpen = false;
        foreach (var wnd in App.Current.Windows) { if (wnd is SearchWindow) { windowOpen = true; break; } }
        if (!windowOpen) {
          App.Current.MainWindow = new SearchWindow();
          App.Current.MainWindow.Show();
          detectedKeys = "";
        }
      }
    }

    #endregion keyboardShortcut

    #region AppsSettings

    /*They all have Color
    private String[] BrushSettings = {
        "WindowColor", "WindowBorderColor", "TrayTaskContextMenuColor", "TrayTaskContextMenuBorderColor", "TrayTaskContextMenuTxtColor",
        "TrayTaskContextMenuSeperatorColor", "SearchBarColor", "SearchBarBorderColor", "SearchFieldTxtColor", "SearchFieldTxtSelColor",
        "SearchFieldPlaceholderColor", "ListContainerBorderColor", "ListContainerColor", "ScrollBarBgColor", "ScrollBarBgBorderColor",
        "ScrollThumbBgColor", "ScrollThumbBgBorderColor", "ScrollThumbColor", "ScrollThumbBorderColor", "ListItemHoverBorderColor",
        "ListItemHoverBgColor", "ListItemSelectedBorderColor", "ListItemSelectedBgColor", "ListItemNameColor", "ListItemDescColor",
        "ContextPaneBorderColor", "ContextPaneBgColor", "NameTextColor", "DescTextColor", "ExtraDetailsTextColor",
        "ContextPaneListItemHoverBorderColor", "ContextPaneListItemHoverBgColor", "ContextPaneListItemSelectedBorderColor",
        "ContextPaneListItemSelectedBgColor", "ContextPaneListItemColor"
        };*/

    /*These all have Rounding
    private String[] CornerRadiusSettings = {
        "WindowRounding", "TrayTaskContextMenuRounding", "SearchBarRounding", "ListContainerRounding", "ScrollBarBgRounding",
          "ScrollThumbBgRounding", "ScrollThumbRounding", "ListItemRounding", "ContextPaneCornerRounding", "ContextPaneListItemRounding"
        };*/

    /*They all either have Opacity, Direction, Radius, Depth, Size, Height or Width
    private String[] DoubleSettings = {
        "DropShadowOpacity", "DropShadowDirection", "DropShadowBlurRadius", "DropShadowShadowDepth", "TrayTaskContextMenuIconSize",
        "TrayTaskContextMenuDropShadowBlurRadius", "TrayTaskContextMenuDropShadowOpacity", "TrayTaskContextMenuDropShadowDirection",
        "TrayTaskContextMenuDropShadowShadowDepth", "SearchBarHeight", "SearchIconWidth", "SearchFieldHeight", "SearchFieldWidth",
        "SearchFieldTxtSize", "SearchFieldPlaceholderSize", "ListContainerMinHeight", "ScrollBarBgWidth", "ScrollThumbBgWidth",
        "ScrollThumbWidth", "ListItemIconSize", "ListItemNameSize", "ListItemDescSize", "ContextPaneMinHeight", "NameTextSize",
        "DescTextSize", "ExtraDetailsTextSize", "ContextPaneListItemIconSize", "ContextPaneListItemSize"
        };*/

    /* These all have Font
    private String[] FontFamilySettings = {
        "SearchFieldFont", "SearchFieldPlaceholderFont", "ListItemNameFont", "ListItemDescFont", "NameTextFont",
          "DescTextFont", "ExtraDetailsTextFont", "ContextPaneListItemFont"
        };*/

    /*These all have HorizontalAlignment
    private String[] HorizontalAlignmentSettings = {
        "ContextPaneContentHorizontalAlignment", "ContextPaneListHorizontalAlignment", "ContextPaneListContentHorizontalAlignment"
        };*/

    //Nothing special
    private String[] IntSettings = { "MaxResults" };

    /*These all have RenderingBias
    private String[] RenderingBiasSettings = { "DropShadowRenderingBias", "TrayTaskContextMenuDropShadowRenderingBias" };
    */

    //Nothing special
    private String[] ScreenDimensionsSettings = { "WindowWidth", "ListContainerMaxHeight" };

    //Nothing special
    private String[] SpecialSettings = { "WindowTopMargin" };

    //Nothing special
    private String[] StringSettings = { "WindowHotKey", "IgnoreMaxResultsFlag", "SearchFieldPlaceholder" };

    /*They all either have Padding, Margin, Thickness or Margin
    private String[] ThicknessSettings = {
        "WindowBorderThickness", "WindowPadding", "TrayTaskContextMenuBorderThickness", "TrayTaskContextMenuIconMargin", "SearchBarBorderThickness",
        "SearchIconMargin", "SearchFieldMargin", "SearchFieldPlaceholderMargin", "ListContainerMargin", "ListContainerBorderThickness",
        "ScrollBarBgBorderThickness", "ScrollBarBgMargin", "ScrollThumbBgBorderThickness", "ScrollThumbBgMargin",
        "ScrollThumbBorderThickness", "ScrollThumbMargin", "ListItemBorderThickness", "ListItemMargin", "ListItemTextMargin",
        "ContextPaneBorderThickness", "ContextPaneContentMargin", "ContextPaneImageMargin", "NameTextMargin", "DescTextMargin",
        "ExtraDetailsTextMargin", "ContextPaneListMargin", "ContextPaneListItemBorderThickness", "ContextPaneListItemMargin",
        "ContextPaneListItemIconMargin", "ContextPaneListItemTextPadding", "ContextPaneListItemContentMargin"
        };*/

    /*These all have VerticalAlignment
    private String[] VerticalAlignmentSettings = { "ContextPaneContentVerticalAlignment" };*/

    /*These all have Visibility
    private String[] VisibilitySettings = { "ScrollBarBgVisibility", "ScrollThumbBgVisibility", "ScrollThumbVisibility" };*/

    private void applyAppSettings(JObject obj) {
      foreach (var entry in obj) {
        if (entry.Value.ToString().Contains("{")) {
          try {
            applyAppSettings(JObject.Parse(entry.Value.ToString()));
          } catch (Exception e) {
            System.Windows.MessageBox.Show(entry.Value.ToString() + "\n\n\n" + e.Message + "\n\n\n" + e.StackTrace, "Could not Parse", MessageBoxButton.OK, MessageBoxImage.Error);
          }
        } else {
          if (SpecialSettings.Contains(entry.Key)) {
            switch (entry.Key) {
              case "WindowTopMargin":
                Application.Current.Resources[entry.Key] = parseThicknessSetting("0," + parseScreenDimensionsSetting(entry.Value.ToString()) + ",0,0");
                break;
            }
          } else if (StringSettings.Contains(entry.Key)) {
            Application.Current.Resources[entry.Key] = entry.Value.ToString();
          } else if (ScreenDimensionsSettings.Contains(entry.Key)) {
            Application.Current.Resources[entry.Key] = parseScreenDimensionsSetting(entry.Value.ToString());
          } else if (IntSettings.Contains(entry.Key)) {
            Application.Current.Resources[entry.Key] = int.Parse(entry.Value.ToString());
          } else if (entry.Key.Contains("Color")) {
            Current.Resources[entry.Key] = new BrushConverter().ConvertFromString(entry.Value.ToString()) as SolidColorBrush;
            Resources[entry.Key] = new BrushConverter().ConvertFromString(entry.Value.ToString()) as SolidColorBrush;
          } else if (entry.Key.Contains("Rounding")) {
            Application.Current.Resources[entry.Key] = new CornerRadius(int.Parse(entry.Value.ToString()));
          } else if (entry.Key.Contains("Opacity") || entry.Key.Contains("Direction") || entry.Key.Contains("Radius")
            || entry.Key.Contains("Depth") || entry.Key.Contains("Size") || entry.Key.Contains("Height")
            || entry.Key.Contains("Width")) {
            Application.Current.Resources[entry.Key] = double.Parse(entry.Value.ToString());
          } else if (entry.Key.Contains("Font")) {
            Application.Current.Resources[entry.Key] = new System.Windows.Media.FontFamily(entry.Value.ToString());
          } else if (entry.Key.Contains("HorizontalAlignment")) {
            Application.Current.Resources[entry.Key] = parseHorizontalAlignmentSetting(entry.Value.ToString());
          } else if (entry.Key.Contains("RenderingBias")) {
            Application.Current.Resources[entry.Key] = parseRenderingBiasSetting(entry.Value.ToString());
          } else if (entry.Key.Contains("Padding") || entry.Key.Contains("Margin") || entry.Key.Contains("Thickness") || entry.Key.Contains("Margin")) {
            Application.Current.Resources[entry.Key] = parseThicknessSetting(entry.Value.ToString());
          } else if (entry.Key.Contains("VerticalAlignment")) {
            Application.Current.Resources[entry.Key] = parseVerticalAlignmentSetting(entry.Value.ToString());
          } else if (entry.Key.Contains("Visibility")) {
            Application.Current.Resources[entry.Key] = parseVisibilitySettings(entry.Value.ToString());
          }
        }
      }
    }

    #endregion AppsSettings

    #region plugins

    public static List<IPlugger>? plugins { private set; get; }

    /**
     * <returns>The absolute path to the plugin's DLL</returns>
     */

    private string GetPluggerDll(string connector) {
      var files = Directory.GetFiles(System.IO.Path.GetFullPath(connector), "*.dll", SearchOption.AllDirectories);
      foreach (var file in files) {
        if (FileVersionInfo.GetVersionInfo(file).ProductName.StartsWith("Plugin_")) return file;
      }
      return string.Empty;
    }

    private void LoadPlugins() {
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
    }

    #endregion plugins

    #region trayTask

    private TaskbarIcon? notifyIcon;

    public static void OpenPlugBoard() {
      using Process folderOpener = new Process();
      folderOpener.StartInfo.FileName = "explorer";
      folderOpener.StartInfo.Arguments = Environment.CurrentDirectory + "\\PlugBoard\\";
      folderOpener.Start();
    }

    public static void OpenSettingsFile() {
      using Process fileOpener = new Process();
      fileOpener.StartInfo.FileName = "notepad";
      fileOpener.StartInfo.Arguments = Environment.CurrentDirectory + "\\Config\\settings.json";
      fileOpener.Start();
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

    #endregion trayTask
  }
}