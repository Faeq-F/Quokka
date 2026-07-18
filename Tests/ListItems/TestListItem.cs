using Quokka.ListItems;

namespace Tests.ListItems
{
  /// <summary>
  /// Testing for ListItem base class equality and hashing.
  /// </summary>
  public class TestListItemEquality
  {
    /// <summary>
    /// Verifies that two <see cref="ListItem"/> instances are equal if they have the same name and description.
    /// </summary>
    [Fact]
    public void TestListItemEquality_WithSameNameAndDescription_ReturnsTrue()
    {
      var item1 = new TestListItem("TestName", "TestDescription");
      var item2 = new TestListItem("TestName", "TestDescription");

      item1.Equals(item2).Should().BeTrue();
      (item1 == item2).Should().BeFalse(); // reference inequality
    }

    /// <summary>
    /// Verifies that two <see cref="ListItem"/> instances are not equal if they have different names or descriptions.
    /// </summary>
    [Fact]
    public void TestListItemEquality_WithDifferentNameOrDescription_ReturnsFalse()
    {
      var item1 = new TestListItem("TestName1", "TestDescription");
      var item2 = new TestListItem("TestName2", "TestDescription");
      var item3 = new TestListItem("TestName1", "TestDescription3");

      item1.Equals(item2).Should().BeFalse();
      item1.Equals(item3).Should().BeFalse();
    }

    /// <summary>
    /// Verifies that a <see cref="ListItem"/> is not equal to null or other types.
    /// </summary>
    [Fact]
    public void TestListItemEquality_WithNullOrOtherTypes_ReturnsFalse()
    {
      var item = new TestListItem("TestName", "TestDescription");

      item!.Equals(null).Should().BeFalse();
      item!.Equals("some string").Should().BeFalse();
    }

    /// <summary>
    /// Verifies that equal <see cref="ListItem"/> instances produce identical hash codes.
    /// </summary>
    [Fact]
    public void TestListItemHashCode_WithEqualItems_ReturnsSameHashCode()
    {
      var item1 = new TestListItem("TestName", "TestDescription");
      var item2 = new TestListItem("TestName", "TestDescription");

      item1.GetHashCode().Should().Be(item2.GetHashCode());
    }

    /// <summary>
    /// Verifies that unequal <see cref="ListItem"/> instances produce different hash codes.
    /// </summary>
    [Fact]
    public void TestListItemHashCode_WithUnequalItems_ReturnsDifferentHashCode()
    {
      var item1 = new TestListItem("TestName1", "TestDescription");
      var item2 = new TestListItem("TestName2", "TestDescription");

      item1.GetHashCode().Should().NotBe(item2.GetHashCode());
    }
  }
}
