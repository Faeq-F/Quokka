# Quokka
An extremely customizable keystroke launcher with plugins

This launcher is a way of running your portable and installed apps easily.

### Note - this codebase is a complete rewrite of the app
The app has a plugin architecture so that, like the app per the old codebase, it can / will have additional features such as opening files & folders, color conversion, translation and much more.

I intend to make the app extremely customizable.<br>
Currently, the settings window has not been developed.

## Instructions to use app

To use the app, run Quokka.exe

Left Win + Space launches the search bar<br>
arrow keys can be used to select items<br>
enter key executes an item<br>

You can use the Tray task icon to Exit the app completely, or launch the search window
<br>(The settings window has not been developed yet)

If you do not wish to use a plugin, simply delete the appropriate folder in PlugBoard


## Building the app (Portable):

1. Build solution
2. copy Debug folder (in bin) for Quokka project to desired location (e.g. USB drive)<br>
   (You may rename the folder to, for e.g., 'Quokka')
3. create a folder called 'PlugBoard' in the folder above<br>
   (in the Debug folder you may have renamed)
4. copy Debug folder (in bin) for plugins, to the PlugBoard folder<br>
   (2 plugins are included with the source code - ShowTypedText and TypedText)
5. rename the Debug folder for the plugin that has been copied to the name of the plugin

## Creating a plugin:

1. open Visual Studio
2. create a project of type WPF class library, naming it "Plugin_*YourPluginNameHere*"<br>
   (This may need to be in the same solution as Quokka for references <br>(I'm new to this, idk, that's what I did))
3. rename the cs file to "Plugin_*YourPluginNameHere*"
4. edit the project file to look like the following:<br>
   The following is part of the ShowTypedText plugin:<br>
```
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>net6.0-windows</TargetFramework>
    <Nullable>enable</Nullable>
    <UseWPF>true</UseWPF>
    <Product>Plugin_ShowTypedText</Product> //Add this
    <AppendTargetFrameworkToOutputPath>false</AppendTargetFrameworkToOutputPath> //Add this
    <AppendRuntimeIdentifierToOutputPath>false</AppendRuntimeIdentifierToOutputPath> //Add this
  </PropertyGroup>

  <ItemGroup>
    <ProjectReference Include="..\Quokka\Quokka.csproj" /> // this is added for you (see step 5)
  </ItemGroup>

</Project>
```
5. The project will need a reference to Quokka. To add this, right click on the project in the solution explorer, click on add project reference and tick Quokka.
6. In the cs file:

add
```
using Quokka.Plugger.Contracts;
using Quokka;
```
and create a ListItem class for your item type.<br>
e.g., the following is part of the ShowTypedText plugin:
```
class TypedTextItem : ListItem {
        public string query;
        public TypedTextItem(string query) { 
            this.name = "Typed:" + query;
            this.query = query;
            this.description = "The search field contains the above text";
            //this.icon = an ImageSource; 
        }

        //When item is selected, copy text
        public override void execute() {
            Clipboard.SetText(query);
            App.Current.MainWindow.Close();
        }
}
```
Then create a class that inherits from IPlugger<br> (this is in the same namespace and can go in the same file)<br><br>
e.g., The following is part of the ShowTypedText plugin:
```
public partial class ShowTypedText : IPlugger {

        private string query;
        public ShowTypedText() {}
 
        public string PluggerName { get; set; } = "ShowTypedText";

        /// <summary>  
        /// This will get called when user types a query into the search field
        /// </summary>  
        public ListItem[] GetPlugger(string query) {
            ListItem item = new TypedTextItem(query);
            return new ListItem[] {item};
        }

    }
```
GetPlugger is the method that is called by the SearchWindow when a user types in a query<br>
In this method, you should create your list item objects, filter them (if needed), and return them in a list<br>

7. Build the project<br>
8. Go to your file manager and open the projects bin folder. Rename the Debug folder to the name of the plugin and copy it to the PlugBoard folder in the Quokka project bin

<b>Done!</b> You have created a plugin for the app and can start using it.<br>
To stop using it, delete the appropriate folder from the PlugBoard
<br><br>

While developing your plugin, you may want to change it's output directory to the PlugBoard folder, so that you do not have to move and rename the plugin folder, every time you build the project.