//color convert API
var convert = require("color-convert");
//function to generate all items from color space list
function ItemListGeneration(OriginalFormat, colorSearched) {
    let Items = [];
    //color spaces order
    let colorSpaces = ["keyword", "hex", "rgb", "cmyk", "hsl", "hsv", "hwb", "hcg", "xyz", "lab", "lch", "gray", "apple", "ansi16", "ansi256"]
    //creating an item for every color space
    for (var i in colorSpaces) {
        //creating items using API
        try {
            let Item = {
                Title: eval("convert." + OriginalFormat + "." + colorSpaces[i] + "(colorSearched)"),
                Subtitle: "Color from " + OriginalFormat + " to " + colorSpaces[i],
                Icon: "Color",
            }
            Items.push(Item)
        } catch (error) {
            //error if input does not match any color spaces
            let Item = {
                Title: colorSearched,
                Subtitle: "Color from " + OriginalFormat + " to " + colorSpaces[i],
                Icon: "Color",
            }
            Items.push(Item)
        }

    }
    //return items for display
    return Items
}
//default function - parses input
export default function ColorConversion(UInput) {
    var OriginalFormat
    //parsing by color space name length
    //length of 3
    if (
        UInput.startsWith("rgb") ||
        UInput.startsWith("hsl") ||
        UInput.startsWith("hsv") ||
        UInput.startsWith("hwb") ||
        UInput.startsWith("hex") ||
        UInput.startsWith("xyz") ||
        UInput.startsWith("lab") ||
        UInput.startsWith("lch") ||
        UInput.startsWith("hcg") ||
        UInput.startsWith("css")
    ) {
        //getting the original format
        OriginalFormat = UInput.substring(0, 3);
        var colorSearched;
        //getting the color to be converted
        try {
            colorSearched = eval(UInput.slice(4));
        } catch (error) {
            colorSearched = UInput.slice(4);
        }
        //generating the items from this input
        let items = ItemListGeneration(OriginalFormat, colorSearched)
        //returning items to be displayed
        return items
        //length of 4
    } else if (UInput.startsWith("cmyk ") || UInput.startsWith("gray ")) {
        //getting the original format
        OriginalFormat = UInput.substring(0, 4);
        var colorSearched;
        //getting the color to be converted
        try {
            colorSearched = eval(UInput.slice(5));
        } catch (error) {
            colorSearched = UInput.slice(5);
        }
        //generating the items from this input
        let items = ItemListGeneration(OriginalFormat, colorSearched)
        //returning items to be displayed
        return items
        //length of 5
    } else if (UInput.startsWith("apple ")) {
        //getting the original format
        OriginalFormat = UInput.substring(0, 5);
        var colorSearched;
        //getting the color to be converted
        try {
            colorSearched = eval(UInput.slice(6));
        } catch (error) {
            colorSearched = UInput.slice(6);
        }
        //generating the items from this input
        let items = ItemListGeneration(OriginalFormat, colorSearched)
        //returning items to be displayed
        return items
        //length of 6
    } else if (UInput.startsWith("ansi16 ")) {
        //getting the original format
        OriginalFormat = UInput.substring(0, 6);
        var colorSearched;
        //getting the color to be converted
        try {
            colorSearched = eval(UInput.slice(7));
        } catch (error) {
            colorSearched = UInput.slice(7);
        }
        //generating the items from this input
        let items = ItemListGeneration(OriginalFormat, colorSearched)
        //returning items to be displayed
        return items
        //length of 7
    } else if (UInput.startsWith("ansi256 ")) {
        //getting the original format
        OriginalFormat = UInput.substring(0, 7);
        var colorSearched;
        //getting the color to be converted
        try {
            colorSearched = eval(UInput.slice(8));
        } catch (error) {
            colorSearched = UInput.slice(8);
        }
        //generating the items from this input
        let items = ItemListGeneration(OriginalFormat, colorSearched)
        //returning items to be displayed
        return items
    } else {
        // if a color space has not been given, the color cannot be converted - validation
        let Item = [{
            Title: "Invalid color or unsupported color space",
            Subtitle: "Invalid color conversion command",
            Icon: "Color",
        }, ];
        //returning items to be displayed
        return Item;
    }
}
