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
  ///   The search window - interaction logic for SearchWindow.xaml.
  /// </summary>
  public partial class SearchWindow : Window {

    /// <summary>
    ///   Used by ContextPanes (Pages) - the frame on which
    ///   context panes are displayed.
    /// </summary>
    public Frame contextPane;

    /// <summary>
    ///   Used by ContextPanes (Pages) - the app settings.
    /// </summary>
    public ResourceDictionary ContextPaneSettingsDict = Application.Current.Resources;

    /// <summary>
    ///   Used by ContextPanes (Pages) - the TextBox in
    ///   which the user enters their query.
    /// </summary>
    public TextBox searchBox;

    private static List<ListItem>? ListOfResults { set; get; }

    /// <summary>
    ///   Used by ContextPanes (Pages) - the currently
    ///   selected ListItem.
    /// </summary>
    public ListItem? SelectedItem;

    private string query = "";

    /// <summary>
    ///   Constructs the search window, applies the relevant
    ///   app settings that were previously loaded on
    ///   AppStartup, runs the OnSearchWindowStartup method
    ///   for plugins, binds the relevant keyboard shortcuts
    ///   for the window and tries to set focus on the
    ///   TextBox in which the user enters their query.
    /// </summary>
    public SearchWindow() {
      InitializeComponent();

      // initial look
      ResultsBox.Visibility = Visibility.Collapsed;
      ContextPane.Visibility = Visibility.Collapsed;

      //settings indirectly available to the user
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
        MessageBox.Show(ex.Message + "\n" + ex.StackTrace,
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

      //fields needed for context panes
      searchBox = SearchTermTextBox;
      contextPane = ContextPane;

      //Focusing Search Bar (not guaranteed every time - same issue as ms power-toys)
      EventManager.RegisterClassHandler(typeof(Window), LoadedEvent,
        new RoutedEventHandler(WindowLoaded));
    }

    private void Exit(object sender, ExecutedRoutedEventArgs e) {
      Close();
    }

    /// <summary>
    ///   Execute the currently selected ListItem. If a
    ///   ListItem is not selected yet, the first item in
    ///   the results list is executed.
    /// </summary>
    /// <param name="e">
    ///   The arguments for the event.
    /// </param>
    /// <param name="sender">
    ///   The element from which the event is triggered.
    /// </param>
    private void ListItem_Click(object sender, RoutedEventArgs e) {
      if (ResultsListView != null) {
        if (ResultsListView.SelectedIndex > -1) {
          ( (ListItem) ResultsListView.SelectedItem ).Execute();
        } else ( (ListItem) ResultsListView.Items.GetItemAt(0) ).Execute();
        Close();
      }
    }

    /// <summary>
    ///   Loads the relevant ListItems into the results list
    ///   when the user changes the query entered in the
    ///   search bar. The maximum number of results loaded
    ///   is dependent upon the MaxResults setting, though
    ///   this can be overridden by the IgnoreMaxResultsFlag
    ///   setting and plugin SpecialCommands.
    /// </summary>
    /// <param name="e">
    ///   The arguments for the event.
    /// </param>
    /// <param name="sender">
    ///   The element from which the event is triggered.
    /// </param>
    private void OnQueryChange(object sender, RoutedEventArgs e) {
      bool IgnoreMaxResults = false;
      //reset view of list
      ResultsListView.SelectedIndex = 0;
      ResultsListView.ScrollIntoView(ResultsListView.SelectedItem);
      // Close context pane if it was open
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
          MessageBox.Show(ex.Message + "\n" + ex.StackTrace,
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
      //If the ContextPane is open - focus the actions list
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
              if (PluginName != "Quokka.ListItems") {
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