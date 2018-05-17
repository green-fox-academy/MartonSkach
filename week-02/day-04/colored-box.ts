'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.stroke();

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(200, 200);
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(100, 200);
ctx.stroke();

ctx.strokeStyle = "purple";
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(100, 100);
ctx.stroke();