'use strict';

function refactorio(n: number): number {
  if (n <= 1) {
    return 1;
  }
  else {
    return n * refactorio(n - 1);
  }
}

console.log(refactorio(5));