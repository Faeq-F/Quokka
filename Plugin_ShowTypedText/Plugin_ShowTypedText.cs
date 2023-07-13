using Quokka;
using System;
using System.Windows.Forms; //used for clipboard as System.Windows.Clipboard does not have a retry loop
using Quokka.Plugger.Contracts;
using System.Windows.Media.Imaging;
using System.Collections.Generic;
using System.Windows.Controls;

namespace Plugin_ShowTypedText {
    /// <summary>  
    /// Item class for plugin
    /// </summary>
    class ShowTypedTextItem : ListItem {
        public string query;
        public ShowTypedTextItem(string query) { 
            this.name = "Typed:" + query;
            this.query = query;
            this.description = "The search field contains the above text";
            this.icon = new BitmapImage(new Uri(
                Environment.CurrentDirectory + "\\Config\\Resources\\information.png"));
        }

        //When item is selected, copy text
        public override void execute() {
            // used for reliability with win api as System.Windows.Clipboard does not have retry
            // and System.Windows.Forms.Clipboard does not work either
            for (int i = 0; i < 10; i++) {
                try {
                    Clipboard.SetText(query);
                    break;
                } catch {
                    System.Threading.Thread.Sleep(10);
                }
            }
            App.Current.MainWindow.Close();
        }
    }


    /// <summary>  
    /// Interaction logic for plugin
    /// </summary>
    public partial class ShowTypedText : IPlugger {

        public ShowTypedText() {}

        /// <summary>  
        /// This is name will display in main plug board  
        /// </summary>  
        public string PluggerName { get; set; } = "ShowTypedText";

        /// <summary>  
        /// This will get called when user types query into search field
        /// </summary>  
        /// <returns></returns>  
        public List<ListItem> OnQueryChange(string query) {
            List<ListItem> ItemList = new List<ListItem>();
            ItemList.Add(new ShowTypedTextItem(query));
            return ItemList;
        }

        public List<String> SpecialCommands() {
            return new List<String>();
        }

        public List<ListItem> OnSpecialCommand(string command) {
            return new List<ListItem>();
        }

        public void OnAppStartup() { }

        public void OnAppShutdown() { }

        public void OnSearchWindowStartup() { }

    }
}