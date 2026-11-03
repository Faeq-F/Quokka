using FuzzySharp.SimilarityRatio;
using FuzzySharp.SimilarityRatio.Scorer;
using FuzzySharp.SimilarityRatio.Scorer.Composite;
using FuzzySharp.SimilarityRatio.Scorer.StrategySensitive;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
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
    /// Parses and evaluates settings that can have screen dimensions
    /// (i.e., the <c>WindowTopMargin</c>, <c>WindowWidth</c>, and <c>ListContainerMaxHeight</c> settings),
    /// resolved against the given active screen dimensions.
    /// Supports percentage tokens <c>%H</c> (percentage of <paramref name="activeScreenHeight"/>)
    /// and <c>%W</c> (percentage of <paramref name="activeScreenWidth"/>), as well as
    /// fixed numeric values and optional arithmetic operators (<c>+</c>, <c>-</c>, <c>*</c>, <c>/</c>).
    /// </summary>
    /// <param name="settingValue">The string representation of the setting value to be evaluated.</param>
    /// <param name="activeScreenHeight">The height of the active screen in device-independent pixels.</param>
    /// <param name="activeScreenWidth">The width of the active screen in device-independent pixels.</param>
    /// <returns>
    /// The evaluated double value. If the setting cannot be parsed, returns <c>0</c> and displays an error.
    /// </returns>
    public static double ParseScreenDimensionsSetting(string settingValue, double activeScreenHeight, double activeScreenWidth)
    {
      try
      {
        ArgumentNullException.ThrowIfNull(settingValue);
        settingValue = settingValue.Trim().Replace(" ", "", StringComparison.Ordinal);
        if (string.IsNullOrEmpty(settingValue))
        {
          return 0;
        }

        // Replace %H and %W tokens with calculated numeric values in the string
        while (settingValue.Contains("%H", StringComparison.Ordinal))
        {
          int tokenIdx = settingValue.IndexOf("%H", StringComparison.Ordinal);
          int startIdx = tokenIdx - 1;
          while (startIdx >= 0 && (char.IsDigit(settingValue[startIdx]) || settingValue[startIdx] == '.'))
          {
            startIdx--;
          }
          startIdx++;

          double percentage = double.Parse(settingValue[startIdx..tokenIdx], CultureInfo.InvariantCulture);
          double val = activeScreenHeight * (percentage / 100.0);
          settingValue = string.Concat(settingValue.AsSpan(0, startIdx), val.ToString(CultureInfo.InvariantCulture), settingValue.AsSpan(tokenIdx + 2));
        }

        while (settingValue.Contains("%W", StringComparison.Ordinal))
        {
          int tokenIdx = settingValue.IndexOf("%W", StringComparison.Ordinal);
          int startIdx = tokenIdx - 1;
          while (startIdx >= 0 && (char.IsDigit(settingValue[startIdx]) || settingValue[startIdx] == '.'))
          {
            startIdx--;
          }
          startIdx++;

          double percentage = double.Parse(settingValue[startIdx..tokenIdx], CultureInfo.InvariantCulture);
          double val = activeScreenWidth * (percentage / 100.0);
          settingValue = string.Concat(settingValue.AsSpan(0, startIdx), val.ToString(CultureInfo.InvariantCulture), settingValue.AsSpan(tokenIdx + 2));
        }

        // Parse numbers and operators (+, -, *, /) left-to-right
        List<double> numbers = [];
        List<char> operators = [];

        int numStart = 0;
        for (int i = 0; i < settingValue.Length; i++)
        {
          char c = settingValue[i];
          if (c is '+' or '-' or '*' or '/')
          {
            if (i == 0 && c == '-')
            {
              // Leading negative sign
              continue;
            }
            numbers.Add(double.Parse(settingValue[numStart..i], CultureInfo.InvariantCulture));
            operators.Add(c);
            numStart = i + 1;
          }
        }
        numbers.Add(double.Parse(settingValue[numStart..], CultureInfo.InvariantCulture));

        // Evaluate multiplication and division first
        for (int i = 0; i < operators.Count; i++)
        {
          if (operators[i] is '*' or '/')
          {
            double res = operators[i] == '*' ? numbers[i] * numbers[i + 1] : numbers[i] / numbers[i + 1];
            numbers[i] = res;
            numbers.RemoveAt(i + 1);
            operators.RemoveAt(i);
            i--;
          }
        }

        // Evaluate addition and subtraction
        double result = numbers[0];
        for (int i = 0; i < operators.Count; i++)
        {
          result = operators[i] switch
          {
            '+' => result + numbers[i + 1],
            '-' => result - numbers[i + 1],
            _ => throw new ArgumentException($"Invalid operator '{operators[i]}'")
          };
        }

        return result;
      }
      catch (Exception e) when (e is FormatException or ArgumentException or OverflowException)
      {
        App.ShowErrorMessageBox(e, $"Could not parse a screen dimensions setting with the value \"{settingValue}\"");
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
    public static HorizontalAlignment ParseHorizontalAlignmentSetting(string settingValue)
    {
      try
      {
        ArgumentNullException.ThrowIfNull(settingValue);
        return Enum.Parse<HorizontalAlignment>(settingValue, ignoreCase: true);
      }
      catch (ArgumentException e) { App.ShowErrorMessageBox(e, $"Could not parse a horizontal alignment setting with the value \"{settingValue}\""); return HorizontalAlignment.Center; }
    }

    /// <summary>
    /// Parses and evaluates <see cref="RenderingBias"/> settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the setting value to be evaluated.</param>
    /// <returns>
    /// The evaluated <see cref="RenderingBias"/> value. If the setting cannot be parsed, returns <see cref="RenderingBias.Quality"/> and displays an error.
    /// </returns>
    public static RenderingBias ParseRenderingBiasSetting(string settingValue)
    {
      try
      {
        ArgumentNullException.ThrowIfNull(settingValue);
        return Enum.Parse<RenderingBias>(settingValue, ignoreCase: true);
      }
      catch (ArgumentException e) { App.ShowErrorMessageBox(e, $"Could not parse a rendering bias setting with the value \"{settingValue}\""); return RenderingBias.Quality; }
    }

    /// <summary>
    /// Parses and evaluates <see cref="VerticalAlignment"/> settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the setting value to be evaluated.</param>
    /// <returns>
    /// The evaluated <see cref="VerticalAlignment"/> value. If the setting cannot be parsed, returns <see cref="VerticalAlignment.Center"/> and displays an error.
    /// </returns>
    public static VerticalAlignment ParseVerticalAlignmentSetting(string settingValue)
    {
      try
      {
        ArgumentNullException.ThrowIfNull(settingValue);
        return Enum.Parse<VerticalAlignment>(settingValue, ignoreCase: true);
      }
      catch (ArgumentException e) { App.ShowErrorMessageBox(e, $"Could not parse a vertical alignment setting with the value \"{settingValue}\""); return VerticalAlignment.Center; }
    }

    /// <summary>
    /// Parses and evaluates <see cref="Visibility"/> settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the setting value to be evaluated.</param>
    /// <returns>
    /// The evaluated <see cref="Visibility"/> value. If the setting cannot be parsed, returns <see cref="Visibility.Visible"/> and displays an error.
    /// </returns>
    public static Visibility ParseVisibilitySetting(string settingValue)
    {
      try
      {
        ArgumentNullException.ThrowIfNull(settingValue);
        return Enum.Parse<Visibility>(settingValue, ignoreCase: true);
      }
      catch (ArgumentException e) { App.ShowErrorMessageBox(e, $"Could not parse a visibility setting with the value \"{settingValue}\""); return Visibility.Visible; }
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
        ArgumentNullException.ThrowIfNull(settingValue);
        return new ThicknessConverter().ConvertFromString(settingValue) is Thickness t ? t : new Thickness(0);
      }
      catch (Exception e) when (e is FormatException or NotSupportedException or ArgumentException)
      {
        App.ShowErrorMessageBox(e, $"Could not parse a thickness setting with the value \"{settingValue}\"");
        return new Thickness(0);
      }
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
        ArgumentNullException.ThrowIfNull(settingValue);
        return new CornerRadiusConverter().ConvertFromString(settingValue) is CornerRadius c ? c : new CornerRadius(0);
      }
      catch (Exception e) when (e is FormatException or NotSupportedException or ArgumentException)
      {
        App.ShowErrorMessageBox(e, $"Could not parse a corner radius setting with the value \"{settingValue}\"");
        return new CornerRadius(0);
      }
    }

    /// <summary>
    /// Parses and evaluates <see cref="double"/> settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the setting value to be evaluated (using US culture format).</param>
    /// <returns>
    /// The evaluated double value. If the setting cannot be parsed, returns <c>0</c> and displays an error.
    /// </returns>
    public static double ParseDoubleSetting(string settingValue)
    {
      try
      {
        ArgumentNullException.ThrowIfNull(settingValue);
        return double.Parse(settingValue, new CultureInfo("en-US"));
      }
      catch (Exception e) when (e is FormatException or OverflowException or ArgumentException)
      {
        App.ShowErrorMessageBox(e, $"Could not parse a double setting with the value \"{settingValue}\"");
        return 0;
      }
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
        ArgumentNullException.ThrowIfNull(settingValue);
        return int.Parse(settingValue, new CultureInfo("en-US"));
      }
      catch (Exception e) when (e is FormatException or OverflowException or ArgumentException)
      {
        App.ShowErrorMessageBox(e, $"Could not parse an integer setting with the value \"{settingValue}\"");
        return 0;
      }
    }

    /// <summary>
    /// Parses and evaluates <see cref="IRatioScorer"/> settings.
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
          App.ShowErrorMessageBox(new FormatException($"Could not parse the scorer setting with the value \"{settingValue}\""), "Error");
          return ScorerCache.Get<PartialRatioScorer>();
      }
    }

    /// <summary>
    /// Parses and evaluates <see cref="SolidColorBrush"/> settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the color value.</param>
    /// <returns>
    /// The evaluated <see cref="SolidColorBrush"/> value. If the setting cannot be parsed, returns <see cref="Brushes.Transparent"/> and displays an error.
    /// </returns>
    public static SolidColorBrush ParseSolidColorBrush(string settingValue)
    {
      try
      {
        ArgumentNullException.ThrowIfNull(settingValue);
        return new BrushConverter().ConvertFromString(settingValue) as SolidColorBrush ?? Brushes.Transparent;
      }
      catch (Exception e) when (e is FormatException or NotSupportedException or ArgumentException)
      {
        App.ShowErrorMessageBox(e, $"Could not parse a color setting with the value \"{settingValue}\"");
        return Brushes.Transparent;
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
        ArgumentNullException.ThrowIfNull(settingValue);
        return new FontWeightConverter().ConvertFromString(settingValue) is FontWeight fw ? fw : FontWeights.Normal;
      }
      catch (Exception e) when (e is FormatException or NotSupportedException or ArgumentException)
      {
        App.ShowErrorMessageBox(e, $"Could not parse a font weight setting with the value \"{settingValue}\"");
        return FontWeights.Normal;
      }
    }

    /// <summary>
    /// Parses and evaluates the <see cref="AnimationSettings"/> to be used for element animations.
    /// </summary>
    /// <param name="settingValue">The string representation of the animation setting. Acceptable values:
    /// <list type="bullet">
    /// <item><description><c>FadeIn</c> (maps to <see cref="AnimationKind.FadeFrom"/>)</description></item>
    /// <item><description><c>Unblur</c> (maps to <see cref="AnimationKind.BlurFrom"/>)</description></item>
    /// <item><description><c>ScaleFromLeft</c>, <c>ScaleFromRight</c>, or <c>ScaleHorizontally</c> (maps to <see cref="AnimationKind.ScaleXFrom"/>)</description></item>
    /// <item><description><c>ScaleFromTop</c>, <c>ScaleFromBottom</c>, or <c>ScaleVertically</c> (maps to <see cref="AnimationKind.ScaleYFrom"/>)</description></item>
    /// <item><description><c>SlideFromLeft</c> or <c>SlideFromRight</c> (maps to <see cref="AnimationKind.TranslateXFrom"/>)</description></item>
    /// <item><description><c>SlideFromTop</c> or <c>SlideFromBottom</c> (maps to <see cref="AnimationKind.TranslateYFrom"/>)</description></item>
    /// <item><description><c>FadeOut</c> (maps to <see cref="AnimationKind.FadeTo"/>)</description></item>
    /// <item><description><c>Blur</c> (maps to <see cref="AnimationKind.BlurTo"/>)</description></item>
    /// <item><description><c>SlideToLeft</c> or <c>SlideToRight</c> (maps to <see cref="AnimationKind.TranslateXTo"/>)</description></item>
    /// <item><description><c>SlideToTop</c> or <c>SlideToBottom</c> (maps to <see cref="AnimationKind.TranslateYTo"/>)</description></item>
    /// <item><description><c>ScaleToLeft</c> or <c>ScaleToRight</c> (maps to <see cref="AnimationKind.ScaleXTo"/>)</description></item>
    /// <item><description><c>ScaleToTop</c> or <c>ScaleToBottom</c> (maps to <see cref="AnimationKind.ScaleYTo"/>)</description></item>
    /// </list>
    /// </param>
    /// <param name="blurRadius">Specifies the blur radius value for blur animations.</param>
    /// <param name="offset">Specifies the offset distance value for slide animations.</param>
    /// <param name="duration">Specifies the duration of the animation in milliseconds.</param>
    /// <returns>
    /// The evaluated <see cref="AnimationSettings"/> value. If the setting cannot be parsed, returns default animation settings and displays an error.
    /// </returns>
    public static AnimationSettings ParseAnimationSetting(string settingValue, double blurRadius = 24.0, int offset = 50, double duration = 500.0)
    {
      int negativeOffset = 0 - offset;
      AnimationSettings? setting = settingValue switch
      {
        "FadeIn" => new AnimationSettings
        {
          Kind = AnimationKind.FadeFrom,
          Opacity = 0
        },
        "Unblur" => new AnimationSettings
        {
          Kind = AnimationKind.BlurFrom,
          BlurRadius = blurRadius
        },
        "ScaleFromLeft" => new AnimationSettings
        {
          Kind = AnimationKind.ScaleXFrom,
          ScaleX = 0,
          TransformCenterPoint = new Point(0, 0.5)
        },
        "ScaleFromTop" => new AnimationSettings
        {
          Kind = AnimationKind.ScaleYFrom,
          ScaleY = 0,
          TransformCenterPoint = new Point(0.5, 0)
        },
        "ScaleFromRight" => new AnimationSettings
        {
          Kind = AnimationKind.ScaleXFrom,
          ScaleX = 0,
          TransformCenterPoint = new Point(1, 0.5)
        },
        "ScaleFromBottom" => new AnimationSettings
        {
          Kind = AnimationKind.ScaleYFrom,
          ScaleY = 0,
          TransformCenterPoint = new Point(0.5, 1)
        },
        "ScaleHorizontally" => new AnimationSettings
        {
          Kind = AnimationKind.ScaleXFrom,
          ScaleX = 0
        },
        "ScaleVertically" => new AnimationSettings
        {
          Kind = AnimationKind.ScaleYFrom,
          ScaleY = 0
        },
        "SlideFromLeft" => new AnimationSettings
        {
          Kind = AnimationKind.TranslateXFrom,
          OffsetX = new Offset { OffsetValue = negativeOffset }
        },
        "SlideFromTop" => new AnimationSettings
        {
          Kind = AnimationKind.TranslateYFrom,
          OffsetY = new Offset { OffsetValue = negativeOffset }
        },
        "SlideFromRight" => new AnimationSettings
        {
          Kind = AnimationKind.TranslateXFrom,
          OffsetX = new Offset { OffsetValue = offset }
        },
        "SlideFromBottom" => new AnimationSettings
        {
          Kind = AnimationKind.TranslateYFrom,
          OffsetY = new Offset { OffsetValue = offset }
        },
        "FadeOut" => new AnimationSettings
        {
          Kind = AnimationKind.FadeTo,
          Opacity = 0
        },
        "SlideToLeft" => new AnimationSettings
        {
          Kind = AnimationKind.TranslateXTo,
          OffsetX = new Offset { OffsetValue = negativeOffset }
        },
        "SlideToTop" => new AnimationSettings
        {
          Kind = AnimationKind.TranslateYTo,
          OffsetY = new Offset { OffsetValue = negativeOffset }
        },
        "SlideToRight" => new AnimationSettings
        {
          Kind = AnimationKind.TranslateXTo,
          OffsetX = new Offset { OffsetValue = offset }
        },
        "SlideToBottom" => new AnimationSettings
        {
          Kind = AnimationKind.TranslateYTo,
          OffsetY = new Offset { OffsetValue = offset }
        },
        "ScaleToLeft" => new AnimationSettings
        {
          Kind = AnimationKind.ScaleXTo,
          ScaleX = 0,
          TransformCenterPoint = new Point(0, 0.5)
        },
        "ScaleToTop" => new AnimationSettings
        {
          Kind = AnimationKind.ScaleYTo,
          ScaleY = 0,
          TransformCenterPoint = new Point(0.5, 0)
        },
        "ScaleToRight" => new AnimationSettings
        {
          Kind = AnimationKind.ScaleXTo,
          ScaleX = 0,
          TransformCenterPoint = new Point(1, 0.5)
        },
        "ScaleToBottom" => new AnimationSettings
        {
          Kind = AnimationKind.ScaleYTo,
          ScaleY = 0,
          TransformCenterPoint = new Point(0.5, 1)
        },
        "Blur" => new AnimationSettings
        {
          Kind = AnimationKind.BlurTo,
          BlurRadius = blurRadius
        },
        _ => null
      };
      if (setting is null)
      {
        App.ShowErrorMessageBox(new FormatException($"Could not parse the animation setting with the value \"{settingValue}\""), "Error");
        setting = new AnimationSettings();
      }
      setting.Duration = duration;
      return setting;
    }

    /// <summary>
    /// Parses and evaluates <see cref="System.Windows.Forms.Keys"/> settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the setting value to be evaluated.</param>
    /// <param name="defaultKey">Specifies the default <see cref="System.Windows.Forms.Keys"/> value to return if parsing fails.</param>
    /// <returns>
    /// The evaluated <see cref="System.Windows.Forms.Keys"/> value. If the setting cannot be parsed, returns <paramref name="defaultKey"/> and displays an error.
    /// </returns>
    public static System.Windows.Forms.Keys ParseKeySetting(string settingValue, System.Windows.Forms.Keys defaultKey)
    {
      try
      {
        ArgumentNullException.ThrowIfNull(settingValue);
        return Enum.Parse<System.Windows.Forms.Keys>(settingValue, ignoreCase: true);
      }
      catch (Exception e) when (e is ArgumentException or FormatException)
      {
        App.ShowErrorMessageBox(e, $"Could not parse a key setting with the value \"{settingValue}\"");
        return defaultKey;
      }
    }

    /// <summary>
    /// Parses and evaluates <see cref="bool"/> settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the boolean value to be evaluated.</param>
    /// <param name="defaultValue">Specifies the default boolean value to return if parsing fails.</param>
    /// <returns>
    /// The evaluated boolean value. If the setting cannot be parsed, returns <paramref name="defaultValue"/> and displays an error.
    /// </returns>
    public static bool ParseBooleanSetting(string settingValue, bool defaultValue = true)
    {
      try
      {
        ArgumentNullException.ThrowIfNull(settingValue);
        return bool.Parse(settingValue);
      }
      catch (Exception e) when (e is FormatException or ArgumentException)
      {
        App.ShowErrorMessageBox(e, $"Could not parse a boolean setting with the value \"{settingValue}\"");
        return defaultValue;
      }
    }

    /// <summary>
    /// Parses and evaluates <see cref="FontFamily"/> font settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the font setting value.</param>
    /// <param name="defaultFont">Specifies the default <see cref="FontFamily"/> to return if parsing fails.</param>
    /// <returns>
    /// The evaluated <see cref="FontFamily"/> instance. If the setting cannot be parsed, returns <paramref name="defaultFont"/> and displays an error.
    /// </returns>
    public static FontFamily ParseFontFamilySetting(string settingValue, FontFamily defaultFont)
    {
      try
      {
        ArgumentNullException.ThrowIfNull(settingValue);
        return new FontFamily(Path.GetFullPath("./Config/Resources/#") + settingValue);
      }
      catch (Exception e) when (e is ArgumentException or FormatException or System.Security.SecurityException)
      {
        App.ShowErrorMessageBox(e, $"Could not parse a font setting with the value \"{settingValue}\"");
        return defaultFont;
      }
    }

    /// <summary>
    /// Parses and evaluates path settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the path to be evaluated.</param>
    /// <param name="defaultPath">Specifies the default path string to return if parsing fails.</param>
    /// <returns>
    /// The full path string. If the setting cannot be parsed, returns <paramref name="defaultPath"/> and displays an error.
    /// </returns>
    public static string ParsePathSetting(string settingValue, string defaultPath)
    {
      try
      {
        ArgumentNullException.ThrowIfNull(settingValue);
        return Path.GetFullPath(settingValue);
      }
      catch (Exception e) when (e is ArgumentException or PathTooLongException or NotSupportedException)
      {
        App.ShowErrorMessageBox(e, $"Could not parse a path setting with the value \"{settingValue}\"");
        return defaultPath;
      }
    }

    /// <summary>
    /// Parses and evaluates string settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the setting value.</param>
    /// <param name="defaultValue">Specifies the default string value to return if parsing fails.</param>
    /// <returns>
    /// The evaluated string setting. If the setting cannot be parsed, returns <paramref name="defaultValue"/> and displays an error.
    /// </returns>
    public static string ParseStringSetting(string settingValue, string defaultValue)
    {
      try
      {
        ArgumentNullException.ThrowIfNull(settingValue);
        return settingValue;
      }
      catch (Exception e) when (e is ArgumentNullException or FormatException)
      {
        App.ShowErrorMessageBox(e, $"Could not parse a string setting with the value \"{settingValue}\"");
        return defaultValue;
      }
    }

    /// <summary>
    /// Parses and evaluates <see cref="ModifierKeys"/> settings.
    /// </summary>
    /// <param name="settingValue">The string representation of the modifier key value to be evaluated.</param>
    /// <param name="defaultModifier">Specifies the default <see cref="ModifierKeys"/> value to return if parsing fails.</param>
    /// <returns>
    /// The evaluated <see cref="ModifierKeys"/> value. If the setting cannot be parsed, returns <paramref name="defaultModifier"/> and displays an error.
    /// </returns>
    public static ModifierKeys ParseModifierKeysSetting(string settingValue, ModifierKeys defaultModifier = ModifierKeys.Alt)
    {
      try
      {
        ArgumentNullException.ThrowIfNull(settingValue);
        return Enum.Parse<ModifierKeys>(settingValue, ignoreCase: true);
      }
      catch (Exception e) when (e is ArgumentException or FormatException)
      {
        App.ShowErrorMessageBox(e, $"Could not parse a modifier key setting with the value \"{settingValue}\"");
        return defaultModifier;
      }
    }
  }
}
