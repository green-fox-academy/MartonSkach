'use strict';

let parameterArray: number[] = [1, 11, 34, 11, 52, 61, 1, 34];


function unique(parameterArray) {
    let newArray: number[] = [];
    for (let i: number = 0; i < parameterArray.length; i++) {
        if (newArray.indexOf(parameterArray[i]) == -1 ) {   //Checks if parameterArraw[i] is existing in newArray
            newArray.push(parameterArray[i]);               //if not, pushes it into newArray
        }
    }
    return newArray;
}
console.log(unique(parameterArray));

