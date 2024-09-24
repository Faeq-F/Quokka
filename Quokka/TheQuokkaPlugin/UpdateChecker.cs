using System;
using System.IO;
using System.Net;
using System.Threading.Tasks;
using System.Windows;

namespace Quokka.TheQuokkaPlugin {
  internal static class UpdateChecker {
    private static string? download_link = null;
    private static string? version = null;

    internal static string CheckForUpdates() {
      var version_file = "https://raw.githubusercontent.com/Faeq-F/Quokka/refs/heads/main/Version";
      var temp_version_file = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData) + "\\QuokkaVersion.txt";

      using (var webClient = new WebClient()) {
        try {
          webClient.DownloadFile(address: version_file, fileName: temp_version_file);
        } catch (Exception e) {
          App.ShowErrorMessageBox(e, "Could not check for updates");
          return "error";
        }
      }

      if (File.Exists(temp_version_file)) {
        string[] version_data = File.ReadAllText(temp_version_file).Split('=');
        version = version_data[0];
        download_link = version_data[1];
        File.Delete(temp_version_file);

        if ("1.0.0.0" == version) {
          return "updated";
        } else {
          return "needs_update";
        }

      } else {
        return "error";
      }
    }

    public static async void RunUpdateCheck(bool showUpdated) {
      string result = await Task.Run(() => CheckForUpdates());
      switch (result) {

        case "updated": {
          if (showUpdated) {
            MessageBox.Show($"Quokka is on the latest version ({version!})", "Quokka is up-to-date", MessageBoxButton.OK, MessageBoxImage.Information);
          }
          break;
        }

        case "needs_update": {
          if (MessageBox.Show($"A new version ({version!}) is available\nPlease backup your data before installing the new version\n\nWould you like to copy the download link?",
            "New Version available", MessageBoxButton.YesNo, MessageBoxImage.Information) == MessageBoxResult.Yes) {
            System.Windows.Clipboard.SetText(download_link);
          }
          break;
        }

        default: break;
      }
    }
  }
}
