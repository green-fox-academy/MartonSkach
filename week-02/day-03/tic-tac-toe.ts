'use strict';
export{};

declare function require(path: string): any;
const fs = require('fs');

function declareWinner(filePath: string) {
    try {
        let winnerWinner: string = fs.readFileSync(filePath, 'utf-8').split('\r\n');
        console.log(winnerWinner);
        if (
            (winnerWinner[0] === 'OOO') ||
            (winnerWinner[1] === 'OOO') ||
            (winnerWinner[2] === 'OOO') ||
            (winnerWinner[0][0] === winnerWinner[0][1] && winnerWinner[0][1] === winnerWinner[0][2] && winnerWinner[0][0] === 'O') ||
            (winnerWinner[1][0] === winnerWinner[1][1] && winnerWinner[1][1] === winnerWinner[1][2] && winnerWinner[1][0] === 'O') ||
            (winnerWinner[2][0] === winnerWinner[2][1] && winnerWinner[2][1] === winnerWinner[2][2] && winnerWinner[2][0] === 'O') ||
            (winnerWinner[0][0] === winnerWinner[1][1] && winnerWinner[1][1] === winnerWinner[2][2] && winnerWinner[0][0] === 'O') ||
            (winnerWinner[2][0] === winnerWinner[1][1] && winnerWinner[1][1] === winnerWinner[0][2] && winnerWinner[2][0] === 'O'))
            {
            console.log('O is winner');
        } else if (
            (winnerWinner[0] === 'XXX') ||
            (winnerWinner[1] === 'XXX') ||
            (winnerWinner[2] === 'XXX') ||
            (winnerWinner[0][0] === winnerWinner[0][1] && winnerWinner[0][1] === winnerWinner[0][2] && winnerWinner[0][0] === 'X') ||
            (winnerWinner[1][0] === winnerWinner[1][1] && winnerWinner[1][1] === winnerWinner[1][2] && winnerWinner[1][0] === 'X') ||
            (winnerWinner[2][0] === winnerWinner[2][1] && winnerWinner[2][1] === winnerWinner[2][2] && winnerWinner[2][0] === 'X') ||
            (winnerWinner[0][0] === winnerWinner[1][1] && winnerWinner[1][1] === winnerWinner[2][2] && winnerWinner[0][0] === 'X') ||
            (winnerWinner[2][0] === winnerWinner[1][1] && winnerWinner[1][1] === winnerWinner[0][2] && winnerWinner[2][0] === 'X')) 
        {
            console.log('X is winner');
        } else {
            console.log(`It's a draw`);
        }  
    } catch(error) {
        console.log(`Unable to read file.`);
    }
}

declareWinner('win-x.txt');