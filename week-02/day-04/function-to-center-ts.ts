'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function toTheCenter(x: number, y: number) {


    let lineMoverX: number = 0;
    let lineMoverY: number = 0;
    for (let i: number = 0; i <= ((400 - 2 * y) / 20); i++) {
        ctx.beginPath();
        ctx.moveTo(x+lineMoverX, y+lineMoverY);
        ctx.lineTo(300, 200);
        ctx.stroke();
        lineMoverY += 20;
    }

    lineMoverX= 0;
    lineMoverY= 0;
    for (let i: number = 0; i <= ((400 - 2 * y) / 20); i++) {
        ctx.beginPath();
        ctx.moveTo(600 - x - lineMoverX, y + lineMoverY);
        ctx.lineTo(300, 200);
        ctx.stroke();
        lineMoverY += 20;
    }

    lineMoverX= 0;
    lineMoverY= 0;
    for (let i: number = 0; i <= ((600 - 2 * x) / 20); i++) {
        ctx.beginPath();
        ctx.moveTo(x + lineMoverX, y + lineMoverY);
        ctx.lineTo(300, 200);
        ctx.stroke();
        lineMoverX += 20;
    }

    lineMoverX= 0;
    lineMoverY= 0;
    for (let i: number = 0; i <= ((600 - 2 * x) / 20); i++) {
        ctx.beginPath();
        ctx.moveTo(x + lineMoverX, 400 - y - lineMoverY);
        ctx.lineTo(300, 200);
        ctx.stroke();
        lineMoverX += 20;
    }
}

toTheCenter(50, 80);

