'use strict';

declare function require(path: string): any;
const fs = require('fs');

function readFromFile(filePath: string) {
    try {
        console.log(fs.readFileSync(filePath, 'utf-8'));
    } catch(error) {
        console.log(`Unable to read file: ${filePath}`);
    }
}

readFromFile('my-file.txt');
