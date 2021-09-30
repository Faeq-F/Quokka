const remote = require("electron").remote;
var Shell = require("node-powershell");
const { contextBridge, ipcRenderer } = require("electron");
var spawn = require("child_process").spawn,
    child;
var ul = document.getElementById("itemList");
var scrollArea = document.getElementById("scrollArea")
var liSelected;
var index = 0;
//gets the current window being used (the searchbar window)
var window = remote.getCurrentWindow();

function removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(
            new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"),
            " "
        );
    }
}

function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else {
        el.className += " " + className;
    }
}

const copyToClipboard = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    console.log("copied" + str);
    document.body.removeChild(el);
};

document.addEventListener(
    "keydown",
    function(event) {
        var len = ul.getElementsByTagName("li").length - 1;
        if (event.which === 40) {
            index++;
            index++;
            //down
            if (liSelected) {
                next = ul.getElementsByTagName("li")[index];
                if (typeof next !== undefined && index <= len) {
                    removeClass(liSelected, "selected");
                    liSelected = next;
                } else {
                    index = 0;

                    removeClass(liSelected, "selected");
                    liSelected = ul.getElementsByTagName("li")[0];
                }
                addClass(liSelected, "selected");
                console.log(index);
                liSelected.scrollIntoView();
            } else {
                index = 0;
                liSelected = ul.getElementsByTagName("li")[0];
                addClass(liSelected, "selected");
                liSelected.scrollIntoView();
            }
        } else if (event.which === 38) {
            //up

            if (liSelected) {
                let previousSelected = liSelected
                removeClass(liSelected, "selected");
                index--;
                index--;
                if (index == -2) {
                    index = len - 1;
                }
                console.log(index);

                liSelected.scrollIntoView()



                next = ul.getElementsByTagName("li")[index];
                if (typeof next !== undefined && index >= 0) {
                    liSelected = next;
                } else {
                    index = len;
                    liSelected = ul.getElementsByTagName("li")[len];
                }
                addClass(liSelected, "selected");
            } else {
                index = 0;
                liSelected = ul.getElementsByTagName("li")[len];
                addClass(liSelected, "selected");
                liSelected.scrollIntoView();
            }
        } else if (event.which === 1) {
            console.log('mouse click detected')
        } else if (event.which === 13) {
            //liSelected.onclick;
            try {
                ItemContent = liSelected.innerHTML.toString();
            } catch (error) {
                liSelected = ul.getElementsByTagName("li")[0];
                ItemContent = liSelected.innerHTML.toString();
            }

            Icon = ItemContent.split('<img src="');
            Icon = Icon[1].split(">\n                  </div>");
            Icon = Icon[0].slice(19);
            Icon = Icon.slice(0, -5);

            Subtitle = ItemContent.split('<h3>');
            Subtitle = Subtitle[1].split("</h3>");
            Subtitle = Subtitle[0];

            window.hide();
            if (Icon === "char" || Icon === "Emoji") {
                Title = ItemContent.split('<h1 style="all: revert; vertical-align: bottom; margin: 0;">');
                Title = Title[1].split("</h1>");
                Title = Title[0];

                copyToClipboard(Title);
            } else if (Icon === "File") {
                Title = ItemContent.split('<h1 style="">');
                Title = Title[1].split("</h1>");
                Title = Title[0];
                FilePath = "Start \"" + Subtitle + Title + '"';
                console.log(FilePath)

                //creates PS shell
                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });

                //command to open File
                OpenFile.addCommand(FilePath);
                //starts command
                OpenFile.invoke()
                    .then(function(output) {
                        //if there is an output, log to console
                        console.log(output);
                    })
                    .catch((error) => {
                        //if there is an error, log to console - There should never be any
                        console.log(error);
                    });
            } else if (Icon === "UWP") {
                Title = ItemContent.split('<h1 style="">');
                Title = Title[1].split("</h1>");
                Title = Title[0];
                const OpenApp = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });
                let command = "start \"shell:AppsFolder\\$(Get-StartApps \"" + Title + "\" | select -ExpandProperty AppId)\""
                    //command to open File
                OpenApp.addCommand(command);
                //starts command
                OpenApp.invoke()
                    .then(function(output) {
                        //if there is an output, log to console
                        console.log(output);
                    })
                    .catch((error) => {
                        //if there is an error, log to console - There should never be any
                        console.log(error);
                    });
                OpenApp.on('end', code => {
                    console.log("finished process")
                    console.log(command)
                });
            } else if (Icon === "ControlPanelItem") {
                child = spawn("powershell.exe", [Subtitle]);
                child.stdout.on("data", function(data) {
                    console.log("Powershell Data: " + data);
                });
                child.stderr.on("data", function(data) {
                    console.log("Powershell Errors: " + data);
                });
                child.on("exit", function() {
                    console.log("Powershell Script finished");
                });
                child.stdin.end(); //end input
            } else if (Icon === "AppLnk") {
                child = spawn("powershell.exe", ['start "' + Subtitle + '"']);
                child.stdout.on("data", function(data) {
                    console.log("Powershell Data: " + data);
                });
                child.stderr.on("data", function(data) {
                    console.log("Powershell Errors: " + data);
                });
                child.on("exit", function() {
                    console.log("Powershell Script finished");
                });
                child.stdin.end(); //end input
            } else if (Icon === "Calculation") {
                Title = ItemContent.split('<h1 style="">');
                Title = Title[1].split("</h1>");
                Title = Title[0];
                copyToClipboard(Title);
            } else if (Icon === "Quokka") {

                ipcRenderer.sendSync("synchronous-message", "ping");
            } else if (Icon === "search") {

                //search for users string
                child = spawn("powershell.exe", ["Start \"" + Subtitle + "\""]);
                child.stdout.on("data", function(data) {
                    console.log("Powershell Data: " + data);
                });
                child.stderr.on("data", function(data) {
                    console.log("Powershell Errors: " + data);
                });
                child.on("exit", function() {
                    console.log('Start "' + Subtitle + '"');
                });
                child.stdin.end(); //end input

            } else if (Icon === "commandLine") {
                Title = ItemContent.split('<h1 style="">');
                Title = Title[1].split("</h1>");
                Title = Title[0];
                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });

                //command to open File
                OpenFile.addCommand(Title);
                //starts command
                OpenFile.invoke()
                    .then(function(output) {
                        //if there is an output, log to console
                        console.log(output);
                    })
                    .catch((error) => {
                        //if there is an error, log to console - There should never be any
                        console.log(error);
                    });
            } else if (Icon === "shutdown") {

                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });

                //command to open File
                OpenFile.addCommand("%windir%\System32\shutdown.exe -s");
                //starts command
                OpenFile.invoke()
                    .then(function(output) {
                        //if there is an output, log to console
                        console.log(output);
                    })
                    .catch((error) => {
                        //if there is an error, log to console - There should never be any
                        console.log(error);
                    });
            } else if (Icon === "hibernate") {

                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });

                //command to open File
                OpenFile.addCommand("%windir%\System32\rundll32.exe powrprof.dll,SetSuspendState Hibernate");
                //starts command
                OpenFile.invoke()
                    .then(function(output) {
                        //if there is an output, log to console
                        console.log(output);
                    })
                    .catch((error) => {
                        //if there is an error, log to console - There should never be any
                        console.log(error);
                    });
            } else if (Icon === "sleep") {

                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });

                //command to open File
                OpenFile.addCommand("%windir%\System32\rundll32.exe powrprof.dll,SetSuspendState 0,1,0");
                //starts command
                OpenFile.invoke()
                    .then(function(output) {
                        //if there is an output, log to console
                        console.log(output);
                    })
                    .catch((error) => {
                        //if there is an error, log to console - There should never be any
                        console.log(error);
                    });
            } else if (Icon === "signOut") {

                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });

                //command to open File
                OpenFile.addCommand("%windir%\System32\shutdown.exe -l");
                //starts command
                OpenFile.invoke()
                    .then(function(output) {
                        //if there is an output, log to console
                        console.log(output);
                    })
                    .catch((error) => {
                        //if there is an error, log to console - There should never be any
                        console.log(error);
                    });
            } else if (Icon === "lock") {

                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });

                //command to open File
                OpenFile.addCommand("Rundll32.exe user32.dll,LockWorkStation");
                //starts command
                OpenFile.invoke()
                    .then(function(output) {
                        //if there is an output, log to console
                        console.log(output);
                    })
                    .catch((error) => {
                        //if there is an error, log to console - There should never be any
                        console.log(error);
                    });
            } else if (Icon === "restart") {

                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });

                //command to open File
                OpenFile.addCommand("%windir%\System32\shutdown.exe -r");
                //starts command
                OpenFile.invoke()
                    .then(function(output) {
                        //if there is an output, log to console
                        console.log(output);
                    })
                    .catch((error) => {
                        //if there is an error, log to console - There should never be any
                        console.log(error);
                    });
            } else if (Icon === "IP" || Icon === "MAC" || Icon === "Color" || Icon === "dictionary" || Icon === "translator" || Icon === "unitConvert" || Icon === "currencyConvert") {
                Title = ItemContent.split('<h1 style="">');
                Title = Title[1].split("</h1>");
                Title = Title[0];
                copyToClipboard(Title);
            } else {
                //launch javascript alert for undefined action
                alert("The item is undefined; no action can occur");
            }

        }
    },
    false
);
