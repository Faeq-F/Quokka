using FuzzySharp.SimilarityRatio;
using FuzzySharp.SimilarityRatio.Scorer;
using FuzzySharp.SimilarityRatio.Scorer.Composite;
using FuzzySharp.SimilarityRatio.Scorer.StrategySensitive;
using System;
using System.Globalization;
using System.Windows;
using System.Windows.Media;
using System.Windows.Media.Effects;
using XamlFlair;

namespace Quokka.Settings
{

  /// <summary>
  /// Provides methods for parsing and evaluating different types of application settings.
  /// </summary>
  public static class SettingParsers
  {

    /// <summary>
    /// Parses and evaluates settings that can have screen dimensions (e.g., <c>ScreenHeight</c> or <c>ScreenWidth</c>) (i.e., the <c>WindowTopMargin</c>, <c>WindowWidth</c>, and <c>ListContainerMaxHeight</c> settings).
    /// </summary>
    /// <param name="settingValue">The string representation of the setting value to be evaluated.</param>
    /// <returns>
    /// The evaluated double value. If the setting cannot be parsed, returns <c>0</c> and displays an error.
    /// </returns>
    /// <exception cref="ArgumentNullException">
    /// <paramref name="settingValue"/> is <see langword="null"/>.
    /// </exception>
    public static double ParseScreenDimensionsSetting(string settingValue)
    {
      try
      {
        if (settingValue == null)
        {
          throw new ArgumentNullException(nameof(settingValue));
        }
        settingValue = settingValue.Trim().Replace(" ", "");
        double output = 0;
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
          output = double.Parse(settingValue, new CultureInfo("en-US"));
          return output;
        }

        if (pastScreen.Length > 0)
        {
          char op = pastScreen[0];
          double optionalValue = double.Parse(pastScreen.Substring(1), new CultureInfo("en-US"));
          switch (op)
          {
            case '/':
              output /= optionalValue;
              break;

            case '*':
              output *= optionalValue;
              break;

            case '+':
              output += optionalValue;
              break;

            case '-':
              output -= optionalValue;
              break;
          }
        }

        return output;
      }
      catch (Exception e) when (e is System.FormatException || e is System.ArgumentException)
      {
        App.ShowErrorMessageBox(e, "Could not parse a screen dimensions setting with the value \"" + settingValue + "\"");
        return 0;
      }
    }

    /// <summary>
    /// Parses and evaluates <see cref="HorizontalAlignment"/> settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the setting value to be evaluated.</param>
    /// <returns>
    /// The evaluated <see cref="HorizontalAlignment"/> value. If the setting cannot be parsed, returns <see cref="HorizontalAlignment.Center"/> and displays an error.
    /// </returns>
    /// <exception cref="ArgumentNullException">
    /// <paramref name="settingValue"/> is <see langword="null"/>.
    /// </exception>
    public static HorizontalAlignment ParseHorizontalAlignmentSetting(string settingValue)
    {
      try
      {
        if (settingValue == null)
        {
          throw new ArgumentNullException(nameof(settingValue));
        }
        return (HorizontalAlignment)Enum.Parse(typeof(HorizontalAlignment), settingValue.ToString(), true);
      }
      catch (System.ArgumentException e) { App.ShowErrorMessageBox(e, "Could not parse a horizontal alignment setting with the value \"" + settingValue + "\""); return HorizontalAlignment.Center; }
    }

    /// <summary>
    /// Parses and evaluates <see cref="RenderingBias"/> settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the setting value to be evaluated.</param>
    /// <returns>
    /// The evaluated <see cref="RenderingBias"/> value. If the setting cannot be parsed, returns <see cref="RenderingBias.Quality"/> and displays an error.
    /// </returns>
    /// <exception cref="ArgumentNullException">
    /// <paramref name="settingValue"/> is <see langword="null"/>.
    /// </exception>
    public static RenderingBias ParseRenderingBiasSetting(string settingValue)
    {
      try
      {
        if (settingValue == null)
        {
          throw new ArgumentNullException(nameof(settingValue));
        }
        return (RenderingBias)Enum.Parse(typeof(RenderingBias), settingValue.ToString(), true);
      }
      catch (System.ArgumentException e) { App.ShowErrorMessageBox(e, "Could not parse a rendering bias setting with the value \"" + settingValue + "\""); return RenderingBias.Quality; }
    }

