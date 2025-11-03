using System;
using System.Collections.Concurrent;
using System.IO;
using System.Windows.Media;
using System.Windows.Media.Imaging;

namespace Quokka.PluginArch
{

  /// <summary>
  /// Caches ImageSources for ListItem Icons.
  /// </summary>
  public static class IconCache
  {
    private static readonly ConcurrentDictionary<string, ImageSource?> _cache = new();

    /// <summary>
    /// Returns a frozen ImageSource for the given path.
    /// Creates it once on the UI thread.
    /// Returns null if creation fails.
    /// </summary>
    public static ImageSource? GetOrAdd(string path)
    {
      if (string.IsNullOrEmpty(path))
        return null;

      // normalize path so cache keys are consistent
      string key;
      try
      {
        key = Path.GetFullPath(path);
      }
      catch
      {
        key = path;
      }

      return _cache.GetOrAdd(key, CreateImage);
    }

    private static ImageSource? CreateImage(string fullPath)
    {
      ImageSource? result = UiDispatcher.Invoke(() =>
      {
        try
        {
          var uri = new Uri(fullPath, UriKind.Absolute);
          var bmp = new BitmapImage();
          bmp.BeginInit();
          bmp.UriSource = uri;
          bmp.CacheOption = BitmapCacheOption.OnLoad; // load immediately so file can be released
          bmp.CreateOptions = BitmapCreateOptions.IgnoreImageCache;
          bmp.EndInit();
          if (bmp.CanFreeze) bmp.Freeze();
          return bmp;
        }
        catch
        {
          return null;
        }
      });
      return result;
    }
  }
}
