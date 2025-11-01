using Quokka.PluginArch;
using System;
using System.Windows.Media.Imaging;

namespace Quokka.ListItems {
  /// <summary>
  /// The list item that appears when there are no results for a query
  /// </summary>
  public class NoListItem : ListItem {
    /// <summary>
    /// Creates the list item with the name "No items found", a helpful description and using the information icon. This item does not have a context pane.
    /// </summary>
    public NoListItem() {
      Name = "No items found";
      Description = "Try reformatting / rewording your query";
      UiDispatcher.BeginInvoke(() => {
        Icon = new BitmapImage(new Uri(Environment.CurrentDirectory + "\\Config\\Resources\\information.png"));
      });
    }
    /// <summary>
    /// <inheritdoc/><br />
    /// Does Nothing.
    /// </summary>
    public override void Execute() {
      //Do nothing
    }
  }
}