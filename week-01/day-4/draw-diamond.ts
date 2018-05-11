'use strict';
export {};

let lineCount: number = 13;
let star: string = '*';
let space: string = ' ';

for (let currentCount: number = 0; currentCount <= lineCount; currentCount++) {
    if (currentCount < lineCount / 2) {
        for (let i: number = 0; i < lineCount / 2; i++) {
            let empty: string = '';
            for (let j: number = 1; j < lineCount / 2 - i; j++) {
                empty = empty + space;
            }
            for (let k: number = 1; k <= (2 * i + 1); k++) {
                empty = empty + star;
            }
            console.log(empty);
            currentCount++;
        }
    
    } else {

       for (let i: number = lineCount - currentCount; i <= lineCount && i >= 0; i--) {
            let lowerEmpty: string = '';
            for (let j: number = 1; j < lineCount / 2 - i; j++) {
                lowerEmpty = lowerEmpty + space;
            }
            for (let k: number = 1; k <= (2 * i + 1); k++) {
                lowerEmpty = lowerEmpty + star;
            }
            console.log(lowerEmpty)
            currentCount++;
        }
    }
 }