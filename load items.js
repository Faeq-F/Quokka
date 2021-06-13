const itemList = document.getElementById('itemList');
const searchBar = document.getElementById('searchBar');
const scrollArea = document.getElementById("scrollArea");
let items = [];

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  if (searchString != ''){
    scrollArea.style.display = "block";
      const filteredItems = items.filter((item) => {
        return (
            item.fullname.toLowerCase().includes(searchString) ||
            item.party.toLowerCase().includes(searchString)
        );
      })
      displayItems(filteredItems);}
  else if (searchString == 'all'){
    displayItems(items);
    scrollArea.style.display = "block";
  }
  else if (searchString == 'settings'){
    //open settings window
  }
  else if (searchString.startsWith("t?")){
    //translator
  }
  else if (searchString.startsWith("c?")){
    //color shortcuts
  }
  else if (searchString.startsWith("u?")){
    //unit shortcuts
  }
  else if (searchString.startsWith("char ")){
    //unicode character search
    /*
    list.style.display = "block";
    pathToFile = "chars.json"
    // if the path to the globals file is changed, this ensures the formatting of the path is correct
    pathToFile = pathToFile.replace(/\\/,'\\\\')
    chars = readFile(pathToFile,'utf8')
    charsForSearch = searchString.replace('char ','')
    const filteredChars = chars.filter((char) => {
      return (
          char.description.toLowerCase().includes(charsForSearch)
      );
    })
    console.log(filteredChars)
    displayItems(filteredChars);*/

  }
  else if (searchString.startsWith("kill> ")){
    //end processes
  }
  else if (searchString.startsWith("ip")||searchString.startsWith("mac")){
    //IP and MAC address shown
  }
  else if (searchString.startsWith(">")){
    //cmd command
  }
  else if (searchString.startsWith("scr")){
    //screen recorder / screen shot items
  }
  else if (searchString.startsWith("?")){
    //search using preferred search engine
  }
  else if (searchString.includes("+")||searchString.includes("-")||searchString.includes("*")||
  searchString.includes("/")||searchString.includes("^")){
    //calculate
  }
  else{
    displayItems(items);
    scrollArea.style.display = "none";
    
  }
});




//load items
const load = async () => {
    try {
        const res = await fetch('https://mysafeinfo.com/api/data?list=presidents&format=json&case=lower&token=test');
        items = await res.json();
        displayItems(items);
    } catch (err) {
        console.error(err);
    }
};

const displayItems = (items) => {
    const htmlString = items
        .map((item) => {
            return `
            <li class="item" onclick="javascript:alert('${item.fullname}')">
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
// load items func called
load();
