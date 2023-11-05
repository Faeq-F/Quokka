using System.Collections.Generic;

namespace Plugin_InstalledApps {
  // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
  public class Settings {
    public string AllAppsSpecialCommand { get; set; }
    public string IconSize { get; set; }
    public List<string> BlackList { get; set; }
    public int FuzzySearchThreshold { get; set; }
  }

}
