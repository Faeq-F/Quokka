function loadDefaultPluginsScreenshots() {
  $("#PluginScreenshotsGrid").load("PluginScreenshots/InitialScreenshots.html");
}

loadDefaultPluginsScreenshots();

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);

var $window = $(".modal-window");
var $overlay = $(".modal-overlay");

images = document.getElementsByClassName("modal-launcher");
function exitImageView() {
  for (i in images) images[i].checked = false;
  if (vw > 660) $("header").css("display", "block");
  $window.removeClass("fadeIn");
  $overlay.removeClass("fadeIn");
  $window.addClass("fadeOut");
  $overlay.addClass("fadeOut");
}

$($window).click(exitImageView);
$($overlay).click(exitImageView);

$(".modal-launcher").click(function () {
  if (vw > 660) $("header").css("display", "none");
  $window.removeClass("fadeOut");
  $overlay.removeClass("fadeOut");
  $window.addClass("fadeIn");
  $overlay.addClass("fadeIn");
});
