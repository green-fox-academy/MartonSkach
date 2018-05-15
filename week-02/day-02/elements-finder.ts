'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(numbers) {
    if (numbers.indexOf(7) === -1) {
        return 'Noooooo';
    }
    return 'Hoorray';
}

function containsSevenSecond(numbers) {
    if (numbers.hasOwnProperty('7')) {
        return 'Hoorray';
    }
    return 'Noooooo';
}

console.log(containsSeven(numbers));
console.log(containsSevenSecond(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!


export = containsSeven;