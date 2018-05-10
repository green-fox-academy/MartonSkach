'use strict';
export{};

let a: number = 3;
// make it bigger by 10
a = a + 10;
console.log(a);

let b: number = 100;
// make it smaller by 7
b = b - 7;
console.log(b);

let c: number = 44;
// double c's value
c *= 2;
console.log(c);

let d: number = 125;
// divide d's value by 5
d /= 5;
console.log(d);

let e: number = 8;
// what's the cube of e's value?
e **= 3 
console.log(e);

// tell if f1 is bigger than f2 (as a boolean)
let f1: number = 123;
let f2: number = 345;
if (f1 > f2) {
    console.log('f1 is bigger than f2')
} else {
    console.log('f2 is bigger than f1')
}

// tell if the double of g2 is bigger than g1 (pras a boolean)
let g1: number = 350;
let g2: number = 200;
if (g1 < g2 * 2) {
    console.log('the double of g2 is bigger than g1')
} else {
    console.log('g1 is bigger than the double of g2')
}

// tell if h has 11 as a divisor (as a boolean)
let h: number = 1357988018575474;
let remainder: number = h % 11;
if (remainder !== 0 ) {
    console.log('11 is a divisor of h')
}   else {
    console.log('11 is not a divisor of h')
}

// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
let i1: number = 10;
let i2: number = 3;
if (i2 ** 2 < i1 && i2 ** 3 > i1) {
    console.log('It is')
} else {
    console.log('It\'s not')
}

// tell if j is dividable by 3 or 5 (as a boolean)
let j: number = 1521;
if ((j % 3 || 5) !== 0) {
    console.log('It\'s dividable with 3 or 5')
}

// fill the k variable with its content 4 times
let k: string = 'Apple';
console.log(k + k + k + k);