using Quokka.ListItems;
using Quokka.PluginArch;
using System;
using System.Windows;

namespace Quokka.TheQuokkaPlugin
{

  /// <summary>
  /// Represents a list item that displays information about the Quokka application.
  /// </summary>
  class AboutQuokkaItem : ListItem
  {

    /// <summary>
    /// Initializes a new instance of the <see cref="AboutQuokkaItem"/> class.
    /// </summary>
    public AboutQuokkaItem()
    {
      Name = "About Quokka";
      Description = "Current Version, What's New, Check for updates, Help, Feedback, Licenses, etc.";
      Icon = IconCache.GetOrAdd(
        Environment.CurrentDirectory + "\\Config\\Resources\\QuokkaLogo.png"
      );
    }

    /// <summary>
    /// Executes the action for the about item, navigating the main search window to the about context pane.
    /// </summary>
    public override void Execute()
    {
      SearchWindow window = ((SearchWindow)Application.Current.MainWindow);
      window.ContextPaneFrame.Source = null; //makes showing a new pane more reliable
      window.ContextPaneFrame.Visibility = Visibility.Visible;
      ((SearchWindow)App.Current.MainWindow).ContextPane.Navigate(new Uri("/Quokka;component/thequokkaplugin/contextpane.xaml", UriKind.Relative));
    }
  }
}
