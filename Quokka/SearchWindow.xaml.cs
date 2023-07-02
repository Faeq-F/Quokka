using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Interop;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Forms;
using System.Drawing;
using Microsoft.Win32;
using Microsoft.WindowsAPICodePack.Shell;
using static Microsoft.WindowsAPICodePack.Shell.PropertySystem.SystemProperties.System;
using System.ComponentModel;
using System.Windows.Forms.Integration;
using Microsoft.VisualBasic.ApplicationServices;

namespace Quokka {
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    
    public partial class SearchWindow : Window {

        private String query;
        private static List<ListItem> ListOfResults { set; get; }

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

            //Escape key to close window
            RoutedCommand ExecuteItemCommand = new RoutedCommand();
            ExitWindow.InputGestures.Add(new KeyGesture(Key.Enter));
            CommandBindings.Add(new CommandBinding(ExecuteItemCommand, listView_Click));

            SearchTermTextBox.Focus();
        }

        private void listView_Click(object sender, RoutedEventArgs e){
            if (ResultsListView != null){
                if(ResultsListView.SelectedItem != null) {
                    (ResultsListView.SelectedItem as ListItem).execute();
                    this.Close();
                }
            }
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
                //filter other item types

                //Check if items were shown
                if(ListOfResults.Count == 0) ListOfResults.Add(new NoListItem());
            }
            ResultsListView.ItemsSource = ListOfResults;
            ResultsBox.Visibility = Visibility.Visible;
        }

        private void Exit(object sender, ExecutedRoutedEventArgs e) {
            this.Close();
        }

    }


}
