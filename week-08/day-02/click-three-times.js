'use strict'

const button = document.querySelector('button');
const body = document.querySelector('body');
const p = document.createElement('p');
p.innerText = '5 seconds elapsed and clicked 3 times';
let clickTimes = 0;
let domLoaded = false;

const buttonClicker = () => {
  if (clickTimes < 3) {
    clickTimes += 1;
  };
  if (clickTimes === 3 && domLoaded) {
    body.appendChild(p);
  };
};

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    domLoaded = true;
  }, 5000);
});

button.addEventListener('click', buttonClicker)