'use strict';
export {};

declare function require(path: string): any;
const fs = require('fs');

function readFromFile(filePath: string): {
    try {
        let lineCounter: string = (fs.readFileSync(filePath, 'utf-8'));
        console.log(lineCounter.split(`\r\n`).length);
    } catch(error) {
        console.log(0);
    }
}

readFromFile('my-file.txt');