using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Media;
using static Quokka.Settings.SettingParsers;

namespace Quokka.Settings
{
  /// <summary>
  /// Provides services for loading, parsing, and applying application settings.
  /// </summary>
  public sealed class SettingsService
  {
    private readonly string[] IntSettings = ["MaxResults", "Debounce", "WindowAnimationOffset", "ResultsListAnimationOffset", "ContextPaneAnimationOffset"];
    private readonly string[] DoubleSettings = ["AppAnimationDurations", "WindowAnimationBlurRadius", "ResultsListAnimationBlurRadius", "ContextPaneAnimationBlurRadius"];
    private readonly string[] BoolSettings = ["UseWorkingArea", "CheckForUpdates"];
    private readonly string[] KeySettings = ["WindowHotKey", "ContextPaneKey", "ScrollLeftKey", "ScrollRightKey"];
    private readonly string[] SpecialSettings = ["AppFont", "ListItemIconColumnWidth", "WindowHotKeyModifier", "WindowAnimation", "WindowExitAnimation", "ResultsListAnimation", "ResultsListExitAnimation", "ContextPaneAnimation", "ContextPaneExitAnimation", "Scorer"];
    private readonly string[] StringSettings = ["IgnoreMaxResultsFlag", "SearchFieldPlaceholder", "AppControlCommand", "NoResultsItemDesc", "NoResultsItemName", "LoadingItemDesc", "LoadingItemName", "WindowTopMargin", "WindowWidth", "ListContainerMaxHeight"];
    private readonly string[] PathSettings = ["FileManager", "TextEditor"];

