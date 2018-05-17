'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#1827ce';
ctx.fillRect(110, 110, 100, 100);

ctx.fillStyle = '#f709db';
ctx.fillRect(10, 20, 30, 30);

ctx.fillStyle = '#13ef1e';
ctx.fillRect(210, 110, 150, 150);

ctx.fillStyle = '#ede62a';
ctx.fillRect(400, 300, 90, 90);