using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace Quokka.ListItems {
  public partial class ItemContextPane : Page {

    protected virtual void Page_KeyDown(object sender, KeyEventArgs e) {
      switch (e.Key) {
        case Key.Apps: //This is the menu key
          ReturnToSearch();
          break;
        default:
          return;
      }
      e.Handled = true;
    }

    protected void ReturnToSearch() {
      SearchWindow window = ( (SearchWindow) Application.Current.MainWindow );
      window.contextPane.Visibility = Visibility.Collapsed;
      window.searchBox.Focus();
      window.contextPane.Source = null; //makes showing a new pane more reliable
    }


  }
}
