using FuzzySharp.SimilarityRatio;
using FuzzySharp.SimilarityRatio.Scorer;
using FuzzySharp.SimilarityRatio.Scorer.Composite;
using FuzzySharp.SimilarityRatio.Scorer.StrategySensitive;
using System;
using System.Windows;
using System.Windows.Media.Effects;
using XamlFlair;

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
    /// The setting value evaluated. If the setting cannot be evaluated correctly, 0 is returned and an error message is shown to the user.
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
      } catch (System.FormatException e) { App.ShowErrorMessageBox(e, "Could not parse a screen dimensions setting with the value \"" + settingValue + "\""); return 0; }
    }

    /// <summary>
    /// Parses and evaluates HorizontalAlignment settings.
    /// </summary>
    /// <param name="settingValue">The value of a setting to be evaluated.</param>
    /// <returns>
    /// The setting value evaluated. If the setting cannot be evaluated correctly, HorizontalAlignment.Center is returned and an error message is shown to the user.
    /// </returns>
    public static HorizontalAlignment parseHorizontalAlignmentSetting(string settingValue) {
      try {
        return (HorizontalAlignment) Enum.Parse(typeof(HorizontalAlignment), settingValue.ToString(), true);
      } catch (System.ArgumentException e) { App.ShowErrorMessageBox(e, "Could not parse a horizontal alignment setting with the value \"" + settingValue + "\""); return HorizontalAlignment.Center; }
    }

    /// <summary>
    /// Parses and evaluates RenderingBias settings.
    /// </summary>
    /// <param name="settingValue">The value of a setting to be evaluated.</param>
    /// <returns>
    /// The setting value evaluated. If the setting cannot be evaluated correctly, RenderingBias.Quality is returned and an error message is shown to the user.
    /// </returns>
    public static RenderingBias parseRenderingBiasSetting(string settingValue) {
      try {
        return (RenderingBias) Enum.Parse(typeof(RenderingBias), settingValue.ToString(), true);
      } catch (System.ArgumentException e) { App.ShowErrorMessageBox(e, "Could not parse a rendering bias setting with the value \"" + settingValue + "\""); return RenderingBias.Quality; }
    }

    /// <summary>
    /// Parses and evaluates VerticalAlignment settings.
    /// </summary>
    /// <param name="settingValue">The value of a setting to be evaluated.</param>
    /// <returns>
    /// The setting value evaluated. If the setting cannot be evaluated correctly, VerticalAlignment.Center is returned and an error message is shown to the user.
    /// </returns>
    public static VerticalAlignment parseVerticalAlignmentSetting(string settingValue) {
      try {
        return (VerticalAlignment) Enum.Parse(typeof(VerticalAlignment), settingValue.ToString(), true);
      } catch (System.ArgumentException e) { App.ShowErrorMessageBox(e, "Could not parse a vertical alignment setting with the value \"" + settingValue + "\""); return VerticalAlignment.Center; }
    }

    /// <summary>
    /// Parses and evaluates Visibility settings.
    /// </summary>
    /// <param name="settingValue">The value of a setting to be evaluated.</param>
    /// <returns>
    /// The setting value evaluated. If the setting cannot be evaluated correctly, Visibility.Visible is returned and an error message is shown to the user.
    /// </returns>
    public static Visibility parseVisibilitySetting(string settingValue) {
      try {
        return (Visibility) Enum.Parse(typeof(Visibility), settingValue.ToString(), true);
      } catch (System.ArgumentException e) { App.ShowErrorMessageBox(e, "Could not parse a visibility setting with the value \"" + settingValue + "\""); return Visibility.Visible; }
    }

    /// <summary>
    /// Parses and evaluates Thickness settings.
    /// </summary>
    /// <param name="settingValue">The value of a setting to be evaluated.</param>
    /// <returns>
    /// The setting value evaluated. If the setting cannot be evaluated correctly, a thickness of 0 is returned and an error message is shown to the user.
    /// </returns>
    public static Thickness parseThicknessSetting(string settingValue) {
      try {
        return (Thickness) new ThicknessConverter().ConvertFromString(settingValue)!;
      } catch (System.FormatException e) { App.ShowErrorMessageBox(e, "Could not parse a thickness setting with the value \"" + settingValue + "\""); return (Thickness) new ThicknessConverter().ConvertFromString("0")!; }
    }

    /// <summary>
    /// Parses and evaluates CornerRadius settings.
    /// </summary>
    /// <param name="settingValue">The value of a setting to be evaluated.</param>
    /// <returns>The setting value evaluated. If the setting cannot be evaluated correctly, a corner radius of 0 is returned and an error message is shown to the user.</returns>
    public static CornerRadius parseCornerRadiusSetting(string settingValue) {
      try {
        return (CornerRadius) new CornerRadiusConverter().ConvertFromString(settingValue)!;
      } catch (System.FormatException e) { App.ShowErrorMessageBox(e, "Could not parse a corner radius setting with the value \"" + settingValue + "\""); return (CornerRadius) new CornerRadiusConverter().ConvertFromString("0")!; }
    }

    /// <summary>
    /// Parses and evaluates double settings (i.e., of double type).
    /// </summary>
    /// <param name="settingValue">The value of a setting to be evaluated.</param>
    /// <returns>The setting value evaluated. If the setting cannot be evaluated correctly, 0 is returned and an error message is shown to the user.</returns>
    public static Double parseDoubleSetting(string settingValue) {
      try {
        return double.Parse(settingValue);
      } catch (System.FormatException e) { App.ShowErrorMessageBox(e, "Could not parse a double setting with the value \"" + settingValue + "\""); return 0; }
    }

    /// <summary>
    /// Parses and evaluates integer settings (i.e., of integer type).
    /// </summary>
    /// <param name="settingValue">The value of a setting to be evaluated.</param>
    /// <returns>The setting value evaluated. If the setting cannot be evaluated correctly, 0 is returned and an error message is shown to the user.</returns>
    public static int parseIntegerSetting(string settingValue) {
      try {
        return int.Parse(settingValue);
      } catch (System.FormatException e) { App.ShowErrorMessageBox(e, "Could not parse an integer setting with the value \"" + settingValue + "\""); return 0; }
    }

    /// <summary>
    /// Parses and evaluates the setting for the scorer that is used during fuzzy search
    /// </summary>
    /// <param name="settingValue">
    /// The value of the setting to be evaluated.
    /// 
    /// Values accepted: 
    /// ratio, partialRatio, tokenSet, partialTokenSet, tokenSort, partialTokenSort, tokenAbbreviation, partialTokenAbbreviation, weighted
    /// </param>
    /// <returns>The setting value evaluated. If the setting cannot be evaluated correctly, a PartialRatioScorer will be used and an error message is shown to the user.</returns>
    public static IRatioScorer parseScorerSetting(string settingValue) {
      switch (settingValue) {
        case "ratio": return ScorerCache.Get<DefaultRatioScorer>();
        case "partialRatio": return ScorerCache.Get<PartialRatioScorer>();
        case "tokenSet": return ScorerCache.Get<TokenSetScorer>();
        case "partialTokenSet": return ScorerCache.Get<PartialTokenSetScorer>();
        case "tokenSort": return ScorerCache.Get<TokenSortScorer>();
        case "partialTokenSort": return ScorerCache.Get<PartialTokenSortScorer>();
        case "tokenAbbreviation": return ScorerCache.Get<TokenAbbreviationScorer>();
        case "partialTokenAbbreviation": return ScorerCache.Get<PartialTokenAbbreviationScorer>();
        case "weighted": return ScorerCache.Get<WeightedRatioScorer>();
        default:
          MessageBox.Show("Could not parse the scorer setting with the value \"" + settingValue + "\"", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
          return ScorerCache.Get<PartialRatioScorer>();
      }
    }

    /// <summary>
    /// Parses and evaluates the setting for the animation to be used for the app results list.
    /// </summary>
    /// <param name="settingValue">
    /// The value of the setting to be evaluated.
    /// 
    /// Values accepted: FadeIn, Unblur, ScaleFromLeft, ScaleFromTop, ScaleFromRight, ScaleFromBottom, ScaleHorizontally, ScaleVertically, SlideFromLeft, SlideFromTop, SlideFromRight, SlideFromBottom
    /// </param>
    /// <returns>The setting value evaluated. If the setting cannot be evaluated correctly, an empty animation (no animation) will be used  and an error message is shown to the user.</returns>
    public static AnimationSettings parseAnimationSetting(string settingValue) {
      double BlurRadius = (double) App.Current.Resources["AnimationBlurRadius"];
      int Offset = (int) App.Current.Resources["AnimationOffset"];
      int NegativeOffset = 0 - Offset;
      switch (settingValue) {
        case "FadeIn":
          return new AnimationSettings {
            Kind = AnimationKind.FadeFrom,
            Opacity = 0
          };
        case "Unblur":
          return new AnimationSettings {
            Kind = AnimationKind.BlurFrom,
            BlurRadius = BlurRadius
          };
        case "ScaleFromLeft":
          return new AnimationSettings {
            Kind = AnimationKind.ScaleXFrom,
            ScaleX = 0,
            TransformCenterPoint = new Point(0, 0.5)
          };
        case "ScaleFromTop":
          return new AnimationSettings {
            Kind = AnimationKind.ScaleYFrom,
            ScaleY = 0,
            TransformCenterPoint = new Point(0.5, 0)
          };
        case "ScaleFromRight":
          return new AnimationSettings {
            Kind = AnimationKind.ScaleXFrom,
            ScaleX = 0,
            TransformCenterPoint = new Point(1, 0.5)
          };
        case "ScaleFromBottom":
          return new AnimationSettings {
            Kind = AnimationKind.ScaleYFrom,
            ScaleY = 0,
            TransformCenterPoint = new Point(0.5, 1)
          };
        case "ScaleHorizontally":
          return new AnimationSettings {
            Kind = AnimationKind.ScaleXFrom,
            ScaleX = 0
          };
        case "ScaleVertically":
          return new AnimationSettings {
            Kind = AnimationKind.ScaleYFrom,
            ScaleY = 0
          };
        case "SlideFromLeft":
          return new AnimationSettings {
            Kind = AnimationKind.TranslateXFrom,
            OffsetX = new Offset { OffsetValue = NegativeOffset }
          };
        case "SlideFromTop":
          return new AnimationSettings {
            Kind = AnimationKind.TranslateYFrom,
            OffsetY = new Offset { OffsetValue = NegativeOffset }
          };
        case "SlideFromRight":
          return new AnimationSettings {
            Kind = AnimationKind.TranslateXFrom,
            OffsetX = new Offset { OffsetValue = Offset }
          };
        case "SlideFromBottom":
          return new AnimationSettings {
            Kind = AnimationKind.TranslateYFrom,
            OffsetY = new Offset { OffsetValue = Offset }
          };
        default:
          MessageBox.Show("Could not parse the animation setting with the value \"" + settingValue + "\"", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
          return new AnimationSettings { };
      }
    }
  }
}