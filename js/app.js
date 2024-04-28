////////////////////////////////////1/////////////////////////////////

let numbers = [3, 2, 5, 4, 6, 1];
document.addEventListener(
  "scroll",
  _.debounce(() => {
    let result = numbers.reduce((acc, num) => acc + num, 0);
    console.log(result);
  }, 1000)
);
console.log(numbers);

//////////////////////////////////////////2//////////////////////////////////////////////

document.addEventListener(
  "scroll",
  _.debounce(() => {
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }
    let backgroundColor = getRandomHexColor();
    document.body.style.backgroundColor = backgroundColor;
  }, 500)
);

///////////////////////////////////////4/////////////////////////////////////////////

let navbars = document.querySelector(".navbars");

document.addEventListener("scroll", () => {
  if (window.scrollX > 0) {
    navbars.style.display = "block";
  } else {
    navbars.style.display = "none";
  }
});

////////////////////////////////////5/////////////////////////////////////////

let button = document.querySelector(".btn");

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

/////////////////////////////////////////////6/////////////////////////////////
let output = document.querySelector(".output");
let scrollCounter = 0;
let lastScroll = 0;
document.addEventListener("scroll", () => {
  if (window.scrollY > lastScroll) {
    scrollCounter += 1;
  }
  lastScroll = window.scrollY;
  output.textContent = scrollCounter;
});
