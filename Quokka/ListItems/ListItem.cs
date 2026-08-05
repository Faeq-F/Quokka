using System;
using System.ComponentModel;
using System.Windows.Media;

namespace Quokka.ListItems
{
  /// <summary>
  /// Represents the base class for all list items displayed in the launcher.
  /// </summary>
  public abstract class ListItem : INotifyPropertyChanged
  {
    /// <summary>
    /// Gets or sets the name of the item, which is the main text displayed in the results list.
    /// </summary>
    public string Name { get; set; } = "Item Name";

    /// <summary>
    /// Gets or sets the description or extra details of the item, which is the smaller text displayed under the name.
    /// </summary>
    public string Description { get; set; } = "Item Description";

    /// <summary>
    /// Gets or sets the icon for the item.
    /// </summary>
    public ImageSource? Icon
    {
      get;
      set
      {
        if (field != value)
        {
          field = value;
          OnPropertyChanged(nameof(Icon));
        }
      }
    }

    /// <summary>
    /// Runs the action associated with the list item when it is selected and executed.
    /// </summary>
    public abstract void Execute();

    /// <summary>
    /// Returns a string representation of the list item.
    /// </summary>
    /// <returns>
    /// A string combining the <see cref="Name"/> and <see cref="Description"/>, separated by a newline.
    /// </returns>
    public override string ToString() => Name + "\n" + Description;

    /// <summary>
    /// Determines whether the specified object is equal to the current list item.
    /// </summary>
    /// <param name="obj">The object to compare with the current list item.</param>
    /// <returns>
    /// <c>true</c> if the specified object is a <see cref="ListItem"/> and has the same string representation
    /// (evaluated via <see cref="ToString"/>); otherwise, <c>false</c>.
    /// </returns>
    public override bool Equals(object? obj)
    {
      return obj is ListItem item && ToString().Equals(item.ToString(), StringComparison.Ordinal);
    }

    /// <summary>
    /// Serves as the default hash function.
    /// </summary>
    /// <returns>
    /// A hash code computed based on the string representation of the list item.
    /// </returns>
    public override int GetHashCode()
    {
      const int hash = 17;
      return (hash * 23) + ToString().GetHashCode(StringComparison.Ordinal);
    }

    /// <summary>
    /// Occurs when a property value changes.
    /// </summary>
    public event PropertyChangedEventHandler? PropertyChanged;

    /// <summary>
    /// Raises the <see cref="PropertyChanged"/> event.
    /// </summary>
    /// <param name="propertyName">The name of the property that changed.</param>
    protected void OnPropertyChanged(string propertyName)
    {
      PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }
  }
}
