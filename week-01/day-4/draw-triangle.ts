'use strict';
export {};

let lineCount: number = 4;

let star: string = '*'
let singleStar: string = '*'


for (let i: number = 0; i < lineCount; i++) {
    console.log(star);
    star = star + singleStar;
}

for (let i: number = 0; i < lineCount; i++) {
    let empty: string = '';
    for (let k: number = 1; k <= (i + 1); k++) {
        empty = empty + '*';
    }
    console.log(empty);
}