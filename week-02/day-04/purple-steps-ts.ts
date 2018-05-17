'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function lineDrawer(x: number, y: number) {
    for (let i: number = 0; i < 19; i++) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(x, y, 20, 20);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(x, y, 20, 20);
        x = x + 20;
        y = y + 20
    }
}

lineDrawer(20, 20);