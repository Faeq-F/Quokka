const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DDUZlFr7.js","./COP6Hg5e.js","./entry.DeyS9qIm.css","./BO6dFVx-.js","./MazAnimatedElement.g9ydD87f.css","./_JhHO4E9.js","./MazAccordion.C7SW36J5.css","./DZxhUxjZ.js","./MazCardSpotlight.rJgYKvyQ.css","./DlAUqK2U.js","./MazSpinner.BI6kEhM7.css","./MazBtn.D8JyV_rX.css","./Ct0wJdEn.js"])))=>i.map(i=>d[i]);
import{e as z,W as V,m as v,q as f,o as s,w as h,j as k,c as B,i as T,f as b,k as A,n as g,v as q,b as d,Q as W,l as D,M as F,X as E,Y as G,h as O,C as U,p as j,V as N,a as e,F as _,r as R,Z as m,d as n,L as M,t as Q}from"./COP6Hg5e.js";import{b as H}from"./BO6dFVx-.js";/* empty css        */import{e as $}from"./_JhHO4E9.js";import{L as K}from"./DZxhUxjZ.js";import{_ as Y}from"./DlAUqK2U.js";const X={key:0,class:"m-btn-loader-container"},Z=z({__name:"MazBtn",props:{variant:{default:"button"},size:{default:"md"},color:{default:"primary"},type:{default:"button"},rounded:{type:Boolean},roundedSize:{default:"lg"},noRounded:{type:Boolean},outline:{type:Boolean},pastel:{type:Boolean},block:{type:Boolean},noUnderline:{type:Boolean},loading:{type:Boolean},disabled:{type:Boolean},fab:{type:Boolean},icon:{type:[String,Function,Object],default:void 0},leftIcon:{type:[String,Function,Object],default:void 0},rightIcon:{type:[String,Function,Object],default:void 0},noPadding:{type:Boolean},noElevation:{type:Boolean},justify:{default:"center"}},setup(w){const o=w,y=A(()=>D(()=>import("./DDUZlFr7.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url)),r=A(()=>D(()=>import("./Ct0wJdEn.js"),__vite__mapDeps([12,1,2]),import.meta.url)),{href:u,to:P}=V(),x=v(()=>u?"a":P?"router-link":"button"),I=v(()=>o.pastel?`--${o.color}-pastel`:o.outline?`--${o.color}-outline`:`--${o.color}`),l=v(()=>(o.loading||o.disabled)&&x.value==="button"),t=v(()=>l.value?"--cursor-default":"--cursor-pointer"),i=v(()=>`--is-${o.variant}`),c=v(()=>o.loading&&o.variant==="button"),C=v(()=>x.value==="button"?o.type:void 0),p=v(()=>o.size==="xl"?"maz-text-3xl":o.size==="lg"?"maz-text-2xl":o.size==="md"?"maz-text-xl":o.size==="sm"?"maz-text-lg":o.size==="xs"?"maz-text-base":o.size==="mini"?"maz-text-sm":"maz-text-xl");return(a,S)=>(s(),f(q(x.value),{disabled:l.value||void 0,class:g(["m-btn m-reset-css",[`--${a.size}`,!a.fab&&!a.rounded&&a.roundedSize&&`--rounded-${a.roundedSize}`,I.value,t.value,i.value,{"--block":a.block,"--no-underline":a.noUnderline,"--fab":a.fab,"--loading":a.loading,"--disabled":l.value,"--rounded":a.rounded,"--no-rounded":a.noRounded,"--no-padding":a.noPadding,"--no-elevation":a.noElevation}]]),style:W([`--justify: ${a.justify}`]),type:C.value},{default:h(()=>[k(a.$slots,"left-icon",{},()=>[typeof a.leftIcon=="string"?(s(),f(b(r),{key:0,name:a.leftIcon,class:g([p.value])},null,8,["name","class"])):a.leftIcon?(s(),f(q(a.leftIcon),{key:1,class:g([p.value])},null,8,["class"])):T("v-if",!0)],!0),k(a.$slots,"icon",{},()=>[typeof a.icon=="string"?(s(),f(b(r),{key:0,name:a.icon,class:g([p.value])},null,8,["name","class"])):a.icon?(s(),f(q(a.icon),{key:1,class:g([p.value])},null,8,["class"])):T("v-if",!0)],!0),k(a.$slots,"default",{},void 0,!0),k(a.$slots,"right-icon",{},()=>[typeof a.rightIcon=="string"?(s(),f(b(r),{key:0,name:a.rightIcon,class:g([p.value])},null,8,["name","class"])):a.rightIcon?(s(),f(q(a.rightIcon),{key:1,class:g([p.value])},null,8,["class"])):T("v-if",!0)],!0),c.value?(s(),B("div",X,[d(b(y),{size:"2em",color:a.color},null,8,["color"])])):T("v-if",!0)]),_:3},8,["disabled","class","style","type"]))}}),J=(w,o)=>{const y=w.__vccOpts||w;for(const[r,u]of o)y[r]=u;return y},tt=J(Z,[["__scopeId","data-v-6b881156"]]),et=F("/media/AppScreenshots/AllApps.png"),at=E("docsStore",{state:()=>({toc:[{title:"Installation",icon:"i-lucide-loader",section:"installation",children:[]},{title:"How to Use",icon:"i-lucide-pointer",section:"use",children:[{title:"General Usage",icon:"i-lucide-pointer",section:"use"},{title:"Tray task",icon:"i-lucide-pointer",section:"use"},{title:"Plugins",icon:"i-lucide-pointer",section:"use"},{title:"Commands ?",icon:"i-lucide-pointer",section:"use"}]},{title:"Settings",icon:"i-lucide-sliders-vertical",section:"settings",children:[]},{title:"Building the app",icon:"i-lucide-drill",section:"build-app",children:[]},{title:"API Documentation",icon:"i-lucide-code",section:"api-documentation",children:[]},{title:"Creating a plugin",icon:"i-lucide-toy-brick",section:"create-plugin",children:[{title:"Creating the project",icon:"i-lucide-pointer",section:"use"},{title:"Creating a new item type",icon:"i-lucide-pointer",section:"use"},{title:"Creating a context pane",icon:"i-lucide-pointer",section:"use"},{title:"Creating the plugin",icon:"i-lucide-pointer",section:"use"}]},{title:"FAQ by Developers",icon:"i-lucide-circle-help",description:"Answers to frequently asked questions",to:"/documentation?section=faq"}]}),actions:{}}),nt={class:"flex flex-row"},ot={class:"basis-1/4 pt-4 px-4"},it={class:"inline ml-2"},dt={class:"inline ml-2"},lt={class:"basis-3/4 content max-h-[90vh] overflow-y-scroll"},st={class:"w-full h-[70vh] !border-0"},rt={__name:"index",setup(w){function o(){u.value.contentDocument.getElementsByTagName("html")[0].dataset.bsTheme=r.selectedTheme.value,u.value.contentDocument.body.style.cursor="url(https://faeq-f.github.io/Quokka/cursors/"+r.selectedTheme.value+"Point.cur),auto";for(var l of u.value.contentDocument.body.getElementsByTagName("a"))l.style.cursor="url(https://faeq-f.github.io/Quokka/cursors/"+r.selectedTheme.value+"Click.cur),auto"}function y(l,t){var i=function(){setTimeout(function(){t(l,l.contentWindow.location.href)},0)};function c(){l.contentWindow.removeEventListener("unload",i),l.contentWindow.addEventListener("unload",i)}l.addEventListener("load",c),c()}const r=G({watchChanges:!0}),u=O(null);U(()=>{u.value.addEventListener("load",o),j(r.selectedTheme,async(l,t)=>o()),y(u.value,function(l,t){o()})});const P=N();console.log(P.query.section);const x=at();function I(l){console.log(l)}return(l,t)=>{const i=M,c=H,C=tt,p=$;return s(),B("div",nt,[e("div",ot,[(s(!0),B(_,null,R(b(x).toc,(a,S)=>(s(),f(c,{direction:"down",delay:500,duration:2e3,class:"",key:S},{default:h(()=>{var L;return[((L=a.children)==null?void 0:L.length)==0?(s(),f(C,{key:0,color:"transparent",onClick:ft=>I(a.section),class:g(["w-full !border-0 !p-0 !min-h-0 !hover:bg-transparent",S==0?"":"!rounded-none"]),justify:"start"},{default:h(()=>[d(b(K),{class:"w-full"},{default:h(()=>[d(c,{direction:"right",delay:1900,duration:2e3,class:"justify-start flex"},{default:h(()=>[d(i,{name:a.icon},null,8,["name"]),e("p",it,Q(a.title),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick","class"])):(s(),f(p,{key:1,class:"w-full"},{"title-1":h(()=>[d(c,{direction:"right",delay:1900,duration:2e3},{default:h(()=>[d(i,{name:a.icon},null,8,["name"]),e("p",dt,Q(a.title),1)]),_:2},1024)]),"content-1":h(()=>[d(c,{direction:"right",delay:400,duration:700},{default:h(()=>t[0]||(t[0]=[e("p",null," there ",-1)])),_:1,__:[0]})]),_:2},1024))]}),_:2},1024))),128))]),e("div",lt,[e("h1",null,[d(i,{name:"i-lucide-loader"}),t[1]||(t[1]=n(" Installation "))]),t[25]||(t[25]=m('<div data-v-79e8f509> Quokka requires the following: <ul data-v-79e8f509><li data-v-79e8f509>A computer running Windows 7 or higher</li><li data-v-79e8f509><a href="" data-v-79e8f509>.NET 4.8 Framework (pre-installed on Windows 10 and 11)</a></li><li data-v-79e8f509>A Windows defender exclusion for the location of the exe;</li></ul> Due to costs, binaries are not signed.<br data-v-79e8f509> Add exclusions to any other anti-malware software that is installed on your computer, you do not want the software to mistake the app for malware </div><div data-v-79e8f509> To install: <ul data-v-79e8f509><li data-v-79e8f509>Go to the top of this page and click on the <a href="" data-v-79e8f509>&#39;Download Latest Release&#39;</a> button</li><li data-v-79e8f509>Download the &#39;Quokka.zip&#39; file &amp; extract it&#39;s contents</li><li data-v-79e8f509>You will want to extract / move the folder to an appropriate location. </li></ul> Quokka is a portable program by design, meaning that you can place the folder on a external storage medium (e.g. a USB drive) and run the program from there.<br data-v-79e8f509> Please see the suggestions below for an appropriate location of the folder. </div><div data-v-79e8f509> Suggestions: <ul data-v-79e8f509><li data-v-79e8f509>If you do not wish to use the program in a portable manner, I suggest placing the folder in &#39;C:\\Program Files&#39;, and creating a shortcut that is pinned to the taskbar and / or start menu. </li><li data-v-79e8f509>You may also want to set up a task to run the program at startup in Task Scheduler. Alternatively see the <a href="" data-v-79e8f509>FAQ</a> on this. </li></ul></div>',3)),e("h1",null,[d(i,{name:"i-lucide-pointer"}),t[2]||(t[2]=n(" How to use "))]),e("div",null,[e("h2",null,[d(i,{name:"i-lucide-mouse-pointer"}),t[3]||(t[3]=n(" General Usage "))]),t[7]||(t[7]=m('<div data-v-79e8f509> To use the app, run Quokka.exe (in the root folder) <table data-v-79e8f509><thead data-v-79e8f509><tr data-v-79e8f509><th data-v-79e8f509>Default Keyboard shortcut</th><th data-v-79e8f509>Use</th><th data-v-79e8f509>Notes</th></tr></thead><tbody data-v-79e8f509><tr data-v-79e8f509><td data-v-79e8f509><kbd data-v-79e8f509>Left ⊞</kbd>+<kbd data-v-79e8f509>Space</kbd></td><td data-v-79e8f509>Launches the search bar</td><td data-v-79e8f509>This shortcut is modifiable; see <a href="" data-v-79e8f509>the WindowHotKey setting</a></td></tr><tr data-v-79e8f509><td data-v-79e8f509><kbd data-v-79e8f509>🠙</kbd>&amp;<kbd data-v-79e8f509>🠛</kbd></td><td data-v-79e8f509>Select items</td><td data-v-79e8f509>The keys used cannot be changed</td></tr><tr data-v-79e8f509><td data-v-79e8f509><kbd data-v-79e8f509>↵</kbd>&gt;</td><td data-v-79e8f509>Executes the selected item (the first item if no item is selected)</td><td data-v-79e8f509>The key used cannot be changed</td></tr><tr data-v-79e8f509><td data-v-79e8f509><kbd data-v-79e8f509>☰</kbd></td><td data-v-79e8f509>Shows context pane for item</td><td data-v-79e8f509>This shortcut is modifiable; see <a href="" data-v-79e8f509>the ContextPaneKey setting</a></td></tr></tbody></table></div>',1)),e("h2",null,[d(i,{name:"i-lucide-panel-bottom"}),t[4]||(t[4]=n(" Tray Task "))]),t[8]||(t[8]=m('<div data-v-79e8f509> The tray task context menu can be used to: <ul data-v-79e8f509><li data-v-79e8f509>Launch the search window</li><li data-v-79e8f509>Open the settings file</li><li data-v-79e8f509>Open the PlugBoard</li><li data-v-79e8f509>Exit the app</li></ul></div><div data-v-79e8f509> To change the tray task icon, edit the &#39;QuokkaTray.ico&#39; file in &#39;...\\Quokka\\Config\\Resources\\&#39;<br data-v-79e8f509> (or just rename a different .ico file to the same name) </div><div data-v-79e8f509> The tray task context menu can have its appearance changed in the settings file. You will have to exit and reload the application to see changes. </div><div data-v-79e8f509> You can only have one search window open at a time </div><div data-v-79e8f509> You can change which file manager opens the plugboard folder through <a href="" data-v-79e8f509>the FileManager setting</a><br data-v-79e8f509> Likewise, you can change which text editor opens the settings file through <a href="" data-v-79e8f509>the TextEditor setting</a></div><div data-v-79e8f509> Unfortunately system tray tasks cannot be accessed through the Quokka search window (though Quokka&#39;s tray task can be); this means that Quokka cannot completely replace your taskbar yet.<br data-v-79e8f509> This functionality may come in future (as a plugin). </div>',6)),e("h2",null,[d(i,{name:"i-lucide-blocks"}),t[5]||(t[5]=n(" Plugins "))]),t[9]||(t[9]=m("<div data-v-79e8f509> To add a plugin, download and extract it to the PlugBoard folder<br data-v-79e8f509> If you do not wish to use a plugin, simply delete the appropriate folder in the PlugBoard </div><div data-v-79e8f509> Plugins may have their own settings and special commands.<br data-v-79e8f509> Please see their folder in the PlugBoard to find their settings file (at the root (if there is one)).<br data-v-79e8f509> Please consult their documentation for default values, etc. </div><div data-v-79e8f509> Only recognized plugins appear on this page. Being human, I can&#39;t recognize every plugin for Quokka — I can only realize there is so much that exists. </div><div data-v-79e8f509> Planned plugins: <table data-v-79e8f509><thead data-v-79e8f509><tr data-v-79e8f509><th data-v-79e8f509>Developed?</th><th data-v-79e8f509>Plugin</th></tr></thead><tbody data-v-79e8f509><tr data-v-79e8f509><td data-v-79e8f509>✅</td><td data-v-79e8f509>installed app launcher</td></tr><tr data-v-79e8f509><td data-v-79e8f509>✅</td><td data-v-79e8f509>portable app launcher</td></tr><tr data-v-79e8f509><td data-v-79e8f509>In progress</td><td data-v-79e8f509>file/folder launcher - everything integration</td></tr><tr data-v-79e8f509><td data-v-79e8f509>In progress</td><td data-v-79e8f509>calculator</td></tr><tr data-v-79e8f509><td data-v-79e8f509>In progress</td><td data-v-79e8f509>power commands (logout, lock, sleep, shutdown, etc.)</td></tr><tr data-v-79e8f509><td data-v-79e8f509>In progress</td><td data-v-79e8f509>English dictionary</td></tr><tr data-v-79e8f509><td data-v-79e8f509>▢</td><td data-v-79e8f509>control panel shortcuts</td></tr><tr data-v-79e8f509><td data-v-79e8f509>▢</td><td data-v-79e8f509>Windows settings</td></tr><tr data-v-79e8f509><td data-v-79e8f509>▢</td><td data-v-79e8f509>Unicode character lookup</td></tr><tr data-v-79e8f509><td data-v-79e8f509>▢</td><td data-v-79e8f509>IP &amp; MAC address</td></tr><tr data-v-79e8f509><td data-v-79e8f509>▢</td><td data-v-79e8f509>cli commands - powershell</td></tr><tr data-v-79e8f509><td data-v-79e8f509>▢</td><td data-v-79e8f509>color space conversion</td></tr><tr data-v-79e8f509><td data-v-79e8f509>▢</td><td data-v-79e8f509>unit conversion</td></tr><tr data-v-79e8f509><td data-v-79e8f509>▢</td><td data-v-79e8f509>currency conversion</td></tr><tr data-v-79e8f509><td data-v-79e8f509>▢</td><td data-v-79e8f509>translate</td></tr><tr data-v-79e8f509><td data-v-79e8f509>▢</td><td data-v-79e8f509>lorem ipsum generator</td></tr><tr data-v-79e8f509><td data-v-79e8f509>▢</td><td data-v-79e8f509>emoji lookup</td></tr><tr data-v-79e8f509><td data-v-79e8f509>▢</td><td data-v-79e8f509>url opener</td></tr><tr data-v-79e8f509><td data-v-79e8f509>▢</td><td data-v-79e8f509>wikipedia search</td></tr><tr data-v-79e8f509><td data-v-79e8f509>▢</td><td data-v-79e8f509>workflows - launch multiple shortcuts at once - see below </td></tr></tbody></table></div>",4)),e("h2",null,[d(i,{name:"i-lucide-zap"}),t[6]||(t[6]=n(" Commands "))]),t[10]||(t[10]=m('<div data-v-79e8f509><b data-v-79e8f509>Special commands are case-sensitive</b> to ensure they do not interfere with other functions of the app or plugins </div><div data-v-79e8f509> All special commands for recognized plugins: <table data-v-79e8f509><thead data-v-79e8f509><tr data-v-79e8f509><th data-v-79e8f509>Command</th><th data-v-79e8f509>Use</th><th data-v-79e8f509>Plugin</th><th data-v-79e8f509>Notes</th></tr></thead><tbody data-v-79e8f509><tr data-v-79e8f509><td data-v-79e8f509><code data-v-79e8f509>AllApps</code></td><td data-v-79e8f509>list all installed apps</td><td data-v-79e8f509>InstalledApps</td><td data-v-79e8f509> This command is modifiable within the plugin specific settings<br data-v-79e8f509> Along with the list of apps, an extra item is added to the start, allowing users to open shell:appsFolder.<br data-v-79e8f509> This item can be blacklisted. </td></tr><tr data-v-79e8f509><td data-v-79e8f509><code data-v-79e8f509>AllPortableApps</code></td><td data-v-79e8f509>list all portable apps</td><td data-v-79e8f509><a href="" data-v-79e8f509>PortableApps</a></td><td data-v-79e8f509>This command is modifiable within the plugin specific settings<br data-v-79e8f509> Along with the list of apps, an extra item is added to the start, allowing users to open the directory in which the portable apps reside.<br data-v-79e8f509> This item can be blacklisted.</td></tr></tbody></table></div><div data-v-79e8f509> All command signifiers for recognized plugins: <table data-v-79e8f509><thead data-v-79e8f509><tr data-v-79e8f509><th data-v-79e8f509>Signifier</th><th data-v-79e8f509>Use</th><th data-v-79e8f509>Plugin</th><th data-v-79e8f509>Notes</th></tr></thead><tbody data-v-79e8f509><tr data-v-79e8f509><td data-v-79e8f509><code data-v-79e8f509>...</code></td><td data-v-79e8f509>...</td><td data-v-79e8f509>...</td><td data-v-79e8f509> ... </td></tr></tbody></table></div>',3))]),e("h1",null,[d(i,{name:"i-lucide-sliders-vertical"}),t[11]||(t[11]=n(" Settings "))]),t[26]||(t[26]=m('<div data-v-79e8f509> Quokka comes with the &#39;Windows light&#39; theme by default.<br data-v-79e8f509> To change it, you can edit the style settings in the settings file or you can use values in a configuration provided on the themes page. </div><div data-v-79e8f509> The settings file is located in &#39;...\\Quokka\\Config\\&#39; </div><div data-v-79e8f509> All settings are loaded when the application starts, meaning that you will have to exit and re-start the app to see changes. </div><div data-v-79e8f509> Plugins may have their own, specific settings files in the root of their respective folders in the PlugBoard. You can open The PlugBoard using the Tray Task Icon context menu.<br data-v-79e8f509> Please consult their documentation for default values, etc. </div><div data-v-79e8f509> Default General settings:<br data-v-79e8f509> (Please see the &#39;Windows light&#39; theme for default style settings) <table data-v-79e8f509><thead data-v-79e8f509><tr data-v-79e8f509><th data-v-79e8f509>Setting name</th><th data-v-79e8f509>Notes</th><th data-v-79e8f509>Default Value</th></tr></thead><tbody data-v-79e8f509><tr data-v-79e8f509><td data-v-79e8f509><code data-v-79e8f509>WindowHotKey</code></td><td data-v-79e8f509>The default value is interpreted as &#39;Left Windows key + Spacebar&#39;<br data-v-79e8f509><br data-v-79e8f509>The full list of keys that can be used in the setting can be found <a href="https://learn.microsoft.com/en-us/dotnet/api/system.windows.input.key?view=windowsdesktop-7.0#fields" data-v-79e8f509>here</a> (use the first column)</td><td data-v-79e8f509><code data-v-79e8f509>LWinSpace</code></td></tr><tr data-v-79e8f509><td data-v-79e8f509><code data-v-79e8f509>FileManager</code></td><td data-v-79e8f509>The program that will open the plugboard. Plugins may use this setting to open other folders, for e.g., a file location</td><td data-v-79e8f509><code data-v-79e8f509>explorer.exe</code></td></tr><tr data-v-79e8f509><td data-v-79e8f509><code data-v-79e8f509>TextEditor</code></td><td data-v-79e8f509>The program that will open the settings file. Plugins may use this setting to open other files, for e.g., their own settings file </td><td data-v-79e8f509><code data-v-79e8f509>notepad.exe</code></td></tr></tbody></table></div>',5)),e("h1",null,[d(i,{name:"i-lucide-drill"}),t[12]||(t[12]=n(" Building the app "))]),t[27]||(t[27]=e("div",null," The app comes as portable by design - there are no separate build instructions for a non-portable version. ",-1)),t[28]||(t[28]=e("div",null,[e("ol",null,[e("li",null," Open Visual Studio & clone Quokka "),e("li",null," Build the solution "),e("li",null," Copy the Quokka folder (in build path - normally 'bin') to your desired location (e.g. USB drive) "),e("li",null,[n(" (Download / Delete) any plugins you (do / do not) wish to use (In the PlugBoard folder)"),e("br"),n(" (Some of the recognized Plugins may be included with the build) ")])])],-1)),e("h1",null,[d(i,{name:"i-lucide-code"}),t[13]||(t[13]=n(" API documentation "))]),e("div",null,[e("div",st,[e("iframe",{ref_key:"APIframe",ref:u,src:"APIdocs/api/Quokka.html",class:"w-full h-full"},null,512)])]),e("h1",null,[d(i,{name:"i-lucide-toy-brick"}),t[14]||(t[14]=n(" Creating a plugin "))]),e("div",null,[e("h2",null,[d(i,{name:"i-lucide-folder-kanban"}),t[15]||(t[15]=n(" Creating the project "))]),t[19]||(t[19]=e("div",null,[n(" To start: "),e("ol",null,[e("li",null,"Open Visual Studio & clone Quokka"),e("li",null,' In the solution, create a project of type WPF class library, naming it "Plugin_YourPluginNameHere" (make sure that it is a part of the Quokka solution and that it is not its own) '),e("li",null,'Rename the cs file to "Plugin_YourPluginNameHere"'),e("li",null,[n(" Edit the project file to look like the following and set the build configuration to 'Plugin': "),e("br"),e("textarea",{disabled:""},`
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
                <BaseOutputPath>G:\\Quokka\\Quokka\\PlugBoard\\Plugin_ShowTypedText
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
          `),e("blockquote",null,[n(" This is a part of the "),e("a",{href:"https://github.com/Faeq-F/TypedText-Plugins"},"ShowTypedText"),n("  plugin (a demo plugin; not made for use) ")])])])],-1)),e("h2",null,[d(i,{name:"i-lucide-list"}),t[16]||(t[16]=n(" Creating a new item type "))]),t[20]||(t[20]=m(`<div data-v-79e8f509> Most plugins will want to show results to the user in the form of an item on the results list in the search window. To do so, first create an item type to define how your results are displayed; <br data-v-79e8f509><br data-v-79e8f509><ol data-v-79e8f509><li data-v-79e8f509> In the .cs file add <br data-v-79e8f509><textarea disabled style="height:5vh;" data-v-79e8f509>            using Quokka.PluginArch;
            using Quokka.ListItems;
          </textarea></li><li data-v-79e8f509> Create a ListItem class for your item type <br data-v-79e8f509><textarea disabled data-v-79e8f509>            class TypedTextItem : ListItem {
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
          </textarea><blockquote data-v-79e8f509> This is a part of the <a href="https://github.com/Faeq-F/TypedText-Plugins" data-v-79e8f509>ShowTypedText</a>  plugin (a demo plugin; not made for use) </blockquote></li></ol></div><div data-v-79e8f509> ListItems must have the following: <ul data-v-79e8f509><li data-v-79e8f509>a Name</li><li data-v-79e8f509>a Description</li><li data-v-79e8f509>an Icon</li><li data-v-79e8f509> an Execute method to define what should happen when a list item is run (i.e., the user hits the enter key when that item is selected) </li><li data-v-79e8f509>a context pane</li></ul><img src="`+et+'" data-v-79e8f509></div><div data-v-79e8f509> The ToString method of ListItems return the item&#39;s Name. </div>',3)),e("h2",null,[d(i,{name:"i-lucide-panels-top-left"}),t[17]||(t[17]=n(" Creating a context pane "))]),t[21]||(t[21]=m(`<div data-v-79e8f509> All plugins need their own context panes. It is up to you whether or not they are visible to the user or if they do anything at all; but one must be defined.<br data-v-79e8f509><br data-v-79e8f509>To define the context pane for the item type: <ol data-v-79e8f509><li data-v-79e8f509>In the project, add a WPF Page called &#39;ContextPane&#39;</li><li data-v-79e8f509> Ensure ContextPane : ItemContextPane (inherits ItemContextPane from Quokka.ListItems) </li><li data-v-79e8f509> Ensure the plugin&#39;s project file has: <textarea disabled style="height:20vh;" data-v-79e8f509>
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
          </textarea></li></ol></div><div data-v-79e8f509> To not have a context pane visible to the user, you can use the following code;<br data-v-79e8f509><textarea disabled style="height:20vh;" data-v-79e8f509>
        public partial class ContextPane : ItemContextPane {
        public ContextPane() {
        InitializeComponent();
        base.ReturnToSearch();
        }
        }
      </textarea><textarea disabled style="height:20vh;width:90%;font-family:cascadia code;border-radius:10px;border:1px solid #bbb;" data-v-79e8f509>
        &lt;src:ItemContextPane x:Class=&quot;Plugin_ShowTypedText.ContextPane&quot;
          xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
          xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;
          xmlns:d=&quot;http://schemas.microsoft.com/expression/blend/2008&quot;
          xmlns:mc=&quot;http://schemas.openxmlformats.org/markup-compatibility/2006&quot;
          xmlns:src=&quot;clr-namespace:Quokka.ListItems;assembly=Quokka&quot;
          Title=&quot;ContextPane&quot; d:DesignHeight=&quot;300&quot; d:DesignWidth=&quot;800&quot;&gt;

          &lt;Grid /&gt;

        &lt;/src:ItemContextPane&gt;

      </textarea></div><div data-v-79e8f509> If your context pane is visible, you may want to add extra information or actions like the following does: <textarea disabled style="height:20vh;" data-v-79e8f509>        &lt;src:ItemContextPane x:Class=&quot;Plugin_ShowTypedText.ContextPane&quot;
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

                &lt;ListView ScrollViewer.HorizontalScrollBarVisibility=&quot;Disabled&quot;
                  HorizontalContentAlignment=&quot;Center&quot; x:Name=&quot;ButtonsListView&quot;&gt;

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
      </textarea><textarea disabled data-v-79e8f509>        using Quokka;
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

        protected override void Page_KeyDown(object sender, KeyEventArgs e) {
        ButtonsListView.Focus();
        switch (e.Key){
        case Key.Enter:

        if ((ButtonsListView.SelectedIndex == -1)) ButtonsListView.SelectedIndex
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
        } else if (ButtonsListView.SelectedIndex == ButtonsListView.Items.Count
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
        (Application.Current.MainWindow as SearchWindow).contextPane.Visibility
        = Visibility.Collapsed;
        (Application.Current.MainWindow as SearchWindow).searchBox.Focus();

        //makes showing a new pane more reliable
        (Application.Current.MainWindow as SearchWindow).contextPane.Source =
        null;
        break;
        default:
        return;
        }
        e.Handled = true;
        }
        }
        }
      </textarea><blockquote data-v-79e8f509> This is a part of the <a href="https://github.com/Faeq-F/TypedText-Plugins" data-v-79e8f509>ShowTypedText</a>  plugin (a demo plugin; not made for use) </blockquote></div>`,3)),e("h2",null,[d(i,{name:"i-lucide-unplug"}),t[18]||(t[18]=n(" Creating the plugin "))]),t[22]||(t[22]=e("div",null,[n(" In the same .cs file, create a class that inherits from IPlugger;"),e("br"),e("textarea",{disabled:""},`        public partial class ShowTypedText : IPlugger {

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
      `),e("blockquote",null,[n(" This is a part of the "),e("a",{href:"https://github.com/Faeq-F/TypedText-Plugins"},"ShowTypedText"),n("  plugin (a demo plugin; not made for use) ")])],-1)),t[23]||(t[23]=e("div",null,[n(" OnQueryChange is the method that is called by the SearchWindow when a user types in a query In this method, you should create your list item objects, filter them (if needed), and return them in a list. "),e("br"),e("br"),n(" If your plugin has a special command, then you will need to sort the list for that command yourself. Normal results (those returned in OnQueryChange) do not need to be sorted as Quokka will sort them once it has results from all of the plugins the program is using during runtime. ")],-1))]),e("h1",null,[d(i,{name:"i-lucide-circle-help"}),t[24]||(t[24]=n(" FAQ by Developers "))]),t[29]||(t[29]=e("div",null,[n(" How do I use a 3rd party library in my plugin? You must install the package (likely through nuget) for your plugin's project. Unfortunately this is not enough since Quokka will need the package reference of the library. You will have to use "),e("a",{href:"https://learn.microsoft.com/en-us/dotnet/fundamentals/reflection/reflection"},"reflection"),n(" to load the library at runtime and use the classes it provides. You can have a look at the following plugins as examples as to how to do this: "),e("ul",null,[e("li",null,[e("a",{href:""},"Plugin_Calculator")]),e("li",null,[e("a",{href:""},"Plugin_EnglishDictionary")]),e("li",null,[e("a",{href:""},"Plugin_Everything")])])],-1))])])}}},ut=Y(rt,[["__scopeId","data-v-79e8f509"]]),yt=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"}));export{J as A,yt as i};
