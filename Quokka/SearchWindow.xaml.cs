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

        String query;

        public SearchWindow() {

            //Escape key to close window
            RoutedCommand ExitWindow = new RoutedCommand();
            ExitWindow.InputGestures.Add(new KeyGesture(Key.Escape));
            CommandBindings.Add(new CommandBinding(ExitWindow, Exit));

            InitializeComponent();

            //Dynamic widths & hiding results box
            ResultsBox.Visibility = Visibility.Hidden;
            EntryField.Width = System.Windows.SystemParameters.PrimaryScreenWidth / 2;
            ResultsBox.Width = System.Windows.SystemParameters.PrimaryScreenWidth / 2;

            //Setting source of results and adding filter
            ResultsListView.ItemsSource = App.ListOfSystemApps;
            CollectionView view = (CollectionView)CollectionViewSource.GetDefaultView(ResultsListView.ItemsSource);
            view.Filter = ResultsFilter;

        }

        private bool ResultsFilter(object item)
        {
            if (String.IsNullOrEmpty(SearchTermTextBox.Text))
                return true;
            else
                return ((item as SystemApp).name.IndexOf(SearchTermTextBox.Text, StringComparison.OrdinalIgnoreCase) >= 0);
        }

        private void onQueryChange(object sender, RoutedEventArgs e){
            System.Windows.Controls.TextBox textBox = sender as System.Windows.Controls.TextBox;
            query = textBox.Text;
            if (query == "") {
                ResultsBox.Visibility = Visibility.Hidden;
            }
            else if (query == "AllApps") {
                CollectionViewSource.GetDefaultView(ResultsListView.ItemsSource).Filter = null;
                CollectionViewSource.GetDefaultView(ResultsListView.ItemsSource).Refresh();
                ResultsBox.Visibility = Visibility.Visible;
            }
            else {
                CollectionViewSource.GetDefaultView(ResultsListView.ItemsSource).Filter = ResultsFilter;
                CollectionViewSource.GetDefaultView(ResultsListView.ItemsSource).Refresh();
                ResultsBox.Visibility = Visibility.Visible;
            }
        }

        private void Exit(object sender, ExecutedRoutedEventArgs e) {
            this.Close();
        }

    }


}
