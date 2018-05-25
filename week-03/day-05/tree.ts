'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

class LineDraw {
  startingX: number;
  startingY: number;
  endingX: number;
  endingY: number;

  constructor(startingX: number, startingY: number, endingX: number, endingY: number) {

    this.startingX = startingX;
    this.startingY = startingY;
    this.endingX = endingX;
    this.endingY = endingY;

    ctx.strokeStyle = '#FFD900';
    ctx.beginPath();
    ctx.moveTo(startingX, startingY);
    ctx.lineTo(endingX, endingY);
    ctx.stroke();
  }
}

let startingX: number = 0;
let startingY: number = 0;
let endingX: number = 0;
let endingY: number = 0;

function drawTree(n: number) {
  
  if (n <= 1) {
    return 1;
  }
  else {
    

    for (let i: number = 0; i < n ; i++) {
      for (let j: number = 0; j < i; j++) {
  }
 

    }
  }
}




ctx.strokeStyle = '#FFD900';
ctx.beginPath();
ctx.moveTo(canvas.width * 0.5, canvas.height * 0.8);
ctx.lineTo(canvas.width * 0.5, canvas.height * 0.7);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width * 0.5, canvas.height * 0.7);
ctx.lineTo(canvas.width * 0.47, canvas.height * 0.62);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width * 0.5, canvas.height * 0.7);
ctx.lineTo(canvas.width * 0.5, canvas.height * 0.6);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width * 0.5, canvas.height * 0.7);
ctx.lineTo(canvas.width * 0.53, canvas.height * 0.62);
ctx.stroke();
