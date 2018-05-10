'use strict';
export {};

let a: number = 2;

while (a >= 0 && a < 500 && a % 2 == 0) {
    console.log(a);
    a += 2;
}