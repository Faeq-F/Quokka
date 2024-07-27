using System;
using System.Windows.Media.Imaging;

namespace Quokka.ListItems {
  /// <summary>
  /// 
  /// </summary>
  public class NoListItem : ListItem {
    /// <summary>
    /// 
    /// </summary>
    public NoListItem() {
      Name = "No items found";
      Description = "Try reformatting / rewording your query";
      Icon = new BitmapImage(new Uri(Environment.CurrentDirectory + "\\Config\\Resources\\information.png"));
    }
    /// <summary>
    /// <inheritdoc/>
    /// Does Nothing.
    /// </summary>
    public override void Execute() {
      //Do nothing
    }
  }
}