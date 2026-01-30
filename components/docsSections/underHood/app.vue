<template>
  <div class="p-10">
    The entry point for the app. Loads all of the settings in the
    app settings file, plugins available in the
    <Code inline>&nbsp;PlugBoard&nbsp;</Code>,
    the <Code inline>&nbsp;SearchWindow&nbsp;</Code> HotKey and
    the tray task.
    Also runs all of the plugins' <Code inline>&nbsp;OnAppStartup()&nbsp;</Code>
    methods.
    <DocNotice type="tip" class="mt-4" style="width: calc(100% - 1.5rem)">
      Includes a method to show error message boxes to
      the user. The message box will include the exception's
      message and stacktrace.
      <div style="width: calc(100% - 2.5rem);">
        <Code lang="cs">
          static public void ShowErrorMessageBox(Exception exception, String title)
          {
            ...
            MessageBox.Show(
                  $"{exception.Message}\n\n{exception.StackTrace}",
                  title,
                  MessageBoxButton.OK,
                  MessageBoxImage.Error
              );
          }
        </Code>
      </div>
    </DocNotice>
  </div>
</template>