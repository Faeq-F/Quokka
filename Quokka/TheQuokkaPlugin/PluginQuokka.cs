namespace Quokka.TheQuokkaPlugin
{
  using Quokka.ListItems;
  using Quokka.PluginArch;
  using System;
  using System.Collections.ObjectModel;

  /// <summary>
  /// Represents the built-in plugin for the Quokka application, handling update checks and metadata.
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
    /// An empty collection.
    /// </returns>
    public override Collection<ListItem> OnQueryChange(string query) { return new Collection<ListItem>(); }

    /// <summary>
    /// <inheritdoc/><br />
    /// Checks for updates if the <c>CheckForUpdates</c> setting is enabled.
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
    /// Provides the <see cref="AboutQuokkaItem"/> when the special command is invoked.
    /// </summary>
    /// <param name="command"><inheritdoc/></param>
    /// <returns>A collection containing the <see cref="AboutQuokkaItem"/>.</returns>
    public override Collection<ListItem> OnSpecialCommand(string command)
    {
      return new Collection<ListItem>() { new AboutQuokkaItem() };
    }

    /// <summary>
    /// <inheritdoc/>
    /// </summary>
    /// <returns>A collection containing the configured <c>AboutCommand</c> setting value.</returns>
    public override Collection<string> SpecialCommands()
    {
      return new Collection<string>() { (string)App.Current.Resources["AboutCommand"] };
    }
  }
}
