'use strict';
export { };

declare function require(path: string): any;
const fs = require('fs');

function removeDuplicate(filePath: string) {
    let tempString: string[] = fs.readFileSync(filePath, 'utf-8').split('');

    let reducedString: string[] = [];
    let correctedText: string[] = [];
    for (let i: number = 0; i < tempString.length; i++) {
        if (i % 2 === 0) {
            reducedString.push(tempString[i]);
        }
    }

    for (let j: number = 0; j < reducedString.length; j++) {
        let k: number = 0;
        if (reducedString[j] === '\r') {
            correctedText.push('\n');
        }
        correctedText.push(reducedString[j]);
    }

    return correctedText.join('');

    


}

try {
    console.log(removeDuplicate('duplicated-chars.txt'));
} catch (error) {
    console.log('LOFASZ')   // <= I'm looking forward to the day when I can write such sophisticated code as Áron,
};                          // who was kind enough to help me out with this little, but delicate error message.
