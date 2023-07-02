using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Forms;
using System.Windows.Interop;
using System.Windows.Media;
using Hardcodet.Wpf.TaskbarNotification;
using Microsoft.WindowsAPICodePack.Shell;

namespace Quokka
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : System.Windows.Application
    {
        private TaskbarIcon notifyIcon;
        public static List<ListItem> ListOfSystemApps {private set; get; }

        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);

            //create the notifyicon (it's a resource declared in NotifyIconResources.xaml
            notifyIcon = (TaskbarIcon)FindResource("NotifyIcon");

            //KeyboardHook EscapeHook = new KeyboardHook();
            // register the event that is fired after the key press.
            //EscapeHook.KeyPressed += new EventHandler<KeyPressedEventArgs>(showWindow);
            // register the hot key.- not working reliably
            //EscapeHook.RegisterHotKey(ModifierKeys.Alt, Keys.Space);

            ListOfSystemApps = new List<ListItem>();
            // GUID taken from https://learn.microsoft.com/en-us/windows/win32/shell/knownfolderid
            var FOLDERID_AppsFolder = new Guid("{1e87508d-89c2-42f0-8a7e-645a0f50ca58}");
            ShellObject appsFolder = (ShellObject)KnownFolderHelper.FromKnownFolderId(FOLDERID_AppsFolder);

            foreach (var app in (IKnownFolder)appsFolder) ListOfSystemApps.Add(new SystemApp(app));
        }

        //void showWindow(object sender, KeyPressedEventArgs e) {notifyIcon.LeftClickCommand.Execute(this);}

        protected override void OnExit(ExitEventArgs e){
            notifyIcon.Dispose(); //the icon would clean up automatically, but this is cleaner
            base.OnExit(e);
        }

    }
}
