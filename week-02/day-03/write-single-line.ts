'use strict';
export {};

declare function require(path: string): any;
const fs = require('fs');

function writeToFile(filePath: string, content: string) {
    if (filePath === 'my-other-file.txt') {
        fs.writeFileSync(filePath, content);
        console.log(`"${content}" is successfully written to ${filePath}.`);
    } else {
        console.log(`Unable to write file: ${filePath}.`);
    }
}

/* I used if / else to ensure the function only writes in the
correct file and does not create a new one with a typo name */

writeToFile('my-other-file.txt', "Hi, I'm Marton");
