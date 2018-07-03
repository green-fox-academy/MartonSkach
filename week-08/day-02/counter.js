'use strict'

const button = document.querySelector('button');
const countElements = () => {
  let score = 0;
  document.querySelectorAll('li').forEach(element => {
    score += 1;
  });
  document.querySelector('.result').innerText = score
}
button.addEventListener('click', countElements);