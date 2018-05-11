'use strict';
export {};

let lineCount: number = 4;


let star: string = '*';
let space: string = ' ';


for (let i: number = 0; i < lineCount; i++) {
    let empty: string = '';
    for (let j: number = 1; j < lineCount-i; j++) {
        empty = empty + space;
    }
    for (let k: number = 1; k <= (2 * i + 1); k++) {
        empty = empty + star;
    }
    console.log(empty);
}

for (let i: number = 0; i < lineCount; i++) {
    let empty: string = '';
    for (let k: number = 1; k <= (i + 1); k++) {
        empty = empty + star;
    }
    for (let j: number = 1; j < lineCount-i; j++) {
        empty = empty + space;
    }
    console.log(empty);
}


