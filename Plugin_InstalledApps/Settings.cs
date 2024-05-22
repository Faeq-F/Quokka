using System.Collections.Generic;

namespace Plugin_InstalledApps {

  // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
  public class Settings {
    public string AllAppsSpecialCommand { get; set; } = "AllApps";
    public string IconSize { get; set; } = "Medium";

    public List<string> BlackList { get; set; } =
    new List<string>(new string[] { });

    public int FuzzySearchThreshold { get; set; } = 5;
  }
}