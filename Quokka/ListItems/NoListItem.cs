using Quokka.PluginArch;
using System;

namespace Quokka.ListItems
{
  /// <summary>
  /// The list item that appears when there are no results for a query
  /// </summary>
  public class NoListItem : ListItem
  {
    /// <summary>
    /// Creates the list item with the name "No items found", a helpful description and using the information icon. This item does not have a context pane.
    /// </summary>
    public NoListItem()
    {
      Name = (string)App.Current.Resources["NoResultsItemName"];
      Description = (string)App.Current.Resources["NoResultsItemDesc"];
      Icon = IconCache.GetOrAdd(
        Environment.CurrentDirectory + "\\Config\\Resources\\information.png"
      );
    }

    /// <summary>
    /// <inheritdoc/><br />
    /// Does Nothing.
    /// </summary>
    public override void Execute()
    {
      //Do nothing
    }
  }
}