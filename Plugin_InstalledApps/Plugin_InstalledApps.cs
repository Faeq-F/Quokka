using Microsoft.WindowsAPICodePack.Shell;
using Quokka;
using Quokka.ListItems;
using Quokka.PluginArch;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Windows;
using System.Windows.Media.Imaging;

namespace Plugin_InstalledApps {
  /// <summary>
  /// Item class for plugin
  /// </summary>
  class InstalledAppsItem : ListItem {
    public string? Path { get; set; }
    public string? ExtraDetails { get; set; }

    public InstalledAppsItem(ShellObject app) {
      Name = app.Name!;
      Description = app.ParsingName; // or app.Properties.System.AppUserModel.ID

      if (InstalledApps.PluginSettings.IconSize.Equals("Medium"))
        this.Icon = app.Thumbnail.MediumBitmapSource;
      else if (InstalledApps.PluginSettings.IconSize.Equals("ExtraLarge"))
        this.Icon = app.Thumbnail.ExtraLargeBitmapSource;
      else if (InstalledApps.PluginSettings.IconSize.Equals("Large"))
        this.Icon = app.Thumbnail.LargeBitmapSource;
      else if (InstalledApps.PluginSettings.IconSize.Equals("Small"))
        this.Icon = app.Thumbnail.SmallBitmapSource;
      else
        this.Icon = app.Thumbnail.MediumBitmapSource;

      try {
        Path = app.Properties.System.Link.TargetParsingPath.Value;
        ExtraDetails =
          FileVersionInfo.GetVersionInfo(Path).LegalCopyright
          + "\n"
          + FileVersionInfo.GetVersionInfo(Path).CompanyName
          + "\n"
          + FileVersionInfo.GetVersionInfo(Path).FileVersion;
      } catch (System.IO.FileNotFoundException e) {
        System.Windows.MessageBox.Show(e.Message + "\n\n" + e.StackTrace, "Likely caused by invalid shortcut", MessageBoxButton.OK, MessageBoxImage.Error);
      }


    }

    public override void Execute() {
      System.Diagnostics.Process.Start("explorer.exe", @" shell:appsFolder\" + Description);
      App.Current.MainWindow.Close();
    }
  }

  class AllAppsItem : ListItem {
    public AllAppsItem() {
      this.Name = "Applications";
      this.Description =
          "Shortcut to shell:appsFolder. Menu key will open installed apps settings.";
      this.Icon = new BitmapImage(
          new Uri(Environment.CurrentDirectory + "\\Config\\Resources\\3dObjectsFolder.png")
      );
      ;
    }

    public override void Execute() {
      System.Diagnostics.Process.Start("explorer.exe", @" shell:appsFolder\");
      App.Current.MainWindow.Close();
    }
  }

  /// <summary>
  /// Interaction logic for plugin
  /// </summary>
  public partial class InstalledApps : IPlugger {
    public static List<ListItem> ListOfSystemApps { private set; get; } = new List<ListItem>();


    public static Plugin_InstalledApps.Settings PluginSettings { get; set; } = System.Text.Json.JsonSerializer.Deserialize<Settings>(
          File.ReadAllText(Environment.CurrentDirectory
          + "\\PlugBoard\\Plugin_InstalledApps\\Plugin\\settings.json")
      )!;

    public InstalledApps() { }

    /// <summary>
    /// This is name will display in main plug board
    /// </summary>
    public string PluggerName { get; set; } = "InstalledApps";

    public static List<ListItem> RemoveBlacklistItems(List<ListItem> list) {
      foreach (string i in PluginSettings.BlackList) {
        list.RemoveAll(x => x.Name.Equals(i));
      }
      return list;
    }

    public List<String> SpecialCommands() {
      List<String> SpecialCommand = new() { PluginSettings.AllAppsSpecialCommand };
      return SpecialCommand;
    }

    public List<ListItem> OnSpecialCommand(string command) {
      //There is only 1 special command for this plugin so there is no need to check which it is
      List<ListItem> AllList = new(ListOfSystemApps);
      //sort alphabetically
      AllList = AllList.OrderBy(x => x.Name).ToList();
      AllList.Insert(0, new AllAppsItem());
      AllList = RemoveBlacklistItems(AllList);
      return AllList;
    }

    /// <summary>
    /// This will get called when user types query into search field
    /// </summary>
    /// <returns>List<ListItem> of InstalledApps that possibly match what is being searched for</returns>
    // FuzzySearch threshold is a plugin specific setting
    public List<ListItem> OnQueryChange(string query) {
      List<ListItem> IdentifiedApps = new();
      //filtering apps
      foreach (ListItem app in ListOfSystemApps) {
        if (
            app.Name.Contains(query, StringComparison.OrdinalIgnoreCase)
            || ( FuzzySearch.LD(app.Name, query) < PluginSettings.FuzzySearchThreshold )
        ) {
          IdentifiedApps.Add(app);
        }
      }
      IdentifiedApps = RemoveBlacklistItems(IdentifiedApps);
      return IdentifiedApps;
    }

    public void OnAppStartup() {
      // GUID taken from https://learn.microsoft.com/en-us/windows/win32/shell/knownfolderid
      var FOLDERID_AppsFolder = new Guid("{1e87508d-89c2-42f0-8a7e-645a0f50ca58}");
      ShellObject appsFolder = (ShellObject)
          KnownFolderHelper.FromKnownFolderId(FOLDERID_AppsFolder);

      foreach (var app in (IKnownFolder) appsFolder)
        ListOfSystemApps.Add(new InstalledAppsItem(app));
    }

    public void OnAppShutdown() { }

    public void OnSearchWindowStartup() { }
  }
}
