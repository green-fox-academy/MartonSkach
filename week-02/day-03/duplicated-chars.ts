'use strict';
export { };

declare function require(path: string): any;
const fs = require('fs');

function removeDuplicate(filePath: string) {
    let tempString: string[] = fs.readFileSync(filePath, 'utf-8').split('');
    /*for (let j: number = 0; j < tempString.length; j++) {
        tempString[j].split('');
    }*/
    let reducedString: string[] = [];
    let correctedText: string[] = [];
    for (let i: number = 0; i < tempString.length; i++) {
        if (i % 2 === 0) {
            reducedString.push(tempString[i]);
        }
    }
    /* for (let j: number = 0; j < reducedString.length; j++) {
        console.log(reducedString[j].join());
    } */
    let finalText: any = reducedString.toString();
    console.log(finalText.join(','));
}

try {
    removeDuplicate('duplicated-chars.txt');
} catch (error) {
    console.log('LOFASZ')
};
