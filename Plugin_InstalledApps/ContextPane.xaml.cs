using Quokka;
using Quokka.ListItems;
using System;
using System.Diagnostics;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace Plugin_InstalledApps {
  /// <summary>
  ///   Interaction logic for ContextPane.xaml
  /// </summary>

  public partial class ContextPane : ItemContextPane {
    private readonly InstalledAppsItem? Item;

    public ContextPane() {
      InitializeComponent();

      try {
        Item = (InstalledAppsItem) ( (SearchWindow) Application.Current.MainWindow ).SelectedItem;
      } catch (InvalidCastException) {//Used to handle the AllAppsItem
        base.ReturnToSearch();

        //Process.Start("ms-settings:appsfeatures");
        //App.Current.MainWindow.Close();

        return;
      }
      DetailsImage.Source = Item.Icon;
      NameText.Text = Item.Name;
      DescText.Text = Item.Description;
      ExtraDetails.Text = Item.ExtraDetails;
    }

    private void OpenApp(object sender, RoutedEventArgs e) {
      Item.Execute();
    }

    private void OpenContainingFolder(object sender, RoutedEventArgs e) {
      using Process folderopener = new();
      folderopener.StartInfo.FileName = "explorer";
      folderopener.StartInfo.Arguments = Item.Path.Remove(Item.Path.LastIndexOf('\\'));
      folderopener.Start();
      App.Current.MainWindow.Close();
    }

    private void Page_KeyDown(object sender, KeyEventArgs e) {
      ButtonsListView.Focus();
      switch (e.Key) {
        case Key.Enter:
          if (( ButtonsListView.SelectedIndex == -1 )) ButtonsListView.SelectedIndex = 0;
          Grid CurrentItem = ButtonsListView.SelectedItem as Grid;
          Button CurrentButton = ( CurrentItem.Children[1] as Grid ).Children[0] as Button;
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

        case Key.Apps: //This is the menu key
          base.ReturnToSearch();
          break;

        default:
          return;
      }
      e.Handled = true;
    }

    //still does not work
    private void RunAsAdmin(object sender, RoutedEventArgs e) {
      //Public domain; no attribution required.
      const int ERROR_CANCELLED = 1223; //The operation was canceled by the user.

      ProcessStartInfo info = new("explorer") {
        Arguments = @" shell:appsFolder\" + Item.Description,
        UseShellExecute = true,
        Verb = "runas",
        CreateNoWindow = true
      };
      try {
        Process.Start(info);
      } catch (System.ComponentModel.Win32Exception ex) {
        if (!( ex.NativeErrorCode == ERROR_CANCELLED )) throw;
      }
      App.Current.MainWindow.Close();
    }
  }
}