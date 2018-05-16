'use strict';

function divide(divisor: number) {
    if (divisor === 0) {
        throw new Error (`fail`);        
    }
    return 10 / divisor;
}

try {
    console.log(divide(0));
} catch(error) {
    console.log(error.message);
}