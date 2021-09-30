/**
 * Generated from https://bing.com/translator
 */
const LANGS = {
    "auto-detect": "Auto-detect",
    af: "Afrikaans",
    am: "Amharic",
    ar: "Arabic",
    as: "Assamese",
    az: "Azerbaijani",
    bg: "Bulgarian",
    bn: "Bangla",
    bs: "Bosnian",
    ca: "Catalan",
    cs: "Czech",
    cy: "Welsh",
    da: "Danish",
    de: "German",
    el: "Greek",
    en: "English",
    es: "Spanish",
    et: "Estonian",
    fa: "Persian",
    fi: "Finnish",
    fil: "Filipino",
    fj: "Fijian",
    fr: "French",
    "fr-CA": "French (Canada)",
    ga: "Irish",
    gu: "Gujarati",
    he: "Hebrew",
    hi: "Hindi",
    hr: "Croatian",
    ht: "Haitian Creole",
    hu: "Hungarian",
    hy: "Armenian",
    id: "Indonesian",
    is: "Icelandic",
    it: "Italian",
    iu: "Inuktitut",
    ja: "Japanese",
    kk: "Kazakh",
    km: "Khmer",
    kmr: "Kurdish (Northern)",
    kn: "Kannada",
    ko: "Korean",
    ku: "Kurdish (Central)",
    lo: "Lao",
    lt: "Lithuanian",
    lv: "Latvian",
    mg: "Malagasy",
    mi: "Maori",
    ml: "Malayalam",
    mr: "Marathi",
    ms: "Malay",
    mt: "Maltese",
    mww: "Hmong Daw",
    my: "Myanmar",
    nb: "Norwegian",
    ne: "Nepali",
    nl: "Dutch",
    or: "Odia",
    otq: "Querétaro Otomi",
    pa: "Punjabi",
    pl: "Polish",
    prs: "Dari",
    ps: "Pashto",
    pt: "Portuguese (Brazil)",
    "pt-PT": "Portuguese (Portugal)",
    ro: "Romanian",
    ru: "Russian",
    sk: "Slovak",
    sl: "Slovenian",
    sm: "Samoan",
    sq: "Albanian",
    "sr-Cyrl": "Serbian (Cyrillic)",
    "sr-Latn": "Serbian (Latin)",
    sv: "Swedish",
    sw: "Swahili",
    ta: "Tamil",
    te: "Telugu",
    th: "Thai",
    ti: "Tigrinya",
    "tlh-Latn": "Klingon (Latin)",
    "tlh-Piqd": "Klingon (pIqaD)",
    to: "Tongan",
    tr: "Turkish",
    ty: "Tahitian",
    uk: "Ukrainian",
    ur: "Urdu",
    vi: "Vietnamese",
    yua: "Yucatec Maya",
    yue: "Cantonese (Traditional)",
    "zh-Hans": "Chinese Simplified",
    "zh-Hant": "Chinese Traditional",
};

//Node JS modules
const { contextBridge, ipcRenderer } = require("electron");
var Shell = require("node-powershell");
var ip = require("ip");
const getmac = require("getmac");
const fs = require('fs');
const path = require('path');
var EmojiData = require('emoji-data');
import { EmojiButton } from '../../node_modules/@joeattardi/emoji-button/dist/index.js';

// new folder absolute path
let basepath = path.join(__dirname, '');
const assetsPath = basepath.slice(0, -10)


const { translate } = require("bing-translate-api");
var converter = require("unitconvert")();

//My modules
import ColorConversion from "./color conversion.js";
import Sort from "./Sort.js";

//get HTML elements
const scrollArea = document.getElementById("scrollArea");
const itemList = document.getElementById("itemList");
const searchBar = document.getElementById("searchBar");



//declare list of items to be parsed for output to user
let items = [];


