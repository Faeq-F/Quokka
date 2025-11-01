using Quokka.PluginArch;
using System;
using System.Windows.Media.Imaging;

namespace Quokka.ListItems {
  /// <summary>
  /// The list item that appears while waiting for results to load
  /// </summary>
  public class LoadingListItem : ListItem {
    /// <summary>
    /// Creates the list item with the name "Loading...", an empty description and using the loading icon. This item does not have a context pane.
    /// </summary>
    public LoadingListItem() {
      Name = "Loading...";
      Description = "";
      UiDispatcher.BeginInvoke(() => {
        Icon = new BitmapImage(new Uri(Environment.CurrentDirectory + "\\Config\\Resources\\loading.png"));
      });
    }
    /// <summary>
    /// <inheritdoc/><br />
    /// Does Nothing.
    /// </summary>
    public override void Execute() {
      //Do nothing
    }
  }
}

