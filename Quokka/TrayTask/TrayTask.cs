﻿using Hardcodet.Wpf.TaskbarNotification;
using Quokka.PluginArch;
using System;
using System.Diagnostics;
using System.Windows;

namespace Quokka {

  public partial class App {
    private TaskbarIcon? notifyIcon;

    ///<summary>
    ///Opens the PlugBoard folder within Windows file explorer.
    ///</summary>
    public static void OpenPlugBoard() {
      using Process folderOpener = new Process();
      folderOpener.StartInfo.FileName = "explorer";
      folderOpener.StartInfo.Arguments = Environment.CurrentDirectory + "\\PlugBoard\\";
      folderOpener.Start();
    }

    ///<summary>
    ///Opens the app settings file in notepad.
    ///</summary>
    public static void OpenSettingsFile() {
      using Process fileOpener = new Process();
      fileOpener.StartInfo.FileName = "notepad";
      fileOpener.StartInfo.Arguments =
          Environment.CurrentDirectory + "\\Config\\settings.json";
      fileOpener.Start();
    }


    ///<summary>
    ///The end point for the app. Runs all of the plugin OnAppShutdown methods,
    ///unhooks the keyboard listener and disposes of the tray task.
    ///</summary>
    ///<param name="e">The arguments for the Exit event.</param>
    protected override void OnExit(ExitEventArgs e) {
      //run anything needed for plugins on app exit
      try {
        foreach (Plugin plugin in plugins) {
          plugin.OnAppShutdown();
        }
      } catch (Exception ex) {
        ShowErrorMessageBox(ex, "Error with a plugin calling its OnAppShutdown()");
      }
      notifyIcon!.Dispose(); //the icon would clean up automatically, but this is cleaner
      base.OnExit(e);
    }

    private void CreateSearchWindow(object? sender, KeyPressedEventArgs e) {
      bool windowOpen = false;
      foreach (var wnd in Current.Windows) {
        if (wnd is SearchWindow) {
          windowOpen = true;
          break;
        }
      }
      if (!windowOpen) {
        Current.MainWindow = new SearchWindow();
        Current.MainWindow.Show();
      }
    }

  }
}
