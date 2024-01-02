using System.Windows.Media;

namespace Quokka.ListItems {
  public abstract class ListItem {

    public string Name { get; set; }
    public string Description { get; set; }
    public ImageSource Icon { get; set; }

    public abstract void Execute();

    public override string ToString() {
      return Name;
    }
  }
}
