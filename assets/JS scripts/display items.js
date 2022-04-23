const itemList = document.getElementById("itemList");
//emoji picker module
import { EmojiButton } from '../../node_modules/@joeattardi/emoji-button/dist/index.js';
//display items once JSON item list has been parsed
export default async function displayItems(items) {
    //wipe the list (on the webpage) of it's current items
    itemList.innerHTML = "";
    //iterate through every item
    for (var i = 0; i < items.length; ++i) {
        //create a list element inside the list
        var li = document.createElement("li");
        //getting icon of item
        let Icon = '../Icons/ItemTypes/' + `${items[i].Icon}` + ".png";
        //adding any necessary styling
        let style = ""
        //revert styling on emojis and UNICODE characters to display properly
        if (items[i].Icon === "char" || items[i].Icon === "Emoji") {
            style = "all: revert; vertical-align: bottom; margin: 0;"
        }
        //make the item have the following elements: (flexbox with Icon in one column and the title and subtitle in another in two separate rows)
        li.innerHTML = `
            <li class="item" data-scroll>
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
    //if there are no emoji items and the emoji cpommand signifier is inputted, load emoji picker
    if (items[0].Icon == "Emoji" && items[0].Subtitle == "Emoji Picker Below") {
        //create a list element inside the list
        var li = document.createElement("li");
        //make the item have the following elements: (flexbox with Icon in one column and the title and emoji picker in another in two separate rows)
        li.innerHTML = `
            <li class="item" data-scroll>
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
                            <button id="emoji-trigger">Click me to open Emoji Picker</button>

                        </div>
                        <div class="secondItem">
                        <br>
                        <h3>Emoji Picker</h3>

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
        //picker object
        let picker = new EmojiButton();
        //getting where the picker should be
        let trigger = document.getElementById("emoji-trigger");
        //setting action of picking emoji
        picker.on('emoji', selection => {
            //replaces picker text with picked emoji
            trigger.innerHTML = selection.emoji;
        });
        //event listener to trigger picker
        trigger.addEventListener('click', () => picker.togglePicker(trigger));
    }
    //if there are color items, add a color picker to the end
    if (items[0].Icon == "Color") {
        //create a list element inside the list
        var li = document.createElement("li");
        //make the item have the following elements: (flexbox with Icon in one column and the title and color picker in another in two separate rows)
        li.innerHTML = `
            <li class="item" data-scroll>
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
                            <h3>Color Picker</h3>
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
        //going through all color items
        for (var i in document.getElementsByClassName("ColorSetting ")) {
            //getting the id of every color item
            let id = document.getElementsByClassName("ColorSetting ")[i].id
            //if the item does have an id it is for a color picker at the end of converted colors
            if (!(items[1] === undefined)) {
                //creating color picker element with attributes wanted
                eval("var " + id + "CP=new Cordelia({elm: '#" + id + "',color: '#" + items[1].Title + "',colorFormat: 'hex',pickerStyle: 0,embed: true,size: 'small',allowOpacity: true,allowClearColor: false,showColorValue: true,showButtons: false,showPalette: false}); ")
                //setting event listener on the picker to be able to get the pickers value when the user changes it
                eval(id + "CP.el.addEventListener( 'changed', function() {onColorChange( " + id + ", " + id + "CP.get().value)}); ")
                //color picker for end of list without any converted colors (errors or no user input)
            } else {
                //creating color picker element with attributes wanted - default color is white
                eval("var " + id + "CP=new Cordelia({elm: '#" + id + "',color: '#FFFFFF',colorFormat: 'hex',pickerStyle: 0,embed: true,size: 'small',allowOpacity: true,allowClearColor: false,showColorValue: true,showButtons: false,showPalette: false}); ")
                //setting event listener on the picker to be able to get the pickers value when the user changes it
                eval(id + "CP.el.addEventListener( 'changed', function() {onColorChange( " + id + ", " + id + "CP.get().value)}); ")
            }
        }
    }


};
