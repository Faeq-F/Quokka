using static System.Windows.SystemParameters;
namespace Tests {
  [TestClass]
  public class TestSettings {

    [TestMethod]
    public void TestScreenDimensionsParsing() {
      string[] possibleSettingValues = { "PrimaryScreenHeight/3", "PrimaryScreenHeight/ 2", "PrimaryScreenWidth / 3",
        "PrimaryScreenHeight", "PrimaryScreenWidth", "PrimaryScreenHeight*4", "PrimaryScreenHeight-56", "PrimaryScreenHeight+20"};
      double[] correspondingValues = { ( PrimaryScreenHeight / 3 ), ( PrimaryScreenHeight / 2 ), ( PrimaryScreenWidth / 3 ), ( PrimaryScreenHeight ), (PrimaryScreenWidth), (PrimaryScreenHeight*4), (PrimaryScreenHeight-56), (PrimaryScreenHeight+20) };
      for (int index = 0; index < possibleSettingValues.Length; index++) {
        Assert.AreEqual(Quokka.SettingParsers.parseScreenDimensionsSetting(possibleSettingValues[index]), correspondingValues[index]);
      }
    }
  }
}