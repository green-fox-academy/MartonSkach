'use strict';

function addition(n: number): number {
  if (n <= 1) {
    return 1;
  }
  else {
    return n + addition(n - 1);
  }
}

console.log(`Output is ${addition(5)}`);
