'use strict';
export{};

declare function require(path: string): any;
const fs = require('fs');

function declareWinner(filePath: string) {
    try {
        let winnerWinner: string = fs.readFileSync(filePath, 'utf-8');
        if (winnerWinner === 'O is winner') {
            console.log('O');
        } else if (winnerWinner === 'X is winner') {
            console.log('X');
        } else if (winnerWinner === 'Draw') {
            console.log(`It's a draw`);
        }   
    } catch(error) {
        console.log(`Unable to read file.`);
    }
}

declareWinner('draw.txt');