'use strict'

const firstButton = document.querySelector('#button1');
let secondButton = document.querySelector('#button2');

const firstButtonClick = () => {
  const timeStamp = Date.now()
  firstButton.innerText = timeStamp;
  firstButton.disabled = true;
}

const secondButtonClick = () => {
  const timeStamp = Date.now()
  secondButton.innerText = timeStamp;
  secondButton = '';
}

firstButton.addEventListener('click', firstButtonClick);
secondButton.addEventListener('click', secondButtonClick);