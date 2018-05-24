'use strict';

let earCount: number = 0;

function factorial(n: number): number {
  if (n <= 1) {
    return earCount + 2;
  }
  else {
    return earCount += factorial(n - 1) + 2;
  }
}

console.log(factorial(89));