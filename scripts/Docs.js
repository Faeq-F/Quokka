/*Buttons*/
var buttons = document.querySelectorAll("#DocsNav > ul > li > a");
var buttons_array = [...buttons]; // converts NodeList to Array

function loadDocsContent(buttonText) {
  let button = new DOMParser().parseFromString(buttonText, "text/html");
  button = button.body.textContent || ""; //get text from HTML (.innerText does not work when menu is collapsed)
  button = button.replace(/ /g, "_"); //replace spaces with underscores
  button = button.replace(/(?:_){2}/g, ""); //removes underscores with a length > than 2 (so that the underscores between words are kept)
  button = button.replace("⤷", "");
  $("#DocsContent").load("DocumentationCards/" + button + ".html");
}

function attachButtonListeners() {
  buttons_array.forEach(function (item, idx) {
    item.addEventListener("click", function () {
      loadDocsContent(item.innerHTML);
      var oldActive = document.getElementsByClassName("active")[0];
      if (oldActive) {
        oldActive.classList.remove("active");
        oldActive
          .getElementsByTagName("svg")[0]
          .classList.remove("app-color-primary");
      }
      item.classList.add("active");
      item.getElementsByTagName("svg")[0].classList.add("app-color-primary");
    });
  });
}
attachButtonListeners();

var buttons = document.querySelectorAll(".app-navbar-submenu-content > li > a");
var buttons_array = [...buttons]; // converts NodeList to Array
attachButtonListeners();

function loadDefaultDocsContent() {
  $("#DocsContent").load("./DocumentationCards/InitialCards.html");
}
document.getElementById("DocsHeaderButton").onclick = loadDefaultDocsContent;
loadDefaultDocsContent();
