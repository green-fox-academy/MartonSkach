'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function draw(startX, startY, branchLength, angle, branchWidth) {
  ctx.beginPath();
  ctx.save();
  
  ctx.strokeStyle = 'white';
  ctx.lineWidth = branchWidth;
  ctx.translate(startX, startY);
  ctx.rotate(angle * Math.PI/180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -branchLength);
  ctx.stroke();
  
  if(branchLength < 10) {
    ctx.restore();
    return;
  }
  
  draw(0, -branchLength, branchLength * 0.8, -20, branchWidth * 0.8);
  draw(0, -branchLength, branchLength * 0.8, 0, branchWidth * 0.8);
  draw(0, -branchLength, branchLength * 0.8, 20, branchWidth * 0.8);
  
  ctx.restore();
}

draw(canvas.width / 2, canvas.height * 0.9, canvas.height * 0.18, 0, 4)

