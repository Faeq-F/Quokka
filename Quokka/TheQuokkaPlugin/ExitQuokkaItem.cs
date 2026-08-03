using Quokka.ListItems;
using Quokka.PluginArch;
using System;
using System.Windows;

namespace Quokka.TheQuokkaPlugin
{
  /// <summary>
  /// Represents a list item that exits the Quokka application.
  /// </summary>
  internal sealed class ExitQuokkaItem : ListItem
  {
    /// <summary>
    /// Initializes a new instance of the <see cref="ExitQuokkaItem"/> class.
    /// </summary>
    public ExitQuokkaItem()
    {
      Name = "Exit";
      Description = "Exit Quokka";
      Icon = IconCache.GetOrAdd(
        Environment.CurrentDirectory + "\\Config\\Resources\\exit.png"
      );
    }

    /// <summary>
    /// Executes the action to shutdown the Quokka application.
    /// </summary>
    public override void Execute()
    {
      Application.Current.Shutdown();
    }
  }
}