//display items once JSON item list has been parsed
const displayItems = async(items) => {

    //wipe the list (on the webpage) of it's current items
    itemList.innerHTML = "";
    //iterate through every item
    for (var i = 0; i < items.length; ++i) {
        //create a list element inside the list
        var li = document.createElement("li");
        let Icon = '../Icons/ItemTypes/' + `${items[i].Icon}` + ".png";
        let style = ""
        if (items[i].Icon === "char" || items[i].Icon === "Emoji") {
            style = "all: revert; vertical-align: bottom; margin: 0;"
        }
        //make the item have the following elements: (flexbox with Icon in one column and the title and subtitle in another in two separate rows)
        li.innerHTML = `
            <li class="item">
            <h5>.</h5>
              <div class="itemWrapper">
                <div class="flexContainer">
                  <div class="firstCol">
                    <img src=${Icon}>
                  </div>
                  <div class="secondCol">
                    <div class="innerFlex">
                      <div class="firstItem">
                      <h1 style="${style}">${items[i].Title}</h1>

                      </div>
                      <div class="secondItem">
                      <h3>${items[i].Subtitle}</h3>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5>.</h5>
              <hr>
            </li>
        `; // Use innerHTML to set the text
        //adding the item back to the list
        itemList.appendChild(li);
    }

    if (items[0].Icon == "Color" && items[0].Subtitle == "(Change skin tones by using shift clicks)") {
        var li = document.createElement("li");

        li.innerHTML = `
            <li class="item">
            <h5>.</h5>
              <div class="itemWrapper">
                <div class="flexContainer">
                  <div class="firstCol">
                    <img src="../Icons/ItemTypes/Emoji.png">
                  </div>
                  <div class="secondCol">
                    <div class="innerFlex">
                      <div class="firstItem">
                      <br>
                        <div id="EmojiPicker"></div>

                      </div>
                      <div class="secondItem">
                      <br>
                      <h3>Emoji selector</h3>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5>.</h5>
              <hr>
            </li>
        `; // Use innerHTML to set the text
        //adding the item back to the list
        itemList.appendChild(li);
        const picker = new EmojiButton();
        const trigger = document.getElementById("EmojiPicker");

        picker.on('emoji', selection => {
            trigger.innerHTML = selection.emoji;
        });

        trigger.addEventListener('click', () => picker.togglePicker(trigger));
    }

    if (items[0].Icon == "Color") {
        var li = document.createElement("li");

        li.innerHTML = `
            <li class="item">
            <h5>.</h5>
              <div class="itemWrapper">
                <div class="flexContainer">
                  <div class="firstCol">
                    <img src="../Icons/ItemTypes/Color.png">
                  </div>
                  <div class="secondCol">
                    <div class="innerFlex">
                      <div class="firstItem">
                      <br>
                      <div id="ColorPickerListItem" class="ColorSetting"></div>

                      </div>
                      <div class="secondItem">
                      <br>
                      <h3>Color Picker <br>(Click on it's background after typing any values in the input field to update it)</h3>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5>.</h5>
              <hr>
            </li>
        `; // Use innerHTML to set the text
        //adding the item back to the list
        itemList.appendChild(li);
        for (var i in document.getElementsByClassName("ColorSetting ")) {
            let id = document.getElementsByClassName("ColorSetting ")[i].id
            if (!(items[1] === undefined)) {
                eval("var " + id + "CP=new Cordelia({elm: '#" + id + "',color: '#" + items[1].Title + "',colorFormat: 'hex',pickerStyle: 0,embed: true,size: 'small',allowOpacity: true,allowClearColor: false,showColorValue: true,showButtons: false,showPalette: false}); ")
                eval(id + "CP.el.addEventListener( 'changed', function() {onColorChange( " + id + ", " + id + "CP.get().value)}); ")
            } else {
                eval("var " + id + "CP=new Cordelia({elm: '#" + id + "',color: '#FFFFFF',colorFormat: 'hex',pickerStyle: 0,embed: true,size: 'small',allowOpacity: true,allowClearColor: false,showColorValue: true,showButtons: false,showPalette: false}); ")
                eval(id + "CP.el.addEventListener( 'changed', function() {onColorChange( " + id + ", " + id + "CP.get().value)}); ")
            }
        }
    }


};

