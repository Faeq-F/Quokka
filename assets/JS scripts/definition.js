import displayItems from "./display items.js";
import roundCorners from "./round corners.js";
import Sort from "./Sort.js";

export default function dictionary(searchString) {
    //getting word to define
    let word = searchString.slice(4);
    //XML request for API
    var request = new XMLHttpRequest();
    //creating request
    request.open(
        "GET",
        "https://api.dictionaryapi.dev/api/v2/entries/en_GB/" + word,
        true
    );
    //once request response
    request.onload = function() {
        //Begin accessing JSON data here
        var data = JSON.parse(this.response);
        //if different status then HTTP error
        if (request.status >= 200 && request.status < 400) {
            //items array
            let Items = [];
            //going through all items
            data.forEach((i) => {
                //going through all definitions of word
                i.meanings.forEach((j) => {
                    //creating items
                    let Item = {
                        Title: "(" + j.partOfSpeech + ") " + j.definitions[0].definition,
                        Subtitle: "e.g. " + j.definitions[0].example,
                        Icon: "dictionary",
                    };
                    //adding to final array
                    Items.push(Item);
                });
            });
            //soring items using insertion
            Items = Sort(Items)
            //creating irtem elements
            displayItems(Items);
            //displaying item list
            scrollArea.style.display = "block";
            roundCorners()
            //status is HTTP error
        } else {
            console.log("error for dictionary");
            //item - validation
            let Item = [{
                Title: "Invalid search",
                Subtitle: "Please check the spelling of the word",
                Icon: "dictionary",
            }];
            //creating item element
            displayItems(Item);
            //displaying item list
            scrollArea.style.display = "block";
            roundCorners()
        }
    };
    //sending request
    request.send();
}
