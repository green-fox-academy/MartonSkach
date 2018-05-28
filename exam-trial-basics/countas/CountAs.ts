// Create a function that takes a filename as string parameter,
// counts the occurances of the letter "a", and returns it as a number.
// If the file does not exist, the function should return 0 and not break.

// example: on the input "afile.txt" the function should return 28 - print this result
// example: on the input "not-a-file" the function should return 0 - print this result

'use strict';

declare function require(path: string): any;
const fs = require('fs');

try {
  let numberOfLetters: string[] = [];
  let fileContent: string = fs.readFileSync('afile.txt', 'utf-8');
  let newFileContent: string[] = fileContent.toLowerCase().split('');
  for (let i: number = 0; i <= newFileContent.length; i++) {
    if (newFileContent[i] === 'a') {
      numberOfLetters.push(fileContent[i])
    }
  }
  console.log(numberOfLetters.length);
} catch (error) {
  console.log(0)
};
