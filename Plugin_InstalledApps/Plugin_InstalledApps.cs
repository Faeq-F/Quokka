using Quokka;
using System;
using System.Windows;
using Quokka.Plugger.Contracts;
using System.Windows.Media.Imaging;
using System.Collections.Generic;
using Microsoft.WindowsAPICodePack.Shell;
using System.Windows.Media;
using System.Diagnostics;
using System.Windows.Controls;

using System.Collections;
using System.Linq;


namespace Plugin_InstalledApps {
    /// <summary>  
    /// Item class for plugin
    /// </summary>
    class InstalledAppsItem : ListItem {

        public string path { get; set; }
        public string extraDetails { get; set; }

        public InstalledAppsItem(ShellObject app) {
            this.name = app.Name;
            this.description = app.ParsingName; // or app.Properties.System.AppUserModel.ID
            this.icon = app.Thumbnail.MediumBitmapSource;//plugin specific setting
            this.path = app.Properties.System.Link.TargetParsingPath.Value;
            try{
                this.extraDetails = FileVersionInfo.GetVersionInfo(path).LegalCopyright + "\n" + FileVersionInfo.GetVersionInfo(path).CompanyName + "\n" + FileVersionInfo.GetVersionInfo(path).FileVersion;
            } catch { }
        }

        public override void execute() {
            System.Diagnostics.Process.Start("explorer.exe", @" shell:appsFolder\" + description);
            App.Current.MainWindow.Close();
        }

    }

    class AllAppsItem : ListItem{
        
        public AllAppsItem(){
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
        public InstalledApps() { }

        /// <summary>  
        /// This is name will display in main plug board  
        /// </summary>  
        public string PluggerName { get; set; } = "InstalledApps";

        public List<ListItem> RemoveBlacklistItems(List<ListItem> list){
            string[] BlackList = { "Visual Studio Installer" }; //This will be a plugin specific setting
            foreach (string i in BlackList){
                list.RemoveAll(x => x.name.Equals(i));
            }
            return list;
        }

        public List<String> SpecialCommands() {
            List<String> SpecialCommand = new List<String>();
            SpecialCommand.Add("AllApps");
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
                if (app.name.Contains(query, StringComparison.OrdinalIgnoreCase) || (FuzzySearch.LD(app.name, query) < 5)) {
                    IdentifiedApps.Add(app);
                }
            }
            IdentifiedApps = RemoveBlacklistItems(IdentifiedApps);
            return IdentifiedApps;
        }

        public void OnAppStartup() {
            ListOfSystemApps = new List<ListItem>();
            // GUID taken from https://learn.microsoft.com/en-us/windows/win32/shell/knownfolderid
            var FOLDERID_AppsFolder = new Guid("{1e87508d-89c2-42f0-8a7e-645a0f50ca58}");
            ShellObject appsFolder = (ShellObject)KnownFolderHelper.FromKnownFolderId(FOLDERID_AppsFolder);

            foreach (var app in (IKnownFolder)appsFolder) ListOfSystemApps.Add(new InstalledAppsItem(app));
        }

        public void OnAppShutdown() { }

        public void OnSearchWindowStartup() { }

    }
}

