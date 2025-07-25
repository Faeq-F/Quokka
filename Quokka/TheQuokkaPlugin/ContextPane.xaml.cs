using Quokka.ListItems;
using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace Quokka.TheQuokkaPlugin {

  public partial class ContextPane : ItemContextPane {

    /// <summary>
    /// TheQuokkaPlugin Context Pane
    /// </summary>
    public ContextPane() {
      InitializeComponent();
    }

    /// <summary>
    /// <inheritdoc/><br />
    /// Up and down keys select list items and the enter key executes the item's action
    /// </summary>
    /// <param name="sender"><inheritdoc/></param>
    /// <param name="e"><inheritdoc/></param>
    protected override void Page_KeyDown(object sender, KeyEventArgs e) {
      ButtonsListView.Focus();
      switch (e.Key) {
        case Key.Enter:
          if (( ButtonsListView.SelectedIndex == -1 )) ButtonsListView.SelectedIndex = 0;
          Grid CurrentItem = (Grid) ButtonsListView.SelectedItem;
          Button CurrentButton = (Button) ( (Grid) CurrentItem!.Children[1] ).Children[0];
          CurrentButton.RaiseEvent(new RoutedEventArgs(Button.ClickEvent));
          break;
        case Key.Down:
          if (( ButtonsListView.SelectedIndex == -1 )) {
            ButtonsListView.SelectedIndex = 1;
          } else if (ButtonsListView.SelectedIndex == ButtonsListView.Items.Count - 1) {
            ButtonsListView.SelectedIndex = 0;
          } else {
            ButtonsListView.SelectedIndex++;
          }
          ButtonsListView.ScrollIntoView(ButtonsListView.SelectedItem);
          break;
        case Key.Up:
          if (( ButtonsListView.SelectedIndex == -1 ) || ( ButtonsListView.SelectedIndex == 0 )) {
            ButtonsListView.SelectedIndex = ButtonsListView.Items.Count - 1;
          } else {
            ButtonsListView.SelectedIndex--;
          }
          ButtonsListView.ScrollIntoView(ButtonsListView.SelectedItem);
          break;
        case var value when value == (System.Windows.Input.Key) App.Current.Resources["ContextPaneKey"]:
          base.ReturnToSearch();
          break;
        default:
          return;
      }
      e.Handled = true;
    }

    private void CopySiteLink(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://faeq-f.github.io/Quokka");
    }

    private void CopyReleaseLink(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://github.com/Faeq-F/Quokka/releases/tag/v2.0");
    }

    private void CopyChangelogLink(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://github.com/Faeq-F/Quokka/blob/v2.0/Changelog.md");
    }

    private void CheckForUpdates(object sender, RoutedEventArgs e) {
      UpdateChecker.RunUpdateCheck(true);
    }

    private void CopyIssuesLink(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://github.com/Faeq-F/Quokka/issues");
    }

    private void CopyDiscussionsLink(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://github.com/Faeq-F/Quokka/discussions");
    }

    private void DisplayLicenses(object sender, RoutedEventArgs e) {
      ( (SearchWindow) App.Current.MainWindow ).ContextPane.Navigate(new Uri("pack://application:,,,/Quokka;component/thequokkaplugin/licenses.xaml"));
      ( (SearchWindow) App.Current.MainWindow ).SearchTermTextBox.Focus();
    }
  }
}
