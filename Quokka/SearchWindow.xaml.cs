using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Windows.Input;
using Quokka.Plugger.Contracts;
using System.Windows.Controls;
using System.Windows.Media;
using Quokka.Settings;

namespace Quokka
{
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

      ApplyAppSettings();

      //run anything needed for plugins on window startup
      try {
        foreach (IPlugger plugin in App.plugins) {
          plugin.OnSearchWindowStartup();
        }
      } catch (Exception ex) {
        System.Windows.MessageBox.Show(ex.Message + "\n" + ex.StackTrace, "Internal Error", MessageBoxButton.OK, MessageBoxImage.Error);
      }

      //Escape key to close window
      RoutedCommand ExitWindow = new RoutedCommand();
      ExitWindow.InputGestures.Add(new KeyGesture(Key.Escape));
      CommandBindings.Add(new CommandBinding(ExitWindow, Exit));

      //Enter key to choose item
      RoutedCommand ExecuteItemCommand = new RoutedCommand();
      ExecuteItemCommand.InputGestures.Add(new KeyGesture(Key.Enter));
      CommandBindings.Add(new CommandBinding(ExecuteItemCommand, listItem_Click));

      //fields needed for context pane
      searchBox = SearchTermTextBox;
      contextPane = ContextPane;
      //Focusing Search Bar
      EventManager.RegisterClassHandler(typeof(Window), Window.LoadedEvent, new RoutedEventHandler(WindowLoaded));
    }

    private void onQueryChange(object sender, RoutedEventArgs e) {
      bool IgnoreMaxResults = false;
      //reset view of list
      ResultsListView.SelectedIndex = 0;
      ResultsListView.ScrollIntoView(ResultsListView.SelectedItem);
      // Close context pane if it was used
      if (ContextPane.Visibility == Visibility.Visible) ContextPane.Visibility = Visibility.Collapsed;
      //get text from sender
      System.Windows.Controls.TextBox textBox = sender as System.Windows.Controls.TextBox;
      query = textBox.Text;
      if (query.EndsWith(App.AppSettings.GeneralSettings.IgnoreMaxResultsFlag)) {
        query = query.Remove(query.Length - App.AppSettings.GeneralSettings.IgnoreMaxResultsFlag.Length);
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
            foreach (ListItem item in plugin.OnQueryChange(query)) ListOfResults.Add(item);
          }
        } catch (Exception ex) {
          System.Windows.MessageBox.Show(ex.Message + "\n" + ex.StackTrace, "Internal Error", MessageBoxButton.OK, MessageBoxImage.Error);
        }
        //sort by relevance
        ListOfResults = ListOfResults.OrderByDescending(x => ( x.name.ToLower().StartsWith(query.ToLower()) )).ThenByDescending(x => ( x.name.ToLower().Contains(query.ToLower()) )).ToList();
        //Check if items were shown
        if (ListOfResults.Count == 0) ListOfResults.Add(new NoListItem());
        //use MaxResults setting
        if (!IgnoreMaxResults)
          ResultsListView.ItemsSource = ListOfResults.Take(int.Parse(App.AppSettings.GeneralSettings.MaxResults));
        else ResultsListView.ItemsSource = ListOfResults;
      }
      ResultsAreReady:
      ResultsListView.SelectedIndex = -1;
      ResultsBox.Visibility = Visibility.Visible;
    }

    //In search field, check if Down or Up so that ListView items can be selected & check menu key for ContextPane
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
                SelectedItem = ( ResultsListView.SelectedItem as ListItem );
                contextPane.Source = null;
                ContextPane.Source = new Uri("pack://application:,,,/" + PluginName + ";component/ContextPane.xaml");
                ContextPane.Visibility = Visibility.Visible;
              }
            }
          }
          break;
        default:
          return; //e is not handled - normal activity occurs (e.g. escape closes window, letters are typed, etc.)
      }
      e.Handled = true;
    }

    private void listItem_Click(object sender, RoutedEventArgs e) {
      if (ResultsListView != null) {
        if (ResultsListView.SelectedIndex > -1) ( ResultsListView.SelectedItem as ListItem ).execute();
        else ( ResultsListView.Items.GetItemAt(0) as ListItem ).execute();
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
      window.Dispatcher.Invoke(
      new Action(() => {
        window.MoveFocus(new TraversalRequest(FocusNavigationDirection.First));

      }));
    }

    private void ApplyAppSettings() {
      bool issueEncountered = false;

      ResultsBox.Visibility = Visibility.Collapsed;
      ContextPane.Visibility = Visibility.Collapsed;
      //need to handle errors


      //Style st = new Style(typeof(RepeatButton));
      //st.Setters.Add(new Setter(Control.BackgroundProperty, "Blue"));

      //var ScrollBarResourceDictionary = new ResourceDictionary();
      //ScrollBarResourceDictionary.Source = new Uri("Scrollbar.xaml", UriKind.RelativeOrAbsolute);
      //Style ScrollBarPageButton = ScrollBarResourceDictionary["ScrollBarPageButton"] as Style;

      //App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldFont;
      try {

      } catch (Exception) { issueEncountered = true; }

      //ResultsBox.MaxHeight = (System.Windows.SystemParameters.PrimaryScreenHeight / 2) - 234;
      //ContextPane.MaxHeight = ResultsBox.MaxHeight;


      //StyleSettings:

      //AppWindow:
      Application.Current.Resources["WindowTopMargin"] = SettingParsers.parseThicknessSetting("0,"+SettingParsers.parseScreenDimensionsSetting(App.AppSettings.StyleSettings.AppWindow.WindowTopMargin+",0,0"));
      Application.Current.Resources["WindowWidth"] = SettingParsers.parseScreenDimensionsSetting(App.AppSettings.StyleSettings.AppWindow.WindowWidth);
      Application.Current.Resources["WindowColor"] = new BrushConverter().ConvertFromString(App.AppSettings.StyleSettings.AppWindow.WindowColor) as SolidColorBrush;
      Application.Current.Resources["WindowBorderColor"] = new BrushConverter().ConvertFromString(App.AppSettings.StyleSettings.AppWindow.WindowBorderColor) as SolidColorBrush;
      Application.Current.Resources["WindowBorderThickness"] = SettingParsers.parseThicknessSetting(App.AppSettings.StyleSettings.AppWindow.WindowBorderThickness);
      Application.Current.Resources["WindowRounding"] = new CornerRadius(int.Parse(App.AppSettings.StyleSettings.AppWindow.WindowRounding));
      Application.Current.Resources["WindowPadding"] = SettingParsers.parseThicknessSetting(App.AppSettings.StyleSettings.AppWindow.WindowPadding);


      //"SearchBar":
      //"SearchBarColor": "White",
      EntryField.Background = new BrushConverter().ConvertFromString(App.AppSettings.StyleSettings.SearchBar.SearchBarColor) as SolidColorBrush;
      //"SearchBarRounding": "32",
      EntryField.CornerRadius = new CornerRadius(int.Parse(App.AppSettings.StyleSettings.SearchBar.SearchBarRounding));
      //"SearchBarBorderColor": "Black",
      EntryField.BorderBrush = new BrushConverter().ConvertFromString(App.AppSettings.StyleSettings.SearchBar.SearchBarBorderColor) as SolidColorBrush;

      //"SearchBarBorderSize": "2",
      Application.Current.Resources["SearchBarBorderSize"] = SettingParsers.parseThicknessSetting(App.AppSettings.StyleSettings.SearchBar.SearchBarBorderSize);

      //"SearchBarHeight": "64",
      EntryField.Height = double.Parse(App.AppSettings.StyleSettings.SearchBar.SearchBarHeight);


      //"SearchIconWidth": "64",
      SearchIcon.Width = int.Parse(App.AppSettings.StyleSettings.SearchBar.SearchIconWidth);
      //"SearchIcon": "\\Config\\Resources\\SearchIcon.png",


      //"EntryField":


      //"SearchFieldTxtColor": "Black",
      SearchTermTextBox.Foreground = new BrushConverter().ConvertFromString(App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldTxtColor) as SolidColorBrush;
      //"SearchFieldTxtSelColor": "Black",
      SearchTermTextBox.Foreground = new BrushConverter().ConvertFromString(App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldTxtSelColor) as SolidColorBrush;
      //"SearchFieldHeight": "50",
      SearchTermTextBox.Height = int.Parse(App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldHeight);
      //"SearchFieldWidth": "720",
      SearchTermTextBox.Width = int.Parse(App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldWidth);
      SearchTermTextBox.MinWidth = int.Parse(App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldWidth);

      //"SearchFieldMargin": "10",
      Application.Current.Resources["SearchFieldMargin"] = SettingParsers.parseThicknessSetting(App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldMargin);

      //"SearchFieldFont": "Cascadia Code",
      SearchTermTextBox.FontFamily = new System.Windows.Media.FontFamily(App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldFont);
      //"SearchFieldTxtSize": "24",
      SearchTermTextBox.FontSize = double.Parse(App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldTxtSize);


      //"SearchFieldPlaceholder": "Enter Query",
      SearchFieldPlaceholder.Text = App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldPlaceholder;

      //"SearchFieldPlaceholderMargin": "10",
      Application.Current.Resources["SearchFieldPlaceholderMargin"] = SettingParsers.parseThicknessSetting(App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldPlaceholderMargin);

      //"SearchFieldPlaceholderColor": "DarkGray",
      SearchFieldPlaceholder.Foreground = new BrushConverter().ConvertFromString(App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldPlaceholderColor) as SolidColorBrush;
      //"SearchFieldPlaceholderSize": "24",
      SearchFieldPlaceholder.FontSize = double.Parse(App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldPlaceholderSize);
      //"SearchFieldPlaceholderFont": "Cascadia Code"
      SearchFieldPlaceholder.FontFamily = new System.Windows.Media.FontFamily(App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldPlaceholderFont);



      //"ResultsList":
      //"Container":


      //"ListContainerMargin": "0,10,0,0",
      Application.Current.Resources["ListContainerMargin"] = SettingParsers.parseThicknessSetting(App.AppSettings.StyleSettings.ResultsList.Container.ListContainerMargin);


      //"ListContainerBorderColor": "Black",
      ResultsBox.BorderBrush = new BrushConverter().ConvertFromString(App.AppSettings.StyleSettings.ResultsList.Container.ListContainerBorderColor) as SolidColorBrush;

      //"ListContainerBorderThickness": "2",
      Application.Current.Resources["ListContainerBorderThickness"] = SettingParsers.parseThicknessSetting(App.AppSettings.StyleSettings.ResultsList.Container.ListContainerBorderThickness);

      //"ListContainerRounding": "15",
      ResultsBox.CornerRadius = new CornerRadius(int.Parse(App.AppSettings.StyleSettings.ResultsList.Container.ListContainerRounding));
      //"ListContainerColor": "White",
      ResultsBox.Background = new BrushConverter().ConvertFromString(App.AppSettings.StyleSettings.ResultsList.Container.ListContainerColor) as SolidColorBrush;

      //"ListContainerMinHeight": "64",
      ResultsBox.MinHeight = int.Parse(App.AppSettings.StyleSettings.ResultsList.Container.ListContainerMinHeight);



      //"List":
      //"ListMargin": "10,10,0,10"
      Application.Current.Resources["ListMargin"] = SettingParsers.parseThicknessSetting(App.AppSettings.StyleSettings.ResultsList.List.ListMargin);


      //"ListItems":
      //"ListItemBorderThickness": "3",
      Application.Current.Resources["ListItemBorderThickness"] = SettingParsers.parseThicknessSetting(App.AppSettings.StyleSettings.ResultsList.ListItems.ListItemBorderThickness);


      //ListItemBorderThickness
      //"ListItemHoverBorderColor": "Black",

      //"ListItemHoverBgColor": "LightGray",
      try {
        Application.Current.Resources["ListItemHoverBgColorAgain"] = new BrushConverter().ConvertFromString(App.AppSettings.StyleSettings.ResultsList.ListItems.ListItemHoverBgColor) as SolidColorBrush;
      } catch (Exception) { issueEncountered = true; }



      //"ListItemSelectedBorderColor": "Black",
      //"ListItemSelectedBgColor": "White",
      //"ListItemRounding": "15",
      //"ListItemMargin": "0, 0, 10, 0",
      //"ListItemIconSize": "50",
      //"ListItemTextMargin": "10",
      //"ListItemNameFont": "Cascadia Code",
      //"ListItemNameSize": "18",
      //"ListItemNameColor": "Black",
      //"ListItemDescFont": "Cascadia Code",
      //"ListItemDescSize": "12",
      //"ListItemDescColor": "Gray",

      //Container.Height = ResultsBox.MaxHeight + EntryField.Height;// This will not be a setting

      if (issueEncountered) {
        MessageBox.Show("One or more of your settings did not apply correctly");
      }
    }
  }
}
