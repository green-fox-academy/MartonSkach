'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let colorArray: string[] = ['#FF0000', '#FE6500', '#FEFE00', '#7CCC0E', '#9AFFFF', '#9A9AFE', '#BABAE4'];

function rainbowBox(x: number, color: string[]) {
    for (let i: number = 0; i < 7; i++) {
        ctx.fillStyle = color[i];
        ctx.fillRect((600 / 2) - (x / 2), (400 / 2) - (x / 2), x, x);
        x -= 85;
    }
}

rainbowBox(600, colorArray);