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

namespace Quokka {
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    
    public partial class SearchWindow : Window {

        private String query;
        private static List<ListItem> ListOfResults { set; get; }

        //private static List<>

        public SearchWindow() {

            //Escape key to close window
            RoutedCommand ExitWindow = new RoutedCommand();
            ExitWindow.InputGestures.Add(new KeyGesture(Key.Escape));
            CommandBindings.Add(new CommandBinding(ExitWindow, Exit));

            InitializeComponent();

            //Dynamic widths, heights and margins & hiding results box
            ResultsBox.Visibility = Visibility.Hidden;
            EntryField.Width = System.Windows.SystemParameters.PrimaryScreenWidth / 2;
            ResultsBox.Width = System.Windows.SystemParameters.PrimaryScreenWidth / 2;
            ResultsBox.MaxHeight = System.Windows.SystemParameters.PrimaryScreenHeight / 3;
            //Window Margins
            System.Windows.Thickness WindowMarginThickness = new Thickness(); WindowMarginThickness.Bottom = 0; WindowMarginThickness.Left = 0; WindowMarginThickness.Right = 0;
            WindowMarginThickness.Top = (double)(System.Windows.SystemParameters.PrimaryScreenHeight / 3);
            SearchWindowGrid.Margin = WindowMarginThickness;

            //Enter key to choose item
            RoutedCommand ExecuteItemCommand = new RoutedCommand();
            ExecuteItemCommand.InputGestures.Add(new KeyGesture(Key.Enter));
            CommandBindings.Add(new CommandBinding(ExecuteItemCommand, listItem_Click));

            //Focusing Search Bar
            EventManager.RegisterClassHandler(typeof(Window), Window.LoadedEvent, new RoutedEventHandler(WindowLoaded));
        }

        private void onQueryChange(object sender, RoutedEventArgs e){
            System.Windows.Controls.TextBox textBox = sender as System.Windows.Controls.TextBox;
            query = textBox.Text;
            ListOfResults = new List<ListItem>();
            if (query == "") {
                ResultsBox.Visibility = Visibility.Hidden; return;
            } else if (query == "AllApps") {
                ListOfResults = App.ListOfSystemApps;
            } else {
                //filtering apps
                foreach (ListItem app in App.ListOfSystemApps) {
                    if (app.name.Contains(query, StringComparison.OrdinalIgnoreCase)) ListOfResults.Add(app);
                }
                //grab other item types from plugins - already filtered
                try {
                    foreach (IPlugger plugin in App.plugins) {
                        foreach (ListItem item in plugin.GetPlugger(query)) ListOfResults.Add(item);
                    }
                } catch (Exception ex) {
                System.Windows.MessageBox.Show(ex.Message + "\n" + ex.StackTrace, "Internal Error", MessageBoxButton.OK, MessageBoxImage.Error);
                }
                //Check if items were shown
                if (ListOfResults.Count == 0) ListOfResults.Add(new NoListItem());
            }
            ResultsListView.ItemsSource = ListOfResults;
            ResultsBox.Visibility = Visibility.Visible;
        }

        //In search field, check if Down or Up so that ListView items can be selected
        private void SearchTermTextBox_KeyDown(object sender, System.Windows.Input.KeyEventArgs e) {
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
