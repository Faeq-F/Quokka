using Quokka.ListItems;
using Quokka.PluginArch;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace Quokka {
  /// <summary>
  ///   Interaction logic for SearchWindow.xaml
  /// </summary>

  public partial class SearchWindow : Window {
    public Frame contextPane;
    public ResourceDictionary ContextPaneSettingsDict = Application.Current.Resources;
    public TextBox searchBox;

    //needed for ContextPanes
    public ListItem SelectedItem;

    private String query = "";

    public SearchWindow() {
      InitializeComponent();

      //ApplyAppSettings();
      ResultsBox.Visibility = Visibility.Collapsed;
      ContextPane.Visibility = Visibility.Collapsed;

      ColumnDefinition c1 = new() {
        Width = new GridLength((double) Application.Current.Resources["SearchIconWidth"], GridUnitType.Star)
      };
      ColumnDefinition c2 = new() {
        Width = new GridLength((double) Application.Current.Resources["WindowWidth"] - (double) Application.Current.Resources["SearchIconWidth"], GridUnitType.Star)
      };
      SearchBoxGrid.ColumnDefinitions.Add(c1);
      SearchBoxGrid.ColumnDefinitions.Add(c2);

      //run anything needed for plugins on window startup
      try {
        foreach (IPlugger plugin in App.plugins!) {
          plugin.OnSearchWindowStartup();
        }
      } catch (Exception ex) {
        System.Windows.MessageBox.Show(ex.Message + "\n" + ex.StackTrace,
          "Internal Error", MessageBoxButton.OK, MessageBoxImage.Error);
      }

      //Escape key to close window
      RoutedCommand ExitWindow = new();
      ExitWindow.InputGestures.Add(new KeyGesture(Key.Escape));
      CommandBindings.Add(new CommandBinding(ExitWindow, Exit));

      //Enter key to choose item
      RoutedCommand ExecuteItemCommand = new();
      ExecuteItemCommand.InputGestures.Add(new KeyGesture(Key.Enter));
      CommandBindings.Add(new CommandBinding(ExecuteItemCommand, ListItem_Click));

      //fields needed for context pane
      searchBox = SearchTermTextBox;
      contextPane = ContextPane;

      //Focusing Search Bar
      EventManager.RegisterClassHandler(typeof(Window), Window.LoadedEvent,
        new RoutedEventHandler(WindowLoaded));
    }

    private static List<ListItem> ListOfResults { set; get; }

    private void Exit(object sender, ExecutedRoutedEventArgs e) {
      this.Close();
    }

    private void ListItem_Click(object sender, RoutedEventArgs e) {
      if (ResultsListView != null) {
        if (ResultsListView.SelectedIndex > -1) {
          ( ResultsListView.SelectedItem as ListItem ).Execute();
        } else ( ResultsListView.Items.GetItemAt(0) as ListItem ).Execute();
        this.Close();
      }
    }

    private void OnQueryChange(object sender, RoutedEventArgs e) {
      bool IgnoreMaxResults = false;
      //reset view of list
      ResultsListView.SelectedIndex = 0;
      ResultsListView.ScrollIntoView(ResultsListView.SelectedItem);
      // Close context pane if it was used
      if (ContextPane.Visibility == Visibility.Visible) {
        ContextPane.Visibility = Visibility.Collapsed;
      }
      //get text from sender
      TextBox textBox = ( sender as TextBox )!;
      query = textBox.Text;
      if (query.EndsWith((string) Application.Current.Resources["IgnoreMaxResultsFlag"])) {
        query = query.Remove(
          query.Length - ( (string) Application.Current.Resources["IgnoreMaxResultsFlag"] ).Length);
        IgnoreMaxResults = true;
      }
      ListOfResults = new List<ListItem>();
      //getting results for query
      if (query == "") {
        ResultsBox.Visibility = Visibility.Collapsed; return;
      } else {
        try {
          foreach (IPlugger plugin in App.plugins) {
            //checking special commands
            foreach (string specialCommand in plugin.SpecialCommands()) {
              if (specialCommand.Equals(query)) {
                ListOfResults = plugin.OnSpecialCommand(query);
                ResultsListView.ItemsSource = ListOfResults;
                goto ResultsAreReady;
              }
            }
            //grab plugin items
            foreach (ListItem item in plugin.OnQueryChange(query)) {
              ListOfResults.Add(item);
            }
          }
        } catch (Exception ex) {
          System.Windows.MessageBox.Show(ex.Message + "\n" + ex.StackTrace,
            "Internal Error", MessageBoxButton.OK, MessageBoxImage.Error);
        }
        //sort by relevance
        ListOfResults = ListOfResults.OrderByDescending(x => (
        x.Name.ToLower().StartsWith(query.ToLower()) ))
          .ThenByDescending(x => ( x.Name.ToLower()
          .Contains(query.ToLower()) )).ToList();
        //Check if items were shown
        if (ListOfResults.Count == 0) ListOfResults.Add(new NoListItem());
        //use MaxResults setting
        if (!IgnoreMaxResults)
          ResultsListView.ItemsSource = ListOfResults.Take((int) Application.Current.Resources["MaxResults"]);
        else ResultsListView.ItemsSource = ListOfResults;
      }
      ResultsAreReady:
      ResultsListView.SelectedIndex = -1;
      ResultsBox.Visibility = Visibility.Visible;
    }

    private void SearchTermTextBox_KeyDown(object sender, System.Windows.Input.KeyEventArgs e) {
      //If the ContextPane is showing - focus the actions list
      if (ContextPane.Visibility == Visibility.Visible) {
        ( (Page) ContextPane.Content ).MoveFocus(new TraversalRequest(FocusNavigationDirection.First));
        return;
      }
      switch (e.Key) {
        case Key.Down:
          if (( ResultsListView.SelectedIndex == -1 )) {
            ResultsListView.SelectedIndex = 1;
          } else if (ResultsListView.SelectedIndex == ResultsListView.Items.Count - 1) {
            ResultsListView.SelectedIndex = 0;
          } else {
            ResultsListView.SelectedIndex++;
          }
          ResultsListView.ScrollIntoView(ResultsListView.SelectedItem);
          break;

        case Key.Up:
          if (( ResultsListView.SelectedIndex == -1 ) || ( ResultsListView.SelectedIndex == 0 )) {
            ResultsListView.SelectedIndex = ResultsListView.Items.Count - 1;
          } else {
            ResultsListView.SelectedIndex--;
          }
          ResultsListView.ScrollIntoView(ResultsListView.SelectedItem);
          break;

        case Key.Apps: //This is the menu key
          if (query != "") {
            if (ContextPane.Visibility == Visibility.Visible) { //setting the frame visibility
              ContextPane.Visibility = Visibility.Collapsed;
            } else {
              if (( ResultsListView.SelectedIndex == -1 )) ResultsListView.SelectedIndex = 0;
              string PluginName = ResultsListView.SelectedItem.GetType().Namespace.ToString();
              if (PluginName != "Quokka") {
                SelectedItem = ( ResultsListView.SelectedItem as ListItem )!;
                ContextPane.Source = null;
                ContextPane.Source =
                  new Uri("pack://application:,,,/" + PluginName + ";component/ContextPane.xaml");
                ContextPane.Visibility = Visibility.Visible;
              }
            }
          }
          break;

        default:
          return; //e is not handled - normal activity occurs
      }
      e.Handled = true;
    }

    //Focuses search field
    private void WindowLoaded(object sender, RoutedEventArgs e) {
      var window = e.Source as Window;
      System.Threading.Thread.Sleep(100);
      window!.Dispatcher.Invoke(
      new Action(() => {
        window.MoveFocus(new TraversalRequest(FocusNavigationDirection.First));
      }));
    }
  }
}