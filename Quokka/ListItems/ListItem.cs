using System.ComponentModel;
using System.Windows.Media;

namespace Quokka.ListItems {
  /// <summary>
  /// All list items should implement this class.
  /// </summary>
  public abstract class ListItem : INotifyPropertyChanged {
    /// <summary>
    /// The name of the item (The main text that appears in the list)
    /// </summary>
    public string Name { get; set; } = "Item Name";
    /// <summary>
    /// The description of / extra details about the item (The smaller text that appears in the list)
    /// </summary>
    public string Description { get; set; } = "Item Description";

    private ImageSource? _icon;
    /// <summary>
    /// The icon for the item
    /// </summary>
    public ImageSource? Icon {
      get => _icon;
      set {
        if (_icon != value) {
          _icon = value;
          OnPropertyChanged(nameof(Icon));
        }
      }
    }

    /// <summary>
    /// What the item does when it is executed (Enter key pressed)
    /// </summary>
    public abstract void Execute();

    /// <summary>
    /// <inheritdoc/>
    /// </summary>
    /// <returns>The name of the ListItem with the description on a new line</returns>
    public override string ToString() {
      return Name + "\n" + Description;
    }

    /// <summary>
    /// <inheritdoc/>
    /// </summary>
    /// <param name="obj"><inheritdoc/></param>
    /// <returns><inheritdoc/></returns>
    public override bool Equals(object obj) {
      var item = obj as ListItem;

      if (item == null) {
        return false;
      }

      return this.ToString().Equals(item.ToString());
    }

    /// <summary>
    /// <inheritdoc/>
    /// </summary>
    /// <returns><inheritdoc/></returns>
    public override int GetHashCode() {
      int hash = 17;
      hash = hash * 23 + ToString().GetHashCode();
      return hash;
    }

    /// <summary>
    /// <inheritdoc/>
    /// </summary>
    public event PropertyChangedEventHandler? PropertyChanged;
    /// <summary>
    /// Raises the PropertyChanged event for a specified property. This method should be called whenever a property value changes to notify any subscribers of the change
    /// </summary>
    /// <param name="propertyName">The name of the property that changed</param>
    protected void OnPropertyChanged(string propertyName) {
      PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }
  }
}
