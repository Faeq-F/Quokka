using System.Windows.Controls;
using System.Windows.Media;

namespace Quokka {
  public abstract class ListItem {

    public string name { get; set; }
    public string description { get; set; }
    public ImageSource icon { get; set; }

    public abstract void execute();

    public override string ToString() {
      return name;
    }
  }
}
