using Quokka;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using static PInvoke.Kernel32;

namespace Plugin_InstalledApps {
    /// <summary>
    /// Interaction logic for ContextPane.xaml
    /// </summary>
    public partial class ContextPane : Page {

        private InstalledAppsItem Item;

        public ContextPane() {
            InitializeComponent();
            try{
                this.Item = (InstalledAppsItem?)(Application.Current.MainWindow as SearchWindow).SelectedItem;
            } catch(InvalidCastException ex){//Used to handle the AllAppsItem
                (Application.Current.MainWindow as SearchWindow).contextPane.Visibility = Visibility.Collapsed;
                (Application.Current.MainWindow as SearchWindow).searchBox.Focus();
                //makes showing a new pane more reliable
                (Application.Current.MainWindow as SearchWindow).contextPane.Source = null;
                
                //Process.Start("ms-settings:appsfeatures");
                App.Current.MainWindow.Close();
                return;
            }
            DetailsImage.Source = this.Item.icon;
            NameText.Text = Item.name;
            DescText.Text = Item.description;
        }

        private void openApp(object sender, RoutedEventArgs e) {
            Item.execute();
        }

        private void RunAsAdmin(object sender, RoutedEventArgs e) {
            Process proc = new Process();
            proc.StartInfo.FileName = "explorer";
            proc.StartInfo.Arguments = @" shell:appsFolder\" + Item.description;
            proc.StartInfo.UseShellExecute = true;
            proc.StartInfo.Verb = "runas";
            proc.Start();
            App.Current.MainWindow.Close();
        }

        private void openContainingFolder(object sender, RoutedEventArgs e) {
            using Process folderopener = new Process();
            folderopener.StartInfo.FileName = "explorer";
            folderopener.StartInfo.Arguments = Item.path.Remove(Item.path.LastIndexOf('\\'));
            folderopener.Start();
        }

        private void Page_KeyDown(object sender, KeyEventArgs e) {
            ButtonsListView.Focus();
            switch (e.Key) {
                case Key.Enter:
                    if ((ButtonsListView.SelectedIndex == -1)) ButtonsListView.SelectedIndex = 0;
                    Button currentButton = (ButtonsListView.SelectedItem as Button);
                    currentButton.RaiseEvent(new RoutedEventArgs(Button.ClickEvent));
                    break;
                case Key.Down:
                    if ((ButtonsListView.SelectedIndex == -1)) {
                        ButtonsListView.SelectedIndex = 1;
                    } else if (ButtonsListView.SelectedIndex == ButtonsListView.Items.Count - 1) {
                        ButtonsListView.SelectedIndex = 0;
                    } else {
                        ButtonsListView.SelectedIndex++;
                    }
                    ButtonsListView.ScrollIntoView(ButtonsListView.SelectedItem);
                    break;
                case Key.Up:
                    if ((ButtonsListView.SelectedIndex == -1) || (ButtonsListView.SelectedIndex == 0)) {
                        ButtonsListView.SelectedIndex = ButtonsListView.Items.Count - 1;
                    } else {
                        ButtonsListView.SelectedIndex--;
                    }
                    ButtonsListView.ScrollIntoView(ButtonsListView.SelectedItem);
                    break;
                case Key.Apps: //This is the menu key
                    (Application.Current.MainWindow as SearchWindow).contextPane.Visibility = Visibility.Collapsed;
                    (Application.Current.MainWindow as SearchWindow).searchBox.Focus();
                    //makes showing a new pane more reliable
                    (Application.Current.MainWindow as SearchWindow).contextPane.Source = null;
                    break;
                default:
                    return;
            }
            e.Handled = true;
        }
    }
}