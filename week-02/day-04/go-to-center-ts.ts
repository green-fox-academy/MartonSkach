'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function lineDraw(x: number, y: number) {
    for (let i: number = 0; i < 3; i++) {
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(300, 200);
        ctx.stroke();
        x += 200;
    }
}
lineDraw(100, 50);

