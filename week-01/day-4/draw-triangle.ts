'use strict';
export {};

let lineCount: number = 4;

let star: string = '*'
let singleStar: string = '*'


for (let i: number = 0; i < lineCount; i++) {
    console.log(star);
    star = star + singleStar;
}