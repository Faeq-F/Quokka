using Quokka.ListItems;
using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Input;
using Keys = System.Windows.Forms.Keys;

namespace Quokka.TheQuokkaPlugin
{

  public partial class Licenses : ItemContextPane
  {

    /// <summary>
    /// The Licenses Page for the TheQuokkaPlugin Context Pane
    /// </summary>
    public Licenses()
    {
      InitializeComponent();
    }

    /// <summary>
    /// <inheritdoc/><br />
    /// Up and down keys select list items and the enter key executes the item's action
    /// </summary>
    /// <param name="sender"><inheritdoc/></param>
    /// <param name="e"><inheritdoc/></param>
    protected override void PageKeyDown(object sender, KeyEventArgs e)
    {
      ButtonsListView.Focus();
      if (e != null)
      {
        switch (e.Key)
        {
          case Key.Enter:
            if (ButtonsListView.SelectedIndex == -1)
            {
              ButtonsListView.SelectedIndex = 0;
            }
            Grid CurrentItem = (Grid)ButtonsListView.SelectedItem;
            Button CurrentButton = (Button)((Grid)CurrentItem.Children[1]).Children[0];
            CurrentButton.RaiseEvent(new RoutedEventArgs(ButtonBase.ClickEvent));
            break;
          case Key.Down:
            if (ButtonsListView.SelectedIndex == -1)
            {
              ButtonsListView.SelectedIndex = 1;
            }
            else if (ButtonsListView.SelectedIndex == ButtonsListView.Items.Count - 1)
            {
              ButtonsListView.SelectedIndex = 0;
            }
            else
            {
              ButtonsListView.SelectedIndex++;
            }
            ButtonsListView.ScrollIntoView(ButtonsListView.SelectedItem);
            break;
          case Key.Up:
            if (ButtonsListView.SelectedIndex is -1 or 0)
            {
              ButtonsListView.SelectedIndex = ButtonsListView.Items.Count - 1;
            }
            else
            {
              ButtonsListView.SelectedIndex--;
            }
            ButtonsListView.ScrollIntoView(ButtonsListView.SelectedItem);
            break;
          case var value when value == KeyInterop.KeyFromVirtualKey((int)(Keys)Application.Current.Resources["ContextPaneKey"]):
            ReturnToSearch();
            break;
          default:
            return;
        }
        e.Handled = true;
      }
    }

    private void GoBack(object sender, RoutedEventArgs e)
    {
      ((SearchWindow)Application.Current.MainWindow).ContextPane.Navigate(new Uri("pack://application:,,,/Quokka;component/thequokkaplugin/contextpane.xaml"));
      ((SearchWindow)Application.Current.MainWindow).SearchTermTextBox.Focus();
    }

    private void CopyLinkIcons8(object sender, RoutedEventArgs e)
    {
      Clipboard.SetText("https://intercom.help/icons8-7fb7577e8170/en/articles/5534926-universal-multimedia-license-agreement-for-icons8");
    }

    private void CopyLinkFeatherIcons(object sender, RoutedEventArgs e)
    {
      Clipboard.SetText("https://github.com/feathericons/feather/blob/main/LICENSE");
    }

    private void CopyLinkVarelaRound(object sender, RoutedEventArgs e)
    {
      Clipboard.SetText("https://github.com/avrahamcornfeld/Varela-Round-Hebrew/blob/master/OFL.txt");
    }

    private void CopyLinkNotifyIcon(object sender, RoutedEventArgs e)
    {
      Clipboard.SetText("https://github.com/hardcodet/wpf-notifyicon/blob/develop/LICENSE");
    }

    private void CopyLinkKeboardHook(object sender, RoutedEventArgs e)
    {
      Clipboard.SetText("https://web.archive.org/web/20141017230556/http://www.liensberger.it:80/web/blog/?p=207");
    }

    private void CopyLinkJSON(object sender, RoutedEventArgs e)
    {
      Clipboard.SetText("https://github.com/JamesNK/Newtonsoft.Json/blob/master/LICENSE.md");
    }

    private void CopyLinkXamlFlair(object sender, RoutedEventArgs e)
    {
      Clipboard.SetText("https://github.com/XamlFlair/XamlFlair/blob/master/LICENSE");
    }

    private void CopyLinkPluginArch(object sender, RoutedEventArgs e)
    {
      Clipboard.SetText("https://www.c-sharpcorner.com/article/simple-plugin-architecture-using-reflection-with-wpf-projects/");
    }

    private void CopyLinkTypeExtender(object sender, RoutedEventArgs e)
    {
      Clipboard.SetText("https://github.com/NdubuisiJr/TypeExtender/blob/main/LICENSE");
    }

    private void CopyLinkFuzzySharp(object sender, RoutedEventArgs e)
    {
      Clipboard.SetText("https://github.com/JakeBayer/FuzzySharp/blob/master/LICENSE");
    }
  }
}
