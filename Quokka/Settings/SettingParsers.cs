using System.Windows;

namespace Quokka.Settings
{
  public static class SettingParsers
  {

    static public Thickness parseThicknessSetting(string settingValue)
    {
      Thickness thickness;
      if (settingValue.Contains(","))
      {
        string[] thicknesses = settingValue.Split(",");
        thickness = new Thickness();
        thickness.Left = double.Parse(thicknesses[0]);
        thickness.Top = double.Parse(thicknesses[1]);
        thickness.Right = double.Parse(thicknesses[2]);
        thickness.Bottom = double.Parse(thicknesses[3]);
      }
      else
      {
        thickness = new Thickness(double.Parse(settingValue));
      }
      return thickness;
    }

    static public double parseScreenDimensionsSetting(string settingValue)
    {
      settingValue = settingValue.Trim().Replace(" ", "");
      double output = -1;
      string pastScreen = "";
      if (settingValue.Contains("PrimaryScreenHeight"))
      {
        pastScreen = settingValue.Replace("PrimaryScreenHeight", "");
        output = SystemParameters.PrimaryScreenHeight;
      }
      else if (settingValue.Contains("PrimaryScreenWidth"))
      {
        pastScreen = settingValue.Replace("PrimaryScreenWidth", "");
        output = SystemParameters.PrimaryScreenWidth;
      }
      else
      {
        output = double.Parse(settingValue);
        return output;
      }
      try
      {
        char op = pastScreen[0];
        double optionalValue = double.Parse(pastScreen.Substring(1));
        switch (op)
        {
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
      catch { } // There is no operator
      return output;
    }
  }
}
