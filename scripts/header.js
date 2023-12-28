function HeaderScroll() {
  // Detect scroll position
  let scrollPosition = Math.round(window.scrollY);
  //If it is past the top + a little extra space, then make it sticky
  if (
    scrollPosition >
    parseFloat(
      getComputedStyle(document.getElementsByTagName("header")[0]).fontSize
    ) +
      40
  ) {
    document.querySelector("header").classList.add("sticky");
  } else {
    //If not, make it flat
    document.querySelector("header").classList.remove("sticky");
  }
}

window.addEventListener("scroll", HeaderScroll);
