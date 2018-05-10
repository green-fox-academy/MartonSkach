'use strict';
export{};

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

let counter: number = 1;

while (counter > 0 && counter <= 100) {
if (counter % 5 == 0 && counter % 3 == 0) {
    console.log('FizzBuzz');
    counter++;
} else if (counter % 5 == 0) {
    console.log('Buzz');
    counter++;
} else if (counter % 3 == 0) {
    console.log('Fizz');
    counter++;
} else {
    console.log(counter);
    counter++;
}
}