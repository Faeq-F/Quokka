using Quokka.PluginArch;
using Quokka.TheQuokkaPlugin;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;

namespace Quokka
{
  public partial class App
  {

    private static readonly Collection<Plugin> plugins = new();

    ///<summary>
    ///A collection of all plugins available in the PlugBoard.
    ///</summary>
    public static Collection<Plugin> Plugins => plugins;

    internal static Dictionary<String, bool> hasContextPane = new();

    //returns the absolute path to the plugin's DLL
    private static string GetPluggerDll(string connector)
    {
      string[] files = Directory.GetFiles(
          System.IO.Path.GetFullPath(connector),
          "*.dll",
          SearchOption.AllDirectories
      );
      foreach (string file in files)
      {
        bool? isPlugin = FileVersionInfo.GetVersionInfo(file)?.ProductName?.StartsWith("Plugin", StringComparison.Ordinal);
        if ((bool)(isPlugin == null ? false : isPlugin))
          return file;
      }
      return string.Empty;
    }

    // grab plugins and run startup methods
    private static void LoadPlugins()
    {
      if (Directory.Exists(Environment.CurrentDirectory + "\\PlugBoard"))
      {

        foreach (
            var plugin in Directory.GetDirectories(
                Environment.CurrentDirectory + "\\PlugBoard\\"
            )
        )
        {
          try
          {
            if (!string.IsNullOrEmpty(plugin))
            {
              string dllPath = GetPluggerDll(plugin);
              Assembly _Assembly = Assembly.LoadFile(dllPath);
              var types = _Assembly.GetTypes()?.ToList();
              var type = types?.Find(a => typeof(Plugin).IsAssignableFrom(a));
              plugins.Add((Plugin)Activator.CreateInstance(type!)!);
              //check if it has a context pane
              string pluginName = plugin.Substring((Environment.CurrentDirectory + "\\PlugBoard\\").Length);
              hasContextPane[pluginName] = false;
              foreach (var assemblyType in _Assembly.GetTypes())
              {
                if (assemblyType.ToString().Equals(pluginName + "." + "ContextPane", StringComparison.Ordinal))
                {
                  hasContextPane[pluginName] = true;
                }
              }
            }
          }
          catch (Exception ex)
          {
            ShowErrorMessageBox(ex, "Error loading the plugin \"" + plugin.Replace(Environment.CurrentDirectory + "\\PlugBoard\\", "") + "\"");
          }
        }

        plugins.Add(new PluginQuokka());

        //run anything needed for plugins on app startup
        foreach (Plugin plugin in plugins)
        {
          try
          {
            plugin.OnAppStartup();
          }
          catch (Exception ex)
          {
            ShowErrorMessageBox(ex, "Error with the \"" + plugin.PluginName + "\" plugin calling its OnAppStartup()");
          }
        }

      }
    }
  }
}