    /// <summary>
    /// Asynchronously loads settings from the specified JSON file path and applies them to application resources.
    /// </summary>
    /// <param name="filePath">The file path of the settings JSON file.</param>
    /// <returns>A task representing the asynchronous operation.</returns>
    /// <exception cref="ArgumentNullException">
    /// <paramref name="filePath"/> is <see langword="null"/>.
    /// </exception>
    public async Task LoadAppSettings(string filePath)
    {
      ArgumentNullException.ThrowIfNull(filePath);

      FileStream stream = new(filePath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
      await using (stream.ConfigureAwait(true))
      {
        using StreamReader reader = new(stream);
        string jsonContent = await reader.ReadToEndAsync().ConfigureAwait(true);
        JObject settingsObject = JObject.Parse(jsonContent);
        ApplyAppSettings(settingsObject);
      }
      XamlFlair.Animations.OverrideDefaultSettings(duration: (double)Application.Current?.Resources["AppAnimationDurations"]!);
    }

    /// <summary>
    /// Applies application settings from a JSON object.
    /// </summary>
    /// <param name="settingsObject">The JSON object containing setting keys and values.</param>
    public void ApplyAppSettings(JObject settingsObject)
    {
      if (settingsObject is null)
      {
        return;
      }

      List<KeyValuePair<string, string>> settings = settingsObject
        .Descendants()
        .OfType<JProperty>()
        .Where(p => p.Value is JValue)
        .Select(p => new KeyValuePair<string, string>(p.Name, p.Value.ToString()))
        .ToList();

      List<KeyValuePair<string, string>> animationSettings = [.. settings.Where(setting => setting.Key is "WindowAnimation" or "WindowExitAnimation" or "ResultsListAnimation" or "ResultsListExitAnimation" or "ContextPaneAnimation" or "ContextPaneExitAnimation")];

      // Apply all non-animation settings
      settings = settings.Where(setting => setting.Key is not "WindowAnimation" and not "WindowExitAnimation" and not "ResultsListAnimation" and not "ResultsListExitAnimation" and not "ContextPaneAnimation" and not "ContextPaneExitAnimation").ToList();
      settings.ForEach(setting => ApplySetting(setting.Key, setting.Value));

      // Apply animation settings now that all animation parameters (blur, offset, duration) exist in resources
      animationSettings.ForEach(entry =>
      {
        string key = entry.Key.Replace("Exit", "", StringComparison.Ordinal); // params for exit are the same as entrance
        double blur = (double)Application.Current.Resources[$"{key}BlurRadius"];
        int offset = (int)Application.Current.Resources[$"{key}Offset"];
        double duration = (double)Application.Current.Resources["AppAnimationDurations"];

        Application.Current.Resources[entry.Key] = ParseAnimationSetting(entry.Value, blur, offset, duration);
      });
    }

    private void ApplySetting(string key, string value)
    {
      if (SpecialSettings.Contains(key))
      {
        switch (key)
        {
          case "ListItemIconColumnWidth":
            Application.Current.Resources[key] = new GridLength(ParseDoubleSetting(value));
            break;
          case "WindowHotKeyModifier":
            Application.Current.Resources[key] = ParseModifierKeysSetting(value, ModifierKeys.Alt);
            break;
          case "AppFont":
            Application.Current.Resources[key] = ParseFontFamilySetting(value, new FontFamily("Verdana"));
            break;
          case "Scorer":
            Application.Current.Resources[key] = ParseScorerSetting(value);
            break;
        }
      }
      else if (BoolSettings.Contains(key))
      {
        bool defaultValue = key switch
        {
          "CheckForUpdates" => true,
          "UseWorkingArea" => false,
          _ => true
        };
        Application.Current.Resources[key] = ParseBooleanSetting(value, defaultValue);
      }
      else if (KeySettings.Contains(key))
      {
        System.Windows.Forms.Keys defaultKey = key switch
        {
          "WindowHotKey" => System.Windows.Forms.Keys.Space,
          "ContextPaneKey" => System.Windows.Forms.Keys.Apps,
          "ScrollLeftKey" => System.Windows.Forms.Keys.PageUp,
          "ScrollRightKey" => System.Windows.Forms.Keys.PageDown
        };
        Application.Current.Resources[key] = ParseKeySetting(value, defaultKey);
      }
      else if (PathSettings.Contains(key))
      {
        string defaultPath = key == "FileManager" ? @"C:\Windows\explorer.exe" : @"C:\Windows\notepad.exe";
        Application.Current.Resources[key] = ParsePathSetting(value, defaultPath);
      }
      else if (StringSettings.Contains(key))
      {
        string defaultValue = key switch
        {
          "IgnoreMaxResultsFlag" => " -ShowAll",
          "AppControlCommand" => "Quokka",
          "NoResultsItemName" => "No results found",
          "NoResultsItemDesc" => "Try reformatting / rewording your query",
          "LoadingItemName" => "Loading...",
          "LoadingItemDesc" => "Please wait",
          _ => string.Empty
        };
        Application.Current.Resources[key] = ParseStringSetting(value, defaultValue);
      }
      else if (IntSettings.Contains(key))
      {
        Application.Current.Resources[key] = ParseIntegerSetting(value);
      }
      else if (DoubleSettings.Contains(key))
      {
        Application.Current.Resources[key] = ParseDoubleSetting(value);
      }
      else if (key.Contains("Color", StringComparison.Ordinal))
      {
        Application.Current.Resources[key] = ParseSolidColorBrush(value);
      }
      else if (key.Contains("Rounding", StringComparison.Ordinal))
      {
        Application.Current.Resources[key] = ParseCornerRadiusSetting(value);
      }
      else if (
            key.Contains("Opacity", StringComparison.Ordinal)
            || key.Contains("Direction", StringComparison.Ordinal)
            || key.Contains("Radius", StringComparison.Ordinal)
            || key.Contains("Depth", StringComparison.Ordinal)
            || key.Contains("Size", StringComparison.Ordinal)
            || key.Contains("Height", StringComparison.Ordinal)
            || key.Contains("Width", StringComparison.Ordinal)
        )
      {
        Application.Current.Resources[key] = ParseDoubleSetting(value);
      }
      else if (key.Contains("HorizontalAlignment", StringComparison.Ordinal))
      {
        Application.Current.Resources[key] = ParseHorizontalAlignmentSetting(value);
      }
      else if (key.Contains("RenderingBias", StringComparison.Ordinal))
      {
        Application.Current.Resources[key] = ParseRenderingBiasSetting(value);
      }
      else if (key.Contains("Padding", StringComparison.Ordinal) || key.Contains("Thickness", StringComparison.Ordinal) || key.Contains("Margin", StringComparison.Ordinal))
      {
        Application.Current.Resources[key] = ParseThicknessSetting(value);
      }
      else if (key.Contains("VerticalAlignment", StringComparison.Ordinal))
      {
        Application.Current.Resources[key] = ParseVerticalAlignmentSetting(value);
      }
      else if (key.Contains("Visibility", StringComparison.Ordinal))
      {
        Application.Current.Resources[key] = ParseVisibilitySetting(value);
      }
    }
  }
}
