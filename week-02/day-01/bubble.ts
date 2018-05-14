'use strict';
export{};

let myArray: number [] = [8, 34, 12, 24, 9, 5];
let myBoolean: boolean = false;

if (myBoolean) {
    myArray.sort(function(a, b) {
        return a - b;
    });
} else {
    myArray.sort(function(a, b) {
        return b - a;
    });    
}
console.log(myArray);


