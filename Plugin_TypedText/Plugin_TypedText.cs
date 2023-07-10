using Quokka;
using System;
using System.Windows;
using Quokka.Plugger.Contracts;
using System.Windows.Media.Imaging;
using System.Collections.Generic;

namespace Plugin_TypedText {
    /// <summary>  
    /// Item class for plugin
    /// </summary>
    class TypedTextItem : ListItem {
        public string query;
        public TypedTextItem(string query) {
            this.name = "You typed:" + query;
            this.query = query;
            this.description = "You typed the above text";
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
    public partial class TypedText : IPlugger {

        public TypedText() { }

        /// <summary>  
        /// This is name will display in main plug board  
        /// </summary>  
        public string PluggerName { get; set; } = "TypedText";

        /// <summary>  
        /// This will get called when user types query into search field
        /// </summary>  
        /// <returns></returns>  
        public List<ListItem> OnQueryChange(string query) {
            List<ListItem> ItemList = new List<ListItem>();
            ItemList.Add(new TypedTextItem(query));
            return ItemList;
        }

        public List<String> SpecialCommands(){
            return new List<String>();
        }

        public List<ListItem> OnSpecialCommand(string command){
            return new List<ListItem>();
        }

        public void OnAppStartup() { }

        public void OnAppShutdown() { }

        public void OnSearchWindowStartup(){ }

    }
}