    /// <summary>
    /// Parses and evaluates <see cref="VerticalAlignment"/> settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the setting value to be evaluated.</param>
    /// <returns>
    /// The evaluated <see cref="VerticalAlignment"/> value. If the setting cannot be parsed, returns <see cref="VerticalAlignment.Center"/> and displays an error.
    /// </returns>
    /// <exception cref="ArgumentNullException">
    /// <paramref name="settingValue"/> is <see langword="null"/>.
    /// </exception>
    public static VerticalAlignment ParseVerticalAlignmentSetting(string settingValue)
    {
      try
      {
        if (settingValue == null)
        {
          throw new ArgumentNullException(nameof(settingValue));
        }
        return (VerticalAlignment)Enum.Parse(typeof(VerticalAlignment), settingValue.ToString(), true);
      }
      catch (System.ArgumentException e) { App.ShowErrorMessageBox(e, "Could not parse a vertical alignment setting with the value \"" + settingValue + "\""); return VerticalAlignment.Center; }
    }

    /// <summary>
    /// Parses and evaluates <see cref="Visibility"/> settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the setting value to be evaluated.</param>
    /// <returns>
    /// The evaluated <see cref="Visibility"/> value. If the setting cannot be parsed, returns <see cref="Visibility.Visible"/> and displays an error.
    /// </returns>
    /// <exception cref="ArgumentNullException">
    /// <paramref name="settingValue"/> is <see langword="null"/>.
    /// </exception>
    public static Visibility ParseVisibilitySetting(string settingValue)
    {
      try
      {
        if (settingValue == null)
        {
          throw new ArgumentNullException(nameof(settingValue));
        }
        return (Visibility)Enum.Parse(typeof(Visibility), settingValue.ToString(), true);
      }
      catch (System.ArgumentException e) { App.ShowErrorMessageBox(e, "Could not parse a visibility setting with the value \"" + settingValue + "\""); return Visibility.Visible; }
    }

    /// <summary>
    /// Parses and evaluates <see cref="Thickness"/> settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the setting value to be evaluated.</param>
    /// <returns>
    /// The evaluated <see cref="Thickness"/> value. If the setting cannot be parsed, returns a thickness of <c>0</c> and displays an error.
    /// </returns>
    public static Thickness ParseThicknessSetting(string settingValue)
    {
      try
      {
        return (Thickness)new ThicknessConverter().ConvertFromString(settingValue)!;
      }
      catch (System.FormatException e) { App.ShowErrorMessageBox(e, "Could not parse a thickness setting with the value \"" + settingValue + "\""); return (Thickness)new ThicknessConverter().ConvertFromString("0")!; }
    }

    /// <summary>
    /// Parses and evaluates <see cref="CornerRadius"/> settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the setting value to be evaluated.</param>
    /// <returns>
    /// The evaluated <see cref="CornerRadius"/> value. If the setting cannot be parsed, returns a corner radius of <c>0</c> and displays an error.
    /// </returns>
    public static CornerRadius ParseCornerRadiusSetting(string settingValue)
    {
      try
      {
        return (CornerRadius)new CornerRadiusConverter().ConvertFromString(settingValue)!;
      }
      catch (System.FormatException e) { App.ShowErrorMessageBox(e, "Could not parse a corner radius setting with the value \"" + settingValue + "\""); return (CornerRadius)new CornerRadiusConverter().ConvertFromString("0")!; }
    }

    /// <summary>
    /// Parses and evaluates <see cref="double"/> settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the setting value to be evaluated (using US culture format).</param>
    /// <returns>
    /// The evaluated double value. If the setting cannot be parsed, returns <c>0</c> and displays an error.
    /// </returns>
    public static Double ParseDoubleSetting(string settingValue)
    {
      try
      {
        return double.Parse(settingValue, new CultureInfo("en-US"));
      }
      catch (System.FormatException e) { App.ShowErrorMessageBox(e, "Could not parse a double setting with the value \"" + settingValue + "\""); return 0; }
    }

