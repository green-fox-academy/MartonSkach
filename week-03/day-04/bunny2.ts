'use strict';
export{};

let earCount: number = 0;

function bunnyCounter(n: number): number {
  if (n <= 1) {
    return earCount + 2;
  }
  else {
    if (n % 2 === 0)
      return earCount += bunnyCounter(n - 1) + 3;
    else {
      return earCount += bunnyCounter(n - 1) + 2;
    }
  }
}

console.log(bunnyCounter(10));