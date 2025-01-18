using Hardcodet.Wpf.TaskbarNotification;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Drawing;
using System.IO;
using System.Windows;

namespace Quokka {

  ///<summary>
  ///The Quokka app
  ///<br /><br />
  ///Includes:<br />
  /// - Illustration by Icons 8 from Ouch! - https://icons8.com<br />
  ///https://intercom.help/icons8-7fb7577e8170/en/articles/5534926-universal-multimedia-license-agreement-for-icons8<br /><br />
  /// - Feather by Cole Bemis<br />
  ///https://github.com/feathericons/feather/blob/main/LICENSE<br /><br />
  /// -  Varela Round by Joe Prince<br />
  ///https://fonts.google.com/specimen/Varela+Round/about<br /><br />
  /// - wpf-notifyIcon - CPOL-1.02<br />
  ///https://github.com/hardcodet/wpf-notifyicon/blob/develop/LICENSE<br /><br />
  /// - KeyboardHook by Christian Liensberger<br />
  ///Obtained from https://web.archive.org/web/20141017230556/http://www.liensberger.it:80/web/blog/?p=207<br /><br />
  /// - JSON.Net - MIT license<br />
  ///https://github.com/JamesNK/Newtonsoft.Json/blob/master/LICENSE.md<br /><br />
  /// - XAMLFlair - MIT License<br />
  ///https://github.com/XamlFlair/XamlFlair/blob/master/LICENSE<br /><br />
  /// - References from a Plugin Architecture by Nagaraj M<br />
  ///https://www.c-sharpcorner.com/article/simple-plugin-architecture-using-reflection-with-wpf-projects/
  ///</summary>

  public partial class App : Application {

    private KeyboardHook hook = new KeyboardHook();

    /// <summary>
    /// The entry point for the app. Loads all of the settings in the app settings file,
    /// plugins available in the PlugBoard, the SearchWindow HotKey and the tray task.
    /// Also runs all of the plugins' OnAppStartup() methods.
    /// </summary>
    /// <param name="e">The arguments for the Startup event.</param>
    protected override void OnStartup(StartupEventArgs e) {
      base.OnStartup(e);

      notifyIcon = (TaskbarIcon) FindResource("LoadingNotifyIcon");
      notifyIcon.Icon = new Icon(File.OpenRead(Environment.CurrentDirectory + "\\Config\\Resources\\LoadingQuokkaTray.ico"));

      try {
        applyAppSettings(JObject.Parse(File.ReadAllText(Environment.CurrentDirectory + "\\Config\\settings.json")));
      } catch (JsonReaderException exception) {
        ShowErrorMessageBox(exception, "Could not parse settings");
        Environment.Exit(-1);
      }

      LoadPlugins();

      XamlFlair.Animations.OverrideDefaultSettings(duration: 200);

      try {
        hook.KeyPressed += new EventHandler<KeyPressedEventArgs>(CreateSearchWindow);
        hook.RegisterHotKey((ModifierKeys) Current.Resources["WindowHotKeyModifier"], (System.Windows.Forms.Keys) Current.Resources["WindowHotKey"]);
      } catch (InvalidOperationException exception) {
        ShowErrorMessageBox(exception, "Could not register the hotkey");
      }

      notifyIcon.Dispose();
      notifyIcon = (TaskbarIcon) FindResource("NotifyIcon");
      notifyIcon.Icon = new Icon(File.OpenRead(Environment.CurrentDirectory + "\\Config\\Resources\\QuokkaTray.ico"));

    }

    private void Application_DispatcherUnhandledException(object sender, System.Windows.Threading.DispatcherUnhandledExceptionEventArgs e) {
      ShowErrorMessageBox(e.Exception, "Unknown error!");
      e.Handled = true;
    }

    /// <summary>
    /// Displays a message box to the user with an error icon and an OK button
    /// </summary>
    /// <param name="exception">The exception that requires that the user sees the error message</param>
    /// <param name="title">The title of the message box</param>
    static public void ShowErrorMessageBox(Exception exception, String title) {
      System.Windows.MessageBox.Show(
            exception.Message + "\n\n" + exception.StackTrace,
            title,
            MessageBoxButton.OK,
            MessageBoxImage.Error
        );
    }
  }
}
