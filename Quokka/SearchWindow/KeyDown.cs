using Quokka.ListItems;
using Quokka.TheQuokkaPlugin;
using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;
using XamlFlair;
using Keys = System.Windows.Forms.Keys;

namespace Quokka
{

#pragma warning disable CA2216 // SearchWindow does not allocate or hold unmanaged native pointers requiring a finalizer.
  public partial class SearchWindow : Window, IDisposable
#pragma warning restore CA2216
  {
    private async void SearchTermTextBox_KeyDown(object sender, KeyEventArgs e)
    {

      //If the ContextPane is open - focus the actions list
      if (ContextPane.Visibility == Visibility.Visible)
      {
        ((Page)ContextPane.Content).MoveFocus(new TraversalRequest(FocusNavigationDirection.First));
        return;
      }

      Key key = (e.Key == Key.ImeProcessed) ? e.ImeProcessedKey : e.Key; // fix needing to hit escape twice
      switch (key)
      {

        case Key.Escape:
          {
            Close();
            e.Handled = true;
            return;
          }

        case Key.Down:
          {
            if (ResultsListView.SelectedIndex == -1)
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
            if (ResultsListView.SelectedIndex is -1 or 0)
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

        case var value when value == KeyInterop.KeyFromVirtualKey((int)(Keys)Application.Current.Resources["ContextPaneKey"]):
          {

            if (!string.IsNullOrEmpty(query))
            {
              if (ContextPane.Visibility == Visibility.Visible)
              {
                await CloseContextPaneAsync().ConfigureAwait(true); // close frame asynchronously with exit animation
              }
              else
              {

                //find which plugin's frame to open
                if (ResultsListView.SelectedIndex == -1)
                {
                  ResultsListView.SelectedIndex = 0;
                }
                string PluginName = ResultsListView.SelectedItem!.GetType().Namespace!;

                // open that plugin's frame
                Uri? targetUri = null;
                if (ResultsListView.SelectedItem is PlugBoardItem)
                {
                  targetUri = new Uri("/Quokka;component/thequokkaplugin/plugboardcontextpane.xaml", UriKind.Relative);
                }
                else if (ResultsListView.SelectedItem is AboutQuokkaItem)
                {
                  targetUri = new Uri("/Quokka;component/thequokkaplugin/contextpane.xaml", UriKind.Relative);
                }
                else if (PluginName != "Quokka.ListItems" && App.HasContextPane[PluginName])
                {
                  targetUri = new Uri("pack://application:,,,/" + PluginName + ";component/ContextPane.xaml");
                }

                if (targetUri != null)
                {
                  SelectedItem = (ListItem)ResultsListView.SelectedItem;
                  ContextPane.Navigate(targetUri);

                  Animations.SetSecondaryBinding(ContextPane, false);
                  if (Application.Current.Resources["ContextPaneAnimation"] is AnimationSettings enterAnim)
                  {
                    Animations.SetPrimary(ContextPane, enterAnim);
                  }
                  ContextPane.Visibility = Visibility.Visible;
                  Animations.SetPrimaryBinding(ContextPane, false);
                  Animations.SetPrimaryBinding(ContextPane, true);
                }
              }
            }
            break;
          }

        case var value when value == KeyInterop.KeyFromVirtualKey((int)(Keys)Application.Current.Resources["ScrollLeftKey"]):
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
                    ListBoxItemScrollViewer.HorizontalOffset - (double)Application.Current.Resources["HorizontalScrollIncrementingWidth"]);
                }
                else { return; }
              }
              else { return; }
            }
            else { return; }
            break;
          }

        case var value when value == KeyInterop.KeyFromVirtualKey((int)(Keys)Application.Current.Resources["ScrollRightKey"]):
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
                    ListBoxItemScrollViewer.HorizontalOffset + (double)Application.Current.Resources["HorizontalScrollIncrementingWidth"]);

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
        if (child is childItem item)
        {
          return item;
        }
        else
        {
          if (child != null)
          {
            childItem? childOfChild = FindVisualChild<childItem>(child);
            if (childOfChild != null)
            {
              return childOfChild;
            }
          }
        }
      }
      return null;
    }
  }

}
