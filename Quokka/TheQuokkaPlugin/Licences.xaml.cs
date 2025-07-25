﻿using Quokka.ListItems;
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
      System.Windows.Clipboard.SetText("https://icons8.com/illustrations");
    }

    private void CopyLinkFeatherIcons(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://feathericons.com/");
    }

    private void CopyLinkVarelaRound(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://fonts.google.com/specimen/Varela+Round");
    }

    private void CopyLinkNotifyIcon(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://github.com/hardcodet/wpf-notifyicon");
    }

    private void CopyLinkKeboardHook(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://web.archive.org/web/20141017230556/http://www.liensberger.it:80/web/blog/?p=207");
    }

    private void CopyLinkJSON(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://www.newtonsoft.com/json");
    }

    private void CopyLinkXamlFlair(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://github.com/XamlFlair/XamlFlair");
    }

    private void CopyLinkPluginArch(object sender, RoutedEventArgs e) {
      System.Windows.Clipboard.SetText("https://www.c-sharpcorner.com/article/simple-plugin-architecture-using-reflection-with-wpf-projects/");
    }
  }
}
