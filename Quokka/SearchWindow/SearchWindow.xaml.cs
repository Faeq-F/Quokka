using Quokka.ListItems;
using Quokka.PluginArch;
using Quokka.Settings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;

namespace Quokka {
  /// <summary>
  /// Interaction logic for SearchWindow.xaml
  /// </summary>

  public partial class SearchWindow : Window {

    private String query = "";
    private static List<ListItem> ListOfResults { set; get; }

    //needed for ContextPanes
    public ListItem SelectedItem;
    public TextBox searchBox;
    public Frame contextPane;

    public SearchWindow() {

      InitializeComponent();

      //ApplyAppSettings();
      ResultsBox.Visibility = Visibility.Collapsed;
      ContextPane.Visibility = Visibility.Collapsed;

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
      if (query.EndsWith(App.AppSettings.GeneralSettings.IgnoreMaxResultsFlag)) {
        query = query.Remove(
          query.Length - App.AppSettings.GeneralSettings.IgnoreMaxResultsFlag.Length);
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
        x.name.ToLower().StartsWith(query.ToLower()) ))
          .ThenByDescending(x => ( x.name.ToLower()
          .Contains(query.ToLower()) )).ToList();
        //Check if items were shown
        if (ListOfResults.Count == 0) ListOfResults.Add(new NoListItem());
        //use MaxResults setting
        if (!IgnoreMaxResults)
          ResultsListView.ItemsSource = ListOfResults.Take(
            int.Parse(App.AppSettings.GeneralSettings.MaxResults));
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
                contextPane.Source = null;
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

    private void ListItem_Click(object sender, RoutedEventArgs e) {
      if (ResultsListView != null) {
        if (ResultsListView.SelectedIndex > -1) {
          ( ResultsListView.SelectedItem as ListItem ).execute();
        } else ( ResultsListView.Items.GetItemAt(0) as ListItem ).execute();
        this.Close();
      }
    }

    private void Exit(object sender, ExecutedRoutedEventArgs e) {
      this.Close();
    }

    //Focuses search field
    void WindowLoaded(object sender, RoutedEventArgs e) {
      var window = e.Source as Window;
      System.Threading.Thread.Sleep(100);
      window!.Dispatcher.Invoke(
      new Action(() => {
        window.MoveFocus(new TraversalRequest(FocusNavigationDirection.First));

      }));
    }

