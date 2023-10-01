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
            ApplyAppSettings();
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
            DetailsImage.Source = Item.icon;
            NameText.Text = Item.name;
            DescText.Text = Item.description;
            ExtraDetails.Text = Item.extraDetails;
        }

        private void openApp(object sender, RoutedEventArgs e) {
            Item.execute();
        }

        //still does not work
        private void RunAsAdmin(object sender, RoutedEventArgs e) {

            //Public domain; no attribution required.
            const int ERROR_CANCELLED = 1223; //The operation was canceled by the user.

            ProcessStartInfo info = new ProcessStartInfo("explorer");
            info.Arguments = @" shell:appsFolder\" + Item.description;
            info.UseShellExecute = true;
            info.Verb = "runas";
            info.CreateNoWindow = true;
            try {
                Process.Start(info);
            } catch (System.ComponentModel.Win32Exception ex) {
                if (!(ex.NativeErrorCode == ERROR_CANCELLED)) throw;
            }
            App.Current.MainWindow.Close();
        }

        private void openContainingFolder(object sender, RoutedEventArgs e) {
            using Process folderopener = new Process();
            folderopener.StartInfo.FileName = "explorer";
            folderopener.StartInfo.Arguments = Item.path.Remove(Item.path.LastIndexOf('\\'));
            folderopener.Start();
            App.Current.MainWindow.Close();
        }

        private void Page_KeyDown(object sender, KeyEventArgs e) {
            ButtonsListView.Focus();
            switch (e.Key) {
                case Key.Enter:
                    if ((ButtonsListView.SelectedIndex == -1)) ButtonsListView.SelectedIndex = 0;
                    Grid CurrentItem = ButtonsListView.SelectedItem as Grid;
                    Button CurrentButton = (CurrentItem.Children[1] as Grid).Children[0] as Button;
                    CurrentButton.RaiseEvent(new RoutedEventArgs(Button.ClickEvent));
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

    private void ApplyAppSettings(){
/*
            "ContextPane": {

                "BorderColor": "Black",
                    "BorderThickness": "2",
                    "CornerRounding": "15",
                    "Background": "White",
                    "MinHeight": "64",

                    "Details": {

                    "ContentMargin": "0, 0, 0, 0",
                        "ContentVerticalAlignment": "Center",
                        "ContentHorizontalAlignment": "Center",
                        "ImageMargin": "40,50,40,20",
                        "TextColor": "Black",
                        "TextSize": "16",
                        "FontFamily": "Cascadia Code",
                        "TextLineMargin": "0,0,0,0"

                    },

                    "List": {

                    "ListMargin": "10,10,0,10",
                        "ContentHorizontalAlignment": "Left",
                        "ButtonContentMargin": "10",

                        "ListItems": {

                        "ListItemBorderThickness": "3",
                            "ListItemHoverBorderColor": "Black",
                            "ListItemHoverBgColor": "LightGray",
                            "ListItemSelectedBorderColor": "Black",
                            "ListItemSelectedBgColor": "White",
                            "ListItemRounding": "15",
                            "ListItemMargin": "0, 0, 10, 0",

                            "ListItemIconSize": "15",
                            "ListItemIconMargin": "0,0,-5,0",
                            "ListItemTextPadding": "10",
                            "ListItemFont": "Cascadia Code",
                            "ListItemSize": "12",
                            "ListItemColor": "Black"*/
        }
    }
}