'use strict';

export function getFibonacci(a: any) {
  let i: number = 1;
  let fibonacciArray: number[] = [0, 1];
  return fibonacci(a);
  function fibonacci(n: number) {
    try {
      if (n === 0) {
        return 0;
      } else if
      (n === 1) {
        return fibonacciArray[i];
      } else {
        fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i])
        i++
        return fibonacci(n - 1);
      }
    }
    catch (err) {
      return `The given parameter is not a number!`
    }
  }
}