using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Windows;

namespace Quokka.TheQuokkaPlugin
{
  internal static class UpdateChecker
  {
    private static readonly HttpClient HttpClient = new();
    private static string? download_link;
    private static string? version;

    private const string currentVersion = "2.0.0.0";

    /// <summary>
    /// Checks if a newer version of Quokka is available by fetching and parsing the remote version text.
    /// </summary>
    /// <returns>
    /// A string representing the update check status: <c>"updated"</c> if on the latest version,
    /// <c>"needs_update"</c> if a newer version is available, or <c>"error"</c> if the check failed.
    /// </returns>
    internal static string CheckForUpdates()
    {
      const string versionFileUrl = "https://raw.githubusercontent.com/Faeq-F/Quokka/refs/heads/main/Version";

      try
      {
        string rawText = HttpClient.GetStringAsync(new Uri(versionFileUrl)).GetAwaiter().GetResult();
        string[] version_data = rawText.Trim().Split('=');
        if (version_data.Length >= 2)
        {
          version = version_data[0];
          download_link = version_data[1];

          return currentVersion == version ? "updated" : "needs_update";
        }
        return "error";
      }
      catch (Exception e)
      {
        App.ShowErrorMessageBox(e, "Could not check for updates");
        return "error";
      }
    }

    /// <summary>
    /// Runs the update check asynchronously and prompts the user with update dialogues if necessary.
    /// </summary>
    /// <param name="showUpdated">Specifies whether to show a message box indicating the application is up-to-date.</param>
    public static async void RunUpdateCheck(bool showUpdated)
    {
      switch (await Task.Run(() => CheckForUpdates()).ConfigureAwait(true))
      {

        case "updated":
          {
            if (showUpdated)
            {
              MessageBox.Show($"Quokka is on the latest version ({version})", "Quokka is up-to-date", MessageBoxButton.OK, MessageBoxImage.Information);
            }
            break;
          }

        case "needs_update":
          {
            if (MessageBox.Show($"A new version ({version}) is available\nPlease backup your data before installing the new version\n\nWould you like to copy the download link?",
              "New Version available", MessageBoxButton.YesNo, MessageBoxImage.Information) == MessageBoxResult.Yes)
            {
              Clipboard.SetText(download_link!);
            }
            break;
          }

        default: break;
      }
    }
  }
}
