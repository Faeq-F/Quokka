//Node JS modules
const Shell = require("nodejs-powershell");
// My modules
import Features from './Features.js';
//get HTML elements
const searchBar = document.getElementById("searchBar");
//checks if the user is typing in the searchBar
searchBar.addEventListener("keyup", async(e) => {
    //if so, ends any possible previous inputs by closing all powershell instances
    //creates PS shell
    const Endps = new Shell({
        executionPolicy: "Bypass",
        noProfile: true,
    });
    //command to kill electron generated PS instances
    Endps.addCommand(
        "taskkill /f /im powershell.exe"
    );
    //starts command
    Endps.invoke()
        .then(function(output) {
            //end this shell
            Endps.dispose();
            //creates output
            Features(e.target.value)
            //adds focus back onto the searchbar so user can continue to type if needed
            document.getElementById("searchBar").focus();
        })
});
