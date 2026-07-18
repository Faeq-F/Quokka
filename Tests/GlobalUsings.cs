global using FluentAssertions;
global using Xunit;
using Quokka.ListItems;

[assembly: CollectionBehavior(DisableTestParallelization = true)]

namespace Tests
{
  /// <summary>
  /// Represents a concrete implementation of <see cref="ListItem"/> used for testing purposes.
  /// </summary>
  public class TestListItem : ListItem
  {
    /// <summary>
    /// Initializes a new instance of the <see cref="TestListItem"/> class.
    /// </summary>
    /// <param name="name">The name of the item.</param>
    /// <param name="description">The optional description of the item. Defaults to an empty string.</param>
    public TestListItem(string name, string description = "")
    {
      Name = name;
      Description = description;
    }

    /// <summary>
    /// Stubs the execution of the action associated with the list item.
    /// </summary>
    public override void Execute()
    {
    }
  }
}