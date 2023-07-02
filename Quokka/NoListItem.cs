using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Controls;

namespace Quokka {
    public class NoListItem : ListItem {

        public NoListItem() {
            this.name = "No items found";
            this.description = "Try suggestions made by other items to correct your query";
        }

        public override void execute() {
            //Do nothing
        }
    }
}
