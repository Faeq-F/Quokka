using Quokka.ListItems;
using Quokka.PluginArch;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Windows;
using System.Windows.Interop;
using System.Windows.Media.Imaging;

namespace Plugin_PortableApps {

  /// <summary>
  ///   Item class for plugin
  /// </summary>
  internal class PortableAppsItem : ListItem {
    public string ExePath { get; set; }
    public string ExtraDetails { get; set; }

    public PortableAppsItem(string exePath) {
      ExePath = exePath;
      Name = Path.GetFileNameWithoutExtension(exePath);
      Description = exePath;
      Icon = Imaging.CreateBitmapSourceFromHIcon(System.Drawing.Icon.ExtractAssociatedIcon(exePath).Handle, Int32Rect.Empty, BitmapSizeOptions.FromEmptyOptions());
      ExtraDetails = FileVersionInfo.GetVersionInfo(exePath).LegalCopyright + "\n" + FileVersionInfo.GetVersionInfo(exePath).CompanyName + "\n" + FileVersionInfo.GetVersionInfo(exePath).FileVersion;
    }

    public override void Execute() {
      Process.Start(Description);
      Application.Current.MainWindow.Close();
    }
  }

  internal class PortableAppsFolderItem : ListItem {

    public PortableAppsFolderItem() {
      Name = "Portable Apps Folder";
      Description = "Shortcut to the folder containing your portable apps";
      Icon = new BitmapImage(new Uri(Environment.CurrentDirectory + "\\Config\\Resources\\3dObjectsFolder.png")); ;
    }

    public override void Execute() {
      Process.Start("explorer.exe", PortableApps.PluginSettings.PortableAppsDirectory);
      Application.Current.MainWindow.Close();
    }
  }

  /// <summary>
  ///   Interaction logic for plugin
  /// </summary>
  public partial class PortableApps : IPlugger {
    public static List<ListItem> ListOfSystemApps { private set; get; }
    public static Settings PluginSettings { get; set; }

    public PortableApps() {
    }

    /// <summary>
    ///   This is name will display in main plug board
    /// </summary>
    public string PluggerName { get; set; } = "PortableApps";

    private readonly List<ListItem> AllPortableApps = new();

    public static List<ListItem> RemoveBlacklistItems(List<ListItem> list) {
      foreach (string i in PluginSettings.BlackList) {
        list.RemoveAll(x => x.Name.Equals(i));
      }
      return list;
    }

    List<ListItem> IPlugger.OnQueryChange(string query) {
      List<ListItem> IdentifiedApps = new();
      //filtering apps
      foreach (ListItem app in AllPortableApps) {
        if (app.Name.Contains(query, StringComparison.OrdinalIgnoreCase)
                || FuzzySearch.LD(app.Name, query) < PluginSettings.FuzzySearchThreshold) {
          IdentifiedApps.Add(app);
        }
      }
      IdentifiedApps = RemoveBlacklistItems(IdentifiedApps);
      return IdentifiedApps;
    }

    List<string> IPlugger.SpecialCommands() {
      List<string> SpecialCommand = new() {
        PluginSettings.AllAppsSpecialCommand
      };
      return SpecialCommand;
    }

    List<ListItem> IPlugger.OnSpecialCommand(string command) {
      //There is only 1 special command for this plugin so there is no need to check which it is
      List<ListItem> AllList = new(AllPortableApps);
      //sort alphabetically
      AllList = AllList.OrderBy(x => x.Name).ToList();
      AllList.Insert(0, new PortableAppsFolderItem());
      AllList = RemoveBlacklistItems(AllList);
      return AllList;
    }

    void IPlugger.OnAppStartup() {
      //Get Plugin Specific settings
      string fileName = Environment.CurrentDirectory + "\\PlugBoard\\Plugin_PortableApps\\Plugin\\settings.json";
      PluginSettings = System.Text.Json.JsonSerializer.Deserialize<Settings>(File.ReadAllText(fileName))!;
      PluginSettings.PortableAppsDirectory = Path.GetFullPath(PluginSettings.PortableAppsDirectory);

      if (Directory.Exists(PluginSettings.PortableAppsDirectory)) {
        var topLevelDirs = Directory.EnumerateDirectories(PluginSettings.PortableAppsDirectory, "*", SearchOption.TopDirectoryOnly);
        foreach (string dir in topLevelDirs) {
          foreach (string exe in Directory.EnumerateFiles(dir, "*", SearchOption.TopDirectoryOnly).Where(s => s.EndsWith(".exe"))) {
            AllPortableApps.Add(new PortableAppsItem(exe));
          }
        }
      }
    }

    void IPlugger.OnAppShutdown() {
    }

    void IPlugger.OnSearchWindowStartup() {
    }
  }
}