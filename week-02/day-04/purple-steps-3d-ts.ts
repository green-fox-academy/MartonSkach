'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function boxMaker(x: number, y: number, a: number) {
    for (let i: number = 0; i < 6; i++) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(x, y, a, a);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(x, y, a, a);
        x = x + a;
        y = y + a;
        a = a + 10
    }
}

boxMaker(20, 20, 20);