using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media;

namespace Quokka
{
    public class SystemApp
    {
        public string name;
        public string appUserModelID;
        public ImageSource icon;

        public SystemApp(string name, string appUserModelID, ImageSource icon)
        {
            this.name = name;
            this.appUserModelID = appUserModelID;
            this.icon = icon;
        }

        public override string ToString() {
            return name;
        }

        public void executeApp()
        {
            System.Diagnostics.Process.Start("explorer.exe", @" shell:appsFolder\" + appUserModelID);
        }
    }
}
