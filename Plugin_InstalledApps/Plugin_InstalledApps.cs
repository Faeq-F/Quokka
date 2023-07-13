using Quokka;
using System;
using System.Windows;
using Quokka.Plugger.Contracts;
using System.Windows.Media.Imaging;
using System.Collections.Generic;
using Microsoft.WindowsAPICodePack.Shell;
using System.Windows.Media;

namespace Plugin_InstalledApps {
    /// <summary>  
    /// Item class for plugin
    /// </summary>
    class InstalledAppsItem : ListItem {

        public InstalledAppsItem(string name, string appUserModelID, ImageSource icon) {
            this.name = name;
            this.description = appUserModelID;
            this.icon = icon;
        }

        public InstalledAppsItem(ShellObject app) {
            this.name = app.Name;
            this.description = app.ParsingName; // or app.Properties.System.AppUserModel.ID
            this.icon = app.Thumbnail.ExtraLargeBitmapSource;
        }

        public override void execute() {
            System.Diagnostics.Process.Start("explorer.exe", @" shell:appsFolder\" + description);
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

        public List<String> SpecialCommands() {
            List<String> SpecialCommand = new List<String>();
            SpecialCommand.Add("AllApps");
            return SpecialCommand;
        }

        public List<ListItem> OnSpecialCommand(string command) {
            //There is only 1 special command for this plugin so there is no need to check which it is
            return ListOfSystemApps;
        }

        /// <summary>  
        /// This will get called when user types query into search field
        /// </summary>  
        /// <returns></returns>  
        public List<ListItem> OnQueryChange(string query) {
            List<ListItem> IdentifiedApps = new List<ListItem>();
            //filtering apps
            foreach (ListItem app in ListOfSystemApps) {
                if (app.name.Contains(query, StringComparison.OrdinalIgnoreCase)) IdentifiedApps.Add(app);}
            //sort by relevance
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