//rounds the corners of the items (required separately as items rounded with a scrollbar does not work; need to be rounded when there is no scrollbar)
function roundCorners() {
    //gets all list items
    var itemNodes = document.getElementsByTagName("li");
    var separator = document.getElementsByTagName("hr").item(document.getElementsByTagName("hr").length - 1);
    //if there are items present
    try {
        //check if the number of items is less than the number needed for the scrollbar to show
        if (itemNodes.length < 6) {

            // if so, round all the corners
            itemList.style.cssText = "border-radius: 15px 0 15px 15px;";
        } else {
            //if not, do not round the two right corners

            itemList.style.cssText = "border-radius: 15px 0 0 15px;";
        }
        separator.style.cssText = "display:none;";


    } catch (error) {
        //no items to round corners for
    }
}

function getApps(search) {
    const ps = new Shell({
        executionPolicy: "Bypass",
        noProfile: true,
    });
    //command to search using python file with SDK (params are the user input and location of the python file)
    let command = assetsPath + "PowerShell` Scripts\\applications.ps1"
    ps.addCommand(command);
    //run the command
    ps.invoke()
        .then(function(output) {
            //once there is an output, parse it into a JSON object and display it onscreen
            output = output.replace(/@/g, "");
            output = output.replace(/�/g, "");
            let data = JSON.parse(output).ALL;
            var OutData = [];
            Object.keys(data).forEach((key) => {
                let individualList = data[key];
                Object.keys(individualList).forEach((key) => {
                    let i = individualList[key];
                    i = i.split(";");
                    for (let j = 0; j in i; j++) {
                        i[j] = i[j].replace(/{ShortcutName=/g, "");
                        i[j] = i[j].replace(/}/g, "");
                        i[j] = i[j].replace(/ LinkTarget=/g, "");
                        i[j] = i[j].replace(/{Name=/g, "");
                    }
                    if (i[1] === undefined) {
                        i[1] = 'Show-ControlPanelItem "' + i[0] + '"';
                    }
                    if (i[0].endsWith(".lnk")) {
                        i[2] = "AppLnk";
                    }
                    if (i[1].startsWith("Show-ControlPanelItem")) {
                        i[2] = "ControlPanelItem";
                    }
                    if (i[0].startsWith("{DisplayName=")) {
                        i[1] = "Open UWP app";
                        i[2] = "UWP";
                    }
                    for (let j = 0; j in i; j++) {
                        i[j] = i[j].replace(/{DisplayName=/g, "");
                    }
                    let keyValue = { Title: i[0], Subtitle: i[1], Icon: i[2] };
                    OutData.push(keyValue);
                });
            });
            if (search === "") {
                OutData = OutData.sort(Sort())
                displayItems(OutData);

                roundCorners();

            } else {
                let filteredItems = OutData.filter(
                    ({ Title, Subtitle }) =>
                    Title.toLowerCase().includes(search) ||
                    Subtitle.toLowerCase().includes(search)
                );
                filteredItems = filteredItems.sort(Sort())
                displayItems(filteredItems);
                scrollArea.style.display = "block";
                roundCorners();

            }
        })
        .catch((error) => {
            console.log(error);
        });
}

//checks if the user is typing in the searchBar
searchBar.addEventListener("keyup", async(e) => {

    //if so, ends any possible previous inputs by closing all powershell instances
    //creates PS shell
    const Endps = new Shell({
        executionPolicy: "Bypass",
        noProfile: true,
    });
    //command to kill PS instances
    Endps.addCommand(
        "taskkill /IM powershell.exe /F | where {$_.Path -like '*electron*'}"
    );
    //starts command
    Endps.invoke()
        .then(function(output) {
            //if there is an output, log to console
            console.log(output);
        })
        .catch((error) => {
            //if there is an error, log to console - There should never be any
            console.log(error);
        });
    //once all instances have been killed
    Endps.on("end", () => {
        //end this shell
        Endps.dispose();

        //gets users input string and checks it's lowercase form for command signifiers
        const searchString = e.target.value;
        //checks if user has typed in the command signifier in each condition
        if (searchString.toLowerCase() == "all") {
            getApps("");
            scrollArea.style.display = "block";

        } else if (searchString.toLowerCase() == "quokka settings") {
            let Item = [{
                Title: "Settings",
                Subtitle: "Open the settings for this program",
                Icon: "Quokka",
            }, ];
            displayItems(Item);
            scrollArea.style.display = "block";
            //open settings window
            roundCorners();
        } else if (searchString.toLowerCase().startsWith("f? ")) {
            //File Search
            //show the item list as there may be items to show
            scrollArea.style.display = "block";
            //removes the command signifier so search input can be passed to SDK
            let charsForSearch = searchString.slice(3);
            //PS for interaction with Everything SDK
            const ps = new Shell({
                executionPolicy: "Bypass",
                noProfile: true,
            });
            //command to search using python file with SDK (params are the user input and location of the python file)
            ps.addCommand(
                'Python "E:\\Quokka\\assets\\Python scripts\\Everything search.py" ' +
                charsForSearch +
                ' "E:\\Quokka\\assets\\Python scripts"'
            );
            //run the command
            ps.invoke()
                .then(function(output) {
                    //once there is an output, parse it into a JSON object and display it onscreen
                    displayItems(JSON.parse(output));
                    scrollArea.style.display = "block";
                    roundCorners();
                })
                .catch((error) => {
                    /*Proper command not given in search field or python will output it's own error in a separate window*/
                });
            //adds focus back onto the searchbar so user can continue to type if needed
            document.getElementById("searchBar").focus();
            //round the corners of the items

        } else if (searchString.toLowerCase().startsWith("c? ")) {
            //color shortcuts
            let UInput = searchString.toLowerCase().slice(3);
            let Items = ColorConversion(UInput);
            // no alphabetic merge sort as items are sorted by what seems to be most useful for user
            displayItems(Items);
            scrollArea.style.display = "block";
            //round the corners of the items
            roundCorners();
        } else if (searchString.toLowerCase().startsWith("t? ")) {
            let UInput = searchString.slice(3);
            let ogLang = UInput.substring(0, 2).toLowerCase();
            let toLang = UInput.substring(3, 5).toLowerCase();
            let TransText = UInput.slice(6);
            translate(TransText, ogLang, toLang, true)
                .then((res) => {
                    let Item = [{
                        Title: res.translation,
                        Subtitle: "Translating " +
                            TransText +
                            " from " +
                            LANGS[ogLang] +
                            " to " +
                            LANGS[toLang],
                        Icon: "translator",
                    }, ];
                    displayItems(Item);
                    scrollArea.style.display = "block";
                    roundCorners()
                })
                .catch((err) => {
                    console.error(err);
                });
        } else if (searchString.toLowerCase().startsWith("u? ")) {
            let UInput = searchString.slice(3);
            converter.convert(UInput, function(err, value, str) {
                let Item = [
                    { Title: value + " " + str, Subtitle: UInput, Icon: "unitConvert" },
                ];
                displayItems(Item);
                scrollArea.style.display = "block";
                roundCorners()
            });
        } else if (searchString.toLowerCase().startsWith("$? ")) {
            try {
                let UInput = searchString.slice(3);
                let from = UInput.substring(0, 3)
                let to = UInput.substring(4, 7)
                let amount = UInput.substring(8, UInput.length)
                const host = 'api.frankfurter.app';
                fetch(`https://${host}/latest?amount=${amount}&from=${from}&to=${to}`)
                    .then(resp => resp.json())
                    .then((data) => {
                        data = JSON.stringify(data)
                        data = data.slice(1)
                        data = data.substring(0, data.length - 1)
                        data = data.split(',');
                        data = data.slice(2, 4)
                        let amount = data[1].split(':');
                        let date = data[0].split(':')
                        date = date[1].substring(1, date[1].length - 1)
                        amount = amount[2].substring(0, amount[2].length - 1)
                        let Item = [{
                            Title: amount,
                            Subtitle: "Using data last updated on " + date,
                            Icon: "currencyConvert",
                        }, ];
                        displayItems(Item);
                        scrollArea.style.display = "block";
                        roundCorners()
                    });
            } catch (error) {
                //command not given correctly
                let Item = [{
                    Title: "Invalid command",
                    Subtitle: "Currency is unsupported or command is invalid",
                    Icon: "currencyConvert",
                }, ];
                displayItems(Item);
                scrollArea.style.display = "block";
                roundCorners()
            }

        } else if (searchString.toLowerCase().startsWith("char ")) {
            //Unicode character lookup
            // remove command signifier from user input
            let charsForSearch = searchString.slice(5);
            //command for searching unicode UTF-8 for characters
            let command = assetsPath + 'Python` scripts\\unicode.exe ' + charsForSearch;

            //shell to execute command
            const ps = new Shell({
                executionPolicy: "Bypass",
                noProfile: true,
            });
            ps.addCommand(command);
            //starts command
            ps.invoke()
                .then(function(output) {
                    //parses output into JSON object and shows the results to user
                    let Items = JSON.parse(output)
                    Items = Items.sort(Sort())
                    displayItems(Items);
                    scrollArea.style.display = "block";
                    roundCorners();
                })
                .catch((error) => {
                    /*Proper command not given in search field or python will output it's own error in a separate window*/
                });
            //adds focus back onto the searchbar so user can continue to type if needed
            document.getElementById("searchBar").focus();
            //round the corners of the items
        } else if (
            searchString.toLowerCase() === "shutdown"
        ) {
            let Item = [{ Title: "Shutdown", Subtitle: "Shutdown  your computer", Icon: "shutdown" }]
            displayItems(Item);
            scrollArea.style.display = "block";
            roundCorners();
        } else if (
            searchString.toLowerCase() === "restart"
        ) {
            let Item = [{ Title: "Restart", Subtitle: "Restart your computer", Icon: "restart" }]
            displayItems(Item);
            scrollArea.style.display = "block";
            roundCorners();
        } else if (
            searchString.toLowerCase() === "sleep"
        ) {
            let Item = [{ Title: "Sleep", Subtitle: "Put your computer on sleep", Icon: "sleep" }]
            displayItems(Item);
            scrollArea.style.display = "block";
            roundCorners();
        } else if (
            searchString.toLowerCase() === "hibernate"
        ) {
            let Item = [{ Title: "Hibernate", Subtitle: "Put your computer on hibernate", Icon: "hibernate" }]
            displayItems(Item);
            scrollArea.style.display = "block";
            roundCorners();
        } else if (
            searchString.toLowerCase() === "lock"
        ) {
            let Item = [{ Title: "Lock", Subtitle: "lock your computer", Icon: "lock" }]
            displayItems(Item);
            scrollArea.style.display = "block";
            roundCorners();
        } else if (
            searchString.toLowerCase() === "sign out"
        ) {
            let Item = [{ Title: "Sign out", Subtitle: "Sign out from your computer", Icon: "signOut" }]
            displayItems(Item);
            scrollArea.style.display = "block";
            roundCorners();
        } else if (
            searchString.toLowerCase() === "ip" ||
            searchString.toLowerCase() === "mac"
        ) {
            let IP = ip.address();
            let MAC = getmac.default();
            let Items = [
                { Title: IP, Subtitle: "Your IP address", Icon: "IP" },
                { Title: MAC, Subtitle: "Your device's MAC address", Icon: "MAC" },
            ];
            displayItems(Items);

            scrollArea.style.display = "block";
            //IP and MAC address shown
            roundCorners();
        } else if (searchString.toLowerCase().startsWith("> ")) {
            let command = searchString.slice(2);
            let Icon = [{
                Title: command,
                Subtitle: "Run command in PowerShell",
                Icon: "commandLine",
            }, ];
            displayItems(Icon);
            scrollArea.style.display = "block";
            //cmd command
            roundCorners();
        } else if (searchString.toLowerCase().startsWith("def ")) {
            let word = searchString.slice(4);
            var request = new XMLHttpRequest();

            request.open(
                "GET",
                "https://api.dictionaryapi.dev/api/v2/entries/en_GB/" + word,
                true
            );
            request.onload = function() {
                // Begin accessing JSON data here
                var data = JSON.parse(this.response);

                if (request.status >= 200 && request.status < 400) {
                    let Items = [];
                    data.forEach((i) => {
                        i.meanings.forEach((j) => {
                            let Item = {
                                Title: "(" + j.partOfSpeech + ") " + j.definitions[0].definition,
                                Subtitle: "e.g. " + j.definitions[0].example,
                                Icon: "dictionary",
                            };
                            Items.push(Item);
                        });
                    });
                    Items = Items.sort(Sort())
                    displayItems(Items);
                    scrollArea.style.display = "block";
                    roundCorners()
                } else {
                    console.log("error");
                }
            };

            request.send();
            //search using preferred search engine



        } else if (searchString.toLowerCase().startsWith("e? ")) {
            let query = searchString.slice(3);
            let Items = []
            if (query === "") {
                Items = [{ Title: "Choose an emoji from below", Subtitle: "(Change skin tones by using shift clicks)", Icon: "Emoji" }]
                displayItems(Items);
                scrollArea.style.display = "block";
                roundCorners()
            } else {
                EmojiData.find_by_name(query).map(
                    function(c) { Items.push({ "Title": c.render(), "Subtitle": c.name, "Icon": "Emoji" }) }
                );
                Items = Items.sort(Sort())
                displayItems(Items);
                scrollArea.style.display = "block";
                roundCorners()
            }

        } else if (searchString.toLowerCase().startsWith("? ")) {
            let query = searchString.slice(2);
            let url = "https://www.bing.com/search?q=" + query;
            let Item = [{ Title: query, Subtitle: url, Icon: "search" }];
            displayItems(Item);
            scrollArea.style.display = "block";
            //search using preferred search engine
            roundCorners();
        } else if (
            searchString.toLowerCase().startsWith("http") ||
            searchString.toLowerCase().startsWith("www")
        ) {
            let url = searchString;
            let Item = [{ Title: url, Subtitle: "Go to site", Icon: "search" }];
            displayItems(Item);
            scrollArea.style.display = "block";
            //search using preferred search engine
            roundCorners();
        } else if (
            searchString.toLowerCase().includes("+") ||
            searchString.toLowerCase().includes("-") ||
            searchString.toLowerCase().includes("*") ||
            searchString.toLowerCase().includes("/")
        ) {
            //Mathematical operations
            try {
                let Answer = eval(searchString);
                let Item = [{
                    Title: Answer,
                    Subtitle: searchString,
                    Icon: "Calculation",
                }, ];
                displayItems(Item);
                scrollArea.style.display = "block";
                roundCorners()
            } catch (error) {
                //Error occurs when user ends calculation on an operator or invalid math rules are used
                let Item = [{
                    Title: "Bad or Invalid calculation",
                    Subtitle: searchString,
                    Icon: "Calculation",
                }, ];
                displayItems(Item);
                scrollArea.style.display = "block";
                roundCorners()
            }

        } else if (searchString.toLowerCase() != "") {
            //search for applications
            getApps(searchString);
            //show the item list as there may be items to show

        } else {
            // load items func called
            getApps("");
            // hides the scroll area as user hasn't searched anything yet - (no need to round items obviously)
            scrollArea.style.display = "none";
            // refreshes for next filter (needed as logical errors were found without this)

        }
    });
});
