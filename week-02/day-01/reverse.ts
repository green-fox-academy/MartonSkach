'use strict';
export{};

let numList: number[] = [3, 4, 5, 6, 7]
console.log('Original: ' + numList);


let reversed: number[] = numList.reverse();
console.log('Reversed: ' + reversed);

let reverseLooped: number[] = [];

for (let i: number = 0; i < numList.length; i++) {
    let a: number = numList[i];
    reverseLooped.push(a);
}

console.log('Loop method: ' + reverseLooped);