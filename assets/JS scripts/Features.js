//node modules
const { contextBridge, ipcRenderer } = require("electron");
const path = require('path');
const Shell = require("nodejs-powershell");
var converter = require("unitconvert")();
var ip = require("ip");
const getmac = require("getmac");
var EmojiData = require('emoji-data');
//My modules
import displayItems from "./display items.js";
import roundCorners from './round corners.js'
import Sort from "./Sort.js";
import Search from "./Binary search.js";
import getApps from './apps.js';
import fileSearch from "./file search.js";
import Calculate from "./calculate.js";
import charSearch from './UnicodeChar.js'
import dictionary from './definition.js'
import translator from "./translation.js";
import ColorConversion from "./color conversion.js";
import currencyConvert from "./currency.js";
// new folder absolute path
let basepath = path.join(__dirname, '');
const assetsPath = basepath.slice(0, -10)
//Item list
const scrollArea = document.getElementById("scrollArea");
//Branching to different features
export default function Features(searchString) {
    //checks if user has typed in the command signifier in each condition
    if (searchString.toLowerCase() == "all") {
        //shows all apps by passing empty query
        getApps("", Shell, Sort, displayItems, roundCorners, assetsPath);
        //Quokka settings shortcut item
    } else if (searchString.toLowerCase() == "quokka") {
        //creating shortcut item
        let Item = [{
            Title: "Settings",
            Subtitle: "Open the settings for this program",
            Icon: "Quokka",
        }];
        //creating item element
        displayItems(Item);
        //displaing item list
        scrollArea.style.display = "block";
        roundCorners();
        //searching for files or folders
    } else if (searchString.toLowerCase().startsWith("f? ")) {
        //runs file search function - passing query
        fileSearch(searchString, Shell, assetsPath, displayItems, roundCorners)
        //searching for portable apps
    } else if (searchString.toLowerCase().startsWith("portable ")) {
        //getting the path to the JSON file with all indexed portable apps
        let PortableApps = assetsPath.slice(0, -14) + "Quokka\\assets\\JSON data\\PortableApps.json"
        //loading JSON into file
        const jsonData = require(PortableApps);
        //getting the user query
        let UInput = searchString.toLowerCase().slice(9);
        //filtering through apps
        let filteredItems = jsonData.filter(
            //searching through both title and subtitle
            ({ Title, Subtitle }) =>
            //checks if either include the query
            Title.toLowerCase().includes(UInput) ||
            Subtitle.toLowerCase().includes(UInput)
        );
        //forting the filtered items
        filteredItems = Sort(filteredItems)
        //creating item elements
        displayItems(filteredItems);
        //displaying item list
        scrollArea.style.display = "block";
        roundCorners();
        //color search
    } else if (searchString.toLowerCase().startsWith("c? ")) {
        //query
        let UInput = searchString.toLowerCase().slice(3);
        //running conversion script to generate all items
        let Items = ColorConversion(UInput);
        // no alphabetic merge sort as items are sorted by what seems to be most used
        //creating elements
        displayItems(Items);
        //displaying itemn list
        scrollArea.style.display = "block";
        //round the corners of the items
        roundCorners();
        //translation branch
    } else if (searchString.toLowerCase().startsWith("t? ")) {
        //running translator function for items
        translator(searchString)
        //unit conversion branch
    } else if (searchString.toLowerCase().startsWith("u? ")) {
        //getting query
        let UInput = searchString.slice(3);
        //using api to convert
        converter.convert(UInput, function(err, value, str) {
            //if there is an error
            if (err != null) {
                //show bad item - validation
                let Item = [
                    { Title: "Invalid conversion", Subtitle: "Please check the format of the query", Icon: "unitConvert" },
                ];
                //display item
                displayItems(Item);
                //if no error
            } else {
                //item with converted value
                let Item = [
                    { Title: value + " " + str, Subtitle: UInput, Icon: "unitConvert" },
                ];
                //displaing item
                displayItems(Item);
            }
            //displaying list
            scrollArea.style.display = "block";
            roundCorners()
        });
        //branch for currency conversion
    } else if (searchString.toLowerCase().startsWith("$? ")) {
        //running respective function to create items
        currencyConvert(searchString)
        //Unicode character lookup branch
    } else if (searchString.toLowerCase().startsWith("char ")) {
        //Unicode character lookup function to generate items
        charSearch(searchString)
    } else if (
        //branch to check if shutdown item wanted
        searchString.toLowerCase() === "shutdown"
    ) {
        //creating item for shortcut
        let Item = [{ Title: "Shutdown", Subtitle: "Shutdown  your computer", Icon: "shutdown" }]
        //creating item element
        displayItems(Item);
        //displaying item list
        scrollArea.style.display = "block";
        roundCorners();
    } else if (
        //branch to check if restart item wanted
        searchString.toLowerCase() === "restart"
    ) {
        //creating item for shortcut
        let Item = [{ Title: "Restart", Subtitle: "Restart your computer", Icon: "restart" }]
        //creating item element
        displayItems(Item);
        //displaying item list
        scrollArea.style.display = "block";
        roundCorners();
    } else if (
        //branch to check if sleep item wanted
        searchString.toLowerCase() === "sleep"
    ) {
        //creating item for shortcut
        let Item = [{ Title: "Sleep", Subtitle: "Put your computer on sleep", Icon: "sleep" }]
        //creating item element
        displayItems(Item);
        //displaying item list
        scrollArea.style.display = "block";
        roundCorners();
    } else if (
        //branch to check if hibernate item wanted
        searchString.toLowerCase() === "hibernate"
    ) {
        //creating item for shortcut
        let Item = [{ Title: "Hibernate", Subtitle: "Put your computer on hibernate", Icon: "hibernate" }]
        //creating item element
        displayItems(Item);
        //displaying item list
        scrollArea.style.display = "block";
        roundCorners();
    } else if (
        //branch to check if lock item wanted
        searchString.toLowerCase() === "lock"
    ) {
        //creating item for shortcut
        let Item = [{ Title: "Lock", Subtitle: "lock your computer", Icon: "lock" }]
        //creating item element
        displayItems(Item);
        //displaying item list
        scrollArea.style.display = "block";
        roundCorners();
    } else if (
        //branch to check if sign out item wanted
        searchString.toLowerCase() === "sign out"
    ) {
        //creating item for shortcut
        let Item = [{ Title: "Sign out", Subtitle: "Sign out from your computer", Icon: "signOut" }]
        //creating item element
        displayItems(Item);
        //displaying item list
        scrollArea.style.display = "block";
        roundCorners();
        //branch for IP or MAC address
    } else if (
        searchString.toLowerCase() === "ip" ||
        searchString.toLowerCase() === "mac"
    ) {
        //gets IP address through node module
        let IP = ip.address();
        //gets default MAC address through node module
        let MAC = getmac.default();
        //creating items
        let Items = [
            { Title: IP, Subtitle: "Your IP address", Icon: "IP" },
            { Title: MAC, Subtitle: "Your device's MAC address", Icon: "MAC" },
        ];
        //creating elements
        displayItems(Items);
        //displaying item list
        scrollArea.style.display = "block";
        //IP and MAC address shown
        roundCorners();
        //branch for powershell command
    } else if (searchString.toLowerCase().startsWith("> ")) {
        //getting command
        let command = searchString.slice(2);
        //creating item
        let Icon = [{
            Title: command,
            Subtitle: "Run command in PowerShell",
            Icon: "commandLine",
        }, ];
        //creating element
        displayItems(Icon);
        //displaing item list
        scrollArea.style.display = "block";
        //cmd command
        roundCorners();
        //branch for defining words
    } else if (searchString.toLowerCase().startsWith("def ")) {
        //loading respective function
        dictionary(searchString)
        //branch for wikipedia search
    } else if (searchString.toLowerCase().startsWith("wiki ")) {
        //get query
        let search = searchString.slice(5);
        //limit of results output
        let limit = 20;
        //fetch for API
        fetch("https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=" + search + "&limit=" + limit).then(function(resp) {
            //once response has been given
            console.log(resp);
            return resp.json()
            //get data from response
        }).then(function(data) {
            let Items = []
            //create items from all matching searches
            for (let i in data[1]) {
                //creating item object
                let Item = { Title: data[1][i], Subtitle: data[3][i], Icon: "Wikipedia" }
                Items.push(Item)
            }
            //creating item elements
            displayItems(Items);
            //displaying item list
            scrollArea.style.display = "block";
            roundCorners();
        });
        //branch for emoji search
    } else if (searchString.toLowerCase().startsWith("e? ")) {
        //getting query
        let query = searchString.slice(3);
        let Items = []
        //if there is no color to be converted
        if (query === "") {
            //show emoji picker
            //creating item
            Items = [
                { Title: "", Subtitle: "Emoji Picker Below", Icon: "Emoji" },
            ];
            //creating element
            displayItems(Items);
            //displaying item list
            scrollArea.style.display = "block";
            roundCorners()
            // if there is a query
        } else {
            //use API to get emojis that match
            EmojiData.find_by_name(query).map(
                //create items for emojis that match
                function(c) { Items.push({ "Title": c.render(), "Subtitle": c.name, "Icon": "Emoji" }) }
            );
            //sorting items
            Items = Sort(Items)
            //creating elements
            displayItems(Items);
            //displaying list
            scrollArea.style.display = "block";
            roundCorners()
        }
        //branch for web search
    } else if (searchString.toLowerCase().startsWith("? ")) {
        //get query
        let query = searchString.slice(2);
        //creating url to search for action
        let url = "https://www.bing.com/search?q=" + query;
        //item object
        let Item = [{ Title: query, Subtitle: url, Icon: "search" }];
        //item element
        displayItems(Item);
        //displaying list
        scrollArea.style.display = "block";
        //search using preferred search engine
        roundCorners();
        //branch for websites
    } else if (
        //searching for http(or https) or www address
        searchString.toLowerCase().startsWith("http") ||
        searchString.toLowerCase().startsWith("www")
    ) {
        //getting url
        let url = searchString;
        //creating item
        let Item = [{ Title: url, Subtitle: "Go to site", Icon: "search" }];
        //creating item element
        displayItems(Item);
        //displaying list
        scrollArea.style.display = "block";
        //search using preferred search engine
        roundCorners();
        //branch for calculations
    } else if (searchString.toLowerCase().startsWith("calc ")) {
        //calculating & output function
        Calculate(searchString, displayItems, roundCorners)
        //if there is an oinput without a signifier then an app is rtrying to be found
    } else if (searchString.toLowerCase() != "") {
        //search for applications passing query
        getApps(searchString, Shell, Sort, displayItems, roundCorners, assetsPath);
        //if no input
    } else {
        // hides the scroll area as user hasn't searched anything yet
        scrollArea.style.display = "none";
    }
}
