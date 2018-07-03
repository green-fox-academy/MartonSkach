'use strict'

const button = document.querySelector('button');
const body = document.querySelector('body');
const p = document.createElement('p');
p.innerText = 'This is the text';

const onButtonClick = () => {
  setTimeout(() => {
    body.appendChild(p);
  }, 2000);
};

button.addEventListener('click', onButtonClick);