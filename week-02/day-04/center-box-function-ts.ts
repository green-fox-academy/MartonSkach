'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let colorArray: string[] = ['red', 'blue', 'green']

function lineDrawer(x: number) {
    for (let i: number = 0; i < 3; i++) {
        ctx.fillStyle = colorArray[i];
        ctx.fillRect((600 / 2) - (x / 2), (400 / 2) - (x / 2), x, x);
        x -= 40;
    }
}

lineDrawer(200);