using Quokka;
using System;
using Quokka.Plugger.Contracts;

namespace Plugin_TypedText {
    class TypedTextItem : ListItem {
        public string query;
        public TypedTextItem(string query) {
            this.name = "You typed:" + query;
            this.query = query;
            this.description = "You typed the above text";
            //this.icon = an ImageSource; 
        }

        //When item is selected, copy text
        public override void execute() {
            //Clipboard.SetText(query);
            App.Current.MainWindow.Close();
        }
    }

    public partial class TypedText : IPlugger {

        private string query;
        public TypedText() { }

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
            return new ListItem[] { item };
        }

    }
}
