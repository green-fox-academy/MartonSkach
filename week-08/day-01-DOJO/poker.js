'use strict'

let whiteValue = 0;
let blackValue = 0;

module.exports = (white, black) => {

  
  
  highestCard(white, black);
  
  if (whiteValue === blackValue) {
    return `It's a draw`
  } else if (whiteValue > blackValue) {
    return 'White wins the round';
  } else {
    return 'Black wins the round';
  }
};

//---SEPARATOR---------------------------


//---LETTER COUNTER----------------------
function letterCount(hand) {
  let counter = {};
  for (let i = 0; i < hand.length; i++) {
    let letter = hand[i];
    if (counter[letter]) {
      counter[letter]++;
    } else {
      counter[letter] = 1;
    }
  }
  return counter;
}

//---HIGHEST NUMBER-----------------------
function highestCard(white, black) {
  white.forEach(element => {
    if (element === 'T') {
      if (whiteValue < 10) {
        whiteValue = 10;
      }
    } else if (element === 'J') {
      if (whiteValue < 11) {
        whiteValue = 11;
      }
    } else if (element === 'Q') {
      if (whiteValue < 12) {
        whiteValue = 12;
      }
    } else if (element === 'K') {
      if (whiteValue < 13) {
        whiteValue = 13;
      }
    } else if (element === 'A') {
      if (whiteValue < 14) {
        whiteValue = 14;
      }
    } else {
      if (whiteValue < element) {
        whiteValue = element;
      };
    }
  });
  black.forEach(element => {
    if (element === 'T') {
      if (blackValue < 10) {
        blackValue = 10;
      }
    } else if (element === 'J') {
      if (blackValue < 11) {
        blackValue = 11;
      }
    } else if (element === 'Q') {
      if (blackValue < 12) {
        blackValue = 12;
      }
    } else if (element === 'K') {
      if (blackValue < 13) {
        blackValue = 13;
      }
    } else if (element === 'A') {
      if (blackValue < 14) {
        blackValue = 14;
      }
    } else {
      if (blackValue < element) {
        blackValue = element;
      };
    }
  });
}

//----------------------------------------

console.log(letterCount([6, 'T', 9, 'Q', 5]));
console.log(letterCount(['K', 'T', 9, 8, 8]));