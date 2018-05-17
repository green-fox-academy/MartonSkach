'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let positionX: number = 0;
let positionY: number = 0;
let colorArray: string[] = ['#171735', '#12123f', '#28282b', '#0c0c0f', '#030335', '#212130'];
let starColor: string[] = ['#d1b86c', '#9b9968', '#b5b389', '#cecc82'];

function checkerBoard(x: number) {
    for (let i: number = 0; i < 400 / x; i++) {
            positionX = 0;
            for (let j: number = 0; j < 600 / x; j++) {
                    ctx.fillStyle = colorArray[Math.floor(Math.random() * 6) + 1];
                    ctx.fillRect(positionX, positionY, x, x);
                    positionX = positionX + x;
            }
            positionY = positionY + x;
    }
    for (let k: number = 0; k < 40; k++) {
        ctx.fillStyle = starColor[Math.floor(Math.random() * 4) + 1];
        ctx.fillRect(Math.floor(Math.random() * 500) + 20, Math.floor(Math.random() * 350) + 50, Math.floor(Math.random() * 7) + 5, Math.floor(Math.random() * 7) + 5);
    }
    
    ctx.strokeStyle = starColor[Math.floor(Math.random() * 4) + 1];
    ctx.beginPath();
    ctx.arc(200, 200, 70, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#efcd45';
    ctx.fill();

    ctx.fillStyle = '#575b5e';
    ctx.fillRect(220, 150, 95, 55);

    ctx.fillStyle = '#575b5e';
    ctx.fillRect(205, 165, 120, 30);
    
}

checkerBoard(1);