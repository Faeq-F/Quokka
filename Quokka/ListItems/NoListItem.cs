using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Controls;
using System.Windows.Media.Imaging;

namespace Quokka.ListItems
{
    public class NoListItem : ListItem
    {

        public NoListItem()
        {
            name = "No items found";
            description = "Try suggestions made by other items to correct your query";
            icon = new BitmapImage(new Uri(
                            Environment.CurrentDirectory + "\\Config\\Resources\\information.png"));
        }

        public override void execute()
        {
            //Do nothing
        }
    }
}
