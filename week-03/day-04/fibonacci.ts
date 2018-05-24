'use strict';
export { };

let fibonacciArray: number[] = [0, 1];
let i: number = 1;

function fibonacci(n: number): number {
  if (n === 1) {
    return fibonacciArray[i];
  }
  else {
    fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i])
    i++
    return fibonacci(n - 1);
  }

}

console.log(fibonacci(8));