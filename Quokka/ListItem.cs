using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media;

namespace Quokka {
    public abstract class ListItem {

        public string name;
        public string description;
        public ImageSource icon;

        public abstract void execute();
    }
}
