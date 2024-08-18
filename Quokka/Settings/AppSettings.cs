using Newtonsoft.Json.Linq;
using System;
using System.IO;
using System.Linq;
using System.Windows;
using System.Windows.Media;
using static Quokka.Settings.SettingParsers;

namespace Quokka {
  public partial class App {
    private string[] IntSettings = { "MaxResults" };
    private string[] ScreenDimensionsSettings = { "WindowWidth", "ListContainerMaxHeight" };
    private string[] SpecialSettings = { "AppFont", "WindowTopMargin", "ListItemIconColumnWidth", "WindowHotKey", "WindowHotKeyModifier" };
    private string[] StringSettings = { "IgnoreMaxResultsFlag", "SearchFieldPlaceholder" };
    private string[] PathSettings = { "FileManager", "TextEditor" };

    private void applyAppSettings(JObject obj) {
      foreach (var entry in obj) {
        // recurse until attribute-value pairs obtained
        if (entry.Value!.ToString().Contains("{")) {
          applyAppSettings(JObject.Parse(entry.Value.ToString()));
        } else {
          // applying settings based on type
          if (SpecialSettings.Contains(entry.Key)) {
            switch (entry.Key) {
              case "WindowTopMargin":
                Current.Resources[entry.Key] = parseThicknessSetting("0," + parseScreenDimensionsSetting(entry.Value.ToString()) + ",0,0");
                break;
              case "ListItemIconColumnWidth":
                Current.Resources[entry.Key] = new GridLength(parseDoubleSetting(entry.Value.ToString()));
                break;
              case "WindowHotKey":
                try {
                  Current.Resources[entry.Key] = (System.Windows.Forms.Keys) Enum.Parse(typeof(System.Windows.Forms.Keys), entry.Value.ToString(), true);
                } catch (System.ArgumentException) { Current.Resources[entry.Key] = System.Windows.Forms.Keys.Space; }
                break;
              case "WindowHotKeyModifier":
                try {
                  Current.Resources[entry.Key] = (ModifierKeys) Enum.Parse(typeof(ModifierKeys), entry.Value.ToString(), true);
                } catch (System.ArgumentException) { Current.Resources[entry.Key] = ModifierKeys.Alt; }
                break;
              case "AppFont":
                Current.Resources[entry.Key] = new System.Windows.Media.FontFamily(Path.GetFullPath("./Config/Resources/#") + entry.Value.ToString());
                break;
            }
          } else if (PathSettings.Contains(entry.Key)) {
            Current.Resources[entry.Key] = Path.GetFullPath(entry.Value.ToString());
          } else if (StringSettings.Contains(entry.Key)) {
            Current.Resources[entry.Key] = entry.Value.ToString();
          } else if (ScreenDimensionsSettings.Contains(entry.Key)) {
            Current.Resources[entry.Key] = parseScreenDimensionsSetting(entry.Value.ToString());
          } else if (IntSettings.Contains(entry.Key)) {
            Current.Resources[entry.Key] = parseIntegerSetting(entry.Value.ToString());
          } else if (entry.Key.Contains("Color")) {
            Current.Resources[entry.Key] = new BrushConverter().ConvertFromString(entry.Value.ToString()) as SolidColorBrush;
          } else if (entry.Key.Contains("Rounding")) {
            Current.Resources[entry.Key] = parseCornerRadiusSetting(entry.Value.ToString());
          } else if (
                entry.Key.Contains("Opacity")
                || entry.Key.Contains("Direction")
                || entry.Key.Contains("Radius")
                || entry.Key.Contains("Depth")
                || entry.Key.Contains("Size")
                || entry.Key.Contains("Height")
                || entry.Key.Contains("Width")
            ) {
            Current.Resources[entry.Key] = parseDoubleSetting(entry.Value.ToString());
          } else if (entry.Key.Contains("HorizontalAlignment")) {
            Current.Resources[entry.Key] = parseHorizontalAlignmentSetting(entry.Value.ToString());
          } else if (entry.Key.Contains("RenderingBias")) {
            Current.Resources[entry.Key] = parseRenderingBiasSetting(entry.Value.ToString());
          } else if (entry.Key.Contains("Padding") || entry.Key.Contains("Thickness") || entry.Key.Contains("Margin")) {
            Current.Resources[entry.Key] = parseThicknessSetting(entry.Value.ToString());
          } else if (entry.Key.Contains("VerticalAlignment")) {
            Current.Resources[entry.Key] = parseVerticalAlignmentSetting(entry.Value.ToString());
          } else if (entry.Key.Contains("Visibility")) {
            Current.Resources[entry.Key] = parseVisibilitySetting(entry.Value.ToString());
          }
        }
      }
    }
  }
}
