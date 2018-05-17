'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let colorArray: string[] = ['red', 'blue', 'green']

function rectangler(x: number, y: number) {
    for (let i: number = 0; i < 3; i++) {
        y += 75;
        ctx.fillStyle = colorArray[i];
        ctx.fillRect(x, y, 50, 50);
    }
}

rectangler(100, 50)