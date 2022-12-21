const remote = require("electron").remote;
const Shell = require("nodejs-powershell");
const { contextBridge, ipcRenderer } = require("electron");
//getting the item list
var ul = document.getElementById("itemList");
//selected item
var liSelected;
//content of the selected item
let ItemContent = ""
//index of selected item
var index = 0;
//gets the current window being used (the searchbar window)
var window = remote.getCurrentWindow();
//remove class funcrtion to move selected item
function removeClass(el, className) {
    //if can get the class list for the element
    if (el.classList) {
        //remove the selected class from that list
        el.classList.remove(className);
        // if not then,
    } else {
        //regex for removing class name from the list
        el.className = el.className.replace(
            new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"),
            " "
        );
    }
}
//add class function to move selected item
function addClass(el, className) {
    //if can get the class list of the item
    if (el.classList) {
        // add selected class to it
        el.classList.add(className);
        //if not
    } else {
        //concatenate class name onto the list
        el.className += " " + className;
    }
}
//functon for actipons that copy text to the device clipboard
const copyToClipboard = (str) => {
    //create a temporaray element with the text to copy it
    const el = document.createElement("textarea");
    //adds text to be copied to the element
    el.value = str;
    //adds the element to the window
    document.body.appendChild(el);
    //selects the element
    el.select();
    //copies the content of the element
    document.execCommand("copy");
    //removes the element
    document.body.removeChild(el);
};
//event listener for button presses
document.addEventListener(
    "keydown",
    function (event) {
        //length of item list
        var len = ul.getElementsByTagName("li").length - 1;
        if (event.which === 123) {
            ipcRenderer.sendSync("dev", "openDev");
            // if down arrow pressed
        } else if (event.which === 40) {
            //move to next item
            index++;
            index++;
            //if there is a currently selected item
            if (liSelected) {
                //next item to be selected
                let next = ul.getElementsByTagName("li")[index];
                //if there is a next item to select
                if (typeof next !== undefined && index <= len) {
                    //remove class from the current item
                    removeClass(liSelected, "selected");
                    //make the next item the selected item
                    liSelected = next;
                    // if not (if already at end of list)
                } else {
                    //go back to first item
                    index = 0;
                    //remove class from current item
                    removeClass(liSelected, "selected");
                    //select first item
                    liSelected = ul.getElementsByTagName("li")[0];
                }
                //add class to the new selected item
                addClass(liSelected, "selected");
                //scroll the list down so that the selected item is in view
                liSelected.scrollIntoView();
                //if there isnt a currently selected item
            } else {
                //select first item
                index = 0;
                liSelected = ul.getElementsByTagName("li")[0];
                //add selected class to first item
                addClass(liSelected, "selected");
                //scroll it into view
                liSelected.scrollIntoView();
            }
            //if up key pressed
        } else if (event.which === 38) {
            //if there is a currently selected item
            if (liSelected) {
                //make previous item the new item for selection
                let previousSelected = liSelected
                //remove current items class
                removeClass(liSelected, "selected");
                //move back to previous item's index
                index--;
                index--;
                //checking index if moving back to first item
                if (index == -2) {
                    index = len - 1;
                }
                //scrolling the selected item into view
                liSelected.scrollIntoView()
                //getting the next item
                let next = ul.getElementsByTagName("li")[index];
                //if there is a next item to select
                if (typeof next !== undefined && index >= 0) {
                    //make the next item the selected item
                    liSelected = next;
                    // if not (if already at start of list)
                } else {
                    //go to end of list
                    index = len;
                    //select last item
                    liSelected = ul.getElementsByTagName("li")[len];
                }
                //add class to selecrted item
                addClass(liSelected, "selected");
                // if there isn't a current item
            } else {
                //select the first one
                index = 0;
                liSelected = ul.getElementsByTagName("li")[len];
                //adding class to the item
                addClass(liSelected, "selected");
                //scrolling to it
                liSelected.scrollIntoView();
            }
            //if user presses enter, run item's action
        } else if (event.which === 13) {
            //tries to get the selected item
            try {
                ItemContent = liSelected.innerHTML.toString();
            } catch (error) {
                // if no item is selected, the first one will be used
                liSelected = ul.getElementsByTagName("li")[0];
                ItemContent = liSelected.innerHTML.toString();
            }
            //getting the icon of the item to run - determine what kind of item it is
            let Icon = ItemContent.split('<img src="');
            Icon = Icon[1].split(">\n                  </div>");
            Icon = Icon[0].slice(19);
            Icon = Icon.slice(0, -5);

            //getting the subtitle of the item - tends to hold information for the action
            let Subtitle = ItemContent.split('<h3>');
            Subtitle = Subtitle[1].split("</h3>");
            Subtitle = Subtitle[0];
            //branch for action for Unicode characters or emojis
            if (Icon.startsWith("char") || Icon.startsWith("Emoji")) {
                //getting the character / emoji
                let Title = ItemContent.split('<h1 style="all: revert; vertical-align: bottom; margin: 0;">');
                //try copying the emoji
                try {
                    //getting emoji
                    Title = Title[1].split("</h1>");
                    Title = Title[0];
                    ///copying it
                    copyToClipboard(Title);
                    // if error, then item has an emoji picker in it
                } catch (error) {
                    //get the picker
                    let trigger = document.getElementById("emoji-trigger");
                    //copy it
                    copyToClipboard(trigger.innerHTML);
                }
                //branch for action of file/folder item
            } else if (Icon.startsWith("File")) {

                //getting file / folder name
                let Title = ItemContent.split('<h1 style="">');
                Title = Title[1].split("</h1>");
                Title = Title[0];
                //command to open file / folder
                let FilePath = "Start \"" + Subtitle + '\"';
                //creates PS shell
                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });
                //adds the command to the pipeline
                OpenFile.addCommand(
                    FilePath
                );
                //starts command
                OpenFile.invoke()
                    .then(function (output) {
                        //end this shell
                        OpenFile.dispose();
                        //if there is an output, log to console
                        console.log(output);
                    })
                    //error handler
                    .catch((error) => {
                        //end this shell
                        OpenFile.dispose();
                        //output error
                        console.log(error);
                    })
                //when shell ends naturally
                OpenFile.on("end", () => {
                    //end this shell
                    OpenFile.dispose();
                });
                //branch for UWP apps
            } else if (Icon.startsWith("UWP")) {
                //get the app name
                let Title = ItemContent.split('<h1 style="">');
                Title = Title[1].split("</h1>");
                Title = Title[0];
                //command for launching the app
                let command = "start \"shell:AppsFolder\\$(Get-StartApps \"" + Title + "\" | select -ExpandProperty AppId)\""
                //creates PS shell
                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });
                //adds command to pipeline
                OpenFile.addCommand(
                    command
                );
                //starts command
                OpenFile.invoke()
                    .then(function (output) {
                        //end this shell
                        OpenFile.dispose();
                        //if there is an output, log to console
                        console.log(output);
                    })
                    //error handler
                    .catch((error) => {
                        //end this shell
                        OpenFile.dispose();
                        //output error
                        console.log(error);
                    })
                //natural end of shell
                OpenFile.on("end", () => {
                    //end this shell
                    OpenFile.dispose();
                });
                //branch for control panel item action
            } else if (Icon.startsWith("ControlPanelItem")) {
                //creates PS shell
                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });
                //adds subtitle to the pipeling (subtitle holds launch command)
                OpenFile.addCommand(
                    Subtitle
                );
                //starts command
                OpenFile.invoke()
                    .then(function (output) {
                        //end this shell
                        OpenFile.dispose();
                        //if there is an output, log to console
                        console.log(output);
                    })
                    //error handler
                    .catch((error) => {
                        //end this shell
                        OpenFile.dispose();
                        //output error
                        console.log(error);
                    })
                //natural end
                OpenFile.on("end", () => {
                    //end this shell
                    OpenFile.dispose();
                });
                //branch for portable app or app lik (both ahve link to their executable files for launch)
            } else if (Icon.startsWith("AppLnk") || Icon.startsWith("PortableApp")) {
                //command for starting app
                let command = 'start "' + Subtitle + '"'
                //creates PS shell
                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });
                //adding command to pipeline
                OpenFile.addCommand(
                    command
                );
                //starts command
                OpenFile.invoke()
                    .then(function (output) {
                        //end this shell
                        OpenFile.dispose();
                        //if there is an output, log to console
                        console.log(output);
                    })
                    //error handler
                    .catch((error) => {
                        //end this shell
                        OpenFile.dispose();
                        //output error
                        console.log(error);
                    })
                //natural shell end
                OpenFile.on("end", () => {
                    //end this shell
                    OpenFile.dispose();
                });
                //branch for calculation action
            } else if (Icon.startsWith("Calculation")) {
                //get answer
                let Title = ItemContent.split('<h1 style="">');
                Title = Title[1].split("</h1>");
                Title = Title[0];
                //copy answer
                copyToClipboard(Title);
                //branch for settings window shortcut
            } else if (Icon.startsWith("Quokka")) {
                //send IPC message to main process to launch settings window
                ipcRenderer.sendSync("synchronous-message", "ping");
                //branch for web search or wikipedia search
            } else if (Icon.startsWith("search") || Icon.startsWith("Wikipedia")) {
                //search for users string
                let command = "Start \"" + Subtitle + "\""
                //creates PS shell
                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });
                //adds command to pipeline
                OpenFile.addCommand(
                    command
                );
                //starts command
                OpenFile.invoke()
                    .then(function (output) {
                        //end this shell
                        OpenFile.dispose();
                        //if there is an output, log to console
                        console.log(output);
                    })
                    //error handler
                    .catch((error) => {
                        //end this shell
                        OpenFile.dispose();
                        //output error
                        console.log(error);
                    })
                //natural end
                OpenFile.on("end", () => {
                    //end this shell
                    OpenFile.dispose();
                });
                //branch for powershell command
            } else if (Icon.startsWith("commandLine")) {
                //getting the command to run
                let Title = ItemContent.split('<h1 style="">');
                Title = Title[1].split("</h1>");
                Title = Title[0];
                //shell to run the command in
                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });
                //adding command to pipeline
                OpenFile.addCommand(Title);
                //starts command
                OpenFile.invoke()
                    .then(function (output) {
                        //if there is an output, log to console
                        console.log(output);
                    })
                    //error handler
                    .catch((error) => {
                        //if there is an error, log to console - There should never be any
                        console.log(error);
                    });
                //branch for shutdown shortcut
            } else if (Icon.startsWith("shutdown")) {
                //shell to run shortcut
                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });
                //command to shutdown
                OpenFile.addCommand("%windir%\System32\shutdown.exe -s");
                //starts command
                OpenFile.invoke()
                    .then(function (output) {
                        //if there is an output, log to console
                        console.log(output);
                    })
                    .catch((error) => {
                        //if there is an error, log to console - There should never be any
                        console.log(error);
                    });
                //branch for hibernate shortcut
            } else if (Icon.startsWith("hibernate")) {
                //shell to run shortcut
                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });
                //command to run shortcut
                OpenFile.addCommand("%windir%\System32\rundll32.exe powrprof.dll,SetSuspendState Hibernate");
                //starts command
                OpenFile.invoke()
                    .then(function (output) {
                        //if there is an output, log to console
                        console.log(output);
                    })
                    .catch((error) => {
                        //if there is an error, log to console - There should never be any
                        console.log(error);
                    });
                //branch to sleep shortcut
            } else if (Icon.startsWith("sleep")) {
                //shell to run shortcut
                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });
                //command to sleep
                OpenFile.addCommand("%windir%\System32\rundll32.exe powrprof.dll,SetSuspendState 0,1,0");
                //starts command
                OpenFile.invoke()
                    .then(function (output) {
                        //if there is an output, log to console
                        console.log(output);
                    })
                    .catch((error) => {
                        //if there is an error, log to console - There should never be any
                        console.log(error);
                    });
                //branch to sign out shortcut
            } else if (Icon.startsWith("signOut")) {
                //shell to run shortcut
                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });
                //command to open File
                OpenFile.addCommand("%windir%\System32\shutdown.exe -l");
                //starts command
                OpenFile.invoke()
                    .then(function (output) {
                        //if there is an output, log to console
                        console.log(output);
                    })
                    .catch((error) => {
                        //if there is an error, log to console - There should never be any
                        console.log(error);
                    });
                //branch for lock shortcut
            } else if (Icon.startsWith("lock")) {
                //shell to run shortcut
                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });
                //command to open File
                OpenFile.addCommand("Rundll32.exe user32.dll,LockWorkStation");
                //starts command
                OpenFile.invoke()
                    .then(function (output) {
                        //if there is an output, log to console
                        console.log(output);
                    })
                    .catch((error) => {
                        //if there is an error, log to console - There should never be any
                        console.log(error);
                    });
                //branch to restart shortcut
            } else if (Icon.startsWith("restart")) {
                //shell to run shortcut
                const OpenFile = new Shell({
                    executionPolicy: "Bypass",
                    noProfile: true,
                });
                //command to open File
                OpenFile.addCommand("%windir%\System32\shutdown.exe -r");
                //starts command
                OpenFile.invoke()
                    .then(function (output) {
                        //if there is an output, log to console
                        console.log(output);
                    })
                    .catch((error) => {
                        //if there is an error, log to console - There should never be any
                        console.log(error);
                    });
                //branch to items that have their output in the title and need it copied
            } else if (Icon.startsWith("IP") || Icon.startsWith("MAC") || Icon.startsWith("Color") || Icon.startsWith("dictionary") || Icon.startsWith("translator") || Icon.startsWith("unitConvert") || Icon.startsWith("currencyConvert")) {
                //getting title
                let Title = ItemContent.split('<h1 style="">');
                Title = Title[1].split("</h1>");
                Title = Title[0];
                //copying it
                copyToClipboard(Title);
            } else {
                //launch javascript alert for undefined action
                alert("The item is undefined; no action can occur");
            }
            //hiding the window so that it can be closed in main process
            window.hide();
        }
    },
    false
);
