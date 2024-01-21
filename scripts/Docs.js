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

//Resize divs
let root = document.documentElement;
let spliter = document.querySelector(".spliter-div");
let rowDiv = document.querySelector(".row-divs");
let cd1 = document.getElementById("cd-1");
var isDown = false;
var isHover = false;
var minWidth = 127;
var maxWidth = 600;

function setPosition() {
  var cl = this.document.querySelector(".col-div");
  if (cl) {
    root.style.setProperty("--m-x", cl.offsetWidth + 3.5 + "px");
  }
  minWidth = parseInt(rowDiv.clientWidth / 10) * 2 + 22;
  maxWidth = parseInt(rowDiv.clientWidth - minWidth);
}
function moveTo(e) {
  if (e.clientX > minWidth && e.clientX < maxWidth) {
    if (cd1.classList.contains("col-div-flex")) {
      cd1.classList.remove("col-div-flex");
    }
    cd1.style.width = e.clientX + "px";
    root.style.setProperty("--m-x", e.clientX + 9.5 + "px");
  }
}
window.addEventListener("DOMContentLoaded", function (e) {
  setPosition();
});
window.addEventListener("resize", function (e) {
  setPosition();
});
root.addEventListener(
  "mousedown",
  function (e) {
    if (isHover) {
      isDown = true;
    }
  },
  true
);
document.addEventListener(
  "mouseup",
  function (e) {
    isDown = false;
    if (isHover) {
      //...
    }
  },
  true
);
document.addEventListener("mousemove", function (e) {
  if (isDown) {
    moveTo(e);
  }
});
spliter.addEventListener("mouseenter", function (e) {
  isHover = true;
  spliter.style.cursor = "col-resize";
});
spliter.addEventListener("mouseout", function (e) {
  isHover = false;
});
