// function to add hidden class to HTML elements
const initHiddenElements = () => {
    // variable to select HTML elements - manually add fade-in-on-scroll class to divs
    const showElements = document.querySelectorAll(".fade-in-on-scroll");
    console.log("showEls", showElements);

    // global variable to set root options (passed as second arg to IntersectionObserver constructor) - "MDN: 50% visibility = 0.5. Can be array [0, 0.25, 0.5, 0.75, 1. 1.0 = threshold isn't considered passed until every pixel is visible."
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
