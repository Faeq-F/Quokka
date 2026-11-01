using Newtonsoft.Json.Linq;
using Quokka;
using Quokka.Settings;
using System.Windows;
using System.Windows.Media;

namespace Tests.Settings
{
  /// <summary>
  /// Integration and unit tests for application settings application logic.
  /// </summary>
  public class TestAppSettings
  {
    /// <summary>
    /// Initializes a new instance of the <see cref="TestAppSettings"/> class and ensures WPF application resources are configured.
    /// </summary>
    public TestAppSettings()
    {
      if (System.Windows.Application.Current == null)
      {
        _ = new App();
      }
      // Mock ShowErrorMessageBox to prevent popups
      App.ShowErrorMessageBox = (_, _) => { };

      // Ensure required resources for parsers exist
      System.Windows.Application.Current!.Resources["AnimationBlurRadius"] = 10.0;
      System.Windows.Application.Current!.Resources["AnimationOffset"] = 20;
    }

    private static void InvokeApplyAppSettings(JObject obj)
    {
      SettingsService settingsService = new();
      settingsService.ApplyAppSettings(obj);
    }

    /// <summary>
    /// Verifies that integer settings are correctly parsed and applied to resources.
    /// </summary>
    [Fact]
    public void TestApplyAppSettings_WithIntSettings_AppliesCorrectly()
    {
      JObject json = JObject.Parse("{ 'MaxResults': '15' }");
      InvokeApplyAppSettings(json);
      System.Windows.Application.Current.Resources["MaxResults"].Should().Be(15);
    }

    /// <summary>
    /// Verifies that double settings are correctly parsed and applied to resources.
    /// </summary>
    [Fact]
    public void TestApplyAppSettings_WithDoubleSettings_AppliesCorrectly()
    {
      JObject json = JObject.Parse("{ 'AppAnimationDurations': '2.5' }");
      InvokeApplyAppSettings(json);
      System.Windows.Application.Current.Resources["AppAnimationDurations"].Should().Be(2.5);
    }

    /// <summary>
    /// Verifies that color settings are parsed into SolidColorBrush.
    /// </summary>
    [Fact]
    public void TestApplyAppSettings_WithColorSettings_AppliesCorrectly()
    {
      JObject json = JObject.Parse("{ 'MainColor': '#FF0000' }");
      InvokeApplyAppSettings(json);
      SolidColorBrush? brush = System.Windows.Application.Current.Resources["MainColor"] as SolidColorBrush;
      brush.Should().NotBeNull();
      brush!.Color.Should().Be(System.Windows.Media.Color.FromRgb(255, 0, 0));
    }

    /// <summary>
    /// Verifies that roundings are parsed into CornerRadius.
    /// </summary>
    [Fact]
    public void TestApplyAppSettings_WithRoundingSettings_AppliesCorrectly()
    {
      JObject json = JObject.Parse("{ 'BorderRounding': '4' }");
      InvokeApplyAppSettings(json);
      CornerRadius rounding = (CornerRadius)System.Windows.Application.Current.Resources["BorderRounding"];
      rounding.TopLeft.Should().Be(4);
    }

    /// <summary>
    /// Verifies that nested JSON structures recurse and apply settings correctly.
    /// </summary>
    [Fact]
    public void TestApplyAppSettings_WithNestedJson_RecursesAndApplies()
    {
      JObject json = JObject.Parse("{ 'NestedGroup': { 'Debounce': '150' } }");
      InvokeApplyAppSettings(json);
      System.Windows.Application.Current.Resources["Debounce"].Should().Be(150);
    }

    /// <summary>
    /// Verifies that <see cref="Keys"/> values for key settings (<c>ContextPaneKey</c>, <c>ScrollLeftKey</c>, <c>ScrollRightKey</c>, <c>WindowHotKey</c>) are correctly parsed and applied to resources.
    /// </summary>
    [Fact]
    public void TestApplyAppSettings_WithKeySettings_AppliesCorrectly()
    {
      JObject json = JObject.Parse("{ 'ContextPaneKey': 'Apps', 'ScrollLeftKey': 'PageUp', 'ScrollRightKey': 'PageDown', 'WindowHotKey': 'Space' }");
      InvokeApplyAppSettings(json);
      System.Windows.Application.Current.Resources["ContextPaneKey"].Should().Be(Keys.Apps);
      System.Windows.Application.Current.Resources["ScrollLeftKey"].Should().Be(Keys.PageUp);
      System.Windows.Application.Current.Resources["ScrollRightKey"].Should().Be(Keys.PageDown);
      System.Windows.Application.Current.Resources["WindowHotKey"].Should().Be(Keys.Space);
    }

    /// <summary>
    /// Verifies that invalid values for key settings fallback to default <see cref="Keys"/> values.
    /// </summary>
    [Fact]
    public void TestApplyAppSettings_WithInvalidKeySettings_DefaultsCorrectly()
    {
      JObject json = JObject.Parse("{ 'ContextPaneKey': 'InvalidKey', 'ScrollLeftKey': 'InvalidKey', 'ScrollRightKey': 'InvalidKey', 'WindowHotKey': 'InvalidKey' }");
      InvokeApplyAppSettings(json);
      System.Windows.Application.Current.Resources["ContextPaneKey"].Should().Be(Keys.Apps);
      System.Windows.Application.Current.Resources["ScrollLeftKey"].Should().Be(Keys.PageUp);
      System.Windows.Application.Current.Resources["ScrollRightKey"].Should().Be(Keys.PageDown);
      System.Windows.Application.Current.Resources["WindowHotKey"].Should().Be(Keys.Space);
    }

    /// <summary>
    /// Verifies that <see cref="SettingsService.LoadAppSettings"/> asynchronously loads settings from a file path.
    /// </summary>
    [Fact]
    public async Task TestLoadAppSettings_WithValidFile_LoadsSettings()
    {
      string tempFile = System.IO.Path.GetTempFileName();
      try
      {
        System.IO.File.WriteAllText(tempFile, /*lang=json*/ "{ 'MaxResults': '25' }");
        SettingsService service = new();
        await service.LoadAppSettings(tempFile);
        System.Windows.Application.Current.Resources["MaxResults"].Should().Be(25);
      }
      finally
      {
        if (System.IO.File.Exists(tempFile))
        {
          System.IO.File.Delete(tempFile);
        }
      }
    }

    /// <summary>
    /// Verifies that <see cref="SettingsService.LoadAppSettings"/> throws an <see cref="ArgumentNullException"/> when given a <see langword="null"/> file path.
    /// </summary>
    [Fact]
    public async Task TestLoadAppSettings_WithNullFilePath_ThrowsArgumentNullException()
    {
      SettingsService service = new();
      Func<Task> action = async () => await service.LoadAppSettings(null!);
      await action.Should().ThrowAsync<ArgumentNullException>();
    }
  }
}
