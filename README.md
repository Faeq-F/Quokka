# Quokka
An extremely customizable, portable keystroke launcher with plugins

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

| Default Keyboard shortcut | Use | Notes |
|-----:|-----------|-|
| <kbd>Left ⊞</kbd> + <kbd>Space</kbd> | launches the search bar | This shortcut is modifiable; [see the WindowHotKey setting](https://github.com/Faeq-F/Quokka#general-settings)
| <kbd>🠙</kbd> & <kbd>🠛</kbd> | select items | The keys used cannot be changed
| <kbd>↵</kbd> | executes an item |The key used cannot be changed
| <kbd>☰</kbd> | shows context pane for item |The key used cannot be changed

The Tray task icon context menu can be used to:
 - launch the search window
 - open the settings file
 - open the PlugBoard
 - exit the app


To add a plugin, download it to the PlugBoard folder<br>
If you do not wish to use a plugin, simply delete the appropriate folder in the PlugBoard

---

### Special commands
<b>special commands are case-sensitive</b> to ensure they do not interfere with other functions of the app or plugins<br><br>
| Command (Case Sensitive) | Use | Plugin | Notes
|-----:|-----------|-----------|-|
| ```AllApps``` | list all installed apps | InstalledApps | This command is modifiable within the plugin specific settings <br><br>Along with the list of apps, an extra item is added to the start, allowing users to open shell:appsFolder. This item can be blacklisted.
| ```AllPortableApps``` | list all portable apps | PortableApps | This command is modifiable within the plugin specific settings <br><br>Along with the list of apps, an extra item is added to the start, allowing users to open the portable apps directory. This item can be blacklisted.

</details>

<details>
<summary>
<h2>App settings</h2>
</summary>
All settings are <b>loaded when the application starts</b>, meaning that you will have to exit and re-start the app to see changes.
<br><br>
Plugins may have their <b>own, specific settings files</b> in the root of their respective folders in the PlugBoard. You can open The PlugBoard using the Tray Task Icon context menu
<br>

---

<details>
<summary>
<h3>General settings</h3>
</summary>

| Setting name | Notes | Default Value |
|-----:|-----------|-----------|
| ```WindowHotKey``` | The default value is interpreted as 'Left Windows key + Spacebar' <br><br> The full list of keys that can be used in the setting can be found [here](https://learn.microsoft.com/en-us/dotnet/api/system.windows.input.key?view=windowsdesktop-7.0#fields) (use the first column)| ```LWinSpace``` |
</details>

<details>
<summary>
<h3>Style settings</h3>
</summary>

<h4>Window</h4>

| Setting name | Notes | Default Value |
|-----:|-----------|-----------|
| ```WindowTopMargin``` | The window is centered horizontally but anchored to the top of the screen. This setting controls how far down it will appear. | ```ScreenHeight/3``` |


<details>
<summary>
<h4>Search bar</h4>
</summary>

| Setting name | Notes | Default Value |
|-----:|-----------|-----------|
| SearchBarColor | color | White |
| SearchBarRounding | corner radius | 32 |
| SearchBarBorderColor | border color | Black |
| SearchBarBorderSize | border thickness | 3 |
| SearchBarHeight | height | 64 |
| SearchBarWidth | width | screen width / 2 |
| SearchIconWidth | icon width | 64 |
| SearchIcon | icon file | ? |

<h5>Entry field</h5>

| Setting name | Notes | Default Value |
|-----:|-----------|-----------|
| SearchFieldTxtColor | text color | Black |
| SearchFieldTxtSelColor | select color | Black |
| SearchFieldHeight | height | ? |
| SearchFieldWidth | ? | ? |
| SearchFieldMargin | ? | ? |
| SearchFieldFont | font family | ? |
| SearchFieldTxtSize | font size | 24 |
| SearchFieldPlaceholder | This is the text in the search field when there is no input - a placeholder| Enter Query |
| SearchFieldPlaceholderMargin | This is the margin (spacing) around the placeholder text| ? |
| SearchFieldPlaceholderColor | This is the color of the placeholder in the search field | ? |
| SearchFieldPlaceholderSize | placeholder font size | ? |
| SearchFieldPlaceholderFont | placeholder font family | ? |
</details>

<details>
<summary>
<h4>Results List</h4>
</summary>

<details>
<summary>
<h5>Container</h5>
</summary>

| Setting name | Notes | Default Value |
|-----:|-----------|-----------|
| ListContainerMargin | margin | ? |
| ListContainerBorderColor | border color | ? |
| ListContainerBorderThickness | border thickness | ? |
| ListContainerRounding | corner radius | 15 |
| ListContainerColor | background color | white |
| ListContainerMinHeight | Min Height | ? |
| ListContainerWidth | width | ? |
</details>

<details>
<summary>
<h5>List</h5>
</summary>

| Setting name | Notes | Default Value |
|-----:|-----------|-----------|
| ListMargin | margin | ? |

<details>
<summary>
<h6>Scroll Bar Background</h4>
</summary>

| Setting name | Notes | Default Value |
|-----:|-----------|-----------|
| ScrollBarBgVisibility | visibility | ? |
| ScrollBarBgColor | color | ? |
| ScrollBarBgRounding | corner radius | ? |
| ScrollBarBgBorderColor | border color | ? |
| ScrollBarBgBorderThickness | border thickness | ? |
| ScrollBarBgWidth | width | ? |
| ScrollBarBgMargin | margin | ? |
</details>

<details>
<summary>
<h6>Scroll Bar Thumb Background</h6>
</summary>

| Setting name | Notes | Default Value |
|-----:|-----------|-----------|
| ScrollThumbBgVisibility | visibility | Visible |
| ScrollThumbBgColor | color | ? |
| ScrollThumbBgRounding | corner radius | ? |
| ScrollThumbBgBorderColor | border color | ? |
| ScrollThumbBgBorderThickness | border thickness | ? |
| ScrollThumbBgWidth | width | ? |
| ScrollThumbBgMargin | margin | ? |
</details>

<details>
<summary>
<h6>Scroll Bar Thumb</h6>
</summary>

| Setting name | Notes | Default Value |
|-----:|-----------|-----------|
| ScrollThumbVisibility | visibility | ? |
| ScrollThumbColor | color | ? |
| ScrollThumbRounding | corner radius | ? |
| ScrollThumbBorderColor | border color | ? |
| ScrollThumbBorderThickness | border thickness | ? |
| ScrollThumbWidth | width | ? |
| ScrollThumbMargin | margin | ? |
</details>
</details>




<details>
<summary>
<h5>List item</h5>
</summary>

| Setting name | Notes | Default Value |
|-----:|-----------|-----------|
| ListItemBorderThickness | border thickness | ? |
| ListItemHoverBorderColor | hover border color | ? |
| ListItemHoverBgColor | hover background color | ? |
| ListItemSelectedBorderColor | selected border color | ? |
| ListItemSelectedBgColor | selected background color | ? |
| ListItemRounding | corner radius | 15 |
| ListItemMargin | margin | ? |
| ListItemIconSize | icon size | 50 |
| ListItemTextMargin | text margin (from icon) | ? |
| ListItemNameFont | name font family | ? |
| ListItemNameSize | name size | ? |
| ListItemNameColor | name color | Black |
| ListItemDescFont | description font family | ? |
| ListItemDescSize | description size | ? |
| ListItemDescColor | description color | ? |

<details>
<summary>
<h6>Context Pane</h6>
</summary>
Context panes are implemented by plugins. If an item does not use these settings, it is due to how the plugin's author developed the context pane.
<br><br>

| Setting name | Notes | Default Value |
|-----:|-----------|-----------|
| ContextPaneBorderColor | ? | ? |
| ContextPaneBorderThickness | ? | ? |
| ContextPaneCornerRounding | ? | ? |
| ContextPaneBackground | ? | ? |
| ContextPaneMinHeight | ? | ? |

<details>
<summary>
<h5>List</h5>
</summary>

| Setting name | Notes | Default Value |
|-----:|-----------|-----------|
| ContextPaneListMargin | margin | ? |
| ContextButtonBackgroundOnHover | ? | ? |
| ContextButtonContentMargin | ? | ? |

<details>
<summary>
<h6>Scroll Bar Background</h4>
</summary>

| Setting name | Notes | Default Value |
|-----:|-----------|-----------|
| ContextPaneScrollBarBgVisibility | visibility | ? |
| ContextPaneScrollBarBgColor | color | ? |
| ContextPaneScrollBarBgRounding | corner radius | ? |
| ContextPaneScrollBarBgBorderColor | border color | ? |
| ContextPaneScrollBarBgBorderThickness | border thickness | ? |
| ContextPaneScrollBarBgWidth | width | ? |
| ContextPaneScrollBarBgMargin | margin | ? |
</details>

<details>
<summary>
<h6>Scroll Bar Thumb Background</h6>
</summary>

| Setting name | Notes | Default Value |
|-----:|-----------|-----------|
| ContextPaneScrollThumbBgVisibility | visibility | ? |
| ContextPaneScrollThumbBgColor | color | ? |
| ContextPaneScrollThumbBgRounding | corner radius | ? |
| ContextPaneScrollThumbBgBorderColor | border color | ? |
| ContextPaneScrollThumbBgBorderThickness | border thickness | ? |
| ContextPaneScrollThumbBgWidth | width | ? |
| ContextPaneScrollThumbBgMargin | margin | ? |
</details>

<details>
<summary>
<h6>Scroll Bar Thumb</h6>
</summary>

| Setting name | Notes | Default Value |
|-----:|-----------|-----------|
| ContextPaneScrollThumbVisibility | visibility | ? |
| ContextPaneScrollThumbColor | color | ? |
| ContextPaneScrollThumbRounding | corner radius | ? |
| ContextPaneScrollThumbBorderColor | border color | ? |
| ContextPaneScrollThumbBorderThickness | border thickness | ? |
| ContextPaneScrollThumbWidth | width | ? |
| ContextPaneScrollThumbMargin | margin | ? |
</details>

</details>

</details>
</details>


</details>
</details>

---

</details>



<details>
<summary>
<h2>Planned plugins</h2>
</summary>

In order of priority:

| Developed? | Plugin |
|-----:|-----------|
|     ✅| installed app launcher |
|     ✅| portable app launcher |
|In progress| file/folder launcher - everything integration|
|     ▢| screen capture - sharex integration |
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
> (3 plugins are included with the source code - InstalledApps, ShowTypedText and TypedText)

> The TypedText and ShowTypedText plugins are meant as demos and examples of plugins and will not be included in the final release

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

    <PublishSingleFile>true</PublishSingleFile>
    <SelfContained>true</SelfContained>
	<DebugType>embedded</DebugType>
    <Product>Plugin_ShowTypedText</Product>
    <AppendTargetFrameworkToOutputPath>false</AppendTargetFrameworkToOutputPath>
    <AppendRuntimeIdentifierToOutputPath>false</AppendRuntimeIdentifierToOutputPath>
    <BaseOutputPath>..\Quokka\bin\Debug\PlugBoard\Plugin_ShowTypedText</BaseOutputPath>

  </PropertyGroup>

  <ItemGroup>
    <ProjectReference Include="..\Quokka\Quokka.csproj" />
  </ItemGroup>

</Project>
```
5. In the cs file add
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
            this.icon = new BitmapImage(new Uri(
                Environment.CurrentDirectory + "\\Config\\Resources\\information.png"));
        }

        //When item is selected, copy text
        public override void execute() {
            Clipboard.SetText(query);
            App.Current.MainWindow.Close();
        }
}
```
7. create a class that inherits from IPlugger<br> (this is in the same namespace and can go in the same file)<br>
> e.g., The following is part of the ShowTypedText plugin:
```
public partial class ShowTypedText : IPlugger {

        public ShowTypedText() {}
 
        public string PluggerName { get; set; } = "ShowTypedText";

        /// <summary>  
        /// This will get called when user types a query into the search field
        /// </summary>  
        public List<ListItem> OnQueryChange(string query) {
            List<ListItem> ItemList = new List<ListItem>();
            ItemList.Add(new ShowTypedTextItem(query));
            return ItemList;
        }

        public List<String> SpecialCommands() {
            return new List<String>();
        }

        public List<ListItem> OnSpecialCommand(string command) {
            return new List<ListItem>();
        }

        public void OnAppStartup() { }

        public void OnAppShutdown() { }

        public void OnSearchWindowStartup() { }

    }
```
OnQueryChange is the method that is called by the SearchWindow when a user types in a query<br>
In this method, you should create your list item objects, filter them (if needed), and return them in a list<br>
<br>
If your plugin has a special command, then you will need to sort the list for that command yourself. Normal results (those returned in OnQueryChange) do not need to be sorted as Quokka will sort them once it has results from all of the plugins the program is using during runtime.

8. Every plugin (for now) will need a context pane for its item type

- In the project, add a WPF Page <b>called 'ContextPane'</b>
- ensure ContextPane : Page (inherits page)
- ensure the plugin's project file has
```
<ItemGroup>
    <Compile Update="ContextPane.xaml.cs">
        <SubType>Code</SubType>
    </Compile>
</ItemGroup>

<ItemGroup>
    <Page Update="ContextPane.xaml">
        <SubType>Designer</SubType>
    </Page>
</ItemGroup>
```
- add information / extra actions to the pane
> e.g., The following is part of the ShowTypedText plugin:
```
<Page x:Class="Plugin_ShowTypedText.ContextPane"
    ...
    d:DesignHeight="300" d:DesignWidth="800"
    Title="ContextPane"
    KeyDown="Page_KeyDown">

    <Border ...>

        <Grid Margin="10" VerticalAlignment="Center" HorizontalAlignment="Center">

            ...

            <Grid Grid.Column="0">

                ...

                <Image Grid.Row="0" x:Name="DetailsImage"/>
                <TextBlock TextWrapping="Wrap"
                    Text="You typed the text after 'Typed:'" Grid.Row="1" Padding="10"/>
                <TextBlock TextWrapping="Wrap"
                    Text="" Grid.Row="2" x:Name="text" Padding="10"/>
            </Grid>

            <Grid Grid.Column="1">

                <ListView
                    ScrollViewer.HorizontalScrollBarVisibility="Disabled"
                    HorizontalContentAlignment="Center" x:Name="ButtonsListView">

                    <ui:Button Content="Copy the text" Padding="10" Click="CopyText"/>
                    <ui:Button Content="Another 'Copy the text' button"
                        Padding="10"  Click="CopyText"/>
                    <ui:Button Content="Another 'Copy the text' button"
                        Padding="10"  Click="CopyText"/>
                </ListView>

            </Grid>
        </Grid>
    </Border>
</Page>
```

```
using Quokka;
...

namespace Plugin_ShowTypedText {

    public partial class ContextPane : Page{

        private Quokka.ListItem Item;

        public ContextPane() {
            InitializeComponent();
            this.Item = (Application.Current.MainWindow as SearchWindow).SelectedItem;
            DetailsImage.Source = this.Item.icon;
            text.Text = Item.name;
        }

        ...

        private void Page_KeyDown(object sender, KeyEventArgs e) {
            ButtonsListView.Focus();
            switch (e.Key){
                case Key.Enter:

                    if ((ButtonsListView.SelectedIndex == -1)) ButtonsListView.SelectedIndex = 0;

                    Wpf.Ui.Controls.Button currentButton = 
                        (ButtonsListView.SelectedItem as Wpf.Ui.Controls.Button);
                    currentButton.RaiseEvent(new 
                        RoutedEventArgs(Wpf.Ui.Controls.Button.ClickEvent));
                    break;
                case Key.Down:
                    if ((ButtonsListView.SelectedIndex == -1)) {
                        ButtonsListView.SelectedIndex = 1;
                    } else if (ButtonsListView.SelectedIndex == ButtonsListView.Items.Count - 1) {
                        ButtonsListView.SelectedIndex = 0;
                    } else {
                        ButtonsListView.SelectedIndex++;
                    }
                    ButtonsListView.ScrollIntoView(ButtonsListView.SelectedItem);
                    break;
                case Key.Up:
                    if ((ButtonsListView.SelectedIndex == -1) ||
                        (ButtonsListView.SelectedIndex == 0)) {

                        ButtonsListView.SelectedIndex = ButtonsListView.Items.Count - 1;

                    } else {
                        ButtonsListView.SelectedIndex--;
                    }
                    ButtonsListView.ScrollIntoView(ButtonsListView.SelectedItem);
                    break;
                case Key.Apps: //This is the menu key
                    (Application.Current.MainWindow as SearchWindow).contextPane.Visibility
                        = Visibility.Collapsed;
                    (Application.Current.MainWindow as SearchWindow).searchBox.Focus();

                    //makes showing a new pane more reliable
                    (Application.Current.MainWindow as SearchWindow).contextPane.Source = null;
                    break;
                default:
                    return;
            }
            e.Handled = true;
        }
    }
}
```
9. Build the solution<br>

<b>Done!</b> You have created a plugin for the app and can start using it.<br>
To stop using it, delete the appropriate folder from the PlugBoard
</details>
