using Quokka.ListItems;
using Quokka.PluginArch;
using System;

namespace Quokka.TheQuokkaPlugin
{
  /// <summary>
  /// Represents a list item that restarts the Quokka application.
  /// </summary>
  internal sealed class RestartQuokkaItem : ListItem
  {
    /// <summary>
    /// Initializes a new instance of the <see cref="RestartQuokkaItem"/> class.
    /// </summary>
    public RestartQuokkaItem()
    {
      Name = "Restart";
      Description = "Restart Quokka";
      Icon = IconCache.GetOrAdd(
        Environment.CurrentDirectory + "\\Config\\Resources\\restart.png"
      );
    }

    /// <summary>
    /// Executes the action to restart the Quokka application.
    /// </summary>
    public override void Execute()
    {
      App.RestartApp();
    }
  }
}
