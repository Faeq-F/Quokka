//function to sleep - used for wait to ensure settings have been saved before refreshing windows
let sleep = ms => {
    //uses a promise to resolve - timed
    return new Promise(resolve => setTimeout(resolve, ms));
};
//function to load settings - refresh windows
function LoadSettings(theme, CSSroot) {
    //traversing JSON settings
    var ids = [];
    for (let i in theme) {
        for (let j in theme[i]) {
            //getting settings in first layer of collapsibles
            for (let k in theme[i][j]) {
                for (var l in theme[i][j][k]) {
                    //adding settings to array
                    ids.push([l, theme[i][j][k][l]])
                }
            }
        }
    }
    //removing the 6 fisrt layer collapsibles to look through
    ids = ids.slice(6)
    for (let i in ids) {
        if (Array.isArray(ids[i][1])) {
            //traversing again but ensuring that any JSON within the 2nd layer is turned to an array
            for (let j in ids[i][1]) {
                for (var l in ids[i][1][j]) {
                    //adding settings to array
                    ids.push([l, ids[i][1][j][l]])
                }
            }
        }
    }
    //loading all CSS attributes
    for (let i in ids) {
        //check if value is not array as the array have already been converted above
        if (!Array.isArray(ids[i][1])) {
            //loading attribute
            try {
                //setting value as root property
                eval("CSSroot.style.setProperty('--" + ids[i][0] + "','" + ids[i][1] + "')")
            } catch (error) {
                console.log(error)
            }
        }
    }
}
//function to load the right file
export default function loadSettings() {
    //waits a second to allow settings file to save
    sleep(1000).then(() => {
        //loads file to check the current theme set
        let CurrentTheme = require('../JSON data/CurrentTheme.json');
        // gets the root of the css file to be able to make the style modifications
        var CSSroot = document.querySelector(':root');
        //checking theme
        if (CurrentTheme[0].Theme == "default") {
            //loading default theme
            let theme = require('../JSON data/DefaultTheme.json')
            //passes deafult theme
            LoadSettings(theme, CSSroot)
        } else if (CurrentTheme[0].Theme == "blue&purple") {
            //loading blue and purple theme
            let theme = require('../JSON data/Blue&Purple.json')
            //pases blue theme
            LoadSettings(theme, CSSroot)
        } else {
            //loading custom theme
            let theme = require('../JSON data/CustomSettings.json')
            //passes custom theme
            LoadSettings(theme, CSSroot)
        }
    })

}
