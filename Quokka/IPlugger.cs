namespace Quokka.Plugger.Contracts {
    public interface IPlugger {
        /// <summary>  
        /// Name of plugger  
        /// </summary>  
        string PluggerName { get; set; }

        /// <summary>  
        /// It will return ListItem[] which will display on ResultsView
        /// </summary>  
        /// <returns></returns>  
        public ListItem[] GetPlugger(string query);
    }
}