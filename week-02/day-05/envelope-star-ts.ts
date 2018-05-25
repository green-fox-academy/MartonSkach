'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function envelopeStar(numberOfLines: number) {

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

    numberOfX = (canvas.width / 2) / numberOfLines; 
    numberOfY = (canvas.height / 2) / numberOfLines;
    x = 0;
    y = canvas.height / 2;

    for (let i: number = 0; i < numberOfLines; i++) {
        x += numberOfX;
        y += numberOfY;
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(x, canvas.height / 2);
        ctx.lineTo(canvas.width / 2, y);
        ctx.stroke();  
    }

    numberOfX = (canvas.width / 2) / numberOfLines; 
    numberOfY = (canvas.height / 2) / numberOfLines;
    x = 0;
    y = (canvas.height / 2);

    for (let i: number = 0; i < numberOfLines; i++) {
        x += numberOfX;
        y += numberOfY;
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, y);
        ctx.lineTo(canvas.width - x, canvas.width / 2);
        ctx.stroke();
    }

    numberOfX = (canvas.width / 2) / numberOfLines; 
    numberOfY = (canvas.height / 2) / numberOfLines;
    x = 0;
    y = 0;

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

envelopeStar(35);


