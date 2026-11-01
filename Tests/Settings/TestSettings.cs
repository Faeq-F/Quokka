using FuzzySharp.SimilarityRatio;
using FuzzySharp.SimilarityRatio.Scorer;
using FuzzySharp.SimilarityRatio.Scorer.Composite;
using FuzzySharp.SimilarityRatio.Scorer.StrategySensitive;
using Quokka;
using Quokka.Settings;
using System.Windows;
using XamlFlair;
using static System.Windows.SystemParameters;

namespace Tests.Settings
{

  /// <summary>
  /// Testing for Quokka settings, i.e., if they apply correctly, are parsed correctly, etc..
  /// </summary>
  public class TestSettings
  {
    /// <summary>
    /// Initializes a new instance of the <see cref="TestSettings"/> class and configures necessary application resources for tests.
    /// </summary>
    public TestSettings()
    {
      App.ShowErrorMessageBox = (_, _) => { };
      if (System.Windows.Application.Current == null)
      {
        _ = new App();
      }
      System.Windows.Application.Current!.Resources["AppAnimationDuration"] = 200.0;
      System.Windows.Application.Current!.Resources["WindowAnimationBlurRadius"] = 10.0;
      System.Windows.Application.Current!.Resources["WindowAnimationOffset"] = 20;
      System.Windows.Application.Current!.Resources["ResultsListAnimationBlurRadius"] = 10.0;
      System.Windows.Application.Current!.Resources["ResultsListAnimationOffset"] = 20;
      System.Windows.Application.Current!.Resources["ContextPaneAnimationBlurRadius"] = 10.0;
      System.Windows.Application.Current!.Resources["ContextPaneAnimationOffset"] = 20;
    }

    /// <summary>
    /// Testing parsing of Screen Dimensions settings,<br />
    /// i.e., whether settings that can have screen percentage values (%H, %W) or fixed numbers are evaluated correctly.
    /// </summary>
    [Fact]
    public void TestScreenDimensionsParsing()
    {
      const double screenH = 1080.0;
      const double screenW = 1920.0;
      string[] possibleSettingValues = [ "33.33%H", "50%H", "25%W",
        "100%H", "100%W", "50%H*2", "50%H-50", "50%H+20", "700",
        "10+50%H", "100+50%H*2", "50%H+25%W", "1000-200*2+50%H", "-50+50%H" ];
      double[] correspondingValues = [ screenH * (33.33 / 100.0), screenH * 0.5, screenW * 0.25,
        screenH, screenW, screenH * 0.5 * 2, (screenH * 0.5) - 50, (screenH * 0.5) + 20, 700.0,
        10 + (screenH * 0.5), 100 + (screenH * 0.5 * 2), (screenH * 0.5) + (screenW * 0.25), 1000 - (200 * 2) + (screenH * 0.5), -50 + (screenH * 0.5) ];
      for (int index = 0; index < possibleSettingValues.Length; index++)
      {
        SettingParsers.ParseScreenDimensionsSetting(possibleSettingValues[index], screenH, screenW)
          .Should().BeApproximately(correspondingValues[index], 0.001);
      }
    }

    /// <summary>
    /// Verifies that invalid screen dimension setting values return <c>0</c> without throwing.
    /// </summary>
    [Fact]
    public void TestScreenDimensionsParsing_WithInvalidInput_ReturnsZero()
    {
      string[] invalidSettingValues = ["abc", "50%H/abc", "50%H//", "50%W * ", "50%W + abc"];
      foreach (string value in invalidSettingValues)
      {
        SettingParsers.ParseScreenDimensionsSetting(value, 1080.0, 1920.0).Should().Be(0);
      }
    }

    /// <summary>
    /// Verifies that passing <see langword="null"/> to the screen dimension parser returns <c>0</c> without throwing.
    /// </summary>
    [Fact]
    public void TestScreenDimensionsParsing_WithNullInput_ReturnsZero()
    {
      SettingParsers.ParseScreenDimensionsSetting(null!, 1080.0, 1920.0).Should().Be(0);
    }

