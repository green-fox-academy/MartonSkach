'use strict';
export{};


let matrixSize: number = 6;
let counter: number = matrixSize;
let matrix: any[] = [];

for (let i: number = 0; i < matrixSize; i++) {
    let lineArray: number[] = [];
    for (let j: number = 1; j <= matrixSize; j++) {
        if (j == counter) {
            lineArray.push(1);
            counter--;
        } else {
            lineArray.push(0);
        }
    }
    matrix.push(lineArray);
    
}
console.log(matrix);