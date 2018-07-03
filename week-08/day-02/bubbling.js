'use strict'

const nav = document.querySelector('nav');
const inspector = document.querySelector('.img-inspector')

let currentPosX = 0;
let currentPosY = 0;
let currentSize = 200;

inspector.style.backgroundPositionX = currentPosX;
inspector.style.backgroundPositionY = currentPosY;

nav.addEventListener('click', function (e) {
  if(e.target.innerText === 'Up') {
      currentPosY -= 10;
    inspector.style.backgroundPositionY = `${currentPosY}px`;
  };
  if(e.target.innerText === 'Down') {
      currentPosY += 10;
    inspector.style.backgroundPositionY = `${currentPosY}px`;
  };
  if(e.target.innerText === 'Left') {
      currentPosX += 10;
    inspector.style.backgroundPositionX = `${currentPosX}px`;
  };
  if(e.target.innerText === 'Right') {
      currentPosX -= 10;
    inspector.style.backgroundPositionX = `${currentPosX}px`;
  };
  if(e.target.innerText === 'Zoom in') {
    currentSize += 20;
    inspector.style.backgroundSize = `${currentSize}%`;
  };
  if(e.target.innerText === 'Zoom out') {
    currentSize -= 20;
    inspector.style.backgroundSize = `${currentSize}%`;
  };
});