using Quokka.ListItems;
using System.Collections.ObjectModel;

namespace Quokka.PluginArch
{

  /// <summary>
  ///   Represents the base class for all plugins in Quokka.
  ///   Serves as the main extension point for implementing plugin features.
  /// </summary>
  /// <remarks>
  ///   The lifecycle of a plugin is managed by the application in the following order:
  ///   <list type="number">
  ///     <item><description>Constructor instantiation</description></item>
  ///     <item><description><see cref="OnAppStartup"/></description></item>
  ///     <item><description><see cref="OnSearchWindowStartup"/></description></item>
  ///     <item><description>User queries: <see cref="OnQueryChange"/>, <see cref="OnSpecialCommand"/>, or <see cref="OnSignifier"/></description></item>
  ///     <item><description><see cref="OnAppShutdown"/></description></item>
  ///   </list>
  /// </remarks>
  /// <seealso cref="ListItem"/>
  /// <seealso cref="FuzzySearch"/>
  /// <seealso cref="App.Plugins"/>
  public abstract class Plugin
  {

    /// <summary>
    ///  Gets or sets the name of the plugin.
    ///  </summary>
    public abstract string PluginName { get; set; }

    /// <summary>
    ///  Runs just before the application shuts down,
    ///  i.e., when the user clicks `exit` in the tray task context menu.
    ///  Useful for any clean-up required.
    ///  <br />Default behavior when not overridden: does nothing.
    ///  </summary>
    public virtual void OnAppShutdown() { }

    /// <summary>
    ///  Runs just after the application starts up,
    ///  e.g., when the user runs `Quokka.exe`.
    ///  Useful for any required resource gathering;
    ///  there is an <see cref="OnSearchWindowStartup"/> method which may be more appropriate for certain tasks.
    ///  <br />Default behavior when not overridden: does nothing.
    ///  </summary>
    public virtual void OnAppStartup() { }

    /// <summary>
    ///  Runs when the user changes their query in the search window.
    ///  Used to give the user the results they want to see from their query.
    ///  </summary>
    ///  <param name="query">The user's current query.</param>
    ///  <returns>
    ///  A Collection of <see cref="ListItem"/>s appropriate for the user's <paramref name="query"/>.
    ///  These will be displayed in the search window's results list.
    ///  </returns>
    public abstract Collection<ListItem> OnQueryChange(string query);

    /// <summary>
    ///  Runs just after the search window starts up.
    ///  Useful for any required resource gathering;
    ///  there is an <see cref="OnAppStartup"/> method which may be more appropriate for certain tasks.
    ///  <br />Default behavior when not overridden: does nothing.
    ///  </summary>
    public virtual void OnSearchWindowStartup() { }

    /// <summary>
    ///  Runs when the user changes their query in the search window to
    ///  one of the commands provided by <see cref="SpecialCommands"/>.
    ///  Used to give the user the results they want to see from the command.
    ///  </summary>
    ///  <param name="command">The special command the user has entered.</param>
    ///  <returns>
    ///  A Collection of <see cref="ListItem"/>s appropriate for the <paramref name="command"/>.
    ///  These will be displayed in the search window's results list.
    ///  <br />Default behavior when not overridden: returns an empty collection.
    ///  </returns>
    public virtual Collection<ListItem> OnSpecialCommand(string command) { return new Collection<ListItem>(); }

    /// <summary>
    ///  Gets special commands that should have unique results.
    ///  When one of these commands is entered by the user, <see cref="OnSpecialCommand"/> is called.
    ///  <see cref="ListItem"/>s from other plugins will not appear when one of these commands is entered.
    ///  The commands defined should be unique as to NOT CLASH with other plugins.
    ///  </summary>
    ///  <returns>
    ///  The special commands; the commands defined should be unique as to NOT CLASH with other plugins.
    ///  <br />Default behavior when not overridden: returns an empty Collection.
    ///  </returns>
    public virtual Collection<string> SpecialCommands() { return new Collection<string>(); }

    /// <summary>
    /// Runs when the user changes their query in the search window to include a 
    /// command signifier, provided by <see cref="CommandSignifiers"/>, at the beginning of their query.
    /// Used to give the user the results they want to see from the command.
    /// </summary>
    ///  <param name="command">The command the user has entered.</param>
    /// <returns>
    /// A Collection of <see cref="ListItem"/>s appropriate for the signifier and extra information that follows the <paramref name="command"/>.
    /// <br />Default behavior when not overridden: returns an empty collection.
    /// </returns>
    public virtual Collection<ListItem> OnSignifier(string command) { return new Collection<ListItem>(); }

    /// <summary>
    /// Gets signifiers (prefixes) to produce commands that should take in 
    /// extra information (after the prefix) to produce unique results.
    /// When a query starting with one of these signifiers is entered by the user, <see cref="OnSignifier"/> is called.
    /// <see cref="ListItem"/>s from other plugins will not appear when one of these commands is entered.
    /// The signifiers defined should be unique as to NOT CLASH with other plugins.
    /// </summary>
    /// <returns>
    /// The command signifiers; the signifiers defined should be unique as to NOT CLASH with other plugins.
    /// <br />Default behavior when not overridden: returns an empty Collection.
    /// </returns>
    public virtual Collection<string> CommandSignifiers() { return new Collection<string>(); }

  }
}
