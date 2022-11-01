"use strict";

//Selecting elements
const imgOne = document.getElementById("1");
const imgTwo = document.getElementById("2");
const imgThree = document.getElementById("3");

const btnLeft = document.getElementById("left-btn");
const btnRight = document.getElementById("right-btn");

let num = 1;
let left = 2;
let right = 3;

btnLeft.addEventListener("click", () => {
  leftFunction();
});
btnRight.addEventListener("click", () => {
  rightFunction();
});

const rightFunction = () => {
  num++;
  left++;
  right++;
  if (right == 6) {
    right = 1;
  }
  if (left == 6) {
    right = 2;
    left = 1;
  }
  if (num == 6) {
    right = 2;
    left = 1;
    num = 5;
  }
  changeImg(num, left, right);
};

const leftFunction = () => {
  num--;
  left--;
  right--;
  if (right == 0) {
    right = 5;
  }
  if (left == 0) {
    right = 1;
    left = 5;
  }
  if (num == 0) {
    num = 1;
    left = 2;
    right = 3;
  }
  changeImg(num, left, right);
};

const changeImg = (a, b, c) => {
  imgOne.src = `./assets/image-slide-${a}.jpg`;
  imgTwo.src = `./assets/image-slide-${b}.jpg`;
  imgThree.src = `./assets/image-slide-${c}.jpg`;
};
