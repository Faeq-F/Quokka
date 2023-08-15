using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Windows.Input;
using System.Diagnostics;
using Quokka.Plugger.Contracts;
using System.Configuration;
using System.IO;
using System.Reflection;
using System.Drawing;
using System.Windows.Media.Imaging;
using System.Windows.Controls;
using System.Globalization;
using System.Windows.Data;
using System.ComponentModel;
using System.Xml.Schema;

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

        public static string StyleSettingSearchFieldFont { get; set; }

        public SearchWindow() {

            InitializeComponent();

            StyleSettingSearchFieldFont = App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldFont;
            //SearchTermTextBox.FontFamily = new System.Windows.Media.FontFamily(App.AppSettings.StyleSettings.SearchBar.EntryField.SearchFieldFont);

            SearchIcon.Source = new BitmapImage(new Uri(
                Environment.CurrentDirectory + "\\Config\\Resources\\SearchIcon.png"));

            //Dynamic widths, heights and margins & hiding results box & Context pane
            ResultsBox.Visibility = Visibility.Collapsed;
            ContextPane.Visibility = Visibility.Collapsed;
            Container.Width = System.Windows.SystemParameters.PrimaryScreenWidth / 2;
            Container.Height = SearchWindowGrid.Height;// This will not be a setting
            ResultsBox.MaxHeight = (System.Windows.SystemParameters.PrimaryScreenHeight / 2) - 234;
            //set to same as above
            ContextPane.MaxHeight = (System.Windows.SystemParameters.PrimaryScreenHeight / 2) - 234;
            
            //Window Margins
            System.Windows.Thickness WindowMarginThickness = new Thickness(); WindowMarginThickness.Bottom = 0;
            WindowMarginThickness.Left = 0; WindowMarginThickness.Right = 0;
            WindowMarginThickness.Top = (double)(System.Windows.SystemParameters.PrimaryScreenHeight / 3);
            Container.Margin = WindowMarginThickness;

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

        private void onQueryChange(object sender, RoutedEventArgs e){
            if (ContextPane.Visibility == Visibility.Visible) ContextPane.Visibility = Visibility.Collapsed;
            System.Windows.Controls.TextBox textBox = sender as System.Windows.Controls.TextBox;
            query = textBox.Text;
            ListOfResults = new List<ListItem>();
            //getting results for query
            if (query == "") { ResultsBox.Visibility = Visibility.Collapsed; return;
            } else {
                try {
                    foreach (IPlugger plugin in App.plugins) {
                        //checking special commands
                        foreach (string specialCommand in plugin.SpecialCommands()){
                            if (specialCommand.Equals(query)) {
                                ListOfResults = plugin.OnSpecialCommand(query);
                                goto ResultsAreReady;
                            }
                        }
                        //grab plugin items
                        foreach (ListItem item in plugin.OnQueryChange(query)) ListOfResults.Add(item);
                    }
                } catch (Exception ex) {
                    System.Windows.MessageBox.Show(ex.Message + "\n" + ex.StackTrace, "Internal Error", MessageBoxButton.OK, MessageBoxImage.Error);
                }
                ResultsAreReady:
                //Check if items were shown
                if (ListOfResults.Count == 0) ListOfResults.Add(new NoListItem());
            }
            ResultsListView.ItemsSource = ListOfResults;
            ResultsListView.SelectedIndex = -1;
            ResultsBox.Visibility = Visibility.Visible;
        }

        //In search field, check if Down or Up so that ListView items can be selected & check menu key for ContextPane
        private void SearchTermTextBox_KeyDown(object sender, System.Windows.Input.KeyEventArgs e) {
            if (ContextPane.Visibility == Visibility.Visible){
                ((Page)ContextPane.Content).MoveFocus(new TraversalRequest(FocusNavigationDirection.First));
                return;
            }
            switch (e.Key) {
                case Key.Down:
                    if ((ResultsListView.SelectedIndex == -1)) {
                        ResultsListView.SelectedIndex = 1;
                    } else if (ResultsListView.SelectedIndex == ResultsListView.Items.Count - 1) {
                        ResultsListView.SelectedIndex = 0;
                    } else {
                        ResultsListView.SelectedIndex++;
                    }
                    ResultsListView.ScrollIntoView(ResultsListView.SelectedItem);
                    break;
                case Key.Up:
                    if ((ResultsListView.SelectedIndex == -1) || (ResultsListView.SelectedIndex == 0)) {
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
                            if ((ResultsListView.SelectedIndex == -1)) ResultsListView.SelectedIndex = 0;
                            string PluginName = ResultsListView.SelectedItem.GetType().Namespace.ToString();
                            if (PluginName != "Quokka") {
                                SelectedItem = (ResultsListView.SelectedItem as ListItem);
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
                if (ResultsListView.SelectedIndex > -1) (ResultsListView.SelectedItem as ListItem).execute();
                else (ResultsListView.Items.GetItemAt(0) as ListItem).execute();
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

        


    }

}
