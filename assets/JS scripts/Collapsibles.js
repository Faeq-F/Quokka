//runs when settings window is loaded
document.addEventListener("DOMContentLoaded", function () {
  //gets all collapsibles
  var elem = document.querySelectorAll(".collapsible");
  //initialises all collapsibles
  var instance = M.Collapsible.init(elem, {
    accordion: false,
  });
});
