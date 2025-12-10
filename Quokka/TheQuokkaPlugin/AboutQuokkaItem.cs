using Quokka.ListItems;
using Quokka.PluginArch;
using System;
using System.Windows;

namespace Quokka.TheQuokkaPlugin
{

  class AboutQuokkaItem : ListItem
  {

    public AboutQuokkaItem()
    {
      Name = "About Quokka";
      Description = "Current Version, What's New, Check for updates, Help, Feedback, Licenses, etc.";
      Icon = IconCache.GetOrAdd(
        Environment.CurrentDirectory + "\\Config\\Resources\\QuokkaLogo.png"
      );
    }

    public override void Execute()
    {
      SearchWindow window = ((SearchWindow)Application.Current.MainWindow);
      window.ContextPaneFrame.Source = null; //makes showing a new pane more reliable
      window.ContextPaneFrame.Visibility = Visibility.Visible;
      ((SearchWindow)App.Current.MainWindow).ContextPane.Navigate(new Uri("/Quokka;component/thequokkaplugin/contextpane.xaml", UriKind.Relative));
    }
  }
}
