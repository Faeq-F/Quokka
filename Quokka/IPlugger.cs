using System;
using System.Collections.Generic;

namespace Quokka.Plugger.Contracts {
    public interface IPlugger {
        /// <summary>  
        /// Name of plugger  
        /// </summary>  
        string PluggerName { get; set; }

        /// <summary>  
        /// It will return List<ListItem> which will display on ResultsView
        /// </summary>
        public List<ListItem> OnQueryChange(string query);

        public List<String> SpecialCommands();

        public List<ListItem> OnSpecialCommand(string command);

        public void OnAppStartup();
        public void OnAppShutdown();

        public void OnSearchWindowStartup();
    }
}