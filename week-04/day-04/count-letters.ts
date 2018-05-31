'use strict';

export function letterCount (text: string): Object {
  let counter: Object = {};
  let lowerCaseText = text.toLowerCase();
  console.log(lowerCaseText);
  for (let i: number = 0; i < lowerCaseText.length; i++) {
    let letter = lowerCaseText[i];
    if (counter[letter]) {
      counter[letter]++;
    } else {
      counter[letter] = 1;
    }
  }
  return counter;
}

// letterCount('sfewffSSDDWEds');