using Quokka.ListItems;
using Quokka.PluginArch;
using System.Collections.ObjectModel;

namespace Tests.PluginArch
{
  /// <summary>
  /// Testing for FuzzySearch functionality.
  /// </summary>
  public class TestFuzzySearch
  {
    /// <summary>
    /// Verifies that <see cref="FuzzySearch.SearchAll(string, Collection{ListItem}, int)"/> returns matching <see cref="ListItem"/>s based on similarity.
    /// </summary>
    [Fact]
    public void TestSearchAll_WithListItems_ReturnsExpectedMatches()
    {
      var item1 = new TestListItem("Apple");
      var item2 = new TestListItem("Banana");
      var item3 = new TestListItem("zzzzzz");
      var item4 = new TestListItem("Apricot");
      var items = new Collection<ListItem> { item1, item2, item3, item4 };

      var results = FuzzySearch.SearchAll("Ap", items, cutoff: 1);

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
      var item1 = new TestListItem("Apple");
      var item2 = new TestListItem("Banana");
      var items = new Collection<ListItem> { item1, item2 };

      var results = FuzzySearch.SearchAll("Apple", items, cutoff: 80);

      results.Should().Contain(item1);
      results.Should().NotContain(item2);
    }

    /// <summary>
    /// Verifies that <see cref="FuzzySearch.SearchAll(string, Collection{string}, int)"/> returns matching strings with their scores.
    /// </summary>
    [Fact]
    public void TestSearchAll_WithStrings_ReturnsExpectedScores()
    {
      var items = new Collection<string> { "Apple", "Banana", "zzzzzz", "Apricot" };

      var results = FuzzySearch.SearchAll("Ap", items, cutoff: 1);

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
      var item1 = new TestListItem("Banana");
      var item2 = new TestListItem("Apple");
      var item3 = new TestListItem("zzzzzz");
      var items = new Collection<ListItem> { item1, item2, item3 };

      var results = FuzzySearch.Sort("Apple", items);

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
      var items = new Collection<string> { "Banana", "Apple", "zzzzzz" };

      var results = FuzzySearch.Sort("Apple", items);

      results.Should().HaveCount(3);
      results[0].Value.Should().Be("Apple");
      results[1].Value.Should().Be("Banana");
      results[2].Value.Should().Be("zzzzzz");
    }

  }
}
