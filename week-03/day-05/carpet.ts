'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function carpet(n: number) {
  if (n > 5) {
    return 1;
  } else {
    let x: number = canvas.width * 1 / Math.pow(3, n);
    let y: number = canvas.height * 1 / Math.pow(3, n);
    let a: number = canvas.width * 1 / Math.pow(3, n);
    let spaceCounter: number = canvas.width / (canvas.width / Math.pow(3, n));

    for (let j: number = 1; j <= spaceCounter; j++) {
      x = canvas.width * 1 / Math.pow(3, n);
      for (let k: number = 0; k <= spaceCounter; k++) {
        ctx.fillStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        ctx.fillRect(x, y, a, a);
        x += 3 * canvas.width / Math.pow(3, n);
      }
      y += 3 * canvas.width / Math.pow(3, n);
    }
  }
  setTimeout(function () {
    carpet(n + 1);
  }, 750);
}

carpet(0);