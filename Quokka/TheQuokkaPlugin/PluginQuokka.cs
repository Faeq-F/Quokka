using Quokka.ListItems;
using Quokka.PluginArch;
using System;
using System.Collections.ObjectModel;
using System.Windows;

namespace Quokka.TheQuokkaPlugin
{
  /// <summary>
  /// Represents the built-in plugin for the Quokka application, handling update checks and metadata.
  /// </summary>
  public class PluginQuokka : Plugin
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
    public override Collection<ListItem> OnQueryChange(string query) { return new(); }

    /// <summary>
    /// <inheritdoc/><br />
    /// Checks for updates if the <c>CheckForUpdates</c> setting is enabled.
    /// </summary>
    public override void OnAppStartup()
    {
      if ((bool)Application.Current.Resources["CheckForUpdates"])
      {
        UpdateChecker.RunUpdateCheck(false);
      }

      SettingsFileWatcher.CreateFileWatcher(Environment.CurrentDirectory + "\\Config\\");
    }

    /// <summary>
    /// Provides application control items when the special command is invoked.
    /// </summary>
    /// <param name="command"><inheritdoc/></param>
    /// <returns>A collection containing the <see cref="AboutQuokkaItem"/>, <see cref="SettingsItem"/>, <see cref="PlugBoardItem"/>, <see cref="RestartQuokkaItem"/>, <see cref="ExitQuokkaItem"/>.</returns>
    public override Collection<ListItem> OnSpecialCommand(string command)
    {
      return new()
      {
        new AboutQuokkaItem(),
        new SettingsItem(),
        new PlugBoardItem(),
        new RestartQuokkaItem(),
        new ExitQuokkaItem()
      };
    }

    /// <summary>
    /// <inheritdoc/>
    /// </summary>
    /// <returns>A collection containing the configured <c>AppControlCommand</c> setting value.</returns>
    public override Collection<string> SpecialCommands()
    {
      return new() { (string)Application.Current.Resources["AppControlCommand"] };
    }
  }
}
