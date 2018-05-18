'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function triangle(triangleNumber) {

    let triangleSize: number = canvas.width / triangleNumber;
    let x: number = 0;

    for (let i: number = 0; i <= triangleNumber; i++) {
        let x = 0;
        for (let j: number = 0; j <= i; j++) {
            ctx.strokeStyle = "green";
            ctx.beginPath();
            ctx.moveTo((canvas.width - triangleSize * i) / 2 + x, triangleSize * i);
            ctx.lineTo((canvas.width - triangleSize * i) / 2 + x - triangleSize / 2, triangleSize * i + triangleSize);
            ctx.lineTo((canvas.width - triangleSize * i) / 2 + x + triangleSize / 2, triangleSize * i + triangleSize);
            ctx.closePath();
            ctx.stroke();
            x += triangleSize;
        }
    }
}

triangle(30);
