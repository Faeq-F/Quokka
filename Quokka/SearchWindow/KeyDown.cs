using Quokka.ListItems;
using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;

namespace Quokka
{

  public partial class SearchWindow : Window, IDisposable
  {
    private void SearchTermTextBox_KeyDown(object sender, System.Windows.Input.KeyEventArgs e)
    {

      //If the ContextPane is open - focus the actions list
      if (ContextPane.Visibility == Visibility.Visible)
      {
        ((Page)ContextPane.Content).MoveFocus(new TraversalRequest(FocusNavigationDirection.First));
        return;
      }

      switch (e.Key)
      {

        case Key.Down:
          {
            if ((ResultsListView.SelectedIndex == -1))
            {
              ResultsListView.SelectedIndex = 1; // select second item if on search bar
            }
            else if (ResultsListView.SelectedIndex == ResultsListView.Items.Count - 1)
            {
              ResultsListView.SelectedIndex = 0; // select first item if at last item
            }
            else
            {
              ResultsListView.SelectedIndex++; // select next item
            }
            ResultsListView.ScrollIntoView(ResultsListView.SelectedItem);
            break;
          }

        case Key.Up:
          {
            if ((ResultsListView.SelectedIndex == -1) || (ResultsListView.SelectedIndex == 0))
            {
              // select last item if on search bar or at first item
              ResultsListView.SelectedIndex = ResultsListView.Items.Count - 1;
            }
            else
            {
              ResultsListView.SelectedIndex--; // select prev. item
            }
            ResultsListView.ScrollIntoView(ResultsListView.SelectedItem);
            break;
          }

        case var value when value == (System.Windows.Input.Key)App.Current.Resources["ContextPaneKey"]:
          {

            if (!string.IsNullOrEmpty(query))
            {
              if (ContextPane.Visibility == Visibility.Visible)
              {
                ContextPane.Visibility = Visibility.Collapsed; // close frame
              }
              else
              {

                //find which plugin's frame to open
                if ((ResultsListView.SelectedIndex == -1)) ResultsListView.SelectedIndex = 0;
                string PluginName = ResultsListView.SelectedItem.GetType().Namespace.ToString();

                // open that plugin's frame
                if (PluginName == "Quokka.TheQuokkaPlugin")
                {
                  SelectedItem = (ResultsListView.SelectedItem as ListItem)!;
                  ContextPane.Navigate(new Uri("/Quokka;component/thequokkaplugin/contextpane.xaml", UriKind.Relative));
                  ContextPane.Visibility = Visibility.Visible;

                }
                else if (PluginName != "Quokka.ListItems" && App.hasContextPane[PluginName] == true)
                {
                  SelectedItem = (ResultsListView.SelectedItem as ListItem)!;
                  ContextPane.Navigate(new Uri("pack://application:,,,/" + PluginName + ";component/ContextPane.xaml"));
                  ContextPane.Visibility = Visibility.Visible;
                }
              }
            }
            break;
          }

        case Key.Left:
          {
            ListBoxItem CurrentListBoxItem = (ListBoxItem)
              ResultsListView.ItemContainerGenerator.ContainerFromItem(ResultsListView.Items.CurrentItem);

            if (CurrentListBoxItem != null)
            {
              // Getting the ContentPresenter of CurrentListBoxItem
              ContentPresenter? ListBoxItemContentPresenter = FindVisualChild<ContentPresenter>(CurrentListBoxItem);

              if (ListBoxItemContentPresenter != null)
              {
                // Finding the scroll viewer from the DataTemplate that is set on that ContentPresenter
                DataTemplate ListBoxItemDataTemplate = ListBoxItemContentPresenter.ContentTemplate;
                ScrollViewer ListBoxItemScrollViewer = (ScrollViewer)ListBoxItemDataTemplate.FindName("ListItemScrollViewer", ListBoxItemContentPresenter);

                //scrolling the item
                if (ListBoxItemScrollViewer.HorizontalOffset != 0)
                {
                  ListBoxItemScrollViewer.ScrollToHorizontalOffset(
                    ListBoxItemScrollViewer.HorizontalOffset - (double)App.Current.Resources["HorizontalScrollIncrementingWidth"]);
                }
                else { return; }
              }
              else { return; }
            }
            else { return; }
            break;
          }

        case Key.Right:
          {
            ListBoxItem CurrentListBoxItem = (ListBoxItem)
              ResultsListView.ItemContainerGenerator.ContainerFromItem(ResultsListView.Items.CurrentItem);

            if (CurrentListBoxItem != null)
            {
              // Getting the ContentPresenter of CurrentListBoxItem
              ContentPresenter? ListBoxItemContentPresenter = FindVisualChild<ContentPresenter>(CurrentListBoxItem);

              if (ListBoxItemContentPresenter != null)
              {
                // Finding the scroll viewer from the DataTemplate that is set on that ContentPresenter
                DataTemplate ListBoxItemDataTemplate = ListBoxItemContentPresenter.ContentTemplate;
                ScrollViewer ListBoxItemScrollViewer = (ScrollViewer)ListBoxItemDataTemplate.FindName("ListItemScrollViewer", ListBoxItemContentPresenter);

                //scrolling the item
                if (ListBoxItemScrollViewer.HorizontalOffset != ListBoxItemScrollViewer.ScrollableWidth)
                {
                  ListBoxItemScrollViewer.ScrollToHorizontalOffset(
                    ListBoxItemScrollViewer.HorizontalOffset + (double)App.Current.Resources["HorizontalScrollIncrementingWidth"]);

                }
                else { return; }
              }
              else { return; }
            }
            else { return; }
            break;
          }

        default: return; //e is not handled - normal activity occurs
      }
      e.Handled = true;
    }

    private childItem? FindVisualChild<childItem>(DependencyObject obj)
    where childItem : DependencyObject
    {
      for (int i = 0; i < VisualTreeHelper.GetChildrenCount(obj); i++)
      {
        DependencyObject child = VisualTreeHelper.GetChild(obj, i);
        if (child != null && child is childItem item)
        {
          return item;
        }
        else
        {
          if (child != null)
          {
            childItem? childOfChild = FindVisualChild<childItem>(child);
            if (childOfChild != null)
              return childOfChild;
          }
        }
      }
      return null;
    }
  }

}
