'use strict';
export{};

declare function require(path: string): any;
const fs = require('fs');

function copyFile(filePathSource: string, filePathDestination: string) {
    let copiedContent: string = fs.readFileSync(filePathSource, 'utf-8');  
    try {
        fs.writeFileSync(filePathDestination, copiedContent);
        return true;
    } catch(error) {
        return false;
    }
}

console.log(copyFile('source.txt', 'destination.txt'));
