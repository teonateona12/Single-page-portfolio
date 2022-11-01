"use strict";

//Selecting elements
const imgOne = document.getElementById("1");
const imgTwo = document.getElementById("2");
const imgThree = document.getElementById("3");

const btnLeft = document.getElementById("left-btn");
const btnRight = document.getElementById("right-btn");

let num = 2;
let left = 3;
let right = 4;

btnRight.addEventListener("click", () => {
  if (num == 0 || left == 0 || right == 0) {
    imgOne.src = `./assets/image-slide-1.jpg`;
    imgTwo.src = `./assets/image-slide-2.jpg`;
    imgThree.src = `./assets/image-slide-3.jpg`;
    num = 1;
    left = 2;
    right = 3;
  }
  if (num <= 5) {
    imgOne.src = `./assets/image-slide-${num}.jpg`;
    imgTwo.src = `./assets/image-slide-${left}.jpg`;
    if (right < 6) {
      imgThree.src = `./assets/image-slide-${right}.jpg`;
    } else {
      imgThree.src = `./assets/image-slide-2.jpg`;
    }
    if (left < 6) {
      imgTwo.src = `./assets/image-slide-${left}.jpg`;
    } else {
      imgTwo.src = `./assets/image-slide-1.jpg`;
    }
  }
  num = num + 1;
  left = left + 1;
  right = right + 1;
});

btnLeft.addEventListener("click", () => {
  if (num == 0 || left == 0 || right == 0) {
    imgOne.src = `./assets/image-slide-1.jpg`;
    imgTwo.src = `./assets/image-slide-2.jpg`;
    imgThree.src = `./assets/image-slide-3.jpg`;
    num = num + 1;
    left = left + 1;
    right = right + 1;
  } else if (num >= 5 || left >= 5 || right >= 5) {
    imgOne.src = `./assets/image-slide-4.jpg`;
    imgTwo.src = `./assets/image-slide-5.jpg`;
    imgThree.src = `./assets/image-slide-1.jpg`;
    num = 4;
    left = 5;
    right = 3;
  } else {
    imgOne.src = `./assets/image-slide-${num}.jpg`;
    imgTwo.src = `./assets/image-slide-${left}.jpg`;
    imgThree.src = `./assets/image-slide-${right}.jpg`;
  }

  num = num - 1;
  left = left - 1;
  right = right - 1;
});
