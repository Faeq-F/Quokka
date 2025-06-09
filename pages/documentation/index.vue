<script>
// API docs frame theme change scripts in old site commits and possibly css
</script>

<template>
  <h1>
    <UIcon name="i-lucide-loader" /> Installation
  </h1>
  <div>
    Quokka requires the following:
    <ul>
      <li>A computer running Windows 7 or higher</li>
      <li><a href="">.NET 4.8 Framework (pre-installed on Windows 10 and 11)</a>
      </li>
      <li>A Windows defender exclusion for the location of the exe;</li>
    </ul>

    Due to costs, binaries are not signed.<br />
    Add exclusions to any other anti-malware software that is installed on your
    computer, you do not want the software
    to mistake the app for malware
  </div>
  <div>
    To install:
    <ul>
      <li>Go to the top of this page and click on the <a href=''>'Download
          Latest Release'</a> button</li>
      <li>Download the 'Quokka.zip' file & extract it's contents</li>
      <li>You will want to extract / move the folder to an appropriate location.
      </li>
    </ul>

    Quokka is a portable program by design, meaning that you can place the
    folder on a external storage medium (e.g. a
    USB drive) and run the program from there.<br />
    Please see the suggestions below for an appropriate location of the folder.
  </div>
  <div>
    Suggestions:
    <ul>
      <li>If you do not wish to use the program in a portable manner, I suggest
        placing the folder in 'C:\Program
        Files', and
        creating a shortcut that is pinned to the taskbar and / or start menu.
      </li>
      <li>You may also want to set up a task to run the program at startup in
        Task Scheduler. Alternatively see the <a href=''>FAQ</a> on this.</li>
    </ul>
  </div>
  <h1>
    <UIcon name="i-lucide-pointer" /> How to use
  </h1>
  <div>
    <h2>
      <UIcon name="i-lucide-mouse-pointer" /> General Usage
    </h2>
    <div>
      To use the app, run Quokka.exe (in the root folder)
      <table>
        <thead>
          <tr>
            <th>Default Keyboard shortcut</th>
            <th>Use</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><kbd>Left ⊞</kbd>+<kbd>Space</kbd></td>
            <td>Launches the search bar</td>
            <td>This shortcut is modifiable; see <a href="">the WindowHotKey
                setting</a></td>
          </tr>
          <tr>
            <td><kbd>🠙</kbd>&<kbd>🠛</kbd></td>
            <td>Select items</td>
            <td>The keys used cannot be changed</td>
          </tr>
          <tr>
            <td><kbd>↵</kbd>></td>
            <td>Executes the selected item (the first item if no item is
              selected)</td>
            <td>The key used cannot be changed</td>
          </tr>
          <tr>
            <td><kbd>☰</kbd></td>
            <td>Shows context pane for item</td>
            <td>This shortcut is modifiable; see <a href="">the ContextPaneKey
                setting</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2>
      <UIcon name="i-lucide-panel-bottom" /> Tray Task
    </h2>


    <div>
      The tray task context menu can be used to:
      <ul>
        <li>Launch the search window</li>
        <li>Open the settings file</li>
        <li>Open the PlugBoard</li>
        <li>Exit the app</li>
      </ul>
    </div>
    <div>
      To change the tray task icon, edit the 'QuokkaTray.ico' file in
      '...\Quokka\Config\Resources\'<br />
      (or just rename a different .ico file to the same name)
    </div>
    <div>
      The tray task context menu can have its appearance changed in the
      settings file. You will have to exit and
      reload the application to see changes.
    </div>
    <div>
      You can only have one search window open at a time
    </div>
    <div>
      You can change which file manager opens the plugboard folder through <a
        href="">the FileManager
        setting</a><br />
      Likewise, you can change which text editor opens the settings file
      through <a href="">the TextEditor setting</a>
    </div>
    <div>
      Unfortunately system tray tasks cannot be accessed through the Quokka
      search window (though Quokka's tray task
      can be); this means that Quokka cannot completely replace your taskbar
      yet.<br />
      This functionality may come in future (as a plugin).
    </div>

    <h2>
      <UIcon name="i-lucide-blocks" /> Plugins
    </h2>
    <div>
      To add a plugin, download and extract it to the PlugBoard folder<br />
      If you do not wish to use a plugin, simply delete the appropriate folder
      in the PlugBoard
    </div>
    <div>
      Plugins may have their own settings and special commands.<br />
      Please see their folder in the PlugBoard to find their settings file (at
      the root (if there is one)).<br />
      Please consult their documentation for default values, etc.
    </div>
    <div>
      Only recognized plugins appear on this page. Being human, I can't
      recognize every plugin for Quokka — I can only
      realize there is so much that exists.
    </div>
    <div>
      Planned plugins:
      <table>
        <thead>
          <tr>
            <th>Developed?</th>
            <th>Plugin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>✅</td>
            <td>installed app launcher</td>
          </tr>
          <tr>
            <td>✅</td>
            <td>portable app launcher</td>
          </tr>
          <tr>
            <td>In progress</td>
            <td>file/folder launcher - everything integration</td>
          </tr>
          <tr>
            <td>In progress</td>
            <td>calculator</td>
          </tr>
          <tr>
            <td>In progress</td>
            <td>power commands (logout, lock, sleep, shutdown, etc.)</td>
          </tr>
          <tr>
            <td>In progress</td>
            <td>English dictionary</td>
          </tr>
          <tr>
            <td>▢</td>
            <td>control panel shortcuts</td>
          </tr>
          <tr>
            <td>▢</td>
            <td>Windows settings</td>
          </tr>
          <tr>
            <td>▢</td>
            <td>Unicode character lookup</td>
          </tr>
          <tr>
            <td>▢</td>
            <td>IP & MAC address</td>
          </tr>
          <tr>
            <td>▢</td>
            <td>cli commands - powershell</td>
          </tr>
          <tr>
            <td>▢</td>
            <td>color space conversion</td>
          </tr>
          <tr>
            <td>▢</td>
            <td>unit conversion</td>
          </tr>
          <tr>
            <td>▢</td>
            <td>currency conversion</td>
          </tr>
          <tr>
            <td>▢</td>
            <td>translate</td>
          </tr>
          <tr>
            <td>▢</td>
            <td>lorem ipsum generator</td>
          </tr>
          <tr>
            <td>▢</td>
            <td>emoji lookup</td>
          </tr>
          <tr>
            <td>▢</td>
            <td>url opener</td>
          </tr>
          <tr>
            <td>▢</td>
            <td>wikipedia search</td>
          </tr>
          <tr>
            <td>▢</td>
            <td>workflows - launch multiple shortcuts at once - see below</td>
          </tr>
        </tbody>
      </table>
    </div>


    <h2>
      <UIcon name="i-lucide-zap" /> Commands
    </h2>
    <!-- check this with signifiers -->
    <div>
      <b>Special commands are case-sensitive</b> to ensure they do not
      interfere with other functions of the app or plugins
    </div>
    <!-- get these from the store -->
    <div>
      All special commands for recognized plugins:
      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Use</th>
            <th>Plugin</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>AllApps</code></td>
            <td>list all installed apps</td>
            <td>InstalledApps</td>
            <td>
              This command is modifiable within the plugin specific
              settings<br />
              Along with the list of apps, an extra item is added to the
              start,
              allowing users to open shell:appsFolder.<br />
              This item can be blacklisted.
            </td>
          </tr>
          <tr>
            <td><code>AllPortableApps</code></td>
            <td>list all portable apps</td>
            <td><a href=''>PortableApps</a></td>
            <td>This command is
              modifiable within the plugin specific settings<br />
              Along with the list of apps, an extra item is added to the
              start,
              allowing users to open the directory in which the portable apps
              reside.<br />
              This item can be blacklisted.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      All command signifiers for recognized plugins:
      <table>
        <thead>
          <tr>
            <th>Signifier</th>
            <th>Use</th>
            <th>Plugin</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>...</code></td>
            <td>...</td>
            <td>...</td>
            <td>
              ...
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <h1>
    <UIcon name="i-lucide-sliders-vertical" /> Settings
  </h1>
  <div>
    Quokka comes with the 'Windows light' theme by default.<br />
    To change it, you can edit the style settings in the settings file or you
    can use values in a configuration provided on the themes page.
  </div>
  <div>
    The settings file is located in '...\Quokka\Config\'
  </div>
  <div>
    All settings are loaded when the application starts, meaning that you will
    have to exit and re-start the app to see changes.
  </div>
  <div>
    Plugins may have their own, specific settings files in the root of their
    respective folders in the PlugBoard. You can open The PlugBoard using the
    Tray Task Icon context menu.<br />
    Please consult their documentation for default values, etc.
  </div>
  <div>
    Default General settings:<br />
    (Please see the 'Windows light' theme for default style settings)

    <table>
      <thead>
        <tr>
          <th>Setting name</th>
          <th>Notes</th>
          <th>Default Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>WindowHotKey</code></td>
          <td>The default value is interpreted as 'Left Windows key +
            Spacebar'<br /><br />The full list of keys that can be used in the
            setting can be found <a
              href="https://learn.microsoft.com/en-us/dotnet/api/system.windows.input.key?view=windowsdesktop-7.0#fields">here</a>
            (use
            the first column)</td>
          <td><code>LWinSpace</code></td>
        </tr>
        <tr>
          <td><code>FileManager</code></td>
          <td>The program that will open the plugboard. Plugins may use this
            setting to open other folders, for e.g., a file location</td>
          <td><code>explorer.exe</code></td>
        </tr>
        <tr>
          <td><code>TextEditor</code></td>
          <td>The program that will open the settings file. Plugins may use
            this setting to open other files, for e.g., their own settings file
          </td>
          <td><code>notepad.exe</code></td>
        </tr>
      </tbody>
    </table>
  </div>
  <h1>
    <UIcon name="i-lucide-drill" /> Building the app
  </h1>
  <div>
    The app comes as portable by design - there are no separate build
    instructions for a non-portable version.
  </div>
  <div>
    <ol>
      <li>
        Open Visual Studio & clone Quokka
      </li>
      <li>
        Build the solution
      </li>
      <li>
        Copy the Quokka folder (in build path - normally 'bin') to your desired
        location (e.g. USB drive)
      </li>
      <li>
        (Download / Delete) any plugins you (do / do not) wish to use (In the
        PlugBoard folder)<br />
        (Some of the recognized Plugins may be included with the build)
      </li>
    </ol>
  </div>
  <h1>
    <UIcon name="i-lucide-code" /> API documentation
  </h1>
  <div>
    <!-- <iframe src="APIdocs/api/Quokka.html" class="w-96 h-52"></iframe> -->
  </div>
  <h1>
    <UIcon name="i-lucide-toy-brick" /> Creating a plugin
  </h1>
  <div>
    <h2>
      <UIcon name="i-lucide-folder-kanban" /> Creating the project
    </h2>
    <div>
      To start:
      <ol>
        <li>Open Visual Studio & clone Quokka</li>
        <li>
          In the solution, create a project of type WPF class library, naming it
          "Plugin_YourPluginNameHere" (make sure that it is a part of the Quokka
          solution and that it is not its own)
        </li>
        <li>Rename the cs file to "Plugin_YourPluginNameHere"</li>
        <li>
          Edit the project file to look like the following and set the build
          configuration to 'Plugin':
          <br />
          <textarea disabled>

        <Project Sdk="Microsoft.NET.Sdk">

          <PropertyGroup>
            <TargetFramework>net6.0-windows</TargetFramework>
            <Nullable>enable</Nullable>
            <UseWPF>true</UseWPF>
            <PublishSingleFile>true</PublishSingleFile>
            <SelfContained>true</SelfContained>
            <DebugType>embedded</DebugType>
            <AppendTargetFrameworkToOutputPath>false</AppendTargetFrameworkToOutputPath>
            <AppendRuntimeIdentifierToOutputPath>false</AppendRuntimeIdentifierToOutputPath>

            <Product>Plugin_ShowTypedText</Product>
            <BaseOutputPath>G:\Quokka\Quokka\PlugBoard\Plugin_ShowTypedText</BaseOutputPath>
            <Configurations>Debug;Release;Plugin</Configurations>
          </PropertyGroup>

          <PropertyGroup>
            <GenerateDocumentationFile>true</GenerateDocumentationFile>
            <PlatformTarget>AnyCPU</PlatformTarget>
          </PropertyGroup>

          <ItemGroup>
            <ProjectReference Include="..\Quokka\Quokka.csproj" />
          </ItemGroup>

        </Project>
      </textarea>
          <blockquote>
            This is a part of the
            <a
              href="https://github.com/Faeq-F/TypedText-Plugins">ShowTypedText</a>&nbsp;
            plugin (a demo plugin; not made for use)
          </blockquote>
        </li>
      </ol>
    </div>
    <h2>
      <UIcon name="i-lucide-list" /> Creating a new item type
    </h2>
    <div>
      Most plugins will want to show results to the user in the form of an item
      on
      the results list in the search window. To do so, first create an item type
      to
      define how your results are displayed;
      <br /><br />
      <ol>
        <li>
          In the .cs file add
          <br />
          <textarea disabled style="height: 5vh;">
        using Quokka.PluginArch;
        using Quokka.ListItems;
      </textarea>
        </li>
        <li>
          Create a ListItem class for your item type
          <br />
          <textarea disabled>
        class TypedTextItem : ListItem {
          public string query;

          public TypedTextItem(string query) {
            this.Name = "Typed:" + query;
            this.query = query;
            this.Description = "The search field contains the above text";
            this.Icon = new BitmapImage(new Uri(
                Environment.CurrentDirectory + "\\Config\\Resources\\information.png"));
          }

          //When item is selected, copy text
          public override void Execute() {
              Clipboard.SetText(query);
              App.Current.MainWindow.Close();
          }
        }
      </textarea>
          <blockquote>
            This is a part of the
            <a
              href="https://github.com/Faeq-F/TypedText-Plugins">ShowTypedText</a>&nbsp;
            plugin (a demo plugin; not made for use)
          </blockquote>
        </li>
      </ol>
    </div>
    <div>
      ListItems must have the following:
      <ul>
        <li>a Name</li>
        <li>a Description</li>
        <li>an Icon</li>
        <li>
          an Execute method to define what should happen when a list item is run
          (i.e., the user hits the enter key when that item is selected)
        </li>
        <li>a context pane</li>
      </ul>
      <img src="~/assets/media/AppScreenshots/AllApps.png"></img>
    </div>
    <div>
      The ToString method of ListItems return the item's Name.
    </div>
    <h2>
      <UIcon name="i-lucide-panels-top-left" /> Creating a context pane
    </h2>
    <div>

      All plugins need their own context panes. It is up to you whether or not
      they
      are visible to the user or if they do anything at all; but one must be
      defined.<br /><br />To define the context pane for the item type:
      <ol>
        <li>In the project, add a WPF Page called 'ContextPane'</li>
        <li>
          Ensure ContextPane : ItemContextPane (inherits ItemContextPane from
          Quokka.ListItems)
        </li>
        <li>
          Ensure the plugin's project file has:
          <textarea disabled style="height: 20vh">

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
      </textarea>
        </li>
      </ol>
    </div>

    <div>
      To not have a context pane visible to the user, you can use the following
      code;<br />
      <textarea disabled style="height: 20vh">

      public partial class ContextPane : ItemContextPane {
        public ContextPane() {
          InitializeComponent();
          base.ReturnToSearch();
        }
      }
  </textarea>
      <textarea disabled style="
      height: 20vh;
      width: 90%;
      font-family: cascadia code;
      border-radius: 10px;
      border: 1px solid #bbb;
    ">

    <src:ItemContextPane
      x:Class="Plugin_ShowTypedText.ContextPane"
      xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
      xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
      xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
      xmlns:src="clr-namespace:Quokka.ListItems;assembly=Quokka"
      Title="ContextPane"
      d:DesignHeight="300"
      d:DesignWidth="800">

      <Grid />

    </src:ItemContextPane>

  </textarea>
    </div>

    <div>
      If your context pane is visible, you may want to add extra information or
      actions like the following does:
      <textarea disabled style="height: 20vh">
    <src:ItemContextPane
      x:Class="Plugin_ShowTypedText.ContextPane"
      xmlns:src="clr-namespace:Quokka.ListItems;assembly=Quokka"
      d:DesignHeight="300"
      d:DesignWidth="800"
      ...
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
  </src:ItemContextPane>
  </textarea>
      <textarea disabled>
  using Quokka;
