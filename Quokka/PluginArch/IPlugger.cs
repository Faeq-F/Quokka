using Quokka.ListItems;
using System.Collections.Generic;

namespace Quokka.PluginArch {

  /// <summary>
  /// All plugins must implement this interface.
  /// </summary>
  public interface IPlugger {

    /// <summary>
    ///  The name of the plugin
    ///  </summary>
    public string PluggerName { get; set; }

    /// <summary>
    ///  This method will run just before the application shuts down,
    ///  i.e., when the user clicks 'exit' in the tray task context menu.
    ///  Useful for any clean-up required.
    ///  </summary>
    public void OnAppShutdown();

    /// <summary>
    ///  This method will run just after the application starts up,
    ///  e.g., when the user runs Quokka.exe.
    ///  Useful for any required resource gathering;
    ///  there is an OnSearchWindowStartup() method which may be more appropriate for certain tasks.
    ///  </summary>
    public void OnAppStartup();

    /// <summary>
    ///  Runs when the user changes their query in the search window.
    ///  Used to give the user the results they want to see from their query.
    ///  </summary>
    ///  <param name = "query" >The user's current query</param>
    ///  <returns>
    ///  A List of ListItems appropriate for the user's query.
    ///  These will be displayed in the search windows results list
    ///  </returns>
    public List<ListItem> OnQueryChange(string query);

    /// <summary>
    ///  This method will run just after the search window starts up.
    ///  Useful for any required resource gathering;
    ///  there is an OnAppStartup() method which may be more appropriate for certain tasks.
    ///  </summary>
    public void OnSearchWindowStartup();

    /// <summary>
    ///  Runs when the user changes their query in the search window to
    ///  one of the commands provided by SpecialCommands().
    ///  Used to give the user the results they want to see from the command.
    ///  </summary>
    ///  <param name = "command" >The command the user has entered</param>
    ///  <returns>
    ///  A List of ListItems appropriate for the command.
    ///  These will be displayed in the search windows results list
    ///  </returns>
    public List<ListItem> OnSpecialCommand(string command);

    /// <summary>
    ///  Used to define special commands that should have unique results.
    ///  When one of these commands is entered by the user, OnSpecialCommand(string command) is called.
    ///  ListItems from other plugins will not appear when one of these commands is entered.
    ///  The commands defined should be unique as to NOT CLASH with other plugins.
    ///  </summary>
    ///  <returns>
    ///  The special commands; the commands defined should be unique as to NOT CLASH with other plugins.
    ///  </returns>
    public List<string> SpecialCommands();
  }
}