'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function envelopeUpRight(numberOfLines: number) {

    let numberOfX: number = (canvas.width / 2) / numberOfLines; 
    let numberOfY: number = (canvas.height / 2) / numberOfLines;

    let x: number = (canvas.width / 2);
    let y: number = (0);

    for (let i: number = 0; i < numberOfLines; i++) {
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, y);
        ctx.lineTo(x, canvas.width / 2);
        ctx.stroke();
        x += numberOfX;
        y += numberOfY;
        
    }
}

function envelopeDownLeft(numberOfLines: number) {

    let numberOfX: number = (canvas.width / 2) / numberOfLines; 
    let numberOfY: number = (canvas.height / 2) / numberOfLines;

    let x: number = 0;
    let y: number = canvas.height / 2;

    for (let i: number = 0; i < numberOfLines; i++) {
        x += numberOfX;
        y += numberOfY;
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(x, canvas.height / 2);
        ctx.lineTo(canvas.width / 2, y);
        ctx.stroke();
        
    }
}

function envelopeDownRight(numberOfLines: number) {

    let numberOfX: number = (canvas.width / 2) / numberOfLines; 
    let numberOfY: number = (canvas.height / 2) / numberOfLines;

    let x: number = 0;
    let y: number = (canvas.height / 2);

    for (let i: number = 0; i < numberOfLines; i++) {
        x += numberOfX;
        y += numberOfY;
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, y);
        ctx.lineTo(canvas.width - x, canvas.width / 2);
        ctx.stroke();
    }
}

function envelopeUpLeft(numberOfLines: number) {

    let numberOfX: number = (canvas.width / 2) / numberOfLines; 
    let numberOfY: number = (canvas.height / 2) / numberOfLines;

    let x: number = 0;
    let y: number = 0;

    for (let i: number = 0; i < numberOfLines; i++) {
        
        x += numberOfX;
        y += numberOfY;
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(x, canvas.height / 2);
        ctx.lineTo(canvas.width / 2, canvas.height / 2 - y);
        ctx.stroke();
        
    }
}

envelopeDownLeft(40);
envelopeDownRight(40);
envelopeUpLeft(40);
envelopeUpRight(40);

