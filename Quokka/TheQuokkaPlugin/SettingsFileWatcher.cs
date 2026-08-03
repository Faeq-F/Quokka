using Quokka.Settings;
using System;
using System.IO;
using System.Windows;

namespace Quokka.TheQuokkaPlugin
{
  /// <summary>
  /// Provides functionality for watching changes to the settings file and reloading application settings automatically.
  /// </summary>
  internal static class SettingsFileWatcher
  {

    private static FileSystemWatcher? watcher;

    /// <summary>
    /// Creates and configures the file system watcher for <c>settings.json</c> at the specified directory path.
    /// </summary>
    /// <param name="path">The directory path containing the settings file.</param>
    public static void CreateFileWatcher(string path)
    {
      watcher = new FileSystemWatcher
      {
        Path = path,
        NotifyFilter = NotifyFilters.LastAccess | NotifyFilters.LastWrite,
        Filter = "settings.json",
        EnableRaisingEvents = true
      };
      watcher.Changed += OnChanged;
    }

    private static async void OnChanged(object source, FileSystemEventArgs e)
    {
      try
      {
        if (Application.Current?.Dispatcher != null)
        {
          await Application.Current.Dispatcher.InvokeAsync(async () =>
          {
            try
            {
              string settingsPath = Path.Combine(Environment.CurrentDirectory, "Config", "settings.json");
              SettingsService settingsService = new();

              // Retry up to 5 times if the file is momentarily locked by the saving process/editor
              for (int attempt = 0; attempt < 5; attempt++)
              {
                try
                {
                  await settingsService.LoadAppSettings(settingsPath).ConfigureAwait(true);
                  break;
                }
                catch (IOException) when (attempt < 4)
                {
                  await System.Threading.Tasks.Task.Delay(100).ConfigureAwait(true);
                }
              }
            }
            catch (Exception ex)
            {
              App.ShowErrorMessageBox(ex, "Could not reload settings");
            }
          });
        }
      }
      catch (Exception ex)
      {
        App.ShowErrorMessageBox(ex, "Could not reload settings");
      }
    }
  }

}
