﻿using Quokka;
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

namespace Plugin_TypedText {
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
    }
}