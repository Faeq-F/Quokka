using Quokka.Plugger.Contracts;
using Quokka;
using System.Text.RegularExpressions;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace Plugin_ShowTypedText {
    /// <summary>  
    /// Item class for plugin
    /// </summary>
    class TypedTextItem : ListItem {
        public string query;
        public TypedTextItem(string query) { 
            this.name = "Typed:" + query;
            this.query = query;
            this.description = "The search field contains the above text";
            //this.icon = an ImageSource; 
        }

        //When item is selected, copy text
        public override void execute() {
            //Clipboard.SetText(query);
            App.Current.MainWindow.Close();
        }
    }


    /// <summary>  
    /// Interaction logic for plugin
    /// </summary>
    public partial class ShowTypedText : IPlugger {

        private string query;
        public ShowTypedText() {}

        /// <summary>  
        /// This is name will display in main plug board  
        /// </summary>  
        public string PluggerName { get; set; } = "ShowTypedText";

        /// <summary>  
        /// This will get called when user types query into search field
        /// </summary>  
        /// <returns></returns>  
        public ListItem[] GetPlugger(string query) {
            ListItem item = new TypedTextItem(query);
            return new ListItem[] {item};
        }

    }
}