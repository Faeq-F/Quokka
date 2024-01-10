using System.Windows;
using System.Windows.Media.Effects;

namespace Quokka.Settings {
  /**
    * <summary>
    * All of the methods for parsing and evaluating different types of app settings.
    * </summary>
    */

  public static class SettingParsers {
    /**
      * <summary>
      * Parses and evaluates HorizontalAlignment settings.
      * </summary>
      * <param name="settingValue">The value of a setting to be evaluated.</param>
      * <returns>
      * The setting value evaluated. If the setting cannot be evaluated correctly, HorizontalAlignment.Center is returned.
      * </returns>
      */

    public static HorizontalAlignment parseHorizontalAlignmentSetting(string settingValue) {
      switch (settingValue.ToLower()) {
        case "center":
          return HorizontalAlignment.Center;

        case "left":
          return HorizontalAlignment.Left;

        case "right":
          return HorizontalAlignment.Right;

        case "stretch":
          return HorizontalAlignment.Stretch;

        default:
          return HorizontalAlignment.Center;
      }
    }

    /**
      * <summary>
      * Parses and evaluates RenderingBias settings.
      * </summary>
      * <param name="settingValue">The value of a setting to be evaluated.</param>
      * <returns>
      * The setting value evaluated. If the setting cannot be evaluated correctly, RenderingBias.Quality is returned.
      * </returns>
      */

    public static RenderingBias parseRenderingBiasSetting(string settingValue) {
      switch (settingValue.ToLower()) {
        case "quality":
          return RenderingBias.Quality;

        case "performance":
          return RenderingBias.Performance;

        default:
          return RenderingBias.Quality;
      }
    }

    /**
      * <summary>
      * Parses and evaluates settings that can have ScreenHeight & ScreenWidth values in them.
      * </summary>
      * <param name="settingValue">The value of a setting to be evaluated.</param>
      * <returns>
      * The setting value evaluated. If the setting cannot be evaluated correctly, -1 is returned.
      * </returns>
      */

    public static double parseScreenDimensionsSetting(string settingValue) {
      settingValue = settingValue.Trim().Replace(" ", "");
      double output = -1;
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
    }

    /**
      * <summary>
      * Parses and evaluates Thickness settings.
      * </summary>
      * <param name="settingValue">The value of a setting to be evaluated.</param>
      * <returns>
      * The setting value evaluated.
      * </returns>
      */

    public static Thickness parseThicknessSetting(string settingValue) {
      Thickness thickness;
      if (settingValue.Contains(",")) {
        string[] thicknesses = settingValue.Split(",");
        thickness = new Thickness();
        thickness.Left = double.Parse(thicknesses[0]);
        thickness.Top = double.Parse(thicknesses[1]);
        thickness.Right = double.Parse(thicknesses[2]);
        thickness.Bottom = double.Parse(thicknesses[3]);
      } else {
        thickness = new Thickness(double.Parse(settingValue));
      }
      return thickness;
    }

    /**
      * <summary>
      * Parses and evaluates VerticalAlignment settings.
      * </summary>
      * <param name="settingValue">The value of a setting to be evaluated.</param>
      * <returns>
      * The setting value evaluated. If the setting cannot be evaluated correctly, VerticalAlignment.Center is returned.
      * </returns>
      */

    public static VerticalAlignment parseVerticalAlignmentSetting(string settingValue) {
      switch (settingValue.ToLower()) {
        case "top":
          return VerticalAlignment.Top;

        case "bottom":
          return VerticalAlignment.Bottom;

        case "center":
          return VerticalAlignment.Center;

        case "stretch":
          return VerticalAlignment.Stretch;

        default:
          return VerticalAlignment.Center;
      }
    }

    /**
      * <summary>
      * Parses and evaluates Visibility settings.
      * </summary>
      * <param name="settingValue">The value of a setting to be evaluated.</param>
      * <returns>
      * The setting value evaluated. If the setting cannot be evaluated correctly, Visibility.Visible is returned.
      * </returns>
      */

    public static Visibility parseVisibilitySettings(string settingValue) {
      switch (settingValue.ToLower()) {
        case "collapsed":
          return Visibility.Collapsed;

        case "hidden":
          return Visibility.Hidden;

        case "visible":
          return Visibility.Visible;

        default:
          return Visibility.Visible;
      }
    }
  }
}