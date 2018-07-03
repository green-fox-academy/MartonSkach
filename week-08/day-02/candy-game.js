'use strict'

const body = document.querySelector('body');
const candyCounter = document.querySelector('.candies');
const lollypopCounter = document.querySelector('.lollypops');
const candySpeed = document.querySelector('.speed');
let numberOfCandies = 0;
let secondCounter = 0;
let totalCandyGathered = 0;
let makeItRain = 1;
let lollypopMultiplier = 0;

body.addEventListener('click', function (e) {
  if (e.target.innerText === 'Create candies') {
    numberOfCandies++;
    totalCandyGathered++;
    candyCounter.innerText = numberOfCandies;
    console.log(lollypopCounter.innerText.length);
  }
  if (e.target.innerText === 'Buy Lollypops') {
    if (numberOfCandies > 100) {
      numberOfCandies -= 100;
      candyCounter.innerText = numberOfCandies;
      lollypopCounter.innerText += `🍭`;
    }
    if (lollypopCounter.innerText.length / 2 % 10 === 0) {
      lollypopMultiplier = (lollypopCounter.innerText.length / 2) / 10;
    }
  }
  if (e.target.innerText === 'Make candy rain') {
    makeItRain *= 10;
  }
})

document.addEventListener('DOMContentLoaded', function () {
  setInterval(() => {
    let candyGenerator = lollypopMultiplier * makeItRain;
    numberOfCandies += candyGenerator;
    totalCandyGathered += candyGenerator;
    candyCounter.innerText = numberOfCandies;
    secondCounter++;
    candySpeed.innerText = Math.round( totalCandyGathered / secondCounter * 10) / 10;
  }, 1000);
});