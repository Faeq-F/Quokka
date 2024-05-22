using System.Collections.Generic;

namespace Plugin_PortableApps {

  /// <summary>
  ///   The setting for this (Portable Apps) plugin
  /// </summary>
  public class Settings {

    /// <summary>
    ///   The directory in which portable apps are saved
    ///   (defaults to "\PortableApps\")
    /// </summary>
    public string PortableAppsDirectory { get; set; } = "\\PortableApps\\";

    /// <summary>
    ///   The command to show all Portable Apps found
    ///   (defaults to 'AllPortableApps')
    /// </summary>
    public string AllAppsSpecialCommand { get; set; } = "AllPortableApps";

    /// <summary>
    ///   List of application names to not show (defaults to
    ///   empty - all apps can be shown)
    /// </summary>
    public List<string> BlackList { get; set; } = new List<string>(new string[] { });

    /// <summary>
    ///   The threshold for when to consider an application
    ///   name is similar enough to the query for it to be
    ///   displayed (defaults to 5). Currently uses the
    ///   Levenshtein distance; the larger the number, the
    ///   bigger the difference.
    /// </summary>
    public int FuzzySearchThreshold { get; set; } = 5;
  }
}