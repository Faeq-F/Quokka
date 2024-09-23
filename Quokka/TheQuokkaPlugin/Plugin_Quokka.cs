namespace Quokka.TheQuokkaPlugin {
  using Quokka.ListItems;
  using Quokka.PluginArch;
  using System.Collections.Generic;

  /// <summary>
  /// The Quokka Plugin
  /// </summary>
  public partial class Plugin_Quokka : Plugin {

    /// <summary>
    /// <inheritdoc/>
    /// </summary>
    public override string PluggerName { get; set; } = "Plugin_Quokka";

    /// <summary>
    /// <inheritdoc/>
    /// </summary>
    /// <param name="query"><inheritdoc/></param>
    /// <returns>
    /// An empty list
    /// </returns>
    public override List<ListItem> OnQueryChange(string query) { return new List<ListItem>(); }

    /// <summary>
    /// <inheritdoc/><br />
    /// Checks for updates, if CheckForUpdates (in settings) is true
    /// </summary>
    public override void OnAppStartup() {
      if ((bool) App.Current.Resources["CheckForUpdates"]) {
        UpdateChecker.RunUpdateCheck();
      }
    }

    /// <summary>
    /// Provides the AboutQuokkaItem
    /// </summary>
    /// <param name="command"><inheritdoc/></param>
    /// <returns>The AboutQuokkaItem</returns>
    public override List<ListItem> OnSpecialCommand(string command) {
      return new List<ListItem>() { new AboutQuokkaItem() };
    }

    /// <summary>
    /// <inheritdoc/>
    /// </summary>
    /// <returns>The AboutCommand in settings</returns>
    public override List<string> SpecialCommands() {
      return new List<string>() { (string) App.Current.Resources["AboutCommand"] };
    }
  }
}
