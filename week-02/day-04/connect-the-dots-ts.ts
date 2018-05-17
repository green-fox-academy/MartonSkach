'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let parameters: number[][] = [[10, 10], [290,  10], [290, 290], [10, 290]];
let secondParameters: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function dotParam(p: number[][]) {
    ctx.beginPath();
    ctx.strokeStyle = "green";
    for (let i: number = 0; i <= p.length; i++) {
        let j: number = 0;
        for (j = 0; j < p[i].length; j++) {
            ctx.moveTo(p[i][j], p[i][j+1]);
            ctx.lineTo(p[i+1][j], p[i+1][j+1]);
            ctx.stroke();  
        }
    }
}

dotParam(secondParameters);
dotParam(parameters);


