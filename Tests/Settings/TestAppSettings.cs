using Newtonsoft.Json.Linq;
using Quokka;
using System.Reflection;
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
        new App();
      }
      // Mock ShowErrorMessageBox to prevent popups
      App.ShowErrorMessageBox = (ex, title) => { };

      // Ensure required resources for parsers exist
      System.Windows.Application.Current!.Resources["AnimationBlurRadius"] = 10.0;
      System.Windows.Application.Current!.Resources["AnimationOffset"] = 20;
    }

    private void InvokeApplyAppSettings(JObject obj)
    {
      var appInstance = System.Windows.Application.Current as App;
      appInstance.Should().NotBeNull();
      var method = typeof(App).GetMethod("ApplyAppSettings", BindingFlags.NonPublic | BindingFlags.Instance);
      method.Should().NotBeNull();
      method!.Invoke(appInstance, new object[] { obj });
    }

    /// <summary>
    /// Verifies that integer settings are correctly parsed and applied to resources.
    /// </summary>
    [Fact]
    public void TestApplyAppSettings_WithIntSettings_AppliesCorrectly()
    {
      var json = JObject.Parse("{ 'MaxResults': '15' }");
      InvokeApplyAppSettings(json);
      System.Windows.Application.Current!.Resources["MaxResults"].Should().Be(15);
    }

    /// <summary>
    /// Verifies that double settings are correctly parsed and applied to resources.
    /// </summary>
    [Fact]
    public void TestApplyAppSettings_WithDoubleSettings_AppliesCorrectly()
    {
      var json = JObject.Parse("{ 'AnimationDuration': '2.5' }");
      InvokeApplyAppSettings(json);
      System.Windows.Application.Current!.Resources["AnimationDuration"].Should().Be(2.5);
    }

    /// <summary>
    /// Verifies that color settings are parsed into SolidColorBrush.
    /// </summary>
    [Fact]
    public void TestApplyAppSettings_WithColorSettings_AppliesCorrectly()
    {
      var json = JObject.Parse("{ 'MainColor': '#FF0000' }");
      InvokeApplyAppSettings(json);
      var brush = System.Windows.Application.Current!.Resources["MainColor"] as SolidColorBrush;
      brush.Should().NotBeNull();
      brush!.Color.Should().Be(System.Windows.Media.Color.FromRgb(255, 0, 0));
    }

    /// <summary>
    /// Verifies that roundings are parsed into CornerRadius.
    /// </summary>
    [Fact]
    public void TestApplyAppSettings_WithRoundingSettings_AppliesCorrectly()
    {
      var json = JObject.Parse("{ 'BorderRounding': '4' }");
      InvokeApplyAppSettings(json);
      var rounding = (CornerRadius)System.Windows.Application.Current!.Resources["BorderRounding"]!;
      rounding.TopLeft.Should().Be(4);
    }

    /// <summary>
    /// Verifies that nested JSON structures recurse and apply settings correctly.
    /// </summary>
    [Fact]
    public void TestApplyAppSettings_WithNestedJson_RecursesAndApplies()
    {
      var json = JObject.Parse("{ 'NestedGroup': { 'Debounce': '150' } }");
      InvokeApplyAppSettings(json);
      System.Windows.Application.Current!.Resources["Debounce"].Should().Be(150);
    }
  }
}
