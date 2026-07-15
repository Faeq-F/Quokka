using Quokka.Settings;
using static System.Windows.SystemParameters;

namespace Tests
{
  /**
    * <summary>
    * Testing for Quokka settings, i.e., if they apply correctly, are parsed correctly, etc..
    * </summary>
    */

  [TestClass]
  public class TestSettings
  {
    /**
      * <summary>
      * Testing parsing of Screen Dimensions settings,<br />
      * i.e., whether settings that can have screen dimensions values in them, are read and evaluated correctly.
      * </summary>
      */

    [TestMethod]
    public void TestScreenDimensionsParsing()
    {
      string[] possibleSettingValues = { "PrimaryScreenHeight/3", "PrimaryScreenHeight/ 2", "PrimaryScreenWidth / 3",
        "PrimaryScreenHeight", "PrimaryScreenWidth", "PrimaryScreenHeight*4", "PrimaryScreenHeight-56", "PrimaryScreenHeight+20"};
      double[] correspondingValues = { (PrimaryScreenHeight / 3), (PrimaryScreenHeight / 2), (PrimaryScreenWidth / 3), (PrimaryScreenHeight), (PrimaryScreenWidth), (PrimaryScreenHeight * 4), (PrimaryScreenHeight - 56), (PrimaryScreenHeight + 20) };
      for (int index = 0; index < possibleSettingValues.Length; index++)
      {
        Assert.AreEqual(SettingParsers.ParseScreenDimensionsSetting(possibleSettingValues[index]), correspondingValues[index]);
      }
    }
  }
}