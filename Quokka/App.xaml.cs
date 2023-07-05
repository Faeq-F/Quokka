using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Forms;
using System.Windows.Input;
using System.Windows.Interop;
using System.Windows.Media;
using System.Windows.Shapes;
using Hardcodet.Wpf.TaskbarNotification;
using Microsoft.WindowsAPICodePack.Shell;

namespace Quokka
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// <br>
    /// Includes wpf-notifyicon - CPOL:
    /// https://github.com/hardcodet/wpf-notifyicon/blob/develop/LICENSE
    /// <br>
    /// Includes WPF UI - MIT:
    /// https://github.com/lepoco/wpfui/blob/main/LICENSE
    /// <br>
    /// Includes LowLevelKeyboardListener from Dylan's Web
    /// License is in class file & at http://www.dylansweb.com/2014/10/low-level-global-keyboard-hook-sink-in-c-net/
    /// </summary>
    public partial class App : System.Windows.Application
    {
        private TaskbarIcon notifyIcon;
        private LowLevelKeyboardListener _listener;
        private string detectedKeys = "";
        public static List<ListItem> ListOfSystemApps {private set; get; }

        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);

            //create the notifyicon (it's a resource declared in NotifyIconResources.xaml
            notifyIcon = (TaskbarIcon)FindResource("NotifyIcon");

            //KeyboardHook LaunchSearchWindowHook = new KeyboardHook();
            // register the event that is fired after the key press.
            //EscapeHook.KeyPressed += new EventHandler<KeyPressedEventArgs>(showWindow);
            // register the hot key.- not working reliably
            //EscapeHook.RegisterHotKey(ModifierKeys.Alt, Keys.Space);

            _listener = new LowLevelKeyboardListener();
            _listener.OnKeyPressed += _listener_OnKeyPressed;
            _listener.HookKeyboard();

            ListOfSystemApps = new List<ListItem>();
            // GUID taken from https://learn.microsoft.com/en-us/windows/win32/shell/knownfolderid
            var FOLDERID_AppsFolder = new Guid("{1e87508d-89c2-42f0-8a7e-645a0f50ca58}");
            ShellObject appsFolder = (ShellObject)KnownFolderHelper.FromKnownFolderId(FOLDERID_AppsFolder);

            foreach (var app in (IKnownFolder)appsFolder) ListOfSystemApps.Add(new SystemApp(app));
        }

        //void showWindow(object sender, KeyPressedEventArgs e) {notifyIcon.LeftClickCommand.Execute(this);}

        protected override void OnExit(ExitEventArgs e){
            _listener.UnHookKeyboard();
            notifyIcon.Dispose(); //the icon would clean up automatically, but this is cleaner
            base.OnExit(e);
        }

        //Work around for 'The root Visual of a VisualTarget cannot have a parent' error introduced with .NET 4.5.2
        private void Application_LoadCompleted(object sender, System.Windows.Navigation.NavigationEventArgs e) {
            this.notifyIcon.ToolTipText = "Quokka";
        }

        void _listener_OnKeyPressed(object sender, KeyPressedArgs e) {
            //refresh hook to prevent app hanging
            _listener.UnHookKeyboard();
            _listener.HookKeyboard();

            //save memory - sometimes requires pressing the shortcut twice
            if (detectedKeys.Length > 20) detectedKeys = "";

            detectedKeys += e.KeyPressed.ToString();

            if (detectedKeys.Contains("LWinSpace")){
                App.Current.MainWindow = new SearchWindow();
                App.Current.MainWindow.Show();
                detectedKeys = "";
            }
        }
    }
}