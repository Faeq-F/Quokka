using Quokka.Settings;
using System.Windows;
using XamlFlair;
using FuzzySharp.SimilarityRatio;
using FuzzySharp.SimilarityRatio.Scorer;
using FuzzySharp.SimilarityRatio.Scorer.Composite;
using FuzzySharp.SimilarityRatio.Scorer.StrategySensitive;
using static System.Windows.SystemParameters;

namespace Tests
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
      Quokka.App.ShowErrorMessageBox = (exception, title) => { };
      if (System.Windows.Application.Current == null)
      {
        new Quokka.App();
      }
      System.Windows.Application.Current!.Resources["AnimationBlurRadius"] = 10.0;
      System.Windows.Application.Current!.Resources["AnimationOffset"] = 20;
    }

    /// <summary>
    /// Testing parsing of Screen Dimensions settings,<br />
    /// i.e., whether settings that can have screen dimensions values in them, are read and evaluated correctly.
    /// </summary>
    [Fact]
    public void TestScreenDimensionsParsing()
    {
      string[] possibleSettingValues = { "PrimaryScreenHeight/3", "PrimaryScreenHeight/ 2", "PrimaryScreenWidth / 3",
        "PrimaryScreenHeight", "PrimaryScreenWidth", "PrimaryScreenHeight*4", "PrimaryScreenHeight-56", "PrimaryScreenHeight+20"};
      double[] correspondingValues = { (PrimaryScreenHeight / 3), (PrimaryScreenHeight / 2), (PrimaryScreenWidth / 3), (PrimaryScreenHeight), (PrimaryScreenWidth), (PrimaryScreenHeight * 4), (PrimaryScreenHeight - 56), (PrimaryScreenHeight + 20) };
      for (int index = 0; index < possibleSettingValues.Length; index++)
      {
        SettingParsers.ParseScreenDimensionsSetting(possibleSettingValues[index]).Should().Be(correspondingValues[index]);
      }
    }

    /// <summary>
    /// Verifies that invalid screen dimension setting values return <c>0</c> without throwing.
    /// </summary>
    [Fact]
    public void TestScreenDimensionsParsing_WithInvalidInput_ReturnsZero()
    {
      string[] invalidSettingValues = { "abc", "PrimaryScreenHeight/abc", "PrimaryScreenHeight//", "PrimaryScreenWidth * ", "PrimaryScreenWidth + abc" };
      foreach (var value in invalidSettingValues)
      {
        SettingParsers.ParseScreenDimensionsSetting(value).Should().Be(0);
      }
    }

    /// <summary>
    /// Verifies that passing <see langword="null"/> to the screen dimension parser returns <c>0</c> without throwing.
    /// </summary>
    [Fact]
    public void TestScreenDimensionsParsing_WithNullInput_ReturnsZero()
    {
      SettingParsers.ParseScreenDimensionsSetting(null!).Should().Be(0);
    }

    /// <summary>
    /// Verifies parsing of various valid animation setting names into their corresponding <see cref="AnimationSettings"/>.
    /// </summary>
    [Fact]
    public void TestAnimationSettingParsing()
    {
      var testCases = new (string Value, AnimationKind Kind)[]
      {
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
      };

      foreach (var testCase in testCases)
      {
        var result = SettingParsers.ParseAnimationSetting(testCase.Value);
        result.Should().NotBeNull();
        result.Kind.Should().Be(testCase.Kind);
      }
    }

    /// <summary>
    /// Verifies that invalid animation settings return default empty animation settings without throwing.
    /// </summary>
    [Fact]
    public void TestAnimationSettingParsing_WithInvalidInput_ReturnsDefaultAnimation()
    {
      var result = SettingParsers.ParseAnimationSetting("InvalidAnimation");
      result.Should().NotBeNull();
      result.Kind.Should().Be(AnimationKind.FadeTo);
    }

    /// <summary>
    /// Verifies parsing of various valid fuzzy search scorer setting names into their corresponding <see cref="IRatioScorer"/> instances.
    /// </summary>
    [Fact]
    public void TestScorerSettingParsing()
    {
      var testCases = new (string Value, Type ExpectedType)[]
      {
        ("ratio", typeof(DefaultRatioScorer)),
        ("partialRatio", typeof(PartialRatioScorer)),
        ("tokenSet", typeof(TokenSetScorer)),
        ("partialTokenSet", typeof(PartialTokenSetScorer)),
        ("tokenSort", typeof(TokenSortScorer)),
        ("partialTokenSort", typeof(PartialTokenSortScorer)),
        ("tokenAbbreviation", typeof(TokenAbbreviationScorer)),
        ("partialTokenAbbreviation", typeof(PartialTokenAbbreviationScorer)),
        ("weighted", typeof(WeightedRatioScorer))
      };

      foreach (var testCase in testCases)
      {
        var result = SettingParsers.ParseScorerSetting(testCase.Value);
        result.Should().NotBeNull();
        result.Should().BeOfType(testCase.ExpectedType);
      }
    }

    /// <summary>
    /// Verifies that invalid fuzzy search scorer settings return the default <see cref="PartialRatioScorer"/> without throwing.
    /// </summary>
    [Fact]
    public void TestScorerSettingParsing_WithInvalidInput_ReturnsPartialRatioScorer()
    {
      var result = SettingParsers.ParseScorerSetting("InvalidScorer");
      result.Should().NotBeNull();
      result.Should().BeOfType<PartialRatioScorer>();
    }

  }
}