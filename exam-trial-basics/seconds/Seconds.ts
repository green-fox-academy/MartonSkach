// Create a function that takes a list as a parameter,
// and returns a new list with every second element from the orignal list
// example: [1, 2, 3, 4, 5] should produce [2, 4] - print this result

'use strict';

let listOfNumbers: number[] = [1, 2, 3, 4, 5];
let a: number = 1;

for (let i: number = 1; i <= listOfNumbers.length / 2; i++) {
  console.log(listOfNumbers[a]);
  a += 2;
}