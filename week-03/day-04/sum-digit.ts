'use strict';
let sumofDigits: number = 0; 

function digitSum(n: number): number {
  let storedValue: number = n;
  if (storedValue <= 10) {
    return sumofDigits + storedValue % 10; 
  }
  else {
    sumofDigits += storedValue % 10;
    storedValue = Math.floor(n / 10);
    return (digitSum(storedValue));
  }
}

console.log(`The sum of digits is: ${digitSum(12649)}`);