    private void ApplyAppSettings() {
      bool issueEncountered = false;

      ResultsBox.Visibility = Visibility.Collapsed;
      ContextPane.Visibility = Visibility.Collapsed;

      //ResultsBox.MaxHeight = (System.Windows.SystemParameters.PrimaryScreenHeight / 2) - 234;
      //ContextPane.MaxHeight = ResultsBox.MaxHeight;

      //Container.Height = ResultsBox.MaxHeight + EntryField.Height;// This will not be a setting

      //Might move style settings to App startup

      try {
        //StyleSettings:

        //AppWindow:
        Application.Current.Resources["WindowTopMargin"] =
        SettingParsers.parseThicknessSetting("0," + SettingParsers.parseScreenDimensionsSetting(
          App.AppSettings.StyleSettings.AppWindow.WindowTopMargin) + ",0,0");
        Application.Current.Resources["WindowWidth"] =
          SettingParsers.parseScreenDimensionsSetting(
            App.AppSettings.StyleSettings.AppWindow.WindowWidth);
        Application.Current.Resources["WindowColor"] =
          new BrushConverter().ConvertFromString(
            App.AppSettings.StyleSettings.AppWindow.WindowColor) as SolidColorBrush;
        Application.Current.Resources["WindowBorderColor"] =
          new BrushConverter().ConvertFromString(
            App.AppSettings.StyleSettings.AppWindow.WindowBorderColor) as SolidColorBrush;
        Application.Current.Resources["WindowBorderThickness"] =
          SettingParsers.parseThicknessSetting(
            App.AppSettings.StyleSettings.AppWindow.WindowBorderThickness);
        Application.Current.Resources["WindowRounding"] =
          new CornerRadius(int.Parse(
            App.AppSettings.StyleSettings.AppWindow.WindowRounding));
        Application.Current.Resources["WindowPadding"] =
          SettingParsers.parseThicknessSetting(
            App.AppSettings.StyleSettings.AppWindow.WindowPadding);

        //"SearchBar":
        Application.Current.Resources["SearchBarColor"] =
          new BrushConverter().ConvertFromString(
            App.AppSettings.StyleSettings.SearchBar.SearchBarColor) as SolidColorBrush;
        Application.Current.Resources["SearchBarRounding"] =
          new CornerRadius(int.Parse(
            App.AppSettings.StyleSettings.SearchBar.SearchBarRounding));
        Application.Current.Resources["SearchBarBorderColor"] =
          new BrushConverter().ConvertFromString(
            App.AppSettings.StyleSettings.SearchBar.SearchBarBorderColor) as SolidColorBrush;
        Application.Current.Resources["SearchBarBorderSize"] =
          SettingParsers.parseThicknessSetting(
            App.AppSettings.StyleSettings.SearchBar.SearchBarBorderSize);
        Application.Current.Resources["SearchBarHeight"] =
          double.Parse(App.AppSettings.StyleSettings.SearchBar.SearchBarHeight);
        Application.Current.Resources["SearchIconWidth"] =
          double.Parse(App.AppSettings.StyleSettings.SearchBar.SearchIconWidth);

        //"EntryField":
        Application.Current.Resources["SearchFieldTxtColor"] =
          new BrushConverter().ConvertFromString(
            App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldTxtColor
            ) as SolidColorBrush;
        Application.Current.Resources["SearchFieldTxtSelColor"] =
          new BrushConverter().ConvertFromString(
            App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldTxtSelColor
            ) as SolidColorBrush;
        Application.Current.Resources["SearchFieldHeight"] =
          double.Parse(App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldHeight);
        Application.Current.Resources["SearchFieldWidth"] =
          double.Parse(App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldWidth);
        Application.Current.Resources["SearchFieldMargin"] =
          SettingParsers.parseThicknessSetting(
            App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldMargin);
        Application.Current.Resources["SearchFieldFont"] =
          new FontFamily(App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldFont);
        Application.Current.Resources["SearchFieldTxtSize"] =
          double.Parse(App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldTxtSize);
        Application.Current.Resources["SearchFieldPlaceholder"] =
          App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldPlaceholder;
        Application.Current.Resources["SearchFieldPlaceholderMargin"] =
          SettingParsers.parseThicknessSetting(
            App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldPlaceholderMargin);
        Application.Current.Resources["SearchFieldPlaceholderColor"] =
          new BrushConverter().ConvertFromString(
            App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldPlaceholderColor
            ) as SolidColorBrush;
        Application.Current.Resources["SearchFieldPlaceholderSize"] =
          double.Parse(
            App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldPlaceholderSize);
        Application.Current.Resources["SearchFieldPlaceholderFont"] =
          new FontFamily(
            App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldPlaceholderFont);

        //"ResultsList":

        //"Container":
        Application.Current.Resources["ListContainerMargin"] =
          SettingParsers.parseThicknessSetting(
            App.AppSettings.StyleSettings.ResultsList.Container.ListContainerMargin);
        Application.Current.Resources["ListContainerBorderColor"] =
          new BrushConverter().ConvertFromString(
            App.AppSettings.StyleSettings.ResultsList.Container.ListContainerBorderColor
            ) as SolidColorBrush;
        Application.Current.Resources["ListContainerBorderThickness"] =
          SettingParsers.parseThicknessSetting(
            App.AppSettings.StyleSettings.ResultsList.Container.ListContainerBorderThickness);
        Application.Current.Resources["ListContainerRounding"] =
          new CornerRadius(int.Parse(
            App.AppSettings.StyleSettings.ResultsList.Container.ListContainerRounding));
        Application.Current.Resources["ListContainerColor"] =
          new BrushConverter().ConvertFromString(
            App.AppSettings.StyleSettings.ResultsList.Container.ListContainerColor
            ) as SolidColorBrush;
        Application.Current.Resources["ListContainerMinHeight"] =
          double.Parse(App.AppSettings.StyleSettings.ResultsList.Container.ListContainerMinHeight);

        //"List": (10,10,0,10)
        Application.Current.Resources["ListMargin"] =
          SettingParsers.parseThicknessSetting(
            App.AppSettings.StyleSettings.ResultsList.List.ListMargin);

        //"ListItems":
        Application.Current.Resources["ListItemBorderThickness"] =
              SettingParsers.parseThicknessSetting(
                App.AppSettings.StyleSettings.ResultsList.ListItems.ListItemBorderThickness);
        Application.Current.Resources["ListItemHoverBorderColor"] =
          new BrushConverter().ConvertFromString(
            App.AppSettings.StyleSettings.ResultsList.ListItems.ListItemHoverBorderColor);
        Application.Current.Resources["ListItemHoverBgColor"] =
              new BrushConverter().ConvertFromString(
                App.AppSettings.StyleSettings.ResultsList.ListItems.ListItemHoverBgColor
                ) as SolidColorBrush;
        Application.Current.Resources["ListItemSelectedBorderColor"] =
              new BrushConverter().ConvertFromString(
                App.AppSettings.StyleSettings.ResultsList.ListItems.ListItemSelectedBorderColor);
        Application.Current.Resources["ListItemSelectedBgColor"] =
              new BrushConverter().ConvertFromString(
                App.AppSettings.StyleSettings.ResultsList.ListItems.ListItemSelectedBgColor);
        Application.Current.Resources["ListItemRounding"] =
              new CornerRadius(int.Parse(
                App.AppSettings.StyleSettings.ResultsList.ListItems.ListItemRounding));
        Application.Current.Resources["ListItemMargin"] =
          SettingParsers.parseThicknessSetting(
            App.AppSettings.StyleSettings.ResultsList.ListItems.ListItemMargin);
        Application.Current.Resources["ListItemIconSize"] =
              double.Parse(App.AppSettings.StyleSettings.ResultsList.ListItems.ListItemIconSize);
        Application.Current.Resources["ListItemTextMargin"] =
              SettingParsers.parseThicknessSetting(
                App.AppSettings.StyleSettings.ResultsList.ListItems.ListItemTextMargin);
        Application.Current.Resources["ListItemNameFont"] =
          new FontFamily(App.AppSettings.StyleSettings.ResultsList.ListItems.ListItemNameFont);
        Application.Current.Resources["ListItemNameSize"] =
          double.Parse(App.AppSettings.StyleSettings.ResultsList.ListItems.ListItemNameSize);
        Application.Current.Resources["ListItemNameColor"] =
          new BrushConverter().ConvertFromString(
            App.AppSettings.StyleSettings.ResultsList.ListItems.ListItemNameColor);
        Application.Current.Resources["ListItemDescFont"] =
          new FontFamily(App.AppSettings.StyleSettings.ResultsList.ListItems.ListItemDescFont);
        Application.Current.Resources["ListItemDescSize"] =
          double.Parse(App.AppSettings.StyleSettings.ResultsList.ListItems.ListItemDescSize);
        Application.Current.Resources["ListItemDescColor"] =
          new BrushConverter().ConvertFromString(
            App.AppSettings.StyleSettings.ResultsList.ListItems.ListItemDescColor);

      } catch (Exception) { issueEncountered = true; }
      if (issueEncountered) {
        MessageBox.Show("One or more of your settings did not apply correctly");
      }
    }
  }
}
