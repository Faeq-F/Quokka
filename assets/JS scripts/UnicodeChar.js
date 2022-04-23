const Shell = require("nodejs-powershell");
const path = require('path');
// new folder absolute path
let basepath = path.join(__dirname, '');
const assetsPath = basepath.slice(0, -10)
//my modules
import roundCorners from "./round corners.js";
import displayItems from "./display items.js";
import Sort from "./Sort.js";
//function for character lookup
export default function charSearch (searchString) {
    // remove command signifier from user input
    let charsForSearch = searchString.slice(5);
    //command for searching unicode UTF-8 for characters
    let command = assetsPath + 'Python` scripts\\unicode.exe ' + charsForSearch;
    //shell to execute command
    const ps = new Shell({
        executionPolicy: "Bypass",
        noProfile: true,
    });
    //adding command to pipeline
    ps.addCommand(command);
    //starts command
    ps.invoke()
        .then(function(output) {
            //parses output into JSON object and shows the results to user
            let Items = JSON.parse(output)
            //sorts items
            Items = Sort(Items)
            //creates item elements
            displayItems(Items);
            //displaying item list
            scrollArea.style.display = "block";
            roundCorners();
        })
        //error handler
        .catch((error) => {
            /*Proper command not given in search field or python will output it's own error in a separate window*/
            let Item = [{ Title: "No characters", Subtitle: "or invalid search terms", Icon: "char" }]
            //creating element
            displayItems(Item);
            //displaying item list
            scrollArea.style.display = "block";
            roundCorners();
        });
}
