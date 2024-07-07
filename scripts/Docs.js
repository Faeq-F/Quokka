/*Buttons*/
var buttons = document.querySelectorAll("#DocsNav > ul > li > a");
var buttons_array = [...buttons]; // converts NodeList to Array

function loadDocsContent(buttonText) {
  var button = buttonText.replace(/ /g, "_");
  button = button.replace("⤷", "");
  $("#DocsContent").load("DocumentationCards/" + button + ".html");
}

function attachButtonListeners() {
  buttons_array.forEach(function (item, idx) {
    item.addEventListener("click", function () {
      loadDocsContent(item.innerText);
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
