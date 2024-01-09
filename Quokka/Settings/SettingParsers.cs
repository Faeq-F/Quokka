using System.Windows;
using System.Windows.Media.Effects;

namespace Quokka.Settings {

  public static class SettingParsers {

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

    public static VerticalAlignment parseVerticalAlignmentSetting(string settingValue) {
      //int
      //double
      //string
      //fointfamily
      //corner rad
      //thickness
      //brush
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
  }
}