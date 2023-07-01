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
            this.Width = System.Windows.SystemParameters.PrimaryScreenWidth;
            this.Height = System.Windows.SystemParameters.PrimaryScreenHeight;

            ResultsBox.Visibility = Visibility.Hidden;
            EntryField.Width = System.Windows.SystemParameters.PrimaryScreenWidth / 2;
            ResultsBox.Width = System.Windows.SystemParameters.PrimaryScreenWidth / 2;

        }

        private void onQueryChange(object sender, RoutedEventArgs e){
            System.Windows.Controls.TextBox textBox = sender as System.Windows.Controls.TextBox;
            query = textBox.Text;
            if (query == "") {
                ResultsBox.Visibility = Visibility.Hidden;
            }
            else {
                ResultsBox.Visibility = Visibility.Visible;
                ResultsText.Text = "Typed: " + query;
            }
        }

        private void Exit(object sender, ExecutedRoutedEventArgs e) {
            this.Close();
        }

    }


}
