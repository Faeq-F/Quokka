using System;
using System.Windows;
using System.Windows.Media.Effects;

namespace Quokka.Settings {

  /// <summary>
  /// All of the methods for parsing and evaluating different types of app settings.
  /// </summary>
  public static class SettingParsers {

    /// <summary>
    /// Parses and evaluates settings that can have ScreenHeight and ScreenWidth values in them (i.e., the "WindowTopMargin", "WindowWidth" and "ListContainerMaxHeight" settings).
    /// </summary>
    /// <param name="settingValue">The value of a setting to be evaluated.</param>
    /// <returns>
    /// The setting value evaluated. If the setting cannot be evaluated correctly, 0 is returned.
    /// </returns>
    public static double parseScreenDimensionsSetting(string settingValue) {
      try {
        settingValue = settingValue.Trim().Replace(" ", "");
        double output = 0;
        string pastScreen = "";
        if (settingValue.Contains("PrimaryScreenHeight")) {
          pastScreen = settingValue.Replace("PrimaryScreenHeight", "");
          output = SystemParameters.PrimaryScreenHeight;
        } else if (settingValue.Contains("PrimaryScreenWidth")) {
          pastScreen = settingValue.Replace("PrimaryScreenWidth", "");
          output = SystemParameters.PrimaryScreenWidth;
        } else {
          output = double.Parse(settingValue);
          return output;
        }

        if (pastScreen.Length > 0) {
          char op = pastScreen[0];
          double optionalValue = double.Parse(pastScreen.Substring(1));
          switch (op) {
            case '/':
              output = output / optionalValue;
              break;

            case '*':
              output = output * optionalValue;
              break;

            case '+':
              output = output + optionalValue;
              break;

            case '-':
              output = output - optionalValue;
              break;
          }
        }

        return output;
      } catch (System.FormatException) { return 0; }
    }

    /// <summary>
    /// Parses and evaluates HorizontalAlignment settings.
    /// </summary>
    /// <param name="settingValue">The value of a setting to be evaluated.</param>
    /// <returns>
    /// The setting value evaluated. If the setting cannot be evaluated correctly, HorizontalAlignment.Center is returned.
    /// </returns>
    public static HorizontalAlignment parseHorizontalAlignmentSetting(string settingValue) {
      try {
        return (HorizontalAlignment) Enum.Parse(typeof(HorizontalAlignment), settingValue.ToString(), true);
      } catch (System.ArgumentException) { return HorizontalAlignment.Center; }
    }

    /// <summary>
    /// Parses and evaluates RenderingBias settings.
    /// </summary>
    /// <param name="settingValue">The value of a setting to be evaluated.</param>
    /// <returns>
    /// The setting value evaluated. If the setting cannot be evaluated correctly, RenderingBias.Quality is returned.
    /// </returns>
    public static RenderingBias parseRenderingBiasSetting(string settingValue) {
      try {
        return (RenderingBias) Enum.Parse(typeof(RenderingBias), settingValue.ToString(), true);
      } catch (System.ArgumentException) { return RenderingBias.Quality; }
    }

    /// <summary>
    /// Parses and evaluates VerticalAlignment settings.
    /// </summary>
    /// <param name="settingValue">The value of a setting to be evaluated.</param>
    /// <returns>
    /// The setting value evaluated. If the setting cannot be evaluated correctly, VerticalAlignment.Center is returned.
    /// </returns>
    public static VerticalAlignment parseVerticalAlignmentSetting(string settingValue) {
      try {
        return (VerticalAlignment) Enum.Parse(typeof(VerticalAlignment), settingValue.ToString(), true);
      } catch (System.ArgumentException) { return VerticalAlignment.Center; }
    }

    /// <summary>
    /// Parses and evaluates Visibility settings.
    /// </summary>
    /// <param name="settingValue">The value of a setting to be evaluated.</param>
    /// <returns>
    /// The setting value evaluated. If the setting cannot be evaluated correctly, Visibility.Visible is returned.
    /// </returns>
    public static Visibility parseVisibilitySetting(string settingValue) {
      try {
        return (Visibility) Enum.Parse(typeof(Visibility), settingValue.ToString(), true);
      } catch (System.ArgumentException) { return Visibility.Visible; }
    }

    /// <summary>
    /// Parses and evaluates Thickness settings.
    /// </summary>
    /// <param name="settingValue">The value of a setting to be evaluated.</param>
    /// <returns>
    /// The setting value evaluated. If the setting cannot be evaluated correctly, a thickness of 0 is returned.
    /// </returns>
    public static Thickness parseThicknessSetting(string settingValue) {
      try {
        return (Thickness) new ThicknessConverter().ConvertFromString(settingValue)!;
      } catch (System.FormatException) { return (Thickness) new ThicknessConverter().ConvertFromString("0")!; }
    }

    /// <summary>
    /// Parses and evaluates CornerRadius settings.
    /// </summary>
    /// <param name="settingValue">The value of a setting to be evaluated.</param>
    /// <returns>The setting value evaluated. If the setting cannot be evaluated correctly, a corner radius of 0 is returned.</returns>
    public static CornerRadius parseCornerRadiusSetting(string settingValue) {
      try {
        return (CornerRadius) new CornerRadiusConverter().ConvertFromString(settingValue)!;
      } catch (System.FormatException) { return (CornerRadius) new CornerRadiusConverter().ConvertFromString("0")!; }
    }

    /// <summary>
    /// Parses and evaluates double settings (i.e., of double type).
    /// </summary>
    /// <param name="settingValue">The value of a setting to be evaluated.</param>
    /// <returns>The setting value evaluated. If the setting cannot be evaluated correctly, 0 is returned.</returns>
    public static Double parseDoubleSetting(string settingValue) {
      try {
        return double.Parse(settingValue);
      } catch (System.FormatException) { return 0; }
    }

    /// <summary>
    /// Parses and evaluates integer settings (i.e., of integer type).
    /// </summary>
    /// <param name="settingValue">The value of a setting to be evaluated.</param>
    /// <returns>The setting value evaluated. If the setting cannot be evaluated correctly, 0 is returned.</returns>
    public static int parseIntegerSetting(string settingValue) {
      try {
        return int.Parse(settingValue);
      } catch (System.FormatException) { return 0; }
    }
  }
}