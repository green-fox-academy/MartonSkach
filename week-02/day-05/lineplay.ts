'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function linePlayGreen(numberOfLines: number) {

    let numberOfX: number = 400 / numberOfLines; 
    let numberOfY: number = 400 / numberOfLines;

    let x: number = 0;
    let y: number = 0;

    for (let i: number = 0; i < numberOfLines; i++) {
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(x, 400);
        ctx.stroke();
        x += numberOfX;
        y += numberOfY;
    }
}

function linePlayPurple(numberOfLines: number) {

    let numberOfX: number = 400 / numberOfLines; 
    let numberOfY: number = 400 / numberOfLines;

    let x: number = 0;
    let y: number = 0;

    for (let i: number = 0; i < numberOfLines; i++) {
        ctx.strokeStyle = "purple";
        ctx.beginPath();
        ctx.moveTo(400, y);
        ctx.lineTo(x, 0);
        ctx.stroke();
        x += numberOfX;
        y += numberOfY;
    }
}

linePlayGreen(15);
linePlayPurple(80);