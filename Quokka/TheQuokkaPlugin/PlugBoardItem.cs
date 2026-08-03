using Quokka.ListItems;
using Quokka.PluginArch;
using System;
using System.Windows;

namespace Quokka.TheQuokkaPlugin
{
  /// <summary>
  /// Represents a list item that opens the PlugBoard directory.
  /// </summary>
  internal sealed class PlugBoardItem : ListItem
  {
    /// <summary>
    /// Initializes a new instance of the <see cref="PlugBoardItem"/> class.
    /// </summary>
    public PlugBoardItem()
    {
      Name = "PlugBoard";
      Description = "Open the PlugBoard folder";
      Icon = IconCache.GetOrAdd(
        Environment.CurrentDirectory + "\\Config\\Resources\\plug.png"
      );
    }

    /// <summary>
    /// Executes the action to open the PlugBoard folder.
    /// </summary>
    public override void Execute()
    {
      App.OpenPlugBoard();
      Application.Current.MainWindow.Close();
    }
  }
}
