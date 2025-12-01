using Newtonsoft.Json.Linq;
using System;
using System.IO;
using System.Linq;
using System.Windows;
using System.Windows.Media;
using static Quokka.Settings.SettingParsers;

namespace Quokka
{
  public partial class App
  {
    private readonly string[] IntSettings = { "MaxResults", "Debounce", "AnimationOffset" };
    private readonly string[] DoubleSettings = { "AnimationDuration", "AnimationBlurRadius" };
    private readonly string[] ScreenDimensionsSettings = { "WindowWidth", "ListContainerMaxHeight" };
    private readonly string[] SpecialSettings = { "AppFont", "WindowTopMargin", "ListItemIconColumnWidth", "WindowHotKey", "WindowHotKeyModifier", "ContextPaneKey", "CheckForUpdates", "Animation", "Scorer" };
    private readonly string[] StringSettings = { "IgnoreMaxResultsFlag", "SearchFieldPlaceholder", "AboutCommand", "NoResultsItemDesc", "NoResultsItemName", "LoadingItemDesc", "LoadingItemName" };
    private readonly string[] PathSettings = { "FileManager", "TextEditor" };

    private void ApplyAppSettings(JObject obj)
    {
      foreach (var entry in obj)
      {
        // recurse until attribute-value pairs obtained
        if (entry.Value!.ToString().Contains("{"))
        {
          ApplyAppSettings(JObject.Parse(entry.Value.ToString()));
        }
        else
        {
          // applying settings based on type
          if (SpecialSettings.Contains(entry.Key))
          {
            switch (entry.Key)
            {
              case "CheckForUpdates":
                Current.Resources[entry.Key] = Boolean.Parse(entry.Value.ToString());
                break;
              case "WindowTopMargin":
                Current.Resources[entry.Key] = ParseThicknessSetting("0," + ParseScreenDimensionsSetting(entry.Value.ToString()) + ",0,0");
                break;
              case "ListItemIconColumnWidth":
                Current.Resources[entry.Key] = new GridLength(ParseDoubleSetting(entry.Value.ToString()));
                break;
              case "ContextPaneKey":
                try
                {
                  Current.Resources[entry.Key] = (System.Windows.Input.Key)Enum.Parse(typeof(System.Windows.Input.Key), entry.Value.ToString(), true);
                }
                catch (System.ArgumentException) { Current.Resources[entry.Key] = System.Windows.Input.Key.Apps; }
                break;
              case "WindowHotKey":
                try
                {
                  Current.Resources[entry.Key] = (System.Windows.Forms.Keys)Enum.Parse(typeof(System.Windows.Forms.Keys), entry.Value.ToString(), true);
                }
                catch (System.ArgumentException) { Current.Resources[entry.Key] = System.Windows.Forms.Keys.Space; }
                break;
              case "WindowHotKeyModifier":
                try
                {
                  Current.Resources[entry.Key] = (ModifierKeys)Enum.Parse(typeof(ModifierKeys), entry.Value.ToString(), true);
                }
                catch (System.ArgumentException) { Current.Resources[entry.Key] = ModifierKeys.Alt; }
                break;
              case "AppFont":
                Current.Resources[entry.Key] = new System.Windows.Media.FontFamily(Path.GetFullPath("./Config/Resources/#") + entry.Value.ToString());
                break;
              case "Animation":
                Current.Resources[entry.Key] = ParseAnimationSetting(entry.Value.ToString());
                break;
              case "Scorer":
                Current.Resources[entry.Key] = ParseScorerSetting(entry.Value.ToString());
                break;
            }
          }
          else if (PathSettings.Contains(entry.Key))
          {
            Current.Resources[entry.Key] = Path.GetFullPath(entry.Value.ToString());
          }
          else if (StringSettings.Contains(entry.Key))
          {
            Current.Resources[entry.Key] = entry.Value.ToString();
          }
          else if (ScreenDimensionsSettings.Contains(entry.Key))
          {
            Current.Resources[entry.Key] = ParseScreenDimensionsSetting(entry.Value.ToString());
          }
          else if (IntSettings.Contains(entry.Key))
          {
            Current.Resources[entry.Key] = ParseIntegerSetting(entry.Value.ToString());
          }
          else if (DoubleSettings.Contains(entry.Key))
          {
            Current.Resources[entry.Key] = ParseDoubleSetting(entry.Value.ToString());
          }
          else if (entry.Key.Contains("Color"))
          {
            Current.Resources[entry.Key] = new BrushConverter().ConvertFromString(entry.Value.ToString()) as SolidColorBrush;
          }
          else if (entry.Key.Contains("Rounding"))
          {
            Current.Resources[entry.Key] = ParseCornerRadiusSetting(entry.Value.ToString());
          }
          else if (
                entry.Key.Contains("Opacity")
                || entry.Key.Contains("Direction")
                || entry.Key.Contains("Radius")
                || entry.Key.Contains("Depth")
                || entry.Key.Contains("Size")
                || entry.Key.Contains("Height")
                || entry.Key.Contains("Width")
            )
          {
            Current.Resources[entry.Key] = ParseDoubleSetting(entry.Value.ToString());
          }
          else if (entry.Key.Contains("HorizontalAlignment"))
          {
            Current.Resources[entry.Key] = ParseHorizontalAlignmentSetting(entry.Value.ToString());
          }
          else if (entry.Key.Contains("RenderingBias"))
          {
            Current.Resources[entry.Key] = ParseRenderingBiasSetting(entry.Value.ToString());
          }
          else if (entry.Key.Contains("Padding") || entry.Key.Contains("Thickness") || entry.Key.Contains("Margin"))
          {
            Current.Resources[entry.Key] = ParseThicknessSetting(entry.Value.ToString());
          }
          else if (entry.Key.Contains("VerticalAlignment"))
          {
            Current.Resources[entry.Key] = ParseVerticalAlignmentSetting(entry.Value.ToString());
          }
          else if (entry.Key.Contains("Visibility"))
          {
            Current.Resources[entry.Key] = ParseVisibilitySetting(entry.Value.ToString());
          }
        }
      }
    }
  }
}
