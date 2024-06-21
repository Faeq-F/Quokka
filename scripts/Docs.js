/*Buttons*/
var buttons = document.querySelectorAll("#DocsNav > ul > li > button");
var buttons_array = [...buttons]; // converts NodeList to Array

function loadDocsContent(buttonText) {
  var button = buttonText.replace(/ /g, "_");
  $("#DocsContent").load("DocumentationCards/" + button + ".html");
}

function attachButtonListeners() {
  buttons_array.forEach(function (item, idx) {
    item.addEventListener("click", function () {
      loadDocsContent(item.innerText);
    });
  });
}
attachButtonListeners();

var buttons = document.querySelectorAll("#DocsNav > ul > ul > li > button");
var buttons_array = [...buttons]; // converts NodeList to Array
attachButtonListeners();

function loadDefaultDocsContent() {
  $("#DocsContent").load("./DocumentationCards/InitialCards.html");
}
document.getElementById("DocsHeaderButton").onclick = loadDefaultDocsContent;
loadDefaultDocsContent();
