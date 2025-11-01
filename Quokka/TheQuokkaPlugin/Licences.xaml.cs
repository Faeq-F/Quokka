using Quokka.ListItems;
using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace Quokka.TheQuokkaPlugin {

  public partial class Licences : ItemContextPane {

    /// <summary>
    /// The Licenses Page for the TheQuokkaPlugin Context Pane
    /// </summary>
    public Licences() {
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

    private void GoBack(object sender, RoutedEventArgs e) {
      ( (SearchWindow) App.Current.MainWindow ).ContextPane.Navigate(new Uri("pack://application:,,,/Quokka;component/thequokkaplugin/contextpane.xaml"));
      ( (SearchWindow) App.Current.MainWindow ).SearchTermTextBox.Focus();
    }

    private void CopyLinkIcons8(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://intercom.help/icons8-7fb7577e8170/en/articles/5534926-universal-multimedia-license-agreement-for-icons8");
    }

    private void CopyLinkFeatherIcons(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://github.com/feathericons/feather/blob/main/LICENSE");
    }

    private void CopyLinkVarelaRound(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://github.com/avrahamcornfeld/Varela-Round-Hebrew/blob/master/OFL.txt");
    }

    private void CopyLinkNotifyIcon(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://github.com/hardcodet/wpf-notifyicon/blob/develop/LICENSE");
    }

    private void CopyLinkKeboardHook(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://web.archive.org/web/20141017230556/http://www.liensberger.it:80/web/blog/?p=207");
    }

    private void CopyLinkJSON(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://github.com/JamesNK/Newtonsoft.Json/blob/master/LICENSE.md");
    }

    private void CopyLinkXamlFlair(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://github.com/XamlFlair/XamlFlair/blob/master/LICENSE");
    }

    private void CopyLinkPluginArch(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://www.c-sharpcorner.com/article/simple-plugin-architecture-using-reflection-with-wpf-projects/");
    }

    private void CopyLinkTypeExtender(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://github.com/NdubuisiJr/TypeExtender/blob/main/LICENSE");
    }

    private void CopyLinkFuzzySharp(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://github.com/JakeBayer/FuzzySharp/blob/master/LICENSE");
    }
  }
}
