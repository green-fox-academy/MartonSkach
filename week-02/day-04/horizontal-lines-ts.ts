'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function lineDrawer(x: number, y: number) {
    for (let i: number = 0; i < 3; i++) {
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x+50, y);
        ctx.stroke();
        y += 100
    }
}

lineDrawer(50, 50);