    /// <summary>
    /// Parses and evaluates <see cref="int"/> settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the setting value to be evaluated (using US culture format).</param>
    /// <returns>
    /// The evaluated integer value. If the setting cannot be parsed, returns <c>0</c> and displays an error.
    /// </returns>
    public static int ParseIntegerSetting(string settingValue)
    {
      try
      {
        return int.Parse(settingValue, new CultureInfo("en-US"));
      }
      catch (System.FormatException e) { App.ShowErrorMessageBox(e, "Could not parse an integer setting with the value \"" + settingValue + "\""); return 0; }
    }

    /// <summary>
    /// Parses and evaluates the scorer setting used for fuzzy search.
    /// </summary>
    /// <param name="settingValue">The string representation of the scorer setting value. Acceptable values:
    /// <list type="bullet">
    /// <item><description><c>ratio</c> (maps to <see cref="DefaultRatioScorer"/>)</description></item>
    /// <item><description><c>partialRatio</c> (maps to <see cref="PartialRatioScorer"/>)</description></item>
    /// <item><description><c>tokenSet</c> (maps to <see cref="TokenSetScorer"/>)</description></item>
    /// <item><description><c>partialTokenSet</c> (maps to <see cref="PartialTokenSetScorer"/>)</description></item>
    /// <item><description><c>tokenSort</c> (maps to <see cref="TokenSortScorer"/>)</description></item>
    /// <item><description><c>partialTokenSort</c> (maps to <see cref="PartialTokenSortScorer"/>)</description></item>
    /// <item><description><c>tokenAbbreviation</c> (maps to <see cref="TokenAbbreviationScorer"/>)</description></item>
    /// <item><description><c>partialTokenAbbreviation</c> (maps to <see cref="PartialTokenAbbreviationScorer"/>)</description></item>
    /// <item><description><c>weighted</c> (maps to <see cref="WeightedRatioScorer"/>)</description></item>
    /// </list>
    /// </param>
    /// <returns>
    /// The evaluated <see cref="IRatioScorer"/> instance. If the setting cannot be parsed, returns a scorer via <see cref="PartialRatioScorer"/> and displays an error.
    /// </returns>
    public static IRatioScorer ParseScorerSetting(string settingValue)
    {
      switch (settingValue)
      {
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
          App.ShowErrorMessageBox(new FormatException("Could not parse the scorer setting with the value \"" + settingValue + "\""), "Error");
          return ScorerCache.Get<PartialRatioScorer>();
      }
    }

    /// <summary>
    /// Parses and evaluates <see cref="SolidColorBrush"/> settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the color value.</param>
    /// <returns>
    /// The evaluated <see cref="SolidColorBrush"/> value. If the setting cannot be parsed, returns a transparent brush and displays an error.
    /// </returns>
    public static SolidColorBrush ParseSolidColorBrush(string settingValue)
    {
      try
      {
        return (SolidColorBrush)new BrushConverter().ConvertFromString(settingValue);
      }
      catch (System.FormatException e)
      {
        App.ShowErrorMessageBox(e, "Could not parse a color setting with the value \"" + settingValue + "\"");
        return (SolidColorBrush)new BrushConverter().ConvertFromString("Transparent")!;
      }
    }

    /// <summary>
    /// Parses and evaluates <see cref="FontWeight"/> settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the font weight value.</param>
    /// <returns>
    /// The evaluated <see cref="FontWeight"/> value. If the setting cannot be parsed, returns <see cref="FontWeights.Normal"/> and displays an error.
    /// </returns>
    public static FontWeight ParseFontWeight(string settingValue)
    {
      try
      {
        return (FontWeight)new FontWeightConverter().ConvertFromString(settingValue);
      }
      catch (System.FormatException e)
      {
        App.ShowErrorMessageBox(e, "Could not parse a font weight setting with the value \"" + settingValue + "\"");
        return (FontWeight)new FontWeightConverter().ConvertFromString("Normal")!;
      }
    }

