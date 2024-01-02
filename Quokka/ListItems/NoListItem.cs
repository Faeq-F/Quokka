using System;
using System.Windows.Media.Imaging;

namespace Quokka.ListItems {
  public class NoListItem : ListItem {

    public NoListItem() {
      Name = "No items found";
      Description = "Try suggestions made by other items to correct your query";
      Icon = new BitmapImage(new Uri(Environment.CurrentDirectory + "\\Config\\Resources\\information.png"));
    }

    public override void Execute() {
      //Do nothing
    }
  }
}
