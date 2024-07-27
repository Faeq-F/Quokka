using System.Windows.Media;

namespace Quokka.ListItems {
  /// <summary>
  /// 
  /// </summary>
  public abstract class ListItem {
    /// <summary>
    /// 
    /// </summary>
    public string Name { get; set; } = "Item Name";
    /// <summary>
    /// 
    /// </summary>
    public string Description { get; set; } = "Item Description";
    /// <summary>
    /// 
    /// </summary>
    public ImageSource Icon { get; set; } = new DrawingImage();
    /// <summary>
    /// 
    /// </summary>
    public abstract void Execute();
    /// <summary>
    /// <inheritdoc/>
    /// </summary>
    /// <returns>The name of the ListItem</returns>
    public override string ToString() {
      return Name;
    }
  }
}
