var convert = require("color-convert");

function ItemListGeneration(OriginalFormat, colorSearched) {
    let Items = [];
    let colorSpaces = ["keyword", "hex", "rgb", "cmyk", "hsl", "hsv", "hwb", "hcg", "xyz", "lab", "lch", "gray", "apple", "ansi16", "ansi256"]
    for (var i in colorSpaces) {
        try {
            let Item = {
                Title: eval("convert." + OriginalFormat + "." + colorSpaces[i] + "(colorSearched)"),
                Subtitle: "Color from " + OriginalFormat + " to " + colorSpaces[i],
                Icon: "Color",
            }
            Items.push(Item)
        } catch (error) {
            let Item = {
                Title: colorSearched,
                Subtitle: "Color from " + OriginalFormat + " to " + colorSpaces[i],
                Icon: "Color",
            }
            Items.push(Item)
        }

    }
    return Items
}
export default function ColorConversion(UInput) {
    var OriginalFormat
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
        OriginalFormat = UInput.substring(0, 3);
        var colorSearched;
        try {
            colorSearched = eval(UInput.slice(4));
        } catch (error) {
            colorSearched = UInput.slice(4);
        }
        let items = ItemListGeneration(OriginalFormat, colorSearched)
        return items

    } else if (UInput.startsWith("cmyk ") || UInput.startsWith("gray ")) {
        OriginalFormat = UInput.substring(0, 4);
        var colorSearched;
        try {
            colorSearched = eval(UInput.slice(5));
        } catch (error) {
            colorSearched = UInput.slice(5);
        }
        let items = ItemListGeneration(OriginalFormat, colorSearched)
        return items
    } else if (UInput.startsWith("apple ")) {
        OriginalFormat = UInput.substring(0, 5);
        var colorSearched;
        try {
            colorSearched = eval(UInput.slice(6));
        } catch (error) {
            colorSearched = UInput.slice(6);
        }
        let items = ItemListGeneration(OriginalFormat, colorSearched)
        return items

    } else if (UInput.startsWith("ansi16 ")) {
        OriginalFormat = UInput.substring(0, 6);
        var colorSearched;
        try {
            colorSearched = eval(UInput.slice(7));
        } catch (error) {
            colorSearched = UInput.slice(7);
        }
        let items = ItemListGeneration(OriginalFormat, colorSearched)
        return items
    } else if (UInput.startsWith("ansi256 ")) {
        OriginalFormat = UInput.substring(0, 7);
        var colorSearched;
        try {
            colorSearched = eval(UInput.slice(8));
        } catch (error) {
            colorSearched = UInput.slice(8);
        }
        let items = ItemListGeneration(OriginalFormat, colorSearched)
        return items
    } else {
        let Item = [{
            Title: "Invalid color or unsupported color space",
            Subtitle: "Invalid color conversion command",
            Icon: "Color",
        }, ];
        return Item;
    }
}
