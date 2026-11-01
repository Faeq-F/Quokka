using Quokka.ListItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using Keys = System.Windows.Forms.Keys;

namespace Quokka.TheQuokkaPlugin
{
  /// <summary>
  /// Represents the context pane displayed when selecting the PlugBoard list item.
  /// </summary>
  public partial class PlugBoardContextPane : ItemContextPane
  {
    /// <summary>
    /// Initializes a new instance of the <see cref="PlugBoardContextPane"/> class.
    /// </summary>
    public PlugBoardContextPane()
    {
      InitializeComponent();
      LoadPlugins();
    }

    private void LoadPlugins()
    {
      if (App.Plugins is null)
      {
        return;
      }

      string plugBoardDir = System.IO.Path.Combine(Environment.CurrentDirectory, "PlugBoard");

      List<PlugBoardPluginItem> items = new();
      foreach (PluginArch.Plugin p in App.Plugins)
      {
        if (p is PluginQuokka)
        {
          continue;
        }

        string pluginFolder = "Plugin" + p.PluginName;
        string settingsPath = System.IO.Path.Combine(plugBoardDir, pluginFolder, "Plugin", "settings.json");
        bool hasSettings = System.IO.File.Exists(settingsPath);

        items.Add(new PlugBoardPluginItem
        {
          PluginName = p.PluginName,
          PluginIcon = p.PluginIcon,
          HasSettings = hasSettings,
          PluginFolder = pluginFolder
        });
      }

      ButtonsListView.ItemsSource = items;
    }

    /// <summary>
    /// Handles keyboard navigation within the PlugBoard context pane.
    /// </summary>
    /// <param name="sender">The event source.</param>
    /// <param name="e">The key event args.</param>
    protected override void PageKeyDown(object sender, KeyEventArgs e)
    {
      if (e != null)
      {
        switch (e.Key)
        {
          case Key.Enter:
            if (Keyboard.FocusedElement is Button focusedBtn)
            {
              focusedBtn.RaiseEvent(new RoutedEventArgs(System.Windows.Controls.Primitives.ButtonBase.ClickEvent));
            }
            else
            {
              if (ButtonsListView.SelectedIndex == -1 && ButtonsListView.Items.Count > 0)
              {
                ButtonsListView.SelectedIndex = 0;
              }

              if (ButtonsListView.SelectedItem is PlugBoardPluginItem selected)
              {
                App.OpenPluginFolder(selected.PluginFolder);
                Application.Current.MainWindow.Close();
              }
            }
            break;

          case Key.Left:
          case Key.Right:
            if (ButtonsListView.SelectedItem != null &&
                ButtonsListView.ItemContainerGenerator.ContainerFromItem(ButtonsListView.SelectedItem) is ListViewItem container)
            {
              List<Button> buttons = FindVisualChildren<Button>(container).Where(b => b.IsVisible).ToList();
              if (buttons.Count > 0)
              {
                int currentIdx = buttons.FindIndex(b => b.IsFocused);
                if (currentIdx == -1)
                {
                  buttons[0].Focus();
                }
                else if (e.Key == Key.Right)
                {
                  int nextIdx = (currentIdx + 1) % buttons.Count;
                  buttons[nextIdx].Focus();
                }
                else if (e.Key == Key.Left)
                {
                  int prevIdx = (currentIdx - 1 + buttons.Count) % buttons.Count;
                  buttons[prevIdx].Focus();
                }
              }
            }
            break;

          case Key.Down:
            if (ButtonsListView.SelectedIndex is -1)
            {
              ButtonsListView.SelectedIndex = 0;
            }
            else if (ButtonsListView.SelectedIndex == ButtonsListView.Items.Count - 1)
            {
              ButtonsListView.SelectedIndex = 0;
            }
            else
            {
              ButtonsListView.SelectedIndex++;
            }
            ButtonsListView.ScrollIntoView(ButtonsListView.SelectedItem);
            break;

          case Key.Up:
            if (ButtonsListView.SelectedIndex is -1 or 0)
            {
              ButtonsListView.SelectedIndex = ButtonsListView.Items.Count - 1;
            }
            else
            {
              ButtonsListView.SelectedIndex--;
            }
            ButtonsListView.ScrollIntoView(ButtonsListView.SelectedItem);
            break;

          case var value when value == KeyInterop.KeyFromVirtualKey((int)(Keys)Application.Current.Resources["ContextPaneKey"]):
            ReturnToSearch();
            break;

          default:
            return;
        }
        e.Handled = true;
      }
    }

    private static IEnumerable<T> FindVisualChildren<T>(DependencyObject depObj) where T : DependencyObject
    {
      if (depObj != null)
      {
        for (int i = 0; i < System.Windows.Media.VisualTreeHelper.GetChildrenCount(depObj); i++)
        {
          DependencyObject child = System.Windows.Media.VisualTreeHelper.GetChild(depObj, i);
          if (child is T t)
          {
            yield return t;
          }

          foreach (T childOfChild in FindVisualChildren<T>(child))
          {
            yield return childOfChild;
          }
        }
      }
    }

    private void OpenFolder_Click(object sender, RoutedEventArgs e)
    {
      if (sender is Button btn && btn.Tag is string pluginName)
      {
        string folderName = "Plugin" + pluginName;
        App.OpenPluginFolder(folderName);
        Application.Current.MainWindow.Close();
      }
    }

    private void OpenSettings_Click(object sender, RoutedEventArgs e)
    {
      if (sender is Button btn && btn.Tag is string pluginName)
      {
        string folderName = "Plugin" + pluginName;
        App.OpenPluginSettingsFile(folderName);
        Application.Current.MainWindow.Close();
      }
    }
  }

  /// <summary>
  /// Represents a plugin item listed in the PlugBoard context pane.
  /// </summary>
  public class PlugBoardPluginItem
  {
    /// <summary>
    /// Gets or sets the plugin name.
    /// </summary>
    public string PluginName { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the plugin folder name.
    /// </summary>
    public string PluginFolder { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the plugin icon image source.
    /// </summary>
    public System.Windows.Media.ImageSource? PluginIcon { get; set; }

    /// <summary>
    /// Gets or sets a value indicating whether the plugin has a settings.json file.
    /// </summary>
    public bool HasSettings { get; set; }
  }
}
