using System;
using System.Collections.Concurrent;
using System.IO;
using System.Windows.Media;
using System.Windows.Media.Imaging;

namespace Quokka.PluginArch
{

  /// <summary>
  /// Provides caching of <see cref="ImageSource"/> instances for list item icons.
  /// </summary>
  public static class IconCache
  {
    private static readonly ConcurrentDictionary<string, ImageSource?> _cache = new();

    /// <summary>
    /// Gets a frozen <see cref="ImageSource"/> for the specified file path, creating it on the UI thread, and caching it if it does not exist.
    /// </summary>
    /// <param name="path">The file path of the icon to retrieve.</param>
    /// <returns>
    /// A frozen <see cref="ImageSource"/> representing the icon, or <see langword="null"/> if the icon cannot be created.
    /// </returns>
    public static ImageSource? GetOrAdd(string path)
    {
      if (string.IsNullOrEmpty(path))
      {
        return null;
      }

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
          Uri uri = new(fullPath, UriKind.Absolute);
          BitmapImage bmp = new();
          bmp.BeginInit();
          bmp.UriSource = uri;
          bmp.CacheOption = BitmapCacheOption.OnLoad; // load immediately so file can be released
          bmp.CreateOptions = BitmapCreateOptions.IgnoreImageCache;
          bmp.EndInit();
          if (bmp.CanFreeze)
          {
            bmp.Freeze();
          }
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
