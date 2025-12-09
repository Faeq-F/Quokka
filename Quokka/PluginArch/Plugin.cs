using Quokka.ListItems;
using System.Collections.ObjectModel;

namespace Quokka.PluginArch
{

  /// <summary>
  /// All plugins must implement this
  /// </summary>
  public abstract class Plugin
  {

    /// <summary>
    ///  The name of the plugin
    ///  </summary>
    public abstract string PluginName { get; set; }

    /// <summary>
    ///  This method will run just before the application shuts down,
    ///  i.e., when the user clicks 'exit' in the tray task context menu.
    ///  Useful for any clean-up required.
    ///  <br />Default behavior when not overridden: does nothing.
    ///  </summary>
    public virtual void OnAppShutdown() { }

    /// <summary>
    ///  This method will run just after the application starts up,
    ///  e.g., when the user runs Quokka.exe.
    ///  Useful for any required resource gathering;
    ///  there is an OnSearchWindowStartup() method which may be more appropriate for certain tasks.
    ///  <br />Default behavior when not overridden: does nothing.
    ///  </summary>
    public virtual void OnAppStartup() { }

    /// <summary>
    ///  Runs when the user changes their query in the search window.
    ///  Used to give the user the results they want to see from their query.
    ///  </summary>
    ///  <param name = "query" >The user's current query</param>
    ///  <returns>
    ///  A Collection of ListItems appropriate for the user's query.
    ///  These will be displayed in the search windows results list
    ///  </returns>
    public abstract Collection<ListItem> OnQueryChange(string query);

    /// <summary>
    ///  This method will run just after the search window starts up.
    ///  Useful for any required resource gathering;
    ///  there is an OnAppStartup() method which may be more appropriate for certain tasks.
    ///  <br />Default behavior when not overridden: does nothing.
    ///  </summary>
    public virtual void OnSearchWindowStartup() { }

    /// <summary>
    ///  Runs when the user changes their query in the search window to
    ///  one of the commands provided by SpecialCommands().
    ///  Used to give the user the results they want to see from the command.
    ///  </summary>
    ///  <param name = "command" >The query the user has entered</param>
    ///  <returns>
    ///  A Collection of ListItems appropriate for the command.
    ///  These will be displayed in the search windows results list.
    ///  <br />Default behavior when not overridden: returns an empty collection.
    ///  </returns>
    public virtual Collection<ListItem> OnSpecialCommand(string command) { return new Collection<ListItem>(); }

    /// <summary>
    ///  Used to define special commands that should have unique results.
    ///  When one of these commands is entered by the user, OnSpecialCommand(string command) is called.
    ///  ListItems from other plugins will not appear when one of these commands is entered.
    ///  The commands defined should be unique as to NOT CLASH with other plugins.
    ///  </summary>
    ///  <returns>
    ///  The special commands; the commands defined should be unique as to NOT CLASH with other plugins.
    ///  <br />Default behavior when not overridden: returns an empty Collection.
    ///  </returns>

    public virtual Collection<string> SpecialCommands() { return new Collection<string>(); }

    /// <summary>
    /// Runs when the user changes their query in the search window to include a 
    /// command signifier, provided by CommandSignifiers(), at the beginning of their query.
    /// Used to give the user the results they want to see from the command.
    /// </summary>
    ///  <param name = "command" >The query the user has entered</param>
    /// <returns>
    /// A Collection of ListItems appropriate for the signifier and extra information that proceeded it.
    /// <br />Default behavior when not overridden: returns an empty collection.
    /// </returns>
    public virtual Collection<ListItem> OnSignifier(string command) { return new Collection<ListItem>(); }

    /// <summary>
    /// Used to define signifiers (prefixes) to produce commands that should take in 
    /// extra information (after the prefix) to produce unique results.
    /// When a query starting with one of these signifiers is entered by the user, OnSignifier(string command) is called.
    /// ListItems from other plugins will not appear when one of these commands is entered.
    /// The signifiers defined should be unique as to NOT CLASH with other plugins.
    /// </summary>
    /// <returns>
    /// The command signifiers; the signifiers defined should be unique as to NOT CLASH with other plugins.
    /// <br />Default behavior when not overridden: returns an empty Collection.
    /// </returns>
    public virtual Collection<string> CommandSignifiers() { return new Collection<string>(); }

  }
}
