'use strict'

const body = document.querySelector('body');
const candyCounter = document.querySelector('.candies');
const lollypopCounter = document.querySelector('.lollypops');
const candySpeed = document.querySelector('.speed');
let numberOfCandies = 0;
let secondCounter = 0;
let totalCandiedGathered = 0;
let makeItRain = 1;

body.addEventListener('click', function (e) {
  if (e.target.innerText === 'Create candies') {
    numberOfCandies++;
    totalCandiedGathered++;
    candyCounter.innerText = numberOfCandies;
  }
  if (e.target.innerText === 'Buy Lollypops') {
    if (numberOfCandies > 100) {
      numberOfCandies -= 100;
      candyCounter.innerText = numberOfCandies;
      lollypopCounter.innerText += `🍭`;
    }
  }
  if (e.target.innerText === 'Make candy rain') {
    makeItRain *= 10;
  }
})

document.addEventListener('DOMContentLoaded', function () {
  setInterval(() => {
    let candyGenerator = (lollypopCounter.innerText.length / 2) * 10 * makeItRain;
    numberOfCandies += candyGenerator;
    totalCandiedGathered += candyGenerator;
    candyCounter.innerText = numberOfCandies;
    secondCounter++;
    candySpeed.innerText = Math.round( totalCandiedGathered / secondCounter * 10) / 10;
  }, 1000);
});