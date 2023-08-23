using System;
using Quokka.Plugger.Contracts;
using Quokka;
using Microsoft.WindowsAPICodePack.Shell;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Diagnostics;
using System.Windows.Forms;
using System.Drawing;
using System.Windows.Media;
using System.Windows.Interop;
using System.Windows.Media.Imaging;
using System.Windows;

namespace Plugin_PortableApps {

    /// <summary>  
    /// Item class for plugin
    /// </summary>
    class PortableAppsItem : ListItem {

        public PortableAppsItem(string exePath) {
            this.name = System.IO.Path.GetFileNameWithoutExtension(exePath);
            this.description = exePath;
            this.icon = Imaging.CreateBitmapSourceFromHIcon(Icon.ExtractAssociatedIcon(exePath).Handle,
                            Int32Rect.Empty, BitmapSizeOptions.FromEmptyOptions());

        }

        public override void execute() {
            //execute item
            App.Current.MainWindow.Close();
        }

    }

    class PortableAppsFolderItem : ListItem {

        public PortableAppsFolderItem() {
            this.name = "Portable Apps Folder";
            this.description = "Shortcut to the folder containing your portable apps";
            this.icon = new BitmapImage(new Uri(
                Environment.CurrentDirectory + "\\Config\\Resources\\3dObjectsFolder.png")); ;
        }

        public override void execute() {
            string portableAppsDir = "G:\\PortableApps\\";
            System.Diagnostics.Process.Start("explorer.exe", portableAppsDir);
            App.Current.MainWindow.Close();
        }

    }


    /// <summary>  
    /// Interaction logic for plugin
    /// </summary>
    public partial class PortableApps : IPlugger {
        public static List<ListItem> ListOfSystemApps { private set; get; }

        public PortableApps() { }

        /// <summary>  
        /// This is name will display in main plug board  
        /// </summary>  
        public string PluggerName { get; set; } = "PortableApps";

        List<ListItem> AllPortableApps = new List<ListItem>();

        public List<ListItem> RemoveBlacklistItems(List<ListItem> list) {
            string[] BlackList = { }; //This will be a plugin specific setting
            foreach (string i in BlackList) {
                list.RemoveAll(x => x.name.Equals(i));
            }
            return list;
        }

        List<ListItem> IPlugger.OnQueryChange(string query) {
            List<ListItem> IdentifiedApps = new List<ListItem>();
            //filtering apps
            foreach (ListItem app in AllPortableApps) {
                if (app.name.Contains(query, StringComparison.OrdinalIgnoreCase) || (FuzzySearch.LD(app.name, query) < 5)) {
                    IdentifiedApps.Add(app);
                }
            }
            IdentifiedApps = RemoveBlacklistItems(IdentifiedApps);
            return IdentifiedApps;
        }

        List<string> IPlugger.SpecialCommands() {
            List<String> SpecialCommand = new List<String>();
            SpecialCommand.Add("AllPortableApps");
            return SpecialCommand;
        }

        List<ListItem> IPlugger.OnSpecialCommand(string command) {
            //There is only 1 special command for this plugin so there is no need to check which it is
            List<ListItem> AllList = new List<ListItem>(AllPortableApps);
            //sort alphabetically
            AllList = AllList.OrderBy(x => x.name).ToList();
            AllList.Insert(0, new PortableAppsFolderItem());
            AllList = RemoveBlacklistItems(AllList);
            return AllList;
        }

        void IPlugger.OnAppStartup() {
            string portableAppsDir = "G:\\PortableApps\\";

            if (Directory.Exists(portableAppsDir)) {
                var topLevelDirs = Directory.EnumerateDirectories(portableAppsDir, "*", SearchOption.TopDirectoryOnly);
                foreach (string dir in topLevelDirs){
                    foreach (string exe in 
                        Directory.EnumerateFiles(dir, "*", SearchOption.TopDirectoryOnly).Where(s => s.EndsWith(".exe"))){
                        AllPortableApps.Add(new PortableAppsItem(exe));
                    }
                    
                }
            }

            foreach (ListItem i in AllPortableApps){
                Debug.WriteLine(i.name);
            }
        }

        void IPlugger.OnAppShutdown() {
            throw new NotImplementedException();
        }

        void IPlugger.OnSearchWindowStartup() {
            throw new NotImplementedException();
        }

    }

}
