using Quokka.ListItems;
using Quokka.PluginArch;
using System;
using System.Windows;

namespace Quokka.TheQuokkaPlugin
{
  /// <summary>
  /// Represents a list item that opens the settings configuration file.
  /// </summary>
  internal sealed class SettingsItem : ListItem
  {
    /// <summary>
    /// Initializes a new instance of the <see cref="SettingsItem"/> class.
    /// </summary>
    public SettingsItem()
    {
      Name = "Settings";
      Description = "Open settings file";
      Icon = IconCache.GetOrAdd(
        Environment.CurrentDirectory + "\\Config\\Resources\\settings.png"
      );
    }

    /// <summary>
    /// Executes the action to open the settings configuration file.
    /// </summary>
    public override void Execute()
    {
      App.OpenSettingsFile();
      Application.Current.MainWindow.Close();
    }
  }
}
