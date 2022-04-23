export default function fileSearch(searchString, Shell, assetsPath, displayItems, roundCorners){
    //removes the command signifier so search input can be passed to SDK
    let charsForSearch = searchString.slice(3);
    //PS for interaction with Everything SDK
    const ps = new Shell({
        executionPolicy: "Bypass",
        noProfile: true,
    });
    //command to search using python file with SDK (params are the user input and location of the python file)
    let command = assetsPath + 'Python` scripts\\EverythingSearch.exe ' + '"' +
        charsForSearch +
        '" "E:\\Quokka\\assets\\Python scripts"'
    //add command to pipeline
    ps.addCommand(command);
    //run the command
    ps.invoke()
        .then(function(output) {
            //once there is an output, parse it into a JSON object and display it onscreen
            /*exe not working*/
            console.log(output)
            //create elements from the parsed output
            displayItems(JSON.parse(output));
            //display item list
            scrollArea.style.display = "block";
            roundCorners();
        })
        // if there is an error from python script
        .catch((error) => {
            /*Proper command not given in search field or python will output it's own error in a separate window*/
            console.log(error)
            //create item object
            let Item = [{ Title: "No files", Subtitle: "or invalid search terms", Icon: "File" }]
            //create elements
            displayItems(Item);
            //display elements & list
            scrollArea.style.display = "block";
            roundCorners();
        });
    //adds focus back onto the searchbar so user can continue to type if needed
    document.getElementById("searchBar").focus();
}
