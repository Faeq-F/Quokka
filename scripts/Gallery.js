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

$("#PluginScreenshotsGrid").load("PluginScreenshots/InitialScreenshots.html");
