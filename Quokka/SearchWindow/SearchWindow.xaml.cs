using Quokka.ListItems;
using Quokka.PluginArch;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;

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
      ListContainer.Visibility = Visibility.Collapsed;
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
        foreach (Plugin plugin in App.plugins!) {
          plugin.OnSearchWindowStartup();
        }
      } catch (Exception ex) {
        Quokka.App.ShowErrorMessageBox(ex, "Error with a plugin calling its OnSearchWindowStartup()");
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
        if (ResultsListView.SelectedIndex > -1) ( (ListItem) ResultsListView.SelectedItem ).Execute();
        else ( (ListItem) ResultsListView.Items.GetItemAt(0) ).Execute();
      }
    }

    /// <summary>
    /// Creates the item list that would be shown in the results list after the user enters a command
    /// <br />
    /// The maximum number of results loaded
    ///   is dependent upon the MaxResults setting, though
    ///   this can be overridden by the IgnoreMaxResultsFlag
    ///   setting and plugin SpecialCommands.
    /// </summary>
    /// <returns>The items for a command</returns>
    public static List<ListItem> ProduceItems(string command) {
      bool IgnoreMaxResults = false;
      if (command.EndsWith((string) Application.Current.Resources["IgnoreMaxResultsFlag"])) {
        command = command.Remove(
          command.Length - ( (string) Application.Current.Resources["IgnoreMaxResultsFlag"] ).Length);
        IgnoreMaxResults = true;
      }
      ListOfResults = new List<ListItem>();

      //getting results for query
      if (command == "") {
        return new List<ListItem>();
      } else {
        try {
          foreach (Plugin plugin in App.plugins) {
            //checking special commands
            foreach (string specialCommand in plugin.SpecialCommands()) {
              if (specialCommand.Equals(command)) {
                ListOfResults = plugin.OnSpecialCommand(command);
                return ListOfResults;
              }
            }
            //checking signifiers
            foreach (string signifier in plugin.CommandSignifiers()) {
              if (command.StartsWith(signifier, StringComparison.Ordinal)) {
                ListOfResults = plugin.OnSignifier(command);
                //Check if items were shown
                if (ListOfResults.Count == 0) ListOfResults.Add(new NoListItem());
                return ListOfResults;
              }
            }
            //grab plugin items
            foreach (ListItem item in plugin.OnQueryChange(command)) {
              ListOfResults.Add(item);
            }
          }
        } catch (Exception ex) {
          Quokka.App.ShowErrorMessageBox(ex, "Could not produce list items");
        }
        //sort by relevance
        ListOfResults = FuzzySearch.sort(command, ListOfResults).ToList();
        //Check if items were shown
        if (ListOfResults.Count == 0) ListOfResults.Add(new NoListItem());
        //use MaxResults setting
        if (!IgnoreMaxResults)
          ListOfResults = ListOfResults.Take((int) Application.Current.Resources["MaxResults"]).ToList();
        return ListOfResults;
      }
    }

    private CancellationTokenSource? _produceCts;

    /// <summary>
    ///   Loads the relevant ListItems into the results list
    ///   when the user changes the query entered in the
    ///   search bar.
    /// </summary>
    /// <param name="e">
    ///   The arguments for the event.
    /// </param>
    /// <param name="sender">
    ///   The element from which the event is triggered.
    /// </param>
    private async void OnQueryChange(object sender, RoutedEventArgs e) {
      // cancel previous run
      _produceCts?.Cancel();
      _produceCts = new CancellationTokenSource();
      CancellationToken token = _produceCts.Token;

      //reset view of list
      ResultsListView.SelectedIndex = 0;
      ResultsListView.ScrollIntoView(ResultsListView.SelectedItem);
      // Close context pane if it was open
      if (ContextPane.Visibility == Visibility.Visible) ContextPane.Visibility = Visibility.Collapsed;
      //get text from sender
      TextBox textBox = ( sender as TextBox )!;
      query = textBox.Text;
      //show loading item
      ResultsListView.ItemsSource = new List<ListItem>() { new LoadingListItem() };
      ResultsListView.SelectedIndex = -1;
      ListContainer.Visibility = Visibility.Visible;

      List<ListItem> Results;
      try {
        // run work off the UI thread
        Results = await Task.Run(() => ProduceItems(query), token);
      } catch (OperationCanceledException) {
        return;
      } catch (Exception ex) {
        MessageBox.Show(ex.Message, "Error!");
        return;
      }

      if (Results.Count == 0) {
        ListContainer.Visibility = Visibility.Collapsed; return;
      }

      ResultsListView.ItemsSource = Results;
      ResultsListView.SelectedIndex = -1;
      ListContainer.Visibility = Visibility.Visible;
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

        case var value when value == (System.Windows.Input.Key) App.Current.Resources["ContextPaneKey"]:
          if (query != "") {
            if (ContextPane.Visibility == Visibility.Visible) { //setting the frame visibility
              ContextPane.Visibility = Visibility.Collapsed;
            } else {
              if (( ResultsListView.SelectedIndex == -1 )) ResultsListView.SelectedIndex = 0;
              string PluginName = ResultsListView.SelectedItem.GetType().Namespace.ToString();
              if (PluginName == "Quokka.TheQuokkaPlugin") {
                SelectedItem = ( ResultsListView.SelectedItem as ListItem )!;
                ContextPane.Navigate(new Uri("/Quokka;component/thequokkaplugin/contextpane.xaml", UriKind.Relative));
                ContextPane.Visibility = Visibility.Visible;
              } else if (PluginName != "Quokka.ListItems" && App.hasContextPane[PluginName] == true) {
                SelectedItem = ( ResultsListView.SelectedItem as ListItem )!;
                ContextPane.Navigate(new Uri("pack://application:,,,/" + PluginName + ";component/ContextPane.xaml"));
                ContextPane.Visibility = Visibility.Visible;
              }
            }
          }
          break;

        case Key.Left:
          ListBoxItem CurrentListBoxItem =
                    (ListBoxItem) ( ResultsListView.ItemContainerGenerator.ContainerFromItem(ResultsListView.Items.CurrentItem) );
          if (CurrentListBoxItem != null) {
            // Getting the ContentPresenter of CurrentListBoxItem
            ContentPresenter? ListBoxItemContentPresenter = FindVisualChild<ContentPresenter>(CurrentListBoxItem);
            if (ListBoxItemContentPresenter != null) {
              // Finding the scroll viewer from the DataTemplate that is set on that ContentPresenter
              DataTemplate ListBoxItemDataTemplate = ListBoxItemContentPresenter.ContentTemplate;
              ScrollViewer ListBoxItemScrollViewer = (ScrollViewer) ListBoxItemDataTemplate.FindName("ListItemScrollViewer", ListBoxItemContentPresenter);
              //scrolling the item
              if (ListBoxItemScrollViewer.HorizontalOffset != 0) {
                ListBoxItemScrollViewer.ScrollToHorizontalOffset(
                  ListBoxItemScrollViewer.HorizontalOffset - (double) App.Current.Resources["HorizontalScrollIncrementingWidth"]);
              } else { return; }
            } else { return; }
          } else { return; }
          break;

        case Key.Right:
          CurrentListBoxItem =
                    (ListBoxItem) ( ResultsListView.ItemContainerGenerator.ContainerFromItem(ResultsListView.Items.CurrentItem) );
          if (CurrentListBoxItem != null) {
            // Getting the ContentPresenter of CurrentListBoxItem
            ContentPresenter? ListBoxItemContentPresenter = FindVisualChild<ContentPresenter>(CurrentListBoxItem);
            if (ListBoxItemContentPresenter != null) {
              // Finding the scroll viewer from the DataTemplate that is set on that ContentPresenter
              DataTemplate ListBoxItemDataTemplate = ListBoxItemContentPresenter.ContentTemplate;
              ScrollViewer ListBoxItemScrollViewer = (ScrollViewer) ListBoxItemDataTemplate.FindName("ListItemScrollViewer", ListBoxItemContentPresenter);
              //scrolling the item
              if (ListBoxItemScrollViewer.HorizontalOffset != ListBoxItemScrollViewer.ScrollableWidth) {
                ListBoxItemScrollViewer.ScrollToHorizontalOffset(
                  ListBoxItemScrollViewer.HorizontalOffset + (double) App.Current.Resources["HorizontalScrollIncrementingWidth"]);
              } else { return; }
            } else { return; }
          } else { return; }
          break;

        default:
          return; //e is not handled - normal activity occurs
      }
      e.Handled = true;
    }


    private childItem? FindVisualChild<childItem>(DependencyObject obj)
    where childItem : DependencyObject {
      for (int i = 0; i < VisualTreeHelper.GetChildrenCount(obj); i++) {
        DependencyObject child = VisualTreeHelper.GetChild(obj, i);
        if (child != null && child is childItem) {
          return (childItem) child;
        } else {
          if (child != null) {
            childItem? childOfChild = FindVisualChild<childItem>(child);
            if (childOfChild != null)
              return childOfChild;
          }
        }
      }
      return null;
    }

  }
}