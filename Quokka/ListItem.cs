using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Media;

namespace Quokka {
    public abstract class ListItem {

        public string name { get; set; }
        public string description { get; set; }
        public ImageSource icon { get; set; }

        //add context pane

        public abstract void execute();

        public override string ToString() {
            return name;
        }
    }
}
