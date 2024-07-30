using Quokka.PluginArch;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;

namespace Quokka {
  public partial class App {

    ///<summary>
    ///A list of all plugins available in the PlugBoard.
    ///</summary>
    public static List<IPlugger> plugins = new List<IPlugger>();

    //returns the absolute path to the plugin's DLL
    private string GetPluggerDll(string connector) {
      string[] files = Directory.GetFiles(
          System.IO.Path.GetFullPath(connector),
          "*.dll",
          SearchOption.AllDirectories
      );
      foreach (string file in files) {
        if (FileVersionInfo.GetVersionInfo(file).ProductName!.StartsWith("Plugin_"))
          return file;
      }
      return string.Empty;
    }

    // grab plugins and run startup methods
    private void LoadPlugins() {
      if (Directory.Exists(Environment.CurrentDirectory + "\\PlugBoard")) {
        try {
          foreach (
              var plugin in Directory.GetDirectories(
                  Environment.CurrentDirectory + "\\PlugBoard\\"
              )
          ) {
            if (plugin != "") {
              string dllPath = GetPluggerDll(plugin);
              Assembly _Assembly = Assembly.LoadFile(dllPath);
              var types = _Assembly.GetTypes()?.ToList();
              var type = types?.Find(a => typeof(IPlugger).IsAssignableFrom(a));
              plugins.Add((IPlugger) Activator.CreateInstance(type!)!);
            }
          }
          //run anything needed for plugins on app startup
          foreach (IPlugger plugin in plugins) {
            plugin.OnAppStartup();
          }
        } catch (Exception ex) {
          ShowErrorMessageBox(ex, "Error with loading a plugin or calling its OnAppStartup()");
        }
      }
    }
  }
}
