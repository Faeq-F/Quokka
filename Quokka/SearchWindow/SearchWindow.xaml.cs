using Quokka.ListItems;
using Quokka.PluginArch;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using XamlFlair;
using static Quokka.Settings.SettingParsers;

namespace Quokka
{

  /// <summary>
  ///   The search window - interaction logic for SearchWindow.xaml.
  /// </summary>
#pragma warning disable CA2216 // SearchWindow does not allocate or hold unmanaged native pointers requiring a finalizer.
  public partial class SearchWindow : Window
#pragma warning restore CA2216
  {
    private bool _isClosing;

    /// <summary>
    ///   The frame in which context panes are displayed (used by ContextPanes).
    /// </summary>
    public Frame ContextPaneFrame => ContextPane;

    /// <summary>
    ///   The app settings (used by ContextPanes).
    /// </summary>
    public static ResourceDictionary ContextPaneSettingsDict => Application.Current.Resources;

    /// <summary>
    ///   The TextBox in which the user enters their query (used by ContextPanes).
    /// </summary>
    public TextBox SearchBox => SearchTermTextBox;

    /// <summary>
    ///   The currently selected ListItem (used by ContextPanes).
    /// </summary>
    public ListItem? SelectedItem
    {
      get;
      set;
    }

    /// <summary>
    /// Gets or sets the collection of list items resulting from the last query evaluation.
    /// </summary>
    private static Collection<ListItem>? ListOfResults { set; get; }

    private string query = "";

    /// <summary>
    ///   Constructs the search window, applies the relevant
    ///   app settings that were previously loaded on
    ///   AppStartup, runs the OnSearchWindowStartup method
    ///   for plugins, binds the relevant keyboard shortcuts
    ///   for the window and tries to set focus on the
    ///   TextBox in which the user enters their query.
    /// </summary>
    public SearchWindow()
    {
      _previousForegroundWindow = GetForegroundWindow();
      _activeScreen = System.Windows.Forms.Screen.FromPoint(System.Windows.Forms.Control.MousePosition);
      InitializeComponent();

      // initial look
      ListContainer.Visibility = Visibility.Collapsed;
      ContextPane.Visibility = Visibility.Collapsed;

      //settings indirectly available to the user
      ColumnDefinition c1 = new()
      {
        Width = new GridLength((double)Application.Current.Resources["SearchIconWidth"], GridUnitType.Star)
      };
      SearchBoxGrid.ColumnDefinitions.Add(c1);

      //run anything needed for plugins on window startup
      try
      {
        foreach (Plugin plugin in App.Plugins)
        {
          plugin.OnSearchWindowStartup();
        }
      }
      catch (Exception ex)
      {
        App.ShowErrorMessageBox(ex, "Error with a plugin calling its OnSearchWindowStartup()");
      }

      //Escape key to close window
      RoutedCommand ExitWindow = new();
      ExitWindow.InputGestures.Add(new KeyGesture(Key.Escape));
      CommandBindings.Add(new CommandBinding(ExitWindow, (_, _) => Close()));

      //Enter key to choose item
      RoutedCommand ExecuteItemCommand = new();
      ExecuteItemCommand.InputGestures.Add(new KeyGesture(Key.Enter));
      CommandBindings.Add(new CommandBinding(ExecuteItemCommand, ListItem_Click));

      Loaded += SearchWindow_Loaded;
      PreviewKeyDown += SearchWindow_PreviewKeyDown;
    }

    /// <summary>
    ///   Execute the currently selected ListItem. If a
    ///   ListItem is not selected yet, the first item in
    ///   the results list is executed.
    /// </summary>
    /// <param name="sender">
    ///   The element from which the event is triggered.
    /// </param>
    /// <param name="e">
    ///   The arguments for the event.
    /// </param>
    private void ListItem_Click(object sender, RoutedEventArgs e)
    {
      if (ResultsListView != null)
      {
        if (ResultsListView.SelectedIndex > -1)
        {
          ((ListItem)ResultsListView.SelectedItem).Execute();
        }
        else
        {
          ((ListItem)ResultsListView.Items.GetItemAt(0)).Execute();
        }
      }
    }

    /// <summary>
    /// Creates the item collection that would be shown in the results list after the user enters a command
    /// <br />
    /// The maximum number of results loaded
    ///   is dependent upon the MaxResults setting, though
    ///   this can be overridden by the IgnoreMaxResultsFlag
    ///   setting and plugin SpecialCommands.
    /// </summary>
    /// <returns>The items for a command</returns>
    public static Collection<ListItem> ProduceItems(string command)
    {
      bool IgnoreMaxResults = false;
      command ??= "";
      if (
        command.EndsWith((string)Application.Current.Resources["IgnoreMaxResultsFlag"], StringComparison.Ordinal))
      {
        command = command.Remove(
          command.Length - ((string)Application.Current.Resources["IgnoreMaxResultsFlag"]).Length);
        IgnoreMaxResults = true;
      }
      ListOfResults = new Collection<ListItem>();

      //getting results for query
      if (string.IsNullOrEmpty(command))
      {
        return new Collection<ListItem>();
      }
      else
      {
        try
        {
          foreach (Plugin plugin in App.Plugins)
          {
            //checking special commands
            foreach (string specialCommand in plugin.SpecialCommands())
            {
              if (specialCommand.Equals(command, StringComparison.Ordinal))
              {
                return plugin.OnSpecialCommand(command);
              }
            }
            //checking signifiers
            foreach (string signifier in plugin.CommandSignifiers())
            {
              if (command.StartsWith(signifier, StringComparison.Ordinal))
              {
                ListOfResults = plugin.OnSignifier(command);
                //Check if items were shown
                if (ListOfResults.Count == 0)
                {
                  ListOfResults.Add(new NoListItem());
                }
                return ListOfResults;
              }
            }
            //grab plugin items
            foreach (ListItem item in plugin.OnQueryChange(command))
            {
              ListOfResults.Add(item);
            }
          }
        }
        catch (Exception ex)
        {
          App.ShowErrorMessageBox(ex, "Could not produce list items");
        }
        //sort by relevance
        ListOfResults = new Collection<ListItem>(
          FuzzySearch.Sort(command, ListOfResults).ToList()
        );
        //Check if items were shown
        if (ListOfResults.Count == 0)
        {
          ListOfResults.Add(new NoListItem());
        }
        //use MaxResults setting
        if (!IgnoreMaxResults)
        {
          ListOfResults = new Collection<ListItem>(
            ListOfResults.Take((int)Application.Current.Resources["MaxResults"]).ToList()
          );
        }
        return ListOfResults;
      }
    }

    private CancellationTokenSource? _produceCts;

    /// <summary>
    ///   Loads the relevant ListItems into the results list
    ///   when the user changes the query entered in the
    ///   search bar.
    /// </summary>
    /// <param name="sender">
    ///   The element from which the event is triggered.
    /// </param>
    /// <param name="e">
    ///   The arguments for the event.
    /// </param>
    private async void OnQueryChange(object sender, RoutedEventArgs e)
    {
      // cancel previous run
      _produceCts?.Cancel();
      _produceCts = new CancellationTokenSource();
      CancellationToken token = _produceCts.Token;

      //reset view of list
      ResultsListView.SelectedIndex = 0;
      ResultsListView.ScrollIntoView(ResultsListView.SelectedItem);
      // Close context pane if it was open
      await CloseContextPaneAsync().ConfigureAwait(true);
      //get text from sender
      TextBox textBox = (sender as TextBox)!;
      query = textBox.Text;
      //show loading item if not already showing one
      List<ListItem>? currentItems = ResultsListView.ItemsSource as List<ListItem>;
      if (currentItems is null || currentItems.FirstOrDefault() is not LoadingListItem)
      {
        if (currentItems?.Count > 0)
        {
          if (!await AnimateResultsListExitAsync(token).ConfigureAwait(true))
          {
            return;
          }
        }
        ApplyResultsListItems(new List<ListItem>() { new LoadingListItem() });
      }

      // debounce to avoid running work for every keystroke
      try
      {
        await Task.Delay((int)Application.Current.Resources["Debounce"], token).ConfigureAwait(true);
      }
      catch (OperationCanceledException)
      {
        return;
      }

      List<ListItem> Results;
      try
      {
        // run work off the UI thread
        Results = (await Task.Run(() => ProduceItems(query), token).ConfigureAwait(true)).ToList();
      }
      catch (OperationCanceledException)
      {
        return;
      }
      catch (Exception ex)
      {
        MessageBox.Show(ex.Message, "Error!");
        return;
      }

      if (Results.Count == 0)
      {
        ListContainer.Visibility = Visibility.Collapsed;
        return;
      }

      if (!await AnimateResultsListExitAsync(token).ConfigureAwait(true))
      {
        return;
      }

      ApplyResultsListItems(Results);
    }

    /// <summary>
    /// Animates the exit transition of <see cref="ResultsListView"/> using the configured exit animation settings.
    /// </summary>
    /// <param name="token">The cancellation token to observe.</param>
    /// <returns><c>true</c> if the exit animation completed without cancellation; otherwise, <c>false</c>.</returns>
    private async Task<bool> AnimateResultsListExitAsync(CancellationToken token)
    {
      if (Application.Current.Resources["ResultsListExitAnimation"] is AnimationSettings exitAnim)
      {
        Animations.SetSecondary(ResultsListView, exitAnim);
        Animations.SetSecondaryBinding(ResultsListView, false);
        Animations.SetSecondaryBinding(ResultsListView, true);
        try
        {
          await Task.Delay((int)exitAnim.Duration, token).ConfigureAwait(true);
        }
        catch (OperationCanceledException)
        {
          Animations.SetSecondaryBinding(ResultsListView, false);
          return false;
        }
      }

      return true;
    }

    /// <summary>
    /// Binds new items to <see cref="ResultsListView"/> and triggers the entrance animation.
    /// </summary>
    /// <param name="items">The list of items to display.</param>
    private void ApplyResultsListItems(List<ListItem> items)
    {
      Animations.SetSecondaryBinding(ResultsListView, false);
      ResultsListView.ItemsSource = items;
      ResultsListView.SelectedIndex = -1;
      ListContainer.Visibility = Visibility.Visible;
      if (Application.Current.Resources["ResultsListAnimation"] is AnimationSettings enterAnim)
      {
        Animations.SetPrimary(ResultsListView, enterAnim);
        Animations.SetPrimaryBinding(ResultsListView, false);
        Animations.SetPrimaryBinding(ResultsListView, true);
      }
    }

    /// <summary>
    /// Closes the <see cref="ContextPane"/> asynchronously with its exit animation if visible.
    /// </summary>
    /// <returns>A task representing the asynchronous operation.</returns>
    public async Task CloseContextPaneAsync()
    {
      if (ContextPane.Visibility == Visibility.Visible)
      {
        if (Application.Current.Resources["ContextPaneExitAnimation"] is AnimationSettings exitAnim)
        {
          Animations.SetPrimaryBinding(ContextPane, false);
          Animations.SetPrimary(ContextPane, null);
          Animations.SetSecondary(ContextPane, exitAnim);
          Animations.SetSecondaryBinding(ContextPane, false);
          Animations.SetSecondaryBinding(ContextPane, true);
          await Task.Delay((int)exitAnim.Duration).ConfigureAwait(true);
        }

        Animations.SetSecondaryBinding(ContextPane, false);
        ContextPane.Visibility = Visibility.Collapsed;
        ContextPane.Opacity = 1.0;
        ContextPane.Source = null; //makes showing a new pane more reliable
      }
    }

    /// <summary>
    /// Releases unmanaged and optionally managed resources.
    /// </summary>
    /// <param name="disposing"><c>true</c> to release both managed and unmanaged resources; <c>false</c> to release only unmanaged resources.</param>
    protected virtual void Dispose(bool disposing)
    {
      if (disposing)
      {
        _produceCts?.Dispose();
      }
    }

    /// <summary>
    /// Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
    /// </summary>
    public void Dispose()
    {
      Dispose(true);
      GC.SuppressFinalize(this);
    }

    // Ensure the window is in focus when opened

    [DllImport("user32.dll")]
    [DefaultDllImportSearchPaths(DllImportSearchPath.System32)]
    private static extern IntPtr GetForegroundWindow();

    [DllImport("user32.dll")]
    [DefaultDllImportSearchPaths(DllImportSearchPath.System32)]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static extern bool SetForegroundWindow(IntPtr hWnd);

    [DllImport("user32.dll")]
    [DefaultDllImportSearchPaths(DllImportSearchPath.System32)]
    private static extern void keybd_event(byte bVk, byte bScan, uint dwFlags, UIntPtr dwExtraInfo);

    private const byte VK_MENU = 0x12;
    private const uint KEYEVENTF_KEYUP = 0x0002;

    private readonly IntPtr _previousForegroundWindow;

    private readonly System.Windows.Forms.Screen _activeScreen;

    /// <summary>
    /// Forces the window specified by <paramref name="hWnd"/> into the foreground.
    /// </summary>
    /// <param name="hWnd">The handle of the window to bring to the foreground.</param>
    private static void ForceForegroundWindow(IntPtr hWnd)
    {
      if (hWnd == IntPtr.Zero || hWnd == GetForegroundWindow())
      {
        return;
      }

      // Simulate a dummy Alt key press/release to grant user input authority to the calling thread.
      // This bypasses Windows OS foreground lock restrictions (SPI_SETFOREGROUNDLOCKTIMEOUT)
      // and guarantees SetForegroundWindow activates the target window.
      keybd_event(VK_MENU, 0, 0, UIntPtr.Zero);
      SetForegroundWindow(hWnd);
      keybd_event(VK_MENU, 0, KEYEVENTF_KEYUP, UIntPtr.Zero);
    }

    /// <inheritdoc />
    protected override void OnSourceInitialized(EventArgs e)
    {
      base.OnSourceInitialized(e);

      // Resolve the active screen bounds and convert physical pixels → DIPs
      bool useWorkingArea = Application.Current.Resources["UseWorkingArea"] is true;
      System.Drawing.Rectangle bounds = useWorkingArea ? _activeScreen.WorkingArea : _activeScreen.Bounds;

      PresentationSource source = PresentationSource.FromVisual(this);
      if (source?.CompositionTarget != null)
      {
        double dpiX = source.CompositionTarget.TransformFromDevice.M11;
        double dpiY = source.CompositionTarget.TransformFromDevice.M22;

        double screenW = bounds.Width * dpiX;
        double screenH = bounds.Height * dpiY;
        double screenL = bounds.Left * dpiX;
        double screenT = bounds.Top * dpiY;

        // Size and position the window to cover the active screen
        Left = screenL;
        Top = screenT;
        Width = screenW;
        Height = screenH;

        // Parse screen-dimension settings against the active screen
        double windowWidth = ParseScreenDimensionsSetting(
          (string)Application.Current.Resources["WindowWidth"], screenH, screenW);
        double topMargin = ParseScreenDimensionsSetting(
          (string)Application.Current.Resources["WindowTopMargin"], screenH, screenW);
        double maxHeight = ParseScreenDimensionsSetting(
          (string)Application.Current.Resources["ListContainerMaxHeight"], screenH, screenW);

        Container.Width = windowWidth;
        Container.Margin = new Thickness(0, topMargin, 0, 0);
        ResultsBox.MaxHeight = maxHeight;

        // Add the second search box column now that we know the window width
        SearchBoxGrid.ColumnDefinitions.Add(new ColumnDefinition()
        {
          Width = new GridLength(windowWidth - (double)Application.Current.Resources["SearchIconWidth"], GridUnitType.Star)
        });
      }
    }

    private void SearchWindow_Loaded(object sender, RoutedEventArgs e)
    {
      System.Windows.Interop.WindowInteropHelper helper = new(this);
      ForceForegroundWindow(helper.Handle);
      SearchTermTextBox.Focus();
    }

    /// <inheritdoc />
    protected override async void OnClosing(System.ComponentModel.CancelEventArgs e)
    {
      ArgumentNullException.ThrowIfNull(e);

      if (!_isClosing && Application.Current.Resources["WindowExitAnimation"] is AnimationSettings exitAnim)
      {
        e.Cancel = true;
        _isClosing = true;

        Animations.SetSecondary(Container, exitAnim);
        Animations.SetSecondaryBinding(Container, false);
        Animations.SetSecondaryBinding(Container, true);
        await Task.Delay((int)exitAnim.Duration).ConfigureAwait(true);

        Close();
        return;
      }

      base.OnClosing(e);
    }

    /// <inheritdoc />
    protected override void OnClosed(EventArgs e)
    {
      base.OnClosed(e);
      if (_previousForegroundWindow != IntPtr.Zero)
      {
        ForceForegroundWindow(_previousForegroundWindow);
      }
    }

    private void SearchWindow_PreviewKeyDown(object sender, KeyEventArgs e)
    {
      Key key = (e.Key == Key.ImeProcessed) ? e.ImeProcessedKey : e.Key;
      if (key == Key.Escape)
      {
        Close();
        e.Handled = true;
      }
    }

  }
}
