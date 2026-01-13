<template>
  <div class="p-10">
    A basic Context Pane class for a list item, containing
    the basic methods most context panes would need and / or
    should want to override.
    <DocNotice type="info" class="mt-4" style="width: calc(100% - 1.5rem)">
      Context Panes are
      <a target="_blank"
        href="https://learn.microsoft.com/en-us/dotnet/api/system.windows.controls.page?view=windowsdesktop-10.0">
        <Code inline>&nbsp;Page&nbsp;</Code>s
      </a>
      hosted by a
      <a target="_blank"
        href="https://learn.microsoft.com/en-us/dotnet/api/system.windows.controls.frame?view=windowsdesktop-10.0">
        <Code inline>&nbsp;Frame&nbsp;</Code>
      </a>
      <br />
      <Code inline>&nbsp;YourContextPane : ItemContextPane : Page&nbsp;</Code>
    </DocNotice>
    <DocNotice type="tip" class="mt-4" style="width: calc(100% - 1.5rem)">
      When handling keyboard input, if the <Code
        inline>&nbsp;ContextPaneKey&nbsp;</Code> is
      pressed, you can return the user back to the item list where
      they can continue their search using
      <Code inline>&nbsp;ReturnToSearch()&nbsp;</Code>
      <div style="width: calc(100% - 2.5rem);">
        <Code>
          switch (e.Key)
          {
            case var value when value == (System.Windows.Input.Key)App.Current.Resources["ContextPaneKey"]:
              ReturnToSearch();
              break;
        </Code>
        <Code>
          protected static void ReturnToSearch()
          {
            SearchWindow window = ((SearchWindow)Application.Current.MainWindow);
            window.ContextPaneFrame.Visibility = Visibility.Collapsed;
            window.SearchBox.Focus();
            window.ContextPaneFrame.Source = null; //makes showing a new pane more reliable
          }
        </Code>
      </div>
    </DocNotice>
  </div>
</template>