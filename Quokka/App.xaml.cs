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
using Hardcodet.Wpf.TaskbarNotification;

namespace Quokka
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : System.Windows.Application
    {
        private TaskbarIcon notifyIcon;

        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);

            //create the notifyicon (it's a resource declared in NotifyIconResources.xaml
            notifyIcon = (TaskbarIcon)FindResource("NotifyIcon");

            //KeyboardHook EscapeHook = new KeyboardHook();
            // register the event that is fired after the key press.
            //EscapeHook.KeyPressed += new EventHandler<KeyPressedEventArgs>(showWindow);
            // register the hot key.
            //EscapeHook.RegisterHotKey(ModifierKeys.Alt, Keys.Space);
        }

        //void showWindow(object sender, KeyPressedEventArgs e)
        //{
          //  notifyIcon.LeftClickCommand.Execute(this);
        //}

        protected override void OnExit(ExitEventArgs e)
        {
            notifyIcon.Dispose(); //the icon would clean up automatically, but this is cleaner
            base.OnExit(e);
        }


    }
}
