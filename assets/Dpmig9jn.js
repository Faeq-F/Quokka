const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./7dqkJvca.js","./Cawl0tii.js","./entry.CLYQWzpE.css","./Wm_Fkfpe.js","./MazAnimatedElement.g9ydD87f.css","./C1M2Hesn.js","./MazAccordion.C7SW36J5.css","./5v-pSj6f.js","./MazCardSpotlight.rJgYKvyQ.css","./DlAUqK2U.js","./MazSpinner.BI6kEhM7.css","./MazBtn.D8JyV_rX.css","./Cc-wLVjV.js"])))=>i.map(i=>d[i]);
import{e as $,W as F,m as I,q as r,o as n,w as f,j as S,c,i as u,f as s,k as U,n as _,v as B,b as l,Q as E,l as z,X as j,Y as G,h as W,C as N,p as O,F as g,a as e,d as a,L as y,Z as q,M as R,V as M,r as V,t as Q}from"./Cawl0tii.js";import{b as H}from"./Wm_Fkfpe.js";/* empty css        */import{e as K}from"./C1M2Hesn.js";import{L}from"./5v-pSj6f.js";import{_ as k}from"./DlAUqK2U.js";const Y={key:0,class:"m-btn-loader-container"},X=$({__name:"MazBtn",props:{variant:{default:"button"},size:{default:"md"},color:{default:"primary"},type:{default:"button"},rounded:{type:Boolean},roundedSize:{default:"lg"},noRounded:{type:Boolean},outline:{type:Boolean},pastel:{type:Boolean},block:{type:Boolean},noUnderline:{type:Boolean},loading:{type:Boolean},disabled:{type:Boolean},fab:{type:Boolean},icon:{type:[String,Function,Object],default:void 0},leftIcon:{type:[String,Function,Object],default:void 0},rightIcon:{type:[String,Function,Object],default:void 0},noPadding:{type:Boolean},noElevation:{type:Boolean},justify:{default:"center"}},setup(d){const t=d,i=U(()=>z(()=>import("./7dqkJvca.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url)),b=U(()=>z(()=>import("./Cc-wLVjV.js"),__vite__mapDeps([12,1,2]),import.meta.url)),{href:p,to:h}=F(),m=I(()=>p?"a":h?"router-link":"button"),w=I(()=>t.pastel?`--${t.color}-pastel`:t.outline?`--${t.color}-outline`:`--${t.color}`),v=I(()=>(t.loading||t.disabled)&&m.value==="button"),P=I(()=>v.value?"--cursor-default":"--cursor-pointer"),A=I(()=>`--is-${t.variant}`),x=I(()=>t.loading&&t.variant==="button"),C=I(()=>m.value==="button"?t.type:void 0),T=I(()=>t.size==="xl"?"maz-text-3xl":t.size==="lg"?"maz-text-2xl":t.size==="md"?"maz-text-xl":t.size==="sm"?"maz-text-lg":t.size==="xs"?"maz-text-base":t.size==="mini"?"maz-text-sm":"maz-text-xl");return(o,D)=>(n(),r(B(m.value),{disabled:v.value||void 0,class:_(["m-btn m-reset-css",[`--${o.size}`,!o.fab&&!o.rounded&&o.roundedSize&&`--rounded-${o.roundedSize}`,w.value,P.value,A.value,{"--block":o.block,"--no-underline":o.noUnderline,"--fab":o.fab,"--loading":o.loading,"--disabled":v.value,"--rounded":o.rounded,"--no-rounded":o.noRounded,"--no-padding":o.noPadding,"--no-elevation":o.noElevation}]]),style:E([`--justify: ${o.justify}`]),type:C.value},{default:f(()=>[S(o.$slots,"left-icon",{},()=>[typeof o.leftIcon=="string"?(n(),r(s(b),{key:0,name:o.leftIcon,class:_([T.value])},null,8,["name","class"])):o.leftIcon?(n(),r(B(o.leftIcon),{key:1,class:_([T.value])},null,8,["class"])):u("v-if",!0)],!0),S(o.$slots,"icon",{},()=>[typeof o.icon=="string"?(n(),r(s(b),{key:0,name:o.icon,class:_([T.value])},null,8,["name","class"])):o.icon?(n(),r(B(o.icon),{key:1,class:_([T.value])},null,8,["class"])):u("v-if",!0)],!0),S(o.$slots,"default",{},void 0,!0),S(o.$slots,"right-icon",{},()=>[typeof o.rightIcon=="string"?(n(),r(s(b),{key:0,name:o.rightIcon,class:_([T.value])},null,8,["name","class"])):o.rightIcon?(n(),r(B(o.rightIcon),{key:1,class:_([T.value])},null,8,["class"])):u("v-if",!0)],!0),x.value?(n(),c("div",Y,[l(s(i),{size:"2em",color:o.color},null,8,["color"])])):u("v-if",!0)]),_:3},8,["disabled","class","style","type"]))}}),Z=(d,t)=>{const i=d.__vccOpts||d;for(const[b,p]of t)i[b]=p;return i},J=Z(X,[["__scopeId","data-v-6b881156"]]),tt=j("docsStore",{state:()=>({toc:[{title:"Installation",icon:"i-lucide-loader",section:"installation",children:[]},{title:"How to Use",icon:"i-lucide-pointer",section:"general-usage",children:[{title:"General Usage",icon:"i-lucide-pointer",section:"general-usage"},{title:"Tray task",icon:"i-lucide-pointer",section:"tray-task"},{title:"Plugins",icon:"i-lucide-pointer",section:"plugins"},{title:"Commands",icon:"i-lucide-pointer",section:"commands"}]},{title:"Settings",icon:"i-lucide-sliders-vertical",section:"settings",children:[]},{title:"Building the app",icon:"i-lucide-drill",section:"build-app",children:[]},{title:"API Documentation",icon:"i-lucide-code",section:"api-documentation",children:[]},{title:"Creating a plugin",icon:"i-lucide-toy-brick",section:"creating-the-project",children:[{title:"Creating the project",icon:"i-lucide-pointer",section:"creating-the-project"},{title:"Creating a new item type",icon:"i-lucide-pointer",section:"creating-new-item-type"},{title:"Creating a context pane",icon:"i-lucide-pointer",section:"creating-context-pane"},{title:"Creating the plugin",icon:"i-lucide-pointer",section:"creating-the-plugin"}]},{title:"FAQ by Developers",icon:"i-lucide-circle-help",section:"faq",children:[]}]}),actions:{}}),et={class:"w-full h-[70vh] !border-0"},nt=$({__name:"apiDocumentation",setup(d){function t(){p.value.contentDocument.getElementsByTagName("html")[0].dataset.bsTheme=b.selectedTheme.value;let h=`
    a:-webkit-any-link{
      cursor: url(https://faeq-f.github.io/Quokka/cursors/${b.selectedTheme.value}-Click.cur),auto;
    }
  `,m=p.value.contentDocument.createElement("style");m.type="text/css",m.appendChild(p.value.contentDocument.createTextNode(h)),p.value.contentDocument.body.appendChild(m),p.value.contentDocument.body.style.cursor="url(https://faeq-f.github.io/Quokka/cursors/"+b.selectedTheme.value+"-Point.cur),auto";for(var w of p.value.contentDocument.body.getElementsByTagName("a"))w.style.cursor="url(https://faeq-f.github.io/Quokka/cursors/"+b.selectedTheme.value+"-Click.cur),auto"}function i(h,m){var w=function(){setTimeout(function(){m(h,h.contentWindow.location.href)},0)};function v(){h.contentWindow.removeEventListener("unload",w),h.contentWindow.addEventListener("unload",w)}h.addEventListener("load",v),v()}const b=G({watchChanges:!0}),p=W(null);return N(()=>{p.value.addEventListener("load",t),O(b.selectedTheme,async(h,m)=>t()),i(p.value,function(h,m){t()})}),(h,m)=>{const w=y;return n(),c(g,null,[e("h1",null,[l(w,{name:"i-lucide-code"}),m[0]||(m[0]=a(" API documentation "))]),e("div",null,[e("div",et,[e("iframe",{ref_key:"APIframe",ref:p,src:"../APIdocs/api/Quokka.html",class:"w-full h-full"},null,512)])])],64)}}}),ot={};function it(d,t){const i=y;return n(),c(g,null,[e("h1",null,[l(i,{name:"i-lucide-drill"}),t[0]||(t[0]=a(" Building the app "))]),t[1]||(t[1]=e("div",null," The app comes as portable by design - there are no separate build instructions for a non-portable version. ",-1)),t[2]||(t[2]=e("div",null,[e("ol",null,[e("li",null," Open Visual Studio & clone Quokka "),e("li",null," Build the solution "),e("li",null," Copy the Quokka folder (in build path - normally 'bin') to your desired location (e.g. USB drive) "),e("li",null,[a(" (Download / Delete) any plugins you (do / do not) wish to use (In the PlugBoard folder)"),e("br"),a(" (Some of the recognized Plugins may be included with the build) ")])])],-1))],64)}const at=k(ot,[["render",it]]),lt={};function rt(d,t){const i=y;return n(),c(g,null,[e("h1",null,[l(i,{name:"i-lucide-panels-top-left"}),t[0]||(t[0]=a(" Creating a context pane "))]),t[1]||(t[1]=q(`<div> All plugins need their own context panes. It is up to you whether or not they are visible to the user or if they do anything at all; but one must be defined.<br><br>To define the context pane for the item type: <ol><li>In the project, add a WPF Page called &#39;ContextPane&#39;</li><li> Ensure ContextPane : ItemContextPane (inherits ItemContextPane from Quokka.ListItems) </li><li> Ensure the plugin&#39;s project file has: <textarea readonly style="height:20vh;">
                &lt;ItemGroup&gt;
                  &lt;Compile Update=&quot;ContextPane.xaml.cs&quot;&gt;
                    &lt;SubType&gt;Code&lt;/SubType&gt;
                  &lt;/Compile&gt;
                &lt;/ItemGroup&gt;

                &lt;ItemGroup&gt;
                  &lt;Page Update=&quot;ContextPane.xaml&quot;&gt;
                    &lt;SubType&gt;Designer&lt;/SubType&gt;
                  &lt;/Page&gt;
                &lt;/ItemGroup&gt;
              </textarea></li></ol></div><div> To not have a context pane visible to the user, you can use the following code;<br><textarea readonly style="height:20vh;">
            public partial class ContextPane : ItemContextPane {
            public ContextPane() {
            InitializeComponent();
            base.ReturnToSearch();
            }
            }
          </textarea><textarea readonly style="height:20vh;width:90%;font-family:cascadia code;border-radius:10px;border:1px solid #bbb;">
            &lt;src:ItemContextPane x:Class=&quot;Plugin_ShowTypedText.ContextPane&quot;
              xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
              xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;
              xmlns:d=&quot;http://schemas.microsoft.com/expression/blend/2008&quot;
              xmlns:mc=&quot;http://schemas.openxmlformats.org/markup-compatibility/2006&quot;
              xmlns:src=&quot;clr-namespace:Quokka.ListItems;assembly=Quokka&quot;
              Title=&quot;ContextPane&quot; d:DesignHeight=&quot;300&quot; d:DesignWidth=&quot;800&quot;&gt;

              &lt;Grid /&gt;

            &lt;/src:ItemContextPane&gt;

          </textarea></div><div> If your context pane is visible, you may want to add extra information or actions like the following does: <textarea readonly style="height:20vh;">            &lt;src:ItemContextPane x:Class=&quot;Plugin_ShowTypedText.ContextPane&quot;
              xmlns:src=&quot;clr-namespace:Quokka.ListItems;assembly=Quokka&quot;
              d:DesignHeight=&quot;300&quot; d:DesignWidth=&quot;800&quot; ... Title=&quot;ContextPane&quot;
              KeyDown=&quot;Page_KeyDown&quot;&gt;

              &lt;Border ...&gt;

                &lt;Grid Margin=&quot;10&quot; VerticalAlignment=&quot;Center&quot;
                  HorizontalAlignment=&quot;Center&quot;&gt;

                  ...

                  &lt;Grid Grid.Column=&quot;0&quot;&gt;

                    ...

                    &lt;Image Grid.Row=&quot;0&quot; x:Name=&quot;DetailsImage&quot; /&gt;
                    &lt;TextBlock TextWrapping=&quot;Wrap&quot;
                      Text=&quot;You typed the text after &#39;Typed:&#39;&quot; Grid.Row=&quot;1&quot;
                      Padding=&quot;10&quot; /&gt;
                    &lt;TextBlock TextWrapping=&quot;Wrap&quot; Text=&quot;&quot; Grid.Row=&quot;2&quot;
                      x:Name=&quot;text&quot; Padding=&quot;10&quot; /&gt;
                  &lt;/Grid&gt;

                  &lt;Grid Grid.Column=&quot;1&quot;&gt;

                    &lt;ListView
                      ScrollViewer.HorizontalScrollBarVisibility=&quot;Disabled&quot;
                      HorizontalContentAlignment=&quot;Center&quot;
                      x:Name=&quot;ButtonsListView&quot;&gt;

                      &lt;ui:Button Content=&quot;Copy the text&quot; Padding=&quot;10&quot;
                        Click=&quot;CopyText&quot; /&gt;
                      &lt;ui:Button Content=&quot;Another &#39;Copy the text&#39; button&quot;
                        Padding=&quot;10&quot; Click=&quot;CopyText&quot; /&gt;
                      &lt;ui:Button Content=&quot;Another &#39;Copy the text&#39; button&quot;
                        Padding=&quot;10&quot; Click=&quot;CopyText&quot; /&gt;
                    &lt;/ListView&gt;

                  &lt;/Grid&gt;
                &lt;/Grid&gt;
              &lt;/Border&gt;
            &lt;/src:ItemContextPane&gt;
          </textarea><textarea readonly>            using Quokka;
            ...

            namespace Plugin_ShowTypedText {

            public partial class ContextPane : ItemContextPane {

            private Quokka.ListItem Item;

            public ContextPane() {
            InitializeComponent();
            this.Item = (Application.Current.MainWindow as
            SearchWindow).SelectedItem;
            DetailsImage.Source = this.Item.icon;
            text.Text = Item.name;
            }

            ...

            protected override void Page_KeyDown(object sender, KeyEventArgs e)
            {
            ButtonsListView.Focus();
            switch (e.Key){
            case Key.Enter:

            if ((ButtonsListView.SelectedIndex == -1))
            ButtonsListView.SelectedIndex
            =
            0;

            Wpf.Ui.Controls.Button currentButton =
            (ButtonsListView.SelectedItem as Wpf.Ui.Controls.Button);
            currentButton.RaiseEvent(new
            RoutedEventArgs(Wpf.Ui.Controls.Button.ClickEvent));
            break;
            case Key.Down:
            if ((ButtonsListView.SelectedIndex == -1)) {
            ButtonsListView.SelectedIndex = 1;
            } else if (ButtonsListView.SelectedIndex ==
            ButtonsListView.Items.Count
            -
            1) {
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
            (Application.Current.MainWindow as
            SearchWindow).contextPane.Visibility
            = Visibility.Collapsed;
            (Application.Current.MainWindow as SearchWindow).searchBox.Focus();

            //makes showing a new pane more reliable
            (Application.Current.MainWindow as SearchWindow).contextPane.Source
            =
            null;
            break;
            default:
            return;
            }
            e.Handled = true;
            }
            }
            }
          </textarea><blockquote> This is a part of the <a href="https://github.com/Faeq-F/TypedText-Plugins">ShowTypedText</a>  plugin (a demo plugin; not made for use) </blockquote></div>`,3))],64)}const st=k(lt,[["render",rt]]),dt={};function ut(d,t){const i=y;return n(),c(g,null,[e("h1",null,[l(i,{name:"i-lucide-zap"}),t[0]||(t[0]=a(" Commands "))]),t[1]||(t[1]=q('<div><b>Special commands are case-sensitive</b> to ensure they do not interfere with other functions of the app or plugins </div><div> All special commands for recognized plugins: <table><thead><tr><th>Command</th><th>Use</th><th>Plugin</th><th>Notes</th></tr></thead><tbody><tr><td><code>AllApps</code></td><td>list all installed apps</td><td>InstalledApps</td><td> This command is modifiable within the plugin specific settings<br> Along with the list of apps, an extra item is added to the start, allowing users to open shell:appsFolder.<br> This item can be blacklisted. </td></tr><tr><td><code>AllPortableApps</code></td><td>list all portable apps</td><td><a href="">PortableApps</a></td><td>This command is modifiable within the plugin specific settings<br> Along with the list of apps, an extra item is added to the start, allowing users to open the directory in which the portable apps reside.<br> This item can be blacklisted.</td></tr></tbody></table></div><div> All command signifiers for recognized plugins: <table><thead><tr><th>Signifier</th><th>Use</th><th>Plugin</th><th>Notes</th></tr></thead><tbody><tr><td><code>...</code></td><td>...</td><td>...</td><td> ... </td></tr></tbody></table></div>',3))],64)}const ct=k(dt,[["render",ut]]),pt=R("/media/AppScreenshots/AllApps.png"),ht={};function mt(d,t){const i=y;return n(),c(g,null,[e("h1",null,[l(i,{name:"i-lucide-list"}),t[0]||(t[0]=a(" Creating a new item type "))]),t[1]||(t[1]=q(`<div> Most plugins will want to show results to the user in the form of an item on the results list in the search window. To do so, first create an item type to define how your results are displayed; <br><br><ol><li> In the .cs file add <br><textarea readonly style="height:5vh;">                using Quokka.PluginArch;
                using Quokka.ListItems;
              </textarea></li><li> Create a ListItem class for your item type <br><textarea readonly>                class TypedTextItem : ListItem {
                public string query;

                public TypedTextItem(string query) {
                this.Name = &quot;Typed:&quot; + query;
                this.query = query;
                this.Description = &quot;The search field contains the above text&quot;;
                this.Icon = new BitmapImage(new Uri(
                Environment.CurrentDirectory +
                &quot;\\\\Config\\\\Resources\\\\information.png&quot;));
                }

                //When item is selected, copy text
                public override void Execute() {
                Clipboard.SetText(query);
                App.Current.MainWindow.Close();
                }
                }
              </textarea><blockquote> This is a part of the <a href="https://github.com/Faeq-F/TypedText-Plugins">ShowTypedText</a>  plugin (a demo plugin; not made for use) </blockquote></li></ol></div><div> ListItems must have the following: <ul><li>a Name</li><li>a Description</li><li>an Icon</li><li> an Execute method to define what should happen when a list item is run (i.e., the user hits the enter key when that item is selected) </li><li>a context pane</li></ul><img src="`+pt+'"></div><div> The ToString method of ListItems return the item&#39;s Name. </div>',3))],64)}const gt=k(ht,[["render",mt]]),ft={};function yt(d,t){const i=y;return n(),c(g,null,[e("h1",null,[l(i,{name:"i-lucide-unplug"}),t[0]||(t[0]=a(" Creating the plugin "))]),t[1]||(t[1]=e("div",null,[a(" In the same .cs file, create a class that inherits from IPlugger;"),e("br"),e("textarea",{readonly:""},`            public partial class ShowTypedText : IPlugger {

            public ShowTypedText() {}

            public string PluggerName { get; set; } = "ShowTypedText";

            /// <summary>
              /// This will get called when user types a query into the search
              field
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
          `),e("blockquote",null,[a(" This is a part of the "),e("a",{href:"https://github.com/Faeq-F/TypedText-Plugins"},"ShowTypedText"),a("  plugin (a demo plugin; not made for use) ")])],-1)),t[2]||(t[2]=e("div",null,[a(" OnQueryChange is the method that is called by the SearchWindow when a user types in a query In this method, you should create your list item objects, filter them (if needed), and return them in a list. "),e("br"),e("br"),a(" If your plugin has a special command, then you will need to sort the list for that command yourself. Normal results (those returned in OnQueryChange) do not need to be sorted as Quokka will sort them once it has results from all of the plugins the program is using during runtime. ")],-1))],64)}const bt=k(ft,[["render",yt]]),wt={};function vt(d,t){const i=y;return n(),c(g,null,[e("h1",null,[l(i,{name:"i-lucide-folder-kanban"}),t[0]||(t[0]=a(" Creating the project "))]),t[1]||(t[1]=e("div",null,[a(" To start: "),e("ol",null,[e("li",null,"Open Visual Studio & clone Quokka"),e("li",null,' In the solution, create a project of type WPF class library, naming it "Plugin_YourPluginNameHere" (make sure that it is a part of the Quokka solution and that it is not its own) '),e("li",null,'Rename the cs file to "Plugin_YourPluginNameHere"'),e("li",null,[a(" Edit the project file to look like the following and set the build configuration to 'Plugin': "),e("br"),e("textarea",{readonly:""},`
                <Project Sdk="Microsoft.NET.Sdk">

                  <PropertyGroup>
                    <TargetFramework>net6.0-windows</TargetFramework>
                    <Nullable>enable</Nullable>
                    <UseWPF>true</UseWPF>
                    <PublishSingleFile>true</PublishSingleFile>
                    <SelfContained>true</SelfContained>
                    <DebugType>embedded</DebugType>
                    <AppendTargetFrameworkToOutputPath>false
                    </AppendTargetFrameworkToOutputPath>
                    <AppendRuntimeIdentifierToOutputPath>false
                    </AppendRuntimeIdentifierToOutputPath>

                    <Product>Plugin_ShowTypedText</Product>
                    <BaseOutputPath>
                      G:\\Quokka\\Quokka\\PlugBoard\\Plugin_ShowTypedText
                    </BaseOutputPath>
                    <Configurations>Debug;Release;Plugin</Configurations>
                  </PropertyGroup>

                  <PropertyGroup>
                    <GenerateDocumentationFile>true</GenerateDocumentationFile>
                    <PlatformTarget>AnyCPU</PlatformTarget>
                  </PropertyGroup>

                  <ItemGroup>
                    <ProjectReference Include="..\\Quokka\\Quokka.csproj" />
                  </ItemGroup>

                </Project>
              `),e("blockquote",null,[a(" This is a part of the "),e("a",{href:"https://github.com/Faeq-F/TypedText-Plugins"},"ShowTypedText"),a("  plugin (a demo plugin; not made for use) ")])])])],-1))],64)}const kt=k(wt,[["render",vt]]),xt={};function Tt(d,t){const i=y;return n(),c(g,null,[e("h1",null,[l(i,{name:"i-lucide-circle-help"}),t[0]||(t[0]=a(" FAQ by Developers "))]),t[1]||(t[1]=e("div",null,[a(" How do I use a 3rd party library in my plugin? You must install the package (likely through nuget) for your plugin's project. Unfortunately this is not enough since Quokka will need the package reference of the library. You will have to use "),e("a",{href:"https://learn.microsoft.com/en-us/dotnet/fundamentals/reflection/reflection"},"reflection"),a(" to load the library at runtime and use the classes it provides. You can have a look at the following plugins as examples as to how to do this: "),e("ul",null,[e("li",null,[e("a",{href:""},"Plugin_Calculator")]),e("li",null,[e("a",{href:""},"Plugin_EnglishDictionary")]),e("li",null,[e("a",{href:""},"Plugin_Everything")])])],-1))],64)}const _t=k(xt,[["render",Tt]]),It={};function qt(d,t){const i=y;return n(),c(g,null,[e("h1",null,[l(i,{name:"i-lucide-mouse-pointer"}),t[0]||(t[0]=a(" General Usage "))]),t[1]||(t[1]=q('<div> To use the app, run Quokka.exe (in the root folder) <table><thead><tr><th>Default Keyboard shortcut</th><th>Use</th><th>Notes</th></tr></thead><tbody><tr><td><kbd>Left ⊞</kbd>+<kbd>Space</kbd></td><td>Launches the search bar</td><td>This shortcut is modifiable; see <a href="">the WindowHotKey setting</a></td></tr><tr><td><kbd>🠙</kbd>&amp;<kbd>🠛</kbd></td><td>Select items</td><td>The keys used cannot be changed</td></tr><tr><td><kbd>↵</kbd>&gt;</td><td>Executes the selected item (the first item if no item is selected)</td><td>The key used cannot be changed</td></tr><tr><td><kbd>☰</kbd></td><td>Shows context pane for item</td><td>This shortcut is modifiable; see <a href="">the ContextPaneKey setting</a></td></tr></tbody></table></div>',1))],64)}const Pt=k(It,[["render",qt]]),Ct={};function St(d,t){const i=y;return n(),c(g,null,[e("h1",null,[l(i,{name:"i-lucide-loader"}),t[0]||(t[0]=a(" Installation "))]),t[1]||(t[1]=q('<div> Quokka requires the following: <ul><li>A computer running Windows 7 or higher</li><li><a href="">.NET 4.8 Framework (pre-installed on Windows 10 and 11)</a></li><li>A Windows defender exclusion for the location of the exe;</li></ul> Due to costs, binaries are not signed.<br> Add exclusions to any other anti-malware software that is installed on your computer, you do not want the software to mistake the app for malware </div><div> To install: <ul><li>Go to the top of this page and click on the <a href="">&#39;Download Latest Release&#39;</a> button</li><li>Download the &#39;Quokka.zip&#39; file &amp; extract it&#39;s contents</li><li>You will want to extract / move the folder to an appropriate location. </li></ul> Quokka is a portable program by design, meaning that you can place the folder on a external storage medium (e.g. a USB drive) and run the program from there.<br> Please see the suggestions below for an appropriate location of the folder. </div><div> Suggestions: <ul><li>If you do not wish to use the program in a portable manner, I suggest placing the folder in &#39;C:\\Program Files&#39;, and creating a shortcut that is pinned to the taskbar and / or start menu. </li><li>You may also want to set up a task to run the program at startup in Task Scheduler. Alternatively see the <a href="">FAQ</a> on this. </li></ul></div>',3))],64)}const Bt=k(Ct,[["render",St]]),Lt={};function At(d,t){const i=y;return n(),c(g,null,[e("h1",null,[l(i,{name:"i-lucide-blocks"}),t[0]||(t[0]=a(" Plugins "))]),t[1]||(t[1]=q("<div> To add a plugin, download and extract it to the PlugBoard folder<br> If you do not wish to use a plugin, simply delete the appropriate folder in the PlugBoard </div><div> Plugins may have their own settings and special commands.<br> Please see their folder in the PlugBoard to find their settings file (at the root (if there is one)).<br> Please consult their documentation for default values, etc. </div><div> Only recognized plugins appear on this page. Being human, I can&#39;t recognize every plugin for Quokka — I can only realize there is so much that exists. </div><div> Planned plugins: <table><thead><tr><th>Developed?</th><th>Plugin</th></tr></thead><tbody><tr><td>✅</td><td>installed app launcher</td></tr><tr><td>✅</td><td>portable app launcher</td></tr><tr><td>In progress</td><td>file/folder launcher - everything integration</td></tr><tr><td>In progress</td><td>calculator</td></tr><tr><td>In progress</td><td>power commands (logout, lock, sleep, shutdown, etc.) </td></tr><tr><td>In progress</td><td>English dictionary</td></tr><tr><td>▢</td><td>control panel shortcuts</td></tr><tr><td>▢</td><td>Windows settings</td></tr><tr><td>▢</td><td>Unicode character lookup</td></tr><tr><td>▢</td><td>IP &amp; MAC address</td></tr><tr><td>▢</td><td>cli commands - powershell</td></tr><tr><td>▢</td><td>color space conversion</td></tr><tr><td>▢</td><td>unit conversion</td></tr><tr><td>▢</td><td>currency conversion</td></tr><tr><td>▢</td><td>translate</td></tr><tr><td>▢</td><td>lorem ipsum generator</td></tr><tr><td>▢</td><td>emoji lookup</td></tr><tr><td>▢</td><td>url opener</td></tr><tr><td>▢</td><td>wikipedia search</td></tr><tr><td>▢</td><td>workflows - launch multiple shortcuts at once - see below </td></tr></tbody></table></div>",4))],64)}const Dt=k(Lt,[["render",At]]),Qt={};function Ut(d,t){const i=y;return n(),c(g,null,[e("h1",null,[l(i,{name:"i-lucide-sliders-vertical"}),t[0]||(t[0]=a(" Settings "))]),t[1]||(t[1]=q('<div> Quokka comes with the &#39;Windows light&#39; theme by default.<br> To change it, you can edit the style settings in the settings file or you can use values in a configuration provided on the themes page. </div><div> The settings file is located in &#39;...\\Quokka\\Config\\&#39; </div><div> All settings are loaded when the application starts, meaning that you will have to exit and re-start the app to see changes. </div><div> Plugins may have their own, specific settings files in the root of their respective folders in the PlugBoard. You can open The PlugBoard using the Tray Task Icon context menu.<br> Please consult their documentation for default values, etc. </div><div> Default General settings:<br> (Please see the &#39;Windows light&#39; theme for default style settings) <table><thead><tr><th>Setting name</th><th>Notes</th><th>Default Value</th></tr></thead><tbody><tr><td><code>WindowHotKey</code></td><td>The default value is interpreted as &#39;Left Windows key + Spacebar&#39;<br><br>The full list of keys that can be used in the setting can be found <a href="https://learn.microsoft.com/en-us/dotnet/api/system.windows.input.key?view=windowsdesktop-7.0#fields">here</a> (use the first column)</td><td><code>LWinSpace</code></td></tr><tr><td><code>FileManager</code></td><td>The program that will open the plugboard. Plugins may use this setting to open other folders, for e.g., a file location </td><td><code>explorer.exe</code></td></tr><tr><td><code>TextEditor</code></td><td>The program that will open the settings file. Plugins may use this setting to open other files, for e.g., their own settings file </td><td><code>notepad.exe</code></td></tr></tbody></table></div>',5))],64)}const zt=k(Qt,[["render",Ut]]),Vt={};function $t(d,t){const i=y;return n(),c(g,null,[e("h1",null,[l(i,{name:"i-lucide-panel-bottom"}),t[0]||(t[0]=a(" Tray Task "))]),t[1]||(t[1]=q('<div> The tray task context menu can be used to: <ul><li>Launch the search window</li><li>Open the settings file</li><li>Open the PlugBoard</li><li>Exit the app</li></ul></div><div> To change the tray task icon, edit the &#39;QuokkaTray.ico&#39; file in &#39;...\\Quokka\\Config\\Resources\\&#39;<br> (or just rename a different .ico file to the same name) </div><div> The tray task context menu can have its appearance changed in the settings file. You will have to exit and reload the application to see changes. </div><div> You can only have one search window open at a time </div><div> You can change which file manager opens the plugboard folder through <a href="">the FileManager setting</a><br> Likewise, you can change which text editor opens the settings file through <a href="">the TextEditor setting</a></div><div> Unfortunately system tray tasks cannot be accessed through the Quokka search window (though Quokka&#39;s tray task can be); this means that Quokka cannot completely replace your taskbar yet.<br> This functionality may come in future (as a plugin). </div>',6))],64)}const Wt=k(Vt,[["render",$t]]),Ft={class:"flex flex-row",id:"docsPage"},Et={class:"basis-1/4 pt-4 px-4"},jt={class:"inline ml-2"},Gt={class:"inline ml-2"},Nt={class:"inline ml-2"},Ot={class:"basis-3/4 py-4 pr-4"},Rt={class:"docsContent max-h-[85vh] overflow-y-scroll"},Mt={__name:"index",setup(d){let t=W("installation");const i=M();i.query.section&&(t.value=i.query.section);const b=tt();function p(h){t.value=h}return(h,m)=>{const w=y,v=H,P=J,A=K;return n(),c("div",Ft,[e("div",Et,[l(s(L),{class:"w-full",padding:!1},{default:f(()=>[(n(!0),c(g,null,V(s(b).toc,(x,C)=>(n(),r(v,{direction:"down",delay:500,duration:2e3,class:"noRadius",key:C},{default:f(()=>{var T;return[((T=x.children)==null?void 0:T.length)==0?(n(),r(P,{key:0,color:"transparent",onClick:o=>p(x.section),class:_(["w-full !border-0 !p-0 !min-h-0 !hover:bg-transparent",C==0?"":"!rounded-none"]),justify:"start"},{default:f(()=>[l(s(L),{class:"w-full"},{default:f(()=>[l(v,{direction:"right",delay:1900,duration:2e3,class:"justify-start flex"},{default:f(()=>[l(w,{name:x.icon},null,8,["name"]),e("p",jt,Q(x.title),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick","class"])):(n(),r(A,{key:1,class:"w-full"},{"title-1":f(()=>[l(v,{direction:"right",delay:1900,duration:2e3},{default:f(()=>[l(w,{name:x.icon},null,8,["name"]),e("p",Gt,Q(x.title),1)]),_:2},1024)]),"content-1":f(()=>[(n(!0),c(g,null,V(x.children,(o,D)=>(n(),r(v,{direction:"right",delay:400,duration:700,key:D},{default:f(()=>[l(P,{color:"transparent",onClick:Ht=>p(o.section),class:_(["w-full !border-0 !p-0 !min-h-0 !hover:bg-transparent",D==0?"":"!rounded-none"]),justify:"start"},{default:f(()=>[l(s(L),{class:"w-full"},{default:f(()=>[l(v,{direction:"right",delay:1900,duration:2e3,class:"justify-start flex"},{default:f(()=>[l(w,{name:o.icon},null,8,["name"]),e("p",Nt,Q(o.title),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick","class"])]),_:2},1024))),128))]),_:2},1024))]}),_:2},1024))),128))]),_:1})]),e("div",Ot,[l(s(L),{class:"w-full"},{default:f(()=>[e("div",Rt,[s(t)=="api-documentation"?(n(),r(nt,{key:0})):u("",!0),s(t)=="build-app"?(n(),r(at,{key:1})):u("",!0),s(t)=="creating-context-pane"?(n(),r(st,{key:2})):u("",!0),s(t)=="commands"?(n(),r(ct,{key:3})):u("",!0),s(t)=="creating-new-item-type"?(n(),r(gt,{key:4})):u("",!0),s(t)=="creating-the-plugin"?(n(),r(bt,{key:5})):u("",!0),s(t)=="creating-the-project"?(n(),r(kt,{key:6})):u("",!0),s(t)=="faq"?(n(),r(_t,{key:7})):u("",!0),s(t)=="general-usage"?(n(),r(Pt,{key:8})):u("",!0),s(t)=="installation"?(n(),r(Bt,{key:9})):u("",!0),s(t)=="plugins"?(n(),r(Dt,{key:10})):u("",!0),s(t)=="settings"?(n(),r(zt,{key:11})):u("",!0),s(t)=="tray-task"?(n(),r(Wt,{key:12})):u("",!0)])]),_:1})])])}}},ee=Object.freeze(Object.defineProperty({__proto__:null,default:Mt},Symbol.toStringTag,{value:"Module"}));export{Z as A,ee as i};
