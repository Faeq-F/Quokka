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

// Expanding div -----------------------------------------------------------------------------

function getPosition(elem) {
  const rect = elem.getBoundingClientRect();
  return {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
  };
}

function toPx(val) {
  return [val, "px"].join("");
}
var entry = $(".expandingDiv")[0];

function expandDocs() {
  if (entry.classList.contains("fullscreen")) {
    entry.classList.remove("fullscreen");
    setTimeout((e) => {
      entry.style.display = "none";
      entry.style.position = "fixed";
      entry.style.left = "50%";
    }, 1000);
    //close
  } else {
    //open
    let pos = getPosition(entry);
    entry.style.width = toPx(pos.width);
    entry.style.height = toPx(pos.height);
    entry.style.top = toPx(pos.top);
    entry.style.left = toPx(pos.left);
    entry.classList.add("fullscreen");

    entry.style.position = "fixed";
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      expandDocs();
    }
  });
});

observer.observe($("#bottom")[0]);

var y;
window.onscroll = function () {
  if (entry.classList.contains("fullscreen")) {
    if (window.scrollY < y) {
      entry.classList.remove("fullscreen");
      setTimeout((e) => {
        entry.style.position = "fixed";
        entry.style.left = "50%";
      }, 1000);
    }
  } else {
    y = window.scrollY;
  }
};
