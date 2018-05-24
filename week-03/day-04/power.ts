'use strict';

let n: number = 0;

function powerOf(x: number, y: number): number {
  if (y === 0) {
    return n + 1
  }
  else {
    n += Math.pow(x, y);
    return powerOf(x, y - 1);
  }
}

console.log(powerOf(2, 4));