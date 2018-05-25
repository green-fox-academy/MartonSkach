'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let positionX: number = 0;
let positionY: number = 0;

function checkerBoard(x: number) {
    for (let i: number = 0; i < 400 / x; i++) {
        if (i % 2 === 0) {
            positionX = 0;
            for (let j: number = 0; j < 600 / x; j++) {
                if (j % 2 === 0) {
                    ctx.fillStyle = 'white';
                    ctx.fillRect(positionX, positionY, x, x);
                } else {
                    ctx.fillStyle = 'black';
                    ctx.fillRect(positionX, positionY, x, x);
                }
                positionX = positionX + x;
            }
        } else if (i % 2 != 0) {
            positionX = 0;
            for (let j: number = 0; j < 600 / x; j++) {
                if (j % 2 === 0) {
                    ctx.fillStyle = 'black';
                    ctx.fillRect(positionX, positionY, x, x);
                } else {
                    ctx.fillStyle = 'white';
                    ctx.fillRect(positionX, positionY, x, x);
                }
                positionX = positionX + x;
            }
        }
        positionY = positionY + x;
    }
}

checkerBoard(5);