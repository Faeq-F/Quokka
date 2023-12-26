using System.Collections.Generic;

namespace Plugin_PortableApps
{
  // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
  public class Settings
  {
    public string PortableAppsDirectory { get; set; }
    public string AllAppsSpecialCommand { get; set; }
    public List<string> BlackList { get; set; }
    public int FuzzySearchThreshold { get; set; }
  }

}
