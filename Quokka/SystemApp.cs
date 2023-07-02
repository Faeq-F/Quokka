using Microsoft.WindowsAPICodePack.Shell;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media;

namespace Quokka
{
    public class SystemApp : ListItem
    {

        public SystemApp(string name, string appUserModelID, ImageSource icon)
        {
            this.name = name;
            this.description = appUserModelID;
            this.icon = icon;
        }

        public SystemApp (ShellObject app) {
            this.name = app.Name;
            this.description = app.ParsingName; // or app.Properties.System.AppUserModel.ID
            this.icon = app.Thumbnail.ExtraLargeBitmapSource;
        }

        public override string ToString() {
            return name;
        }

        public override void execute() => System.Diagnostics.Process.Start("explorer.exe", @" shell:appsFolder\" + description);
    }
}