    /// <summary>
    /// Verifies parsing of various valid animation setting names into their corresponding <see cref="AnimationSettings"/>.
    /// </summary>
    [Fact]
    public void TestAnimationSettingParsing()
    {
      (string Value, AnimationKind Kind)[] testCases =
      [
        ("FadeIn", AnimationKind.FadeFrom),
        ("Unblur", AnimationKind.BlurFrom),
        ("ScaleFromLeft", AnimationKind.ScaleXFrom),
        ("ScaleFromTop", AnimationKind.ScaleYFrom),
        ("ScaleFromRight", AnimationKind.ScaleXFrom),
        ("ScaleFromBottom", AnimationKind.ScaleYFrom),
        ("ScaleHorizontally", AnimationKind.ScaleXFrom),
        ("ScaleVertically", AnimationKind.ScaleYFrom),
        ("SlideFromLeft", AnimationKind.TranslateXFrom),
        ("SlideFromTop", AnimationKind.TranslateYFrom),
        ("SlideFromRight", AnimationKind.TranslateXFrom),
        ("SlideFromBottom", AnimationKind.TranslateYFrom)
      ];

      foreach ((string Value, AnimationKind Kind) in testCases)
      {
        AnimationSettings result = SettingParsers.ParseAnimationSetting(Value, 10.0, 20);
        result.Should().NotBeNull();
        result.Kind.Should().Be(Kind);
      }
    }

    /// <summary>
    /// Verifies that invalid animation settings return default empty animation settings without throwing.
    /// </summary>
    [Fact]
    public void TestAnimationSettingParsing_WithInvalidInput_ReturnsDefaultAnimation()
    {
      AnimationSettings result = SettingParsers.ParseAnimationSetting("InvalidAnimation", 10.0, 20);
      result.Should().NotBeNull();
      result.Kind.Should().Be(AnimationKind.FadeTo);
    }

    /// <summary>
    /// Verifies parsing of various valid fuzzy search scorer setting names into their corresponding <see cref="IRatioScorer"/> instances.
    /// </summary>
    [Fact]
    public void TestScorerSettingParsing()
    {
      (string Value, Type ExpectedType)[] testCases =
      [
        ("ratio", typeof(DefaultRatioScorer)),
        ("partialRatio", typeof(PartialRatioScorer)),
        ("tokenSet", typeof(TokenSetScorer)),
        ("partialTokenSet", typeof(PartialTokenSetScorer)),
        ("tokenSort", typeof(TokenSortScorer)),
        ("partialTokenSort", typeof(PartialTokenSortScorer)),
        ("tokenAbbreviation", typeof(TokenAbbreviationScorer)),
        ("partialTokenAbbreviation", typeof(PartialTokenAbbreviationScorer)),
        ("weighted", typeof(WeightedRatioScorer))
      ];

      foreach ((string value, Type expectedType) in testCases)
      {
        IRatioScorer result = SettingParsers.ParseScorerSetting(value);
        result.Should().NotBeNull();
        result.Should().BeOfType(expectedType);
      }
    }

    /// <summary>
    /// Verifies that invalid fuzzy search scorer settings return the default <see cref="PartialRatioScorer"/> without throwing.
    /// </summary>
    [Fact]
    public void TestScorerSettingParsing_WithInvalidInput_ReturnsPartialRatioScorer()
    {
      IRatioScorer result = SettingParsers.ParseScorerSetting("InvalidScorer");
      result.Should().NotBeNull();
      result.Should().BeOfType<PartialRatioScorer>();
    }

