const scrollArea = document.getElementById("scrollArea");
const itemList = document.getElementById('itemList');
const searchBar = document.getElementById('searchBar');
let items = [];



// This function will output the lines from the script
// and will return the full combined output
// as well as exit code when it's done (using the callback).
function run_script(command, args, callback) {
    var child = child_process.spawn(command, args, {
        encoding: 'utf8',
        shell: true
    });
    // You can also use a variable to save the output for when the script closes later
    child.on('error', (error) => {
        dialog.showMessageBox({
            title: 'Title',
            type: 'warning',
            message: 'Error occurred.\r\n' + error
        });
    });

    child.stdout.setEncoding('utf8');
    child.stdout.on('data', (data) => {
        //Here is the output
        data=data.toString();
        console.log(data);
    });

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', (data) => {
        // Return some data to the renderer process with the mainprocess-response ID
        mainWindow.webContents.send('mainprocess-response', data);
        //Here is the output from the command
        console.log(data);
    });

    child.on('close', (code) => {
        //Here you can get the exit code of the script
        switch (code) {
            case 0:
                dialog.showMessageBox({
                    title: 'Title',
                    type: 'info',
                    message: 'End process.\r\n'
                });
                break;
        }

    });
    if (typeof callback === 'function')
        callback();
}
//run_script("python \"C:\\Users\\faeqf_000\\Downloads\\unicode.py\"", ["/Epsilon"], null);

function roundCorners(){
  var itemNodes = document.getElementsByTagName("li");
  if (itemNodes.length < 4){

    itemNodes[itemNodes.length-1].style.cssText = "border-bottom-left-radius: 15px;border-bottom-right-radius: 15px;";
  }
  else{
    itemNodes[itemNodes.length-1].style.cssText = "border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;";
  }
}

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  if (searchString == 'all'){
    scrollArea.style.display = "block";
    const displayItems = (items) => {
      const htmlString = items
          .map((item) => {
              return `
              <li class="item" id='${item.id}' onclick="javascript:alert('${item.fullname}')">
                  <h1>${item.fullname}</h1>
                  <h3>Party: ${item.party}</h3>
                  <p>${item.terms}</p>
                  <h5 style='color: #bbbbbb;text-align: center;'>____________________________________________________________</h5>
              </li>
          `;

          })
          .join('');
      itemList.innerHTML = htmlString;
    };
    displayItems(items);
    roundCorners()
  }
  else if (searchString == 'settings'){
    //open settings window
   roundCorners()
  }
  else if (searchString.startsWith("f?")){
    //search for files and folders
    roundCorners()
  }
  else if (searchString.startsWith("t?")){
    //translator
    roundCorners()
  }
  else if (searchString.startsWith("c?")){
    //color shortcuts
    roundCorners()
  }
  else if (searchString.startsWith("u?")){
    //unit shortcuts
    roundCorners()
  }
  else if (searchString.startsWith("char ")){
    //unicode character search
    list.style.display = "block";
    // get chars somehow
    console.log(allChars)
    /*charsForSearch = searchString.replace('char ','')
    const filteredChars = allChars.filter((char) => {
      return (
          char.description.toLowerCase().includes(charsForSearch)
      );
    })
    console.log(filteredChars)*/
    //display items
    roundCorners()
  }
  else if (searchString.startsWith("kill> ")){
    //end processes
    roundCorners()
  }
  else if (searchString.startsWith("ip")||searchString.startsWith("mac")){
    //IP and MAC address shown
    roundCorners()
  }
  else if (searchString.startsWith(">")){
    //cmd command
    roundCorners()
  }
  else if (searchString.startsWith("scr")){
    //screen recorder / screen shot items
    roundCorners()
  }
  else if (searchString.startsWith("?")){
    //search using preferred search engine
    roundCorners()
  }
  else if (searchString.includes("+")||searchString.includes("-")||searchString.includes("*")||
  searchString.includes("/")||searchString.includes("^")){
    //calculate
  }
  else if (searchString != ''){
    scrollArea.style.display = "block";
    const filteredItems = items.filter((item) => {
      return (
          item.fullname.toLowerCase().includes(searchString) ||
          item.party.toLowerCase().includes(searchString)
      );
    })
    const displayItems = (items) => {
      const htmlString = items
          .map((item) => {
              return `
              <li class="item" id='${item.id}' onclick="javascript:alert('${item.fullname}')">
                  <h1>${item.fullname}</h1>
                  <h3>Party: ${item.party}</h3>
                  <p>${item.terms}</p>
                  <h5 style='color: #bbbbbb;text-align: center;'>____________________________________________________________</h5>
              </li>
          `;

          })
          .join('');
      itemList.innerHTML = htmlString;
    };
    displayItems(filteredItems);
    roundCorners()
  }
  else {
    // refreshes for next filter (needed as logical errors were found without this)
    const displayItems = (items) => {
      const htmlString = items
          .map((item) => {
              return `
              <li class="item" id='${item.id}' onclick="javascript:alert('${item.fullname}')">
                  <h1>${item.fullname}</h1>
                  <h3>Party: ${item.party}</h3>
                  <p>${item.terms}</p>
                  <h5 style='color: #bbbbbb;text-align: center;'>____________________________________________________________</h5>
              </li>
          `;

          })
          .join('');
      itemList.innerHTML = htmlString;
    };
    displayItems(items)
    // hides the scroll area as user hasn't searched anything yet - (no need to round items obviously)
    scrollArea.style.display = "none";
  }
});



//load items
const load = async () => {
    try {
        const presidentItems = await fetch('https://mysafeinfo.com/api/data?list=presidents&format=json&case=lower&token=test');
        items = await presidentItems.json();
        const chars = await fetch("./chars.json");
        allChars = await chars.json();
        console.log(allChars)
    } catch (err) {
        console.error(err);
    }
};

// load items func called
load();
