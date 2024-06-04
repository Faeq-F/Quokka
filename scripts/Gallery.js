/*Buttons*/
var buttons = document.querySelectorAll(".ProjectCard");
var buttons_array = [...buttons]; // converts NodeList to Array

function loadScreenshots(buttonText) {
  $("#PluginScreenshotsGrid").load("PluginScreenshots/" + buttonText + ".html");
}

function attachButtonListeners() {
  buttons_array.forEach(function (item, idx) {
    item.addEventListener("click", function () {
      loadScreenshots(
        item.innerText.replace(/ /g, "_").split("\n")[0].substring(1)
      );
    });
  });
}
attachButtonListeners();

function loadDefaultPluginsScreenshots() {
  $("#PluginScreenshotsGrid").load("PluginScreenshots/InitialScreenshots.html");
}
document.getElementsByClassName("PortfolioWorkHeader")[0].onclick =
  loadDefaultPluginsScreenshots;
loadDefaultPluginsScreenshots();

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);

var modalWindow = document.getElementsByClassName("modal-window");
var modalOverlay = document.getElementsByClassName("modal-overlay")[0];

var images = document.getElementsByClassName("modal-launcher");
function exitImageView() {
  for (i in images) images[i].checked = false;
  if (vw > 660) $("header").css("display", "block");
  modalWindow.removeClass("fadeIn");
  modalOverlay.removeClass("fadeIn");
  modalWindow.addClass("fadeOut");
  modalOverlay.addClass("fadeOut");
}

// $($window).addEventListener("click", function () {
//   exitImageView();
// });
// $($overlay).addEventListener("click", function () {
//   exitImageView();
// });

$(".modal-launcher").click(function () {
  if (vw > 660) $("header").css("display", "none");
  modalWindow.removeClass("fadeOut");
  modalOverlay.removeClass("fadeOut");
  modalWindow.addClass("fadeIn");
  modalOverlay.addClass("fadeIn");
});
