using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace Quokka.ListItems
{

  /// <summary>
  /// Basic Context Pane class for a list item.
  /// Contains the basic methods most context panes
  /// would need and / or should want to override.
  /// </summary>
  public partial class ItemContextPane : Page
  {

    /// <summary>
    /// Basic method for Context Panes to handle keyboard input.
    /// If the menu key is pressed, the context pane is closed
    /// and the user will return to search, otherwise
    /// the default action will occur
    /// (e.g., input text in a field, nothing, etc.)
    /// </summary>
    /// <param name = "sender" > The sender of the key down event</param>
    /// <param name = "e" > The key event args</param>
    protected virtual void PageKeyDown(object sender, KeyEventArgs e)
    {
      if (e != null)
      {
        switch (e.Key)
        {
          case Key.Apps: //This is the menu key
            ReturnToSearch();
            break;

          default:
            return;
        }
        e.Handled = true;
      }
    }

    /// <summary>
    /// Closes the context pane and returns the user
    /// back to the item list where they can continue their search.
    /// </summary>
    protected static void ReturnToSearch()
    {
      SearchWindow window = ((SearchWindow)Application.Current.MainWindow);
      window.ContextPaneFrame.Visibility = Visibility.Collapsed;
      window.SearchBox.Focus();
      window.ContextPaneFrame.Source = null; //makes showing a new pane more reliable
    }
  }
}
