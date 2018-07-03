'use strict'

const text = document.querySelector('h1');

const changeText = () => {
  const buttonPressed = event.keyCode;
  text.innerHTML = `Last pressed key code is: ${buttonPressed}`;
}

window.addEventListener('keyup', changeText)