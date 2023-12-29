/* Zoom for Documentation  */

const demoDiv = document.querySelector("#DocumentationCard");

function zoomCard() {
  if (pageYOffset * 0.0001 > 1 || pageYOffset * 0.0001 < 0.2) {
    return;
  } else {
    DocumentationCard.setAttribute(
      "style",
      "transform: scale(" + pageYOffset * 0.00019 + ");"
    );
  }
}

window.addEventListener("scroll", zoomCard);

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

var fullscreen = false;

document.getElementById("FullscreenButton").onclick = function () {
  if (fullscreen) {
    toggleFillPage();
    closeFullscreen();
  } else {
    openFullscreen();
    toggleFillPage();
  }
  fullscreen = !fullscreen;
};

var docsCard = document.getElementById("DocumentationCard");

function fillPage() {
  docsCard.classList.add("pageFill");
  window.removeEventListener("scroll", zoomCard);
}

function unFillPage() {
  docsCard.classList.remove("pageFill");
  window.addEventListener("scroll", zoomCard);
}

var pageFill = false;

function toggleFillPage() {
  if (pageFill) {
    unFillPage();
  } else {
    fillPage();
  }
  pageFill = !pageFill;
}

document.getElementById("FillPageButton").onclick = toggleFillPage;

/*Buttons*/
var buttons = document.querySelectorAll("#DocsNav > ul > li > button");
var buttons_array = [...buttons]; // converts NodeList to Array

function loadDocsContent(buttonText) {
  var button = buttonText.replace(/ /g, "_");
  $("#DocsContent").load("../_layouts/" + button + "Cards.html");
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
  $("#DocsContent").load("../_layouts/defaultCards.html");
}

document.getElementById("DocsHeaderButton").onclick = loadDefaultDocsContent;

loadDefaultDocsContent();