    /// <summary>
    /// Parses and evaluates the <see cref="AnimationSettings"/> to be used for the results list.
    /// </summary>
    /// <param name="settingValue">The string representation of the animation setting. Acceptable values:
    /// <list type="bullet">
    /// <item><description><c>FadeIn</c> (maps to <see cref="AnimationKind.FadeFrom"/>)</description></item>
    /// <item><description><c>Unblur</c> (maps to <see cref="AnimationKind.BlurFrom"/>)</description></item>
    /// <item><description><c>ScaleFromLeft</c>, <c>ScaleFromRight</c>, or <c>ScaleHorizontally</c> (maps to <see cref="AnimationKind.ScaleXFrom"/>)</description></item>
    /// <item><description><c>ScaleFromTop</c>, <c>ScaleFromBottom</c>, or <c>ScaleVertically</c> (maps to <see cref="AnimationKind.ScaleYFrom"/>)</description></item>
    /// <item><description><c>SlideFromLeft</c> or <c>SlideFromRight</c> (maps to <see cref="AnimationKind.TranslateXFrom"/>)</description></item>
    /// <item><description><c>SlideFromTop</c> or <c>SlideFromBottom</c> (maps to <see cref="AnimationKind.TranslateYFrom"/>)</description></item>
    /// </list>
    /// </param>
    /// <returns>
    /// The evaluated <see cref="AnimationSettings"/> value. If the setting cannot be parsed, returns default animation settings and displays an error.
    /// </returns>
    public static AnimationSettings ParseAnimationSetting(string settingValue)
    {
      double BlurRadius = (double)App.Current.Resources["AnimationBlurRadius"];
      int Offset = (int)App.Current.Resources["AnimationOffset"];
      int NegativeOffset = 0 - Offset;
      switch (settingValue)
      {
        case "FadeIn":
          return new AnimationSettings
          {
            Kind = AnimationKind.FadeFrom,
            Opacity = 0
          };
        case "Unblur":
          return new AnimationSettings
          {
            Kind = AnimationKind.BlurFrom,
            BlurRadius = BlurRadius
          };
        case "ScaleFromLeft":
          return new AnimationSettings
          {
            Kind = AnimationKind.ScaleXFrom,
            ScaleX = 0,
            TransformCenterPoint = new Point(0, 0.5)
          };
        case "ScaleFromTop":
          return new AnimationSettings
          {
            Kind = AnimationKind.ScaleYFrom,
            ScaleY = 0,
            TransformCenterPoint = new Point(0.5, 0)
          };
        case "ScaleFromRight":
          return new AnimationSettings
          {
            Kind = AnimationKind.ScaleXFrom,
            ScaleX = 0,
            TransformCenterPoint = new Point(1, 0.5)
          };
        case "ScaleFromBottom":
          return new AnimationSettings
          {
            Kind = AnimationKind.ScaleYFrom,
            ScaleY = 0,
            TransformCenterPoint = new Point(0.5, 1)
          };
        case "ScaleHorizontally":
          return new AnimationSettings
          {
            Kind = AnimationKind.ScaleXFrom,
            ScaleX = 0
          };
        case "ScaleVertically":
          return new AnimationSettings
          {
            Kind = AnimationKind.ScaleYFrom,
            ScaleY = 0
          };
        case "SlideFromLeft":
          return new AnimationSettings
          {
            Kind = AnimationKind.TranslateXFrom,
            OffsetX = new Offset { OffsetValue = NegativeOffset }
          };
        case "SlideFromTop":
          return new AnimationSettings
          {
            Kind = AnimationKind.TranslateYFrom,
            OffsetY = new Offset { OffsetValue = NegativeOffset }
          };
        case "SlideFromRight":
          return new AnimationSettings
          {
            Kind = AnimationKind.TranslateXFrom,
            OffsetX = new Offset { OffsetValue = Offset }
          };
        case "SlideFromBottom":
          return new AnimationSettings
          {
            Kind = AnimationKind.TranslateYFrom,
            OffsetY = new Offset { OffsetValue = Offset }
          };
        default:
          App.ShowErrorMessageBox(new FormatException("Could not parse the animation setting with the value \"" + settingValue + "\""), "Error");
          return new AnimationSettings { };
      }
    }
  }
}
