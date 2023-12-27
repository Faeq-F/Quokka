const sliderWrappers = document.querySelectorAll(".slider-wrapper");
const sliderInput = $(".slider__input");
sliderWrappers.forEach((sliderWrapper) => {
  console.log(sliderInput);
  const minValue = +sliderInput.min || 0;
  const maxValue = +sliderInput.max || 100;

  const updateSlider = () => {
    sliderWrapper.style.setProperty(
      "--slider-value",
      (100 * +sliderInput.value) / (maxValue - minValue)
    );
  };

  sliderInput[0].addEventListener("onclick", () => {
    updateSlider();
  });

  updateSlider();
});

function cardHueRotate() {
  var hue = getComputedStyle(document.body).getPropertyValue("--hue");
  cards.css("filter", "hue-rotate(" + hue + "deg)");
}

var cards = $(".ProjectCard, .HueRotateImage");
sliderInput[0].oninput = (e) => {
  document.firstElementChild.style.setProperty("--hue", e.target.value);
  cardHueRotate();
};

cardHueRotate();
