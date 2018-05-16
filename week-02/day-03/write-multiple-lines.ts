'use strict';
export {};

declare function require(path: string): any;
const fs = require('fs');

function writeToFile(filePath: string, content: string, number: number) {
    let multipliedContent: string = content;
    try {
        for (let i: number = 1; i < number; i++) {
        content = content + '\r\n' + multipliedContent;
        }
        fs.writeFileSync(filePath, content);
        return (content);
    } catch(error) {
        return (`Everythign is fine here, move along (it's not)`);
    }
}

console.log(writeToFile('apple.txt', "apple", 7));