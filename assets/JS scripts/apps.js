export default function getApps(search, Shell, Sort, displayItems, roundCorners, assetsPath) {
    //Shell to run PS1 file - get all apps on system
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
            //removes bad/unknown characters
            output = output.replace(/@/g, "");
            output = output.replace(/�/g, "");
            output = output.replace(/"/g, "\"");
            //Parse into JSON
            let data = JSON.parse(output).ALL;
            //JSON that will end up being displayed
            var OutData = [];
            //going through all apps
            Object.keys(data).forEach((key) => {
                let individualList = data[key];
                Object.keys(individualList).forEach((key) => {
                    //seperating apps
                    let i = individualList[key];
                    i = i.split(";");
                    //replacing attribute names
                    for (let j = 0; j in i; j++) {
                        i[j] = i[j].replace(/{ShortcutName=/g, "");
                        i[j] = i[j].replace(/}/g, "");
                        i[j] = i[j].replace(/ LinkTarget=/g, "");
                        i[j] = i[j].replace(/{Name=/g, "");
                    }
                    // if there isn't a second item then the app is a control panel item
                    if (i[1] === undefined) {
                        i[1] = 'Show-ControlPanelItem "' + i[0] + '"';
                    }
                    //Only Installed apps have .lnk
                    if (i[0].endsWith(".lnk")) {
                        i[2] = "AppLnk";
                    }
                    //Sets control panel item icons
                    if (i[1].startsWith("Show-ControlPanelItem")) {
                        i[2] = "ControlPanelItem";
                    }
                    //Only UWP apps have "display name"
                    if (i[0].startsWith("{DisplayName=")) {
                        i[1] = "Open UWP app";
                        i[2] = "UWP";
                    }
                    //goes through all UWP and removes attribute name
                    for (let j = 0; j in i; j++) {
                        i[j] = i[j].replace(/{DisplayName=/g, "");
                    }
                    //Forming the final JSON object
                    let keyValue = { Title: i[0], Subtitle: i[1], Icon: i[2] };
                    OutData.push(keyValue);
                });
            });
            //If there is no query then the user is loading all apps - no need to filter
            if (search === "") {
                //sorting apps using insertion sort
                OutData = Sort(OutData)
                //displaying items
                displayItems(OutData);
                //showing the item list
                scrollArea.style.display = "block";
                roundCorners();

            } else {
                //there is an app query - apps need to be filtered to match
                let filteredItems = OutData.filter(
                    //filter looks through the Title and Subtitle
                    ({ Title, Subtitle }) =>
                    //Checking if either includes the query
                    Title.toLowerCase().includes(search) ||
                    Subtitle.toLowerCase().includes(search)
                );
                //sorting filtered apps using insertion sort
                filteredItems = Sort(filteredItems)
                //displaying items
                displayItems(filteredItems);
                //showing item list
                scrollArea.style.display = "block";
                roundCorners();

            }
        })
        //if there is an error from the ps1 script:
        .catch((error) => {
            console.log(error);
            //Shows no matching apps item - validation
            let Item = { Title: "No apps", Subtitle: "or invalid search term", Icon: "UWP" }
            //displaying
            displayItems(Item);
            scrollArea.style.display = "block";
            roundCorners();
        });
}
