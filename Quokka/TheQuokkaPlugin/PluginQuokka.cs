namespace Quokka.TheQuokkaPlugin
{
  using Quokka.ListItems;
  using Quokka.PluginArch;
  using System;
  using System.Collections.ObjectModel;

  /// <summary>
  /// The Quokka Plugin
  /// </summary>
  public partial class PluginQuokka : Plugin
  {

    /// <summary>
    /// <inheritdoc/>
    /// </summary>
    public override string PluginName { get; set; } = "PluginQuokka";

    /// <summary>
    /// <inheritdoc/>
    /// </summary>
    /// <param name="query"><inheritdoc/></param>
    /// <returns>
    /// An empty collection
    /// </returns>
    public override Collection<ListItem> OnQueryChange(string query) { return new Collection<ListItem>(); }

    /// <summary>
    /// <inheritdoc/><br />
    /// Checks for updates, if CheckForUpdates (in settings) is true
    /// </summary>
    public override void OnAppStartup()
    {
      if ((bool)App.Current.Resources["CheckForUpdates"])
      {
        UpdateChecker.RunUpdateCheck(false);
      }

      SettingsFileWatcher.CreateFileWatcher(Environment.CurrentDirectory + "\\Config\\");
    }

    /// <summary>
    /// Provides the AboutQuokkaItem
    /// </summary>
    /// <param name="command"><inheritdoc/></param>
    /// <returns>The AboutQuokkaItem</returns>
    public override Collection<ListItem> OnSpecialCommand(string command)
    {
      return new Collection<ListItem>() { new AboutQuokkaItem() };
    }

    /// <summary>
    /// <inheritdoc/>
    /// </summary>
    /// <returns>The AboutCommand in settings</returns>
    public override Collection<string> SpecialCommands()
    {
      return new Collection<string>() { (string)App.Current.Resources["AboutCommand"] };
    }
  }
}
