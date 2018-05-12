'use strict';
export{};


let lineCount: number = 6;

for (let i: number = 0; i < lineCount; i++) {
    let lineString: string = '';
    if (i == 0 || i == lineCount - 1) {
        for (let a: number = 1; a < lineCount; a++) {
            lineString = lineString + '%';
        }
    } else {
        for (let b: number = 1; b < lineCount; b++) {
            if (b == 1 || b == lineCount-1 || b == i + 1) {
                lineString = lineString + '%';
            } else {
                lineString = lineString + ' '
            }
        } 
       
    }
    console.log(lineString);
}
