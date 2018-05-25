'use strict';
export {};

let a: number = 12;
a = a + 4;
console.log(a); // Prints 16

let b: number = 12;
b = b - 4;
console.log(b); // Prints 8

let c: number = 12;
c *= 3;
console.log(c); // Prints 36

let d: number = 12;
d /= 3;
console.log(d); // Prints 4

let e: number = 12;
e %= 7;
console.log(e); // Prints 5

let f: number = 12;
f++;
console.log(f); // Prints 13

let g: number = 12;
g--;
console.log(g); // Prints 11

let h: number = 10;
console.log(h); // Prints 10
console.log(h++); // Prints 10
console.log(h); // Prints 11

let i: number = 10;
console.log(i); // Prints 10
console.log(++i); // Prints 11
console.log(i); // Prints 11