...

namespace Plugin_ShowTypedText {

    public partial class ContextPane : ItemContextPane {

        private Quokka.ListItem Item;

        public ContextPane() {
            InitializeComponent();
            this.Item = (Application.Current.MainWindow as SearchWindow).SelectedItem;
            DetailsImage.Source = this.Item.icon;
            text.Text = Item.name;
        }

        ...

        protected override void Page_KeyDown(object sender, KeyEventArgs e) {
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
  </textarea>
      <blockquote>
        This is a part of the
        <a
          href="https://github.com/Faeq-F/TypedText-Plugins">ShowTypedText</a>&nbsp;
        plugin (a demo plugin; not made for use)
      </blockquote>
    </div>
    <h2>
      <UIcon name="i-lucide-unplug" /> Creating the plugin
    </h2>
    <div>
      In the same .cs file, create a class that inherits from IPlugger;<br />
      <textarea disabled>
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
      </textarea>
      <blockquote>
        This is a part of the
        <a
          href="https://github.com/Faeq-F/TypedText-Plugins">ShowTypedText</a>&nbsp;
        plugin (a demo plugin; not made for use)
      </blockquote>
    </div>

    <div>
      OnQueryChange is the method that is called by the SearchWindow when a user
      types in a query In this method, you should create your list item objects,
      filter them (if needed), and return them in a list.
      <br /><br />
      If your plugin has a special command, then you will need to sort the list
      for
      that command yourself. Normal results (those returned in OnQueryChange) do
      not
      need to be sorted as Quokka will sort them once it has results from all of
      the
      plugins the program is using during runtime.
    </div>
  </div>
  <h1>
    <UIcon name="i-lucide-circle-help" /> FAQ by Developers
  </h1>
  <div>
    How do I use a 3rd party library in my plugin?

    You must install the package (likely through nuget) for your plugin's
    project. Unfortunately this is not enough since Quokka will need the package
    reference of the library. You will have to use <a
      href="https://learn.microsoft.com/en-us/dotnet/fundamentals/reflection/reflection">reflection</a>
    to
    load the
    library at runtime and use the classes it provides. You can have a look at
    the following plugins as examples as to how to do this:
    <ul>
      <li><a href=''>Plugin_Calculator</a></li>
      <li><a href=''>Plugin_EnglishDictionary</a></li>
      <li><a href=''>Plugin_Everything</a></li>
    </ul>
  </div>
</template>

<!--add a copy code button-->

<style lang="css" scoped>
a {
  font-style: italic;
  color: black;
  text-decoration: underline;
}

.dark a {
  color: white;
}

ul,
ol {
  margin-left: 2rem;
}

ul {
  list-style: unset;
}

ol {
  list-style: auto;
}

h2,
h1 {
  font-family: "Varela Round", sans-serif;
  font-weight: bold;
  font-size: x-large;
  display: flex;
  align-items: center;
  margin: 4rem;
  margin-left: 3rem;
}

h2 {
  font-size: large;
  margin: 1rem;
}

h2 span,
h1 span {
  margin-right: 10px;
  margin-bottom: 3px;
}

div {
  border: 1px solid gray;
  border-radius: 30px;
  margin: 1rem;
  padding: 1rem
}

blockquote {
  margin: 0;
  margin-top: 0px;
  padding-left: 10px;
  padding-bottom: 5px;
  font-size: small;
  border-left: solid 1px #bbb;
  border-bottom: solid 1px #bbb;
  width: 90%;
  border-bottom-left-radius: 15px;

  margin-top: -10px;
  height: 30px;
  padding-top: 10px;
}

textarea:disabled {
  height: 40vh;
  width: 90%;
  font-family: cascadia code;
  border-radius: 10px;
  border: 1px solid #bbb;
  font-size: x-small;
}

kbd {
  background-color: #eee;
  border-radius: 3px;
  border: 1px solid #b4b4b4;
  box-shadow:
    0 1px 1px rgba(0, 0, 0, 0.2),
    0 2px 0 0 rgba(255, 255, 255, 0.7) inset;
  color: #333;
  display: inline-block;
  font-size: 0.85em;
  font-weight: 700;
  line-height: 1;
  padding: 2px 4px;
  white-space: nowrap;
  font-family: monospace;
}

code {
  font-family: monospace;
}
</style>