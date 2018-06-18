'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let maxDepth: number = 6;
let depth: number = 0;

function drawSquare(x: number, y: number, width: number, height: number) {
  depth++;
  if (depth >= maxDepth) {
    depth--;
    return   
  }

    ctx.strokeRect(x, y + height / 3, width, height / 3);
    ctx.strokeRect(x + width / 3, y, width / 3, height);

  setTimeout(function () {
    drawSquare(x, y + height / 3, width / 3, height / 3);
  }, 100);
  setTimeout(function () {
    drawSquare(x + width / 3, y, width / 3, height / 3);
  }, 100); 
  setTimeout(function () {
    drawSquare(x + width * 2 / 3, y + height / 3, width / 3, height / 3);
  }, 100); 
  setTimeout(function () {
    drawSquare(x + width / 3, y + height * 2 / 3, width / 3, height / 3);
  }, 100);
  setTimeout(function () {
    drawSquare(x + width / 3, y + height / 3, width / 3, height / 3);
  }, 100);   
  
  depth--;
  return;
}

ctx.fillStyle = 'yellow';
ctx.fillRect(0, 0, canvas.width , canvas.height);

drawSquare(0, 0, canvas.width, canvas.height);




/*
let startWidth: number = 0;
let startHeight: number = 0;
let rectangeSize: number = 0;

function getRekt(n) {
  let counter: number = n;
  for (let i: number = 1; i < Math.pow(3, counter); i++) {
    for (let j: number = 1; j < Math.pow(3, counter); j++) {
      ctx.strokeStyle = 'red';
      ctx.strokeRect(110, 110, 100, 100);
    }
  }
  getRekt(n - 1);
}

getRekt(3);



let startWidth: number = 0;
let startHeight: number = 0;
let rectangeSize: number = 0;

function rectangle(n: number) {
  for (let i: number = 1; i <= 30; i++) {
    for (let j: number = 0; j < 4; j++) {
      if (j === 0) {
        startWidth = canvas.width / 2 - canvas.width / 2 * (1 / (Math.pow(3, i)));
        startHeight = 0;
        rectangeSize = canvas.width / (Math.pow(3, i));
        getRekt(startWidth, startHeight, rectangeSize);
      } else if (j === 1) {
        startWidth = canvas.width / 2 - canvas.width / 2 * (1 / (Math.pow(3, i)));
        startHeight = canvas.height - canvas.height / 2 * (2 / (Math.pow(3, i)));
        rectangeSize = canvas.width / (Math.pow(3, i));
        getRekt(startWidth, startHeight, rectangeSize);
      }
    }
    function getRekt(x: number, y: number, a: number) {
      ctx.strokeStyle = 'black';
      ctx.strokeRect(startWidth, startHeight, rectangeSize, rectangeSize);
      startWidth += canvas.width * 1 / (Math.pow(3, i));
      startHeight += canvas.height * 1 / (Math.pow(3, i));
      ctx.strokeRect(startWidth, startHeight, rectangeSize, rectangeSize);
      startWidth -= canvas.width * 1 / (Math.pow(3, i));
      startHeight += canvas.height * 1 / (Math.pow(3, i));
      ctx.strokeRect(startWidth, startHeight, rectangeSize, rectangeSize);
      startWidth -= canvas.width * 1 / (Math.pow(3, i));
      startHeight -= canvas.height * 1 / (Math.pow(3, i));
      ctx.strokeRect(startWidth, startHeight, rectangeSize, rectangeSize);
    }
  }
  rectangle(n - 1);
}

rectangle(5);

*/