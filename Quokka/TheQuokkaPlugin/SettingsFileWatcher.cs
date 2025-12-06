using System.IO;
using System.Windows;

namespace Quokka.TheQuokkaPlugin
{
  internal static class SettingsFileWatcher
  {

    private static FileSystemWatcher? watcher;

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

    private static void OnChanged(object source, FileSystemEventArgs e)
    {
      if (MessageBox.Show("Restart the app to apply changes?\n\nFile: " + e.FullPath, "Settings file changed!", MessageBoxButton.YesNo, MessageBoxImage.Information) == MessageBoxResult.Yes)
      {
        Application.Current.Dispatcher.Invoke(() =>
          NotifyIconViewModel.RestartApplicationCommand.Execute(null)
        );
      }
    }
  }

}
