using Quokka.ListItems;
using Quokka.PluginArch;
using System.Collections.ObjectModel;
using FuzzySharp.Extractor;

namespace Tests.PluginArch
{
  /// <summary>
  /// Testing for FuzzySearch functionality.
  /// </summary>
  public class TestFuzzySearch
  {
    /// <summary>
    /// Initializes a new instance of the <see cref="TestFuzzySearch"/> class and configures application resources.
    /// </summary>
    public TestFuzzySearch()
    {
      if (System.Windows.Application.Current == null)
      {
        _ = new System.Windows.Application();
      }
      System.Windows.Application.Current!.Resources["Scorer"] ??= Quokka.Settings.SettingParsers.ParseScorerSetting("");
    }
    /// <summary>
    /// Verifies that <see cref="FuzzySearch.SearchAll(string, Collection{ListItem}, int)"/> returns matching <see cref="ListItem"/>s based on similarity.
    /// </summary>
    [Fact]
    public void TestSearchAll_WithListItems_ReturnsExpectedMatches()
    {
      TestListItem item1 = new("Apple");
      TestListItem item2 = new("Banana");
      TestListItem item3 = new("zzzzzz");
      TestListItem item4 = new("Apricot");
      Collection<ListItem> items = new() { item1, item2, item3, item4 };

      Collection<ListItem> results = FuzzySearch.SearchAll("Ap", items, cutoff: 1);

      results.Should().Contain(item1);
      results.Should().Contain(item2);
      results.Should().NotContain(item3);
      results.Should().Contain(item4);
    }

    /// <summary>
    /// Verifies that <see cref="FuzzySearch.SearchAll(string, Collection{ListItem}, int)"/> filters out items below the cutoff threshold.
    /// </summary>
    [Fact]
    public void TestSearchAll_WithListItemsAndCutoff_FiltersCorrectly()
    {
      TestListItem item1 = new("Apple");
      TestListItem item2 = new("Banana");
      Collection<ListItem> items = new() { item1, item2 };

      Collection<ListItem> results = FuzzySearch.SearchAll("Apple", items, cutoff: 80);

      results.Should().Contain(item1);
      results.Should().NotContain(item2);
    }

    /// <summary>
    /// Verifies that <see cref="FuzzySearch.SearchAll(string, Collection{string}, int)"/> returns matching strings with their scores.
    /// </summary>
    [Fact]
    public void TestSearchAll_WithStrings_ReturnsExpectedScores()
    {
      Collection<string> items = new() { "Apple", "Banana", "zzzzzz", "Apricot" };

      Collection<ExtractedResult<string>> results = FuzzySearch.SearchAll("Ap", items, cutoff: 1);

      results.Should().HaveCount(3);
      results.Should().Contain(r => r.Value == "Apple");
      results.Should().Contain(r => r.Value == "Banana");
      results.Should().NotContain(r => r.Value == "zzzzzz");
      results.Should().Contain(r => r.Value == "Apricot");
    }

    /// <summary>
    /// Verifies that <see cref="FuzzySearch.Sort(string, Collection{ListItem})"/> sorts a collection of <see cref="ListItem"/>s in descending order of similarity.
    /// </summary>
    [Fact]
    public void TestSort_WithListItems_ReturnsSortedResults()
    {
      TestListItem item1 = new("Banana");
      TestListItem item2 = new("Apple");
      TestListItem item3 = new("zzzzzz");
      Collection<ListItem> items = new() { item1, item2, item3 };

      Collection<ListItem> results = FuzzySearch.Sort("Apple", items);

      results.Should().HaveCount(3);
      results[0].Should().Be(item2);
      results[1].Should().Be(item1);
      results[2].Should().Be(item3);
    }

    /// <summary>
    /// Verifies that <see cref="FuzzySearch.Sort(string, Collection{string})"/> sorts a collection of strings in descending order of similarity scores.
    /// </summary>
    [Fact]
    public void TestSort_WithStrings_ReturnsSortedResults()
    {
      Collection<string> items = new() { "Banana", "Apple", "zzzzzz" };

      Collection<ExtractedResult<string>> results = FuzzySearch.Sort("Apple", items);

      results.Should().HaveCount(3);
      results[0].Value.Should().Be("Apple");
      results[1].Value.Should().Be("Banana");
      results[2].Value.Should().Be("zzzzzz");
    }

  }
}
