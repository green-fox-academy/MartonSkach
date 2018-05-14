'use strict';
export{};

function factorio(a: number) {
    let myMax: number = a;
    let factorial: number = a;
    for (let i: number = 1; i < myMax; i++) {
        a *= factorial-1;
        factorial--;
    }
    return a;
}
console.log(factorio(7));

factorio(7);