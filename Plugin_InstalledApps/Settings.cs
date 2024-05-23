using System.Collections.Generic;

namespace Plugin_InstalledApps {

  /// <summary>
  ///   The setting for this (Installed Apps) plugin
  /// </summary>
  public class Settings {

    /// <summary>
    ///   The command to show all Installed Apps found
    ///   (defaults to 'AllApps')
    /// </summary>
    public string AllAppsSpecialCommand { get; set; } = "AllApps";

    /// <summary>
    ///   The size (Does not change scale) of the Icon to
    ///   render (Defaults to 'Medium'; values can be
    ///   'Small', 'Medium', 'Large', or 'ExtraLarge')
    /// </summary>
    public string IconSize { get; set; } = "Medium";

    /// <summary>
    ///   List of application names to not show (defaults to
    ///   empty - all apps can be shown)
    /// </summary>
    public List<string> BlackList { get; set; } =
    new List<string>(new string[] { });

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