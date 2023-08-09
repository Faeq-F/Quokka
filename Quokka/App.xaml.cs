using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Reflection;
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
using Quokka.Plugger.Contracts;

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
    /// <br>
    /// Includes JSON.Net - MIT license
    /// https://github.com/JamesNK/Newtonsoft.Json/blob/master/LICENSE.md
    /// </summary>
    public partial class App : System.Windows.Application {
        private TaskbarIcon notifyIcon;
        private LowLevelKeyboardListener _listener;
        private string detectedKeys = "";

        public static List<IPlugger> plugins { private set; get; }

        protected override void OnStartup(StartupEventArgs e) {
            base.OnStartup(e);

            // grab plugins and run startup
            plugins = new List<IPlugger>();
            if (Directory.Exists(Environment.CurrentDirectory + "\\PlugBoard")) {
                try {
                    foreach (var plugin in Directory.GetDirectories(Environment.CurrentDirectory + "\\PlugBoard\\")) {
                        string dllPath = GetPluggerDll(plugin);
                        Assembly _Assembly = Assembly.LoadFile(dllPath);
                        var types = _Assembly.GetTypes()?.ToList();
                        var type = types?.Find(a => typeof(IPlugger).IsAssignableFrom(a));
                        plugins.Add((IPlugger)Activator.CreateInstance(type));
                    }
                    //run anything needed for plugins on app startup
                    foreach (IPlugger plugin in plugins) {
                        plugin.OnAppStartup();
                    }
                } catch (Exception ex) {
                    System.Windows.MessageBox.Show(ex.Message + "\n" + ex.StackTrace, "Internal Error", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }

            //keyboard listener for search window shortcut
            _listener = new LowLevelKeyboardListener();
            _listener.OnKeyPressed += _listener_OnKeyPressed;
            _listener.HookKeyboard();

            //create the notifyicon (it's a resource declared in NotifyIconResources.xaml
            notifyIcon = (TaskbarIcon)FindResource("NotifyIcon");
            notifyIcon.Icon = new Icon(File.OpenRead(Environment.CurrentDirectory + "\\Config\\Resources\\QuokkaTray.ico"));

        }

        public static void OpenSettingsFile(){
            using Process fileopener = new Process();
            fileopener.StartInfo.FileName = "notepad";
            fileopener.StartInfo.Arguments = Environment.CurrentDirectory + "\\Config\\settings.json";
            fileopener.Start();
        }

        public static void OpenPlugBoard(){
            using Process folderopener = new Process();
            folderopener.StartInfo.FileName = "explorer";
            folderopener.StartInfo.Arguments = Environment.CurrentDirectory + "\\PlugBoard\\";
            folderopener.Start();
        }

        private string GetPluggerDll(string connector) {
            var files = Directory.GetFiles(System.IO.Path.GetFullPath(connector), "*.dll", SearchOption.AllDirectories);
            foreach (var file in files) {
                if (FileVersionInfo.GetVersionInfo(file).ProductName.StartsWith("Plugin_")) return file;
            }
            return string.Empty;
        }

        protected override void OnExit(ExitEventArgs e){
            //run anything needed for plugins on app exit
            try {
                foreach (IPlugger plugin in plugins) {
                    plugin.OnAppShutdown();
                }
            } catch (Exception ex) {
                System.Windows.MessageBox.Show(ex.Message + "\n" + ex.StackTrace, "Internal Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
            _listener.UnHookKeyboard();
            notifyIcon.Dispose(); //the icon would clean up automatically, but this is cleaner
            base.OnExit(e);
        }

        //Work around for 'The root Visual of a VisualTarget cannot have a parent' error introduced with .NET 4.5.2
        private void Application_LoadCompleted(object sender, System.Windows.Navigation.NavigationEventArgs e) {
            this.notifyIcon.ToolTipText = "Quokka";
        }

        //launching search window
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