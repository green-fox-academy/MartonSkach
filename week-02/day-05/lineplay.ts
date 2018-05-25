
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function linePlayGreen(numberOfLines: number, numberOfTables: number) {

    let tableMultiplier: number = canvas.width / numberOfTables;

    let numberOfX: number = canvas.width / numberOfLines; 
    let numberOfY: number = canvas.height / numberOfLines;

    let x: number = 0;
    let y: number = 0;

    for (let i: number = 0; i < numberOfLines; i++) {
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
        x += numberOfX;
        y += numberOfY;
    }
}

function linePlayPurple(numberOfLines: number, numberOfTables: number) {

    let tableMultiplier: number = canvas.width / numberOfTables;

    let numberOfX: number = canvas.width / numberOfLines; 
    let numberOfY: number = canvas.height / numberOfLines;

    let x: number = 0;
    let y: number = 0;

    for (let i: number = 0; i < numberOfLines; i++) {
        ctx.strokeStyle = "purple";
        ctx.beginPath();
        ctx.moveTo(canvas.width, y);
        ctx.lineTo(x, 0);
        ctx.stroke();
        x += numberOfX;
        y += numberOfY;
    }
}

function multiplier (numberOfLines: number, numberOfTables: number) {
    linePlayGreen(numberOfLines, numberOfTables);
    linePlayPurple(numberOfLines, numberOfTables);
}

multiplier(50, 4);



