using Quokka;
using System;
using System.Windows.Media.Imaging;
using System.Collections.Generic;
using Microsoft.WindowsAPICodePack.Shell;
using System.Diagnostics;
using System.Linq;
using Quokka.PluginArch;
using Quokka.ListItems;
using System.IO;

namespace Plugin_InstalledApps
{
    /// <summary>  
    /// Item class for plugin
    /// </summary>
    class InstalledAppsItem : ListItem {

    public string path { get; set; }
    public string extraDetails { get; set; }

    public InstalledAppsItem(ShellObject app) {
      this.name = app.Name;
      this.description = app.ParsingName; // or app.Properties.System.AppUserModel.ID

      if (InstalledApps.PluginSettings.IconSize.Equals("Medium"))
        this.icon = app.Thumbnail.MediumBitmapSource;
      else if (InstalledApps.PluginSettings.IconSize.Equals("ExtraLarge"))
        this.icon = app.Thumbnail.ExtraLargeBitmapSource;
      else if (InstalledApps.PluginSettings.IconSize.Equals("Large"))
        this.icon = app.Thumbnail.LargeBitmapSource;
      else if (InstalledApps.PluginSettings.IconSize.Equals("Small"))
        this.icon = app.Thumbnail.SmallBitmapSource;
      else
        this.icon = app.Thumbnail.MediumBitmapSource;

      this.path = app.Properties.System.Link.TargetParsingPath.Value;
      try {
        this.extraDetails = FileVersionInfo.GetVersionInfo(path).LegalCopyright + "\n" + FileVersionInfo.GetVersionInfo(path).CompanyName + "\n" + FileVersionInfo.GetVersionInfo(path).FileVersion;
      } catch { }
    }

    public override void execute() {
      System.Diagnostics.Process.Start("explorer.exe", @" shell:appsFolder\" + description);
      App.Current.MainWindow.Close();
    }

  }

  class AllAppsItem : ListItem {

    public AllAppsItem() {
      this.name = "Applications";
      this.description = "Shortcut to shell:appsFolder. Menu key will open installed apps settings.";
      this.icon = new BitmapImage(new Uri(
          Environment.CurrentDirectory + "\\Config\\Resources\\3dObjectsFolder.png")); ;
    }

    public override void execute() {
      System.Diagnostics.Process.Start("explorer.exe", @" shell:appsFolder\");
      App.Current.MainWindow.Close();
    }

  }

  /// <summary>  
  /// Interaction logic for plugin
  /// </summary>
  public partial class InstalledApps : IPlugger {
    public static List<ListItem> ListOfSystemApps { private set; get; }
    public static Plugin_InstalledApps.Settings PluginSettings { get; set; }
    public InstalledApps() { }

    /// <summary>  
    /// This is name will display in main plug board  
    /// </summary>  
    public string PluggerName { get; set; } = "InstalledApps";

    public List<ListItem> RemoveBlacklistItems(List<ListItem> list) {
      foreach (string i in PluginSettings.BlackList) {
        list.RemoveAll(x => x.name.Equals(i));
      }
      return list;
    }

    public List<String> SpecialCommands() {
      List<String> SpecialCommand = new List<String>();
      SpecialCommand.Add(PluginSettings.AllAppsSpecialCommand);
      return SpecialCommand;
    }

    public List<ListItem> OnSpecialCommand(string command) {
      //There is only 1 special command for this plugin so there is no need to check which it is
      List<ListItem> AllList = new List<ListItem>(ListOfSystemApps);
      //sort alphabetically
      AllList = AllList.OrderBy(x => x.name).ToList();
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
      List<ListItem> IdentifiedApps = new List<ListItem>();
      //filtering apps
      foreach (ListItem app in ListOfSystemApps) {
        if (app.name.Contains(query, StringComparison.OrdinalIgnoreCase)
                || ( FuzzySearch.LD(app.name, query) < PluginSettings.FuzzySearchThreshold )) {
          IdentifiedApps.Add(app);
        }
      }
      IdentifiedApps = RemoveBlacklistItems(IdentifiedApps);
      return IdentifiedApps;
    }

    public void OnAppStartup() {
      //Get Plugin Specific settings
      string fileName = Environment.CurrentDirectory + "\\PlugBoard\\Plugin_InstalledApps\\Plugin\\settings.json";
      PluginSettings = System.Text.Json.JsonSerializer.Deserialize<Settings>(File.ReadAllText(fileName))!;

      ListOfSystemApps = new List<ListItem>();
      // GUID taken from https://learn.microsoft.com/en-us/windows/win32/shell/knownfolderid
      var FOLDERID_AppsFolder = new Guid("{1e87508d-89c2-42f0-8a7e-645a0f50ca58}");
      ShellObject appsFolder = (ShellObject) KnownFolderHelper.FromKnownFolderId(FOLDERID_AppsFolder);

      foreach (var app in (IKnownFolder) appsFolder) ListOfSystemApps.Add(new InstalledAppsItem(app));
    }

    public void OnAppShutdown() { }

    public void OnSearchWindowStartup() { }

  }
}

