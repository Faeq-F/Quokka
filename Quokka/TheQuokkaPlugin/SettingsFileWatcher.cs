using System.IO;
using System.Windows;

namespace Quokka.TheQuokkaPlugin {
  internal class SettingsFileWatcher {

    public static void CreateFileWatcher(string path) {

      FileSystemWatcher watcher = new FileSystemWatcher();
      watcher.Path = path;
      watcher.NotifyFilter = NotifyFilters.LastAccess | NotifyFilters.LastWrite;
      watcher.Filter = "settings.json";

      watcher.Changed += new FileSystemEventHandler(OnChanged);
      watcher.EnableRaisingEvents = true;
    }

    private static void OnChanged(object source, FileSystemEventArgs e) {
      if (MessageBox.Show("Restart the app to apply changes?\n\nFile: " + e.FullPath, "Settings file changed!", MessageBoxButton.YesNo, MessageBoxImage.Information) == MessageBoxResult.Yes) {
        Application.Current.Dispatcher.Invoke(() =>
          NotifyIconViewModel.RestartApplicationCommand.Execute(null)
        );
      }
    }

  }

}