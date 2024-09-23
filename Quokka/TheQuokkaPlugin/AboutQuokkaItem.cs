using Quokka.ListItems;
using System;
using System.Windows.Media.Imaging;

namespace Quokka.TheQuokkaPlugin {

  class AboutQuokkaItem : ListItem {

    public AboutQuokkaItem() {
      this.Name = "About Quokka";
      this.Description = "Current Version, What's New, Check for updates, Help, Feedback, Licenses, etc.";
      this.Icon = new BitmapImage(new Uri(Environment.CurrentDirectory + "\\Config\\Resources\\QuokkaLogo.png"));
    }

    public override void Execute() { }
  }
}
