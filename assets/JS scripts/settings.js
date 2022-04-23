var fs = require('fs');
const path = require('path');
const Shell = require("nodejs-powershell");
//loading settings (refresh windows) function
import loadSettings from "./loadSettings.js"
//path to assets folder
let basepath = path.join(__dirname, '');
const assetsPath = basepath.slice(0, -10)
//when window loaded
$(document).ready(function() {
    //gets all collapsibles
    var elem = document.querySelectorAll(".collapsible");
    //initialises all collapsibles
    var instance = M.Collapsible.init(elem, {
        accordion: false,
    });
    //function for color pickers if user changes the color
    function onColorChange(id, value) {
        //saves settings and refreshes windows
        getInputtedSettings()
    }
    //for all color pickers
    for (var i in document.getElementsByClassName("ColorSetting ")) {
        //get their id
        let id = document.getElementsByClassName("ColorSetting ")[i].id
        //create the picker
        try {
            eval("var " + id + "CP=new Cordelia({elm: '#" + id + "',color: 'rgba(238, 165, 91, 1)',colorFormat: 'rgba',pickerStyle: 0,embed: false,size: 'small',allowOpacity: true,allowClearColor: false,showColorValue: true,showButtons: false,showPalette: false}); ")
            //event listener to trigger save function
            eval(id + "CP.el.addEventListener( 'changed', function() {onColorChange( " + id + ", " + id + "CP.get().value)}); ")
        } catch (error) {
            //never any
            //console.log("cannot set color picker for " + id)
        }
    }
    var x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
        //the selected element in dropdown
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                //for options
                for (i = 0; i < sl; i++) {
                    //if option exists
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        //get the option that is the selected
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        //remove the class
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        //set the new class
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                //click on dropdown triggers options to show
                h.click();
            });
            //adding options
            b.appendChild(c);
        }
        //adding dropdown
        x[i].appendChild(b);
        //event listener for click
        a.addEventListener("click", function(e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            //close dropdown
            closeAllSelect(this);
            //toggle clases for viewing / selecting all options
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
    //function to close dropdown
    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, xl, yl, arrNo = [];
        //get items
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        //legths of each
        xl = x.length;
        yl = y.length;
        //for every item in y
        for (i = 0; i < yl; i++) {
            //if element exists
            if (elmnt == y[i]) {
                //add to array
                arrNo.push(i)
                // if not
            } else {
                //remove the class
                y[i].classList.remove("select-arrow-active");
            }
        }
        //for every item in x
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                //add class
                x[i].classList.add("select-hide");
            }
        }
        //refresh windows and apply new settings
        getInputtedSettings()
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
    //function to save settings and refresh windows
    function getInputtedSettings() {
        //all collapsibles
        let all = document.getElementsByTagName('li')
        //settings saved
        var NewSettings = []
        //go through every collapsible
        for (let i = 0; i < all.length; i++) {
            //if the collapsible is a main one
            if (all[i].children[0].children[0].className == "levelOne") {
                //replacing bad values - not needed
                let SettingType = all[i].children[0].children[0].innerHTML.replace(/\s/g, "");
                //adding the setting type (collapsible name)
                eval("NewSettings.push({ " + SettingType + ": []})")
                //settings inside
                let settings = all[i].children[1].children
                //for every settings inside the collapsible
                for (j in settings) {
                    //if it is a form group
                    if (settings[j].className == "form__group") {
                        //get the value and id of the settings and add it to the array
                        eval("NewSettings." + Object.keys(NewSettings[NewSettings.length - 1])[0] + " = " +
                            "NewSettings[NewSettings.length - 1]." + Object.keys(NewSettings[NewSettings.length - 1])[0] +
                            ".push({" + settings[j].children[0].id + ": \"" + settings[j].children[0].value + "\"})")
                        //if the setting uses a table
                    } else if (settings[j].nodeName == 'TABLE') {
                        //goes through every row in the table
                        for (let k in settings[j].children[0].children[0].children) {
                            //going through every column
                            for (let l in settings[j].children[0].children[0].children[k].children) {
                                //if the setting in that field is a form group
                                if (settings[j].children[0].children[0].children[k].children[l].className == "form__group") {
                                    //get the value and id of the settings and add it to the array
                                    eval("NewSettings." + Object.keys(NewSettings[NewSettings.length - 1])[0] +
                                        " = " + "NewSettings[NewSettings.length - 1]." + Object.keys(NewSettings[NewSettings.length - 1])[0] +".push({" + settings[j].children[0].children[0].children[k].children[l].children[0].id +": \"" + settings[j].children[0].children[0].children[k].children[l].children[0].value + "\"})")
                                        //if the setting is a color picker
                                } else if ($("#" + settings[j].children[0].children[0].children[k].children[l].id).hasClass('ColorSetting')) {
                                    //get the value and id of the settings and add it to the array
                                    eval("NewSettings." + Object.keys(NewSettings[NewSettings.length - 1])[0] + " = " +
                                        "NewSettings[NewSettings.length - 1]." + Object.keys(NewSettings[NewSettings.length - 1])[0] +
                                        ".push({" + settings[j].children[0].children[0].children[k].children[l].id + ": \"" +
                                        settings[j].children[0].children[0].children[k].children[l].children[0].style.background + "\"})")
                                        //if setting is a dropdown menu
                                } else if (settings[j].children[0].children[0].children[k].children[l].className == "custom-select") {
                                    //get the value and id of the settings and add it to the array
                                    eval("NewSettings." + Object.keys(NewSettings[NewSettings.length - 1])[0] + " = " +
                                        "NewSettings[NewSettings.length - 1]." + Object.keys(NewSettings[NewSettings.length - 1])[0] +
                                        ".push({" + settings[j].children[0].children[0].children[k].children[l].id + ": \"" +
                                        settings[j].children[0].children[0].children[k].children[l].children[1].innerHTML + "\"})")
                                }
                            }
                        }
                    }
                }
                //if the collapsible is nested (different structure)
            } else if (all[i].children[0].children[0].className == "levelTwo") {
                //name of level two collapsible
                let SettingType = all[i].children[0].children[0].innerHTML.replace(/\s/g, "");
                //adding them to the array
                eval("NewSettings." + Object.keys(NewSettings[NewSettings.length - 1])[0] + " = " +
                        "NewSettings[NewSettings.length - 1]." + Object.keys(NewSettings[NewSettings.length - 1])[0] +
                        ".push({" + SettingType + ": []})")
                //settings inside the collapsibles
                let settings = all[i].children[1].children
                //going through all settings
                for (j in settings) {
                    //if the setting is a form group
                    if (settings[j].className == "form__group") {
                        //get area where the setting needs to be written in current collapsible values
                        let PreSet = eval("NewSettings[NewSettings.length - 1]." + Object.keys(NewSettings[NewSettings.length - 1])[0] + ".length-1")
                        //get the collapsible the current one is nested in
                        let lastLevel = eval("NewSettings[NewSettings.length - 1]." + Object.keys(NewSettings[NewSettings.length - 1])[0])[PreSet]
                        //write the setting to the correct area
                        eval("lastLevel." + Object.keys(lastLevel) + ".push({" + settings[j].children[0].id + ": \"" + settings[j].children[0].value + "\"})")
                        //if the setting uses a table
                    } else if (settings[j].nodeName == 'TABLE') {
                        //get area where the setting needs to be written in current collapsible values
                        let PreSet = eval("NewSettings[NewSettings.length - 1]." + Object.keys(NewSettings[NewSettings.length - 1])[0] + ".length-1")
                        //get the collapsible the current one is nested in
                        let lastLevel = eval("NewSettings[NewSettings.length - 1]." + Object.keys(NewSettings[NewSettings.length - 1])[0])[PreSet]
                        //going through every row in the table
                        for (let k in settings[j].children[0].children) {
                            //going through every column
                            for (let l in settings[j].children[0].children[k].children) {
                                //going through every setting in the fields
                                for (let m in settings[j].children[0].children[k].children[l].children) {
                                    //checks if the setting is a form group
                                    if (settings[j].children[0].children[k].children[l].children[m].className == "form__group") {
                                        //get the value and id of the settings and add it to the array
                                        eval("lastLevel." + Object.keys(lastLevel) +
                                            ".push({" + settings[j].children[0].children[k].children[l].children[m].children[0].id +": \"" + settings[j].children[0].children[k].children[l].children[m].children[0].value + "\"})")
                                        //if the setting is a color picker
                                    } else if ($("#" + settings[j].children[0].children[k].children[l].children[m].id).hasClass('ColorSetting')) {
                                        //get the value and id of the settings and add it to the array
                                        eval("lastLevel." + Object.keys(lastLevel) +".push({" + settings[j].children[0].children[k].children[l].children[m].id + ": \"" +
                                            settings[j].children[0].children[k].children[l].children[m].children[0].style.background + "\"})")
                                        //if the setting is a dropdown
                                    } else if (settings[j].children[0].children[k].children[l].children[m].className == "custom-select") {eval("lastLevel." + Object.keys(lastLevel) +".push({" + settings[j].children[0].children[k].children[l].children[m].id + ": \"" + settings[j].children[0].children[k].children[l].children[m].children[1].innerHTML + "\"})")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        //adds the custom value to the theme collapsible values
        NewSettings[0].Themes.push("Custom")
        //turns the array into JSON and saves it to a file
        fs.writeFile(assetsPath + "/JSON data/CustomSettings.json", JSON.stringify(NewSettings), function(err) {
            //error handler
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
            console.log(NewSettings)
        });
        //updates all windows to apply settings
        loadSettings()
    }
    //event listener to check if deafult theme button has been clicked
    document.getElementById("DefaultTheme").addEventListener("click", function() {
        //modifies the current theme file to store default so that it can load
        fs.writeFile(assetsPath + "/JSON data/CurrentTheme.json", "[{\"Theme\": \"default\"}]", function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        })

    })
    //event listener to check if the blue and purple theme button has been clicked
    document.getElementById("BluePurpleTheme").addEventListener("click", function() {
        //modifies the current theme file to store blue and purple so that it can load
        fs.writeFile(assetsPath + "/JSON data/CurrentTheme.json", "[{\"Theme\": \"blue&purple\"}]", function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        })

    })
    //event listener to check if the custom theme button has been clicked
    document.getElementById("CustomTheme").addEventListener("click", function() {
        //modifies the current theme file to store custom so that it can load
        fs.writeFile(assetsPath + "/JSON data/CurrentTheme.json", "[{\"Theme\": \"custom\"}]", function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        })

    })
    //whenever there is a key press, save new settings
    document.addEventListener("keyup", (event) => {
        getInputtedSettings()

    });
    //gets refresh portable apps button
    const RefreshPortableAppsButton = document.querySelector("#RefreshPortableApps");
    //adds event listener to refresh the index
    RefreshPortableAppsButton.addEventListener("click", function() {
        //shell to run python script
        const RefreshShell = new Shell({
            executionPolicy: "Bypass",
            noProfile: true,
        });
        //command to run script
        let command = assetsPath.replace(/\\/g, '/') + "Python` scripts/RefreshPortableApps.exe F:\\Computer-Resources\\PortableApps\\ " + assetsPath.replace(/\\/g, '/') + "JSON data/PortableApps.json"
        //adding command to pipeline
        RefreshShell.addCommand(command);
        //starts command
        RefreshShell.invoke()
            .then(function(output) {
                //if there is an output, log to console
                console.log(output);
            })
            .catch((error) => {
                //if there is an error, log to console - There should never be any
                console.log(error);
            });
    });
});
