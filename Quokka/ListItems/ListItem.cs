using System.Windows.Media;

namespace Quokka.ListItems {
  /// <summary>
  /// All list items should implement this class.
  /// </summary>
  public abstract class ListItem {
    /// <summary>
    /// The name of the item (The main text that appears in the list)
    /// </summary>
    public string Name { get; set; } = "Item Name";
    /// <summary>
    /// The description of / extra details about the item (The smaller text that appears in the list)
    /// </summary>
    public string Description { get; set; } = "Item Description";
    /// <summary>
    /// The icon for the item
    /// </summary>
    public ImageSource Icon { get; set; } = new DrawingImage();
    /// <summary>
    /// What the item does when it is executed (Enter key pressed)
    /// </summary>
    public abstract void Execute();
    /// <summary>
    /// <inheritdoc/>
    /// </summary>
    /// <returns>The name of the ListItem</returns>
    public override string ToString() {
      return Name + "\n" + Description;
    }
  }
}
