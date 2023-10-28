using System;
using System.Diagnostics;
using System.Windows;

namespace Quokka {
  public static class SettingParsers {

    static public Thickness parseThicknessSetting(string settingValue) {
      Thickness thickness;
      if (settingValue.Contains(",")) {
        string[] thicknesses = settingValue.Split(",");
        thickness = new Thickness();
        thickness.Left = int.Parse(thicknesses[0]);
        thickness.Top = int.Parse(thicknesses[1]);
        thickness.Right = int.Parse(thicknesses[2]);
        thickness.Bottom = int.Parse(thicknesses[3]);
      } else {
        thickness = new Thickness(int.Parse(settingValue));
      }
      return thickness;
    }

    static public double parseScreenDimensionsSetting(string settingValue) {
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
      try {
        char op = pastScreen[0];
        double optionalValue = Double.Parse(pastScreen.Substring(1));
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
      } catch { } // There is no operator
      return output;
    }
  }
}
