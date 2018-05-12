'use strict';
export{};


let lineCount: number = 8;

for (let a: number = 0; a < lineCount; a++) {
    let lineString: string = '';
    if (a % 2 != 0) {
        for (let b: number = 0; b < lineCount; b++) {
            if (b % 2 != 0) {
                lineString = lineString + '▓';
            } else {
                lineString = lineString + ' ';
            }
        }
    }
    if (a % 2 == 0) {
        for (let c: number = 0; c < lineCount; c++) {
            if (c % 2 != 0) {
                lineString = lineString + ' ';
            } else {
                lineString = lineString + '▓';
            }
        }
    }
console.log(lineString);
}