    /// <summary>
    /// Verifies that passing <see langword="null"/> or malformed string inputs to setting parsers returns safe default fallbacks.
    /// </summary>
    [Fact]
    public void TestParsers_WithNullOrInvalidInput_ReturnsDefaultFallbacks()
    {
      SettingParsers.ParseScreenDimensionsSetting(null!, 1080.0, 1920.0).Should().Be(0);
      SettingParsers.ParseHorizontalAlignmentSetting(null!).Should().Be(System.Windows.HorizontalAlignment.Center);
      SettingParsers.ParseVerticalAlignmentSetting(null!).Should().Be(VerticalAlignment.Center);
      SettingParsers.ParseVisibilitySetting(null!).Should().Be(Visibility.Visible);
      SettingParsers.ParseThicknessSetting("invalid_thickness").Should().Be(new Thickness(0));
      SettingParsers.ParseCornerRadiusSetting("invalid_radius").Should().Be(new CornerRadius(0));
      SettingParsers.ParseDoubleSetting("invalid_double").Should().Be(0);
      SettingParsers.ParseIntegerSetting("invalid_int").Should().Be(0);
      SettingParsers.ParseSolidColorBrush("invalid_color").Color.Should().Be(System.Windows.Media.Colors.Transparent);
      SettingParsers.ParseFontWeight("invalid_weight").Should().Be(FontWeights.Normal);
    }

    /// <summary>
    /// Verifies parsing of valid key setting strings into their corresponding <see cref="Keys"/> values.
    /// </summary>
    [Fact]
    public void TestKeySettingParsing()
    {
      SettingParsers.ParseKeySetting("Apps", Keys.Apps).Should().Be(Keys.Apps);
      SettingParsers.ParseKeySetting("PageUp", Keys.Apps).Should().Be(Keys.PageUp);
      SettingParsers.ParseKeySetting("PageDown", Keys.Apps).Should().Be(Keys.PageDown);
      SettingParsers.ParseKeySetting("Space", Keys.Apps).Should().Be(Keys.Space);
    }

    /// <summary>
    /// Verifies that invalid key setting strings or <see langword="null"/> return the specified default key without throwing.
    /// </summary>
    [Fact]
    public void TestKeySettingParsing_WithInvalidInput_ReturnsDefaultKey()
    {
      SettingParsers.ParseKeySetting("InvalidKeyName", Keys.PageUp).Should().Be(Keys.PageUp);
      SettingParsers.ParseKeySetting(null!, Keys.PageDown).Should().Be(Keys.PageDown);
    }

    /// <summary>
    /// Verifies parsing of boolean settings and graceful fallback on invalid input.
    /// </summary>
    [Fact]
    public void TestBooleanSettingParsing()
    {
      SettingParsers.ParseBooleanSetting("true", false).Should().BeTrue();
      SettingParsers.ParseBooleanSetting("false", true).Should().BeFalse();
      SettingParsers.ParseBooleanSetting("invalid", true).Should().BeTrue();
      SettingParsers.ParseBooleanSetting(null!, false).Should().BeFalse();
    }

    /// <summary>
    /// Verifies parsing of path settings and graceful fallback on invalid input.
    /// </summary>
    [Fact]
    public void TestPathSettingParsing()
    {
      SettingParsers.ParsePathSetting(@"C:\Windows\explorer.exe", @"C:\fallback.exe").Should().Be(@"C:\Windows\explorer.exe");
      SettingParsers.ParsePathSetting(null!, @"C:\fallback.exe").Should().Be(@"C:\fallback.exe");
    }

    /// <summary>
    /// Verifies parsing of string settings and graceful fallback on invalid input.
    /// </summary>
    [Fact]
    public void TestStringSettingParsing()
    {
      SettingParsers.ParseStringSetting("AboutQuokka", "default").Should().Be("AboutQuokka");
      SettingParsers.ParseStringSetting(null!, "default").Should().Be("default");
    }

    /// <summary>
    /// Verifies parsing of modifier key settings and graceful fallback on invalid input.
    /// </summary>
    [Fact]
    public void TestModifierKeysSettingParsing()
    {
      SettingParsers.ParseModifierKeysSetting("Alt", ModifierKeys.Control).Should().Be(ModifierKeys.Alt);
      SettingParsers.ParseModifierKeysSetting("InvalidModifier", ModifierKeys.Control).Should().Be(ModifierKeys.Control);
      SettingParsers.ParseModifierKeysSetting(null!, ModifierKeys.Control).Should().Be(ModifierKeys.Control);
    }
  }
}