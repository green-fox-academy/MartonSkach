'use strict';

let numList: number[] = [1, 2, 3, 8, 5, 6];

numList = numList.map(function(x) {
    return x / 2;
});

console.log(numList[3]);