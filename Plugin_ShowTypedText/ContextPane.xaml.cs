﻿using Quokka;
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
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Wpf.Ui.Controls;

namespace Plugin_ShowTypedText {
    /// <summary>
    /// Interaction logic for ContextPane.xaml
    /// </summary>
    public partial class ContextPane : Page{

        private Quokka.ListItem Item;

        public ContextPane() {
            InitializeComponent();
            this.Item = (Application.Current.MainWindow as SearchWindow).SelectedItem;
            DetailsImage.Source = this.Item.icon;
            text.Text = Item.name;
        }

        private void CopyText(object sender, RoutedEventArgs e) {
            Item.execute(); //When enter is pressed on the item, it copies the text
        }

        private void Page_KeyDown(object sender, KeyEventArgs e) {
            ButtonsListView.Focus();
            switch (e.Key){
                case Key.Enter:
                    if ((ButtonsListView.SelectedIndex == -1)) ButtonsListView.SelectedIndex = 0;
                    Wpf.Ui.Controls.Button currentButton = (ButtonsListView.SelectedItem as Wpf.Ui.Controls.Button);
                    currentButton.RaiseEvent(new RoutedEventArgs(Wpf.Ui.Controls.Button.ClickEvent));
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
                    break;
                default:
                    return;
            }
            e.Handled = true;
        }
    }
}