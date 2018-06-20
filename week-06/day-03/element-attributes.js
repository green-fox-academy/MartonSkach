'use strict'

const imageUrl = document.querySelector('img');
console.log(imageUrl.getAttribute('src'));
imageUrl.setAttribute('src', 'https://i.pinimg.com/originals/e7/07/3b/e7073b1e90ce846f1d5c936d816680a0.jpg');

const bestSite = document.querySelector('a');
bestSite.setAttribute('href', 'https://www.greenfoxacademy.com/');

const secondButton = document.querySelector('.this-one');
secondButton.textContent = "Don't click me";
secondButton.disabled = true;
