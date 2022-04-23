import displayItems from './display items.js';
import roundCorners from './round corners.js';
//google translate API
const translate = require('translate-google')
//generated from google translate site
let codes = [
    ["Afrikaans", "af"],
    ["Albanian", "sq"],
    ["Amharic", "am"],
    ["Arabic", "ar"],
    ["Armenian", "hy"],
    ["Azerbaijani", "az"],
    ["Basque", "eu"],
    ["Belarusian", "be"],
    ["Bengali", "bn"],
    ["Bosnian", "bs"],
    ["Bulgarian", "bg"],
    ["Catalan", "ca"],
    ["Cebuano", "ceb"],
    ["Chinese(Simplified)", "zh"],
    ["Corsican", "co"],
    ["Croatian", "hr"],
    ["Czech", "cs"],
    ["Danish", "da"],
    ["Dutch", "nl"],
    ["English", "en"],
    ["Esperanto", "eo"],
    ["Estonian", "et"],
    ["Finnish", "fi"],
    ["French", "fr"],
    ["Frisian", "fy"],
    ["Galician", "gl"],
    ["Georgian", "ka"],
    ["German", "de"],
    ["Greek", "el"],
    ["Gujarati", "gu"],
    ["Haitian Creole", "ht"],
    ["Hausa", "ha"],
    ["Hebrew", "he"],
    ["Hebrew", "iw"],
    ["Hindi", "hi"],
    ["Hungarian", "hu"],
    ["Icelandic", "is"],
    ["Igbo", "ig"],
    ["Indonesian", "id"],
    ["Irish", "ga"],
    ["Italian", "it"],
    ["Japanese", "ja"],
    ["Javanese", "jv"],
    ["Kannada", "kn"],
    ["Kazakh", "kk"],
    ["Khmer", "km"],
    ["Kinyarwanda", "rw"],
    ["Korean", "ko"],
    ["Kurdish", "ku"],
    ["Kyrgyz", "ky"],
    ["Lao", "lo"],
    ["Latvian", "lv"],
    ["Lithuanian", "lt"],
    ["Luxembourgish", "lb"],
    ["Macedonian", "mk"],
    ["Malagasy", "mg"],
    ["Malay", "ms"],
    ["Malayalam", "ml"],
    ["Maltese", "mt"],
    ["Maori", "mi"],
    ["Marathi", "mr"],
    ["Mongolian", "mn"],
    ["Myanmar(Burmese)", "my"],
    ["Nepali", "ne"],
    ["Norwegian", "no"],
    ["Nyanja(Chichewa)", "ny"],
    ["Odia(Oriya)", "or"],
    ["Pashto", "ps"],
    ["Persian", "fa"],
    ["Polish", "pl"],
    ["Portuguese(Portugal, Brazil)", "pt"],
    ["Punjabi", "pa"],
    ["Romanian", "ro"],
    ["Russian", "ru"],
    ["Samoan", "sm"],
    ["Scots Gaelic", "gd"],
    ["Serbian", "sr"],
    ["Sesotho", "st"],
    ["Shona", "sn"],
    ["Sindhi", "sd"],
    ["Sinhala(Sinhalese)", "si"],
    ["Slovak", "sk"],
    ["Slovenian", "sl"],
    ["Somali", "so"],
    ["Spanish", "es"],
    ["Sundanese", "su"],
    ["Swahili", "sw"],
    ["Swedish", "sv"],
    ["Tagalog(Filipino)", "tl"],
    ["Tajik", "tg"],
    ["Tamil", "ta"],
    ["Tatar", "tt"],
    ["Telugu", "te"],
    ["Thai", "th"],
    ["Turkish", "tr"],
    ["Turkmen", "tk"],
    ["Ukrainian", "uk"],
    ["Urdu", "ur"],
    ["Uyghur", "ug"],
    ["Uzbek", "uz"],
    ["Vietnamese", "vi"],
    ["Welsh", "cy"],
    ["Xhosa", "xh"],
    ["Yiddish", "yi"],
    ["Yoruba", "yo"],
    ["Zulu", "zu"]
]
//function to translate
export default function translator(searchString) {
    //gets users query
    let UInput = searchString.slice(3);
    //gets the original language the input was in (can auto detect)
    let ogLang = UInput.substring(0, 2).toLowerCase();
    //gets language the user wants to translate it into
    let toLang = UInput.substring(3, 5).toLowerCase();
    //gets the text to translate
    let TransText = UInput.slice(6);
    //uses API to translate
    translate(TransText, { from: ogLang, to: toLang }).then(res => {
        //once response from api is received
        let original = ""
        let transLang = ""
        //getting the languages full name from array
        for (let i in codes) {
            if (codes[i][1] == ogLang) {
                original = codes[i][0]
            }
            if (codes[i][1] == toLang) {
                transLang = codes[i][0]
            }
        }
        //creatimg item
        let Item = [{
            Title: res,
            Subtitle: "Translating " +
                TransText +
                " from " +
                original +
                " to " +
                transLang,
            Icon: "translator",
        }, ];
        //creating elements
        displayItems(Item);
        //displaying item list
        scrollArea.style.display = "block";
        roundCorners()
        //error handler
    }).catch(err => {
        //outputs error
        console.error(err)
        //bad item - validation
        let Item = [
            { Title: "Unsupported language", Subtitle: "or invalid command", Icon: "translator" },
        ];
        //creates element
        displayItems(Item);
        //display item list
        scrollArea.style.display = "block";
        roundCorners()
    })
}
