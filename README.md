# Quokka
An extremely customizable keystroke launcher with plugins

This launcher is a way of running your portable and installed apps easily.

---

### Note - this codebase is a complete rewrite of the app

The app has a plugin architecture so that, like the app per the old codebase, it can / will have additional features such as opening files & folders, color conversion, translation and much more.

I intend to make the app extremely customizable.<br>
Currently, the settings window has not been developed.

---

<details>
<summary>
<h2>Instructions to use app</h2>
</summary>

To use the app, run Quokka.exe

| Default Keyboard shortcut | Use |
|-----:|-----------|
| Left Win + Space | launches the search bar |
| arrow keys | select items |
| enter key | executes an item |
| menu key | launches context pane for item |

You can use the Tray task icon to Exit the app completely, or launch the search window
<br>(The settings window has not been developed yet)

To add a plugin, download it to the PlugBoard folder<br>
If you do not wish to use a plugin, simply delete the appropriate folder in PlugBoard

### Special commands
<b>special commands are case-sensitive</b> to ensure they do not interfere with other functions of the app or plugins<br><br>
| Command (Case Sensitive) | Use |
|-----:|-----------|
| AllApps | list all installed apps |

</details>

<details>
<summary>
<h2>Planned plugins</h2>
</summary>

In order of priority:

| Developed? | Plugin |
|-----:|-----------|
|     ✅| installed app launcher |
|     ▢| better ui & theming |
|     ▢| portable app launcher |
|     ▢| file/folder - everything - maybe with preview pane |
|     ▢| sharex integration |
|     ▢| calculator |
|     ▢| os power commands (logout, lock, sleep, chutdown, etc.) |
|     ▢| control panel shortcuts |
|     ▢| Windows settings |
|     ▢| IP & MAC address |
|     ▢| cli commands - powershell |
|     ▢| dictionary |
|     ▢| unicode character lookup |
|     ▢| color space conversion |
|     ▢| unit conversion |
|     ▢| currency conversion |
|     ▢| translate |
|     ▢| lorem ipsum generator |
|     ▢| emoji lookup |
|     ▢| url opener |
|     ▢| wikipedia search |
|     ▢| clipboard manager |
|     ▢| keepass integration |
|     ▢| Timezone converter |
|     ▢| workflows - launch multiple shortcuts at once - see below |

</details>

<details>
<summary>
<h2>Building the app (Portable)</h2>
</summary>

1. open Visual Studio & clone Quokka<br>

2. Build solution<br>

3. copy Debug folder (in bin) for Quokka project to desired location (e.g. USB drive)

> (You may rename the folder to, for e.g., 'Quokka')<br>
4. (Download / Delete) any plugins you (do / do not) wish to use<br>(In the PlugBoard folder)<br>
> (3 plugins are included with the source code - InstalledAppLauncher, ShowTypedText and TypedText)

</details>


<details>
<summary>
<h2>Creating a plugin</h2>
</summary>


1. open Visual Studio & clone Quokka
2. in the solution, create a project of type WPF class library, naming it "Plugin_*YourPluginNameHere*"<br>
3. rename the cs file to "Plugin_*YourPluginNameHere*"
4. edit the project file to look like the following:<br>
   > The following is part of the ShowTypedText plugin:<br>
```
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>net6.0-windows</TargetFramework>
    <Nullable>enable</Nullable>
    <UseWPF>true</UseWPF>
    <Product>Plugin_ShowTypedText</Product> //Add this
    <AppendTargetFrameworkToOutputPath>false</AppendTargetFrameworkToOutputPath> //Add this
    <AppendRuntimeIdentifierToOutputPath>false</AppendRuntimeIdentifierToOutputPath> //Add this
    <BaseOutputPath>..\Quokka\bin\Debug\PlugBoard\Plugin_ShowTypedText</BaseOutputPath> //Add this
  </PropertyGroup>

  <ItemGroup>
    <ProjectReference Include="..\Quokka\Quokka.csproj" /> // this is added for you (see step 5)
  </ItemGroup>

</Project>
```
5. The project will need a reference to Quokka. To add this, right click on the project in the solution explorer, click on add project reference and tick Quokka.
6. In the cs file add
```
using Quokka.Plugger.Contracts;
using Quokka;
```
and create a ListItem class for your item type.<br>
> e.g., the following is part of the ShowTypedText plugin:
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
Then create a class that inherits from IPlugger<br> (this is in the same namespace and can go in the same file)<br>
> e.g., The following is part of the ShowTypedText plugin:
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

7. Build the solution<br>

<b>Done!</b> You have created a plugin for the app and can start using it.<br>
To stop using it, delete the appropriate folder from the PlugBoard
</details>