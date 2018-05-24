'use strict';

function letterChanger(sentence: string): string {
  if (sentence.indexOf('x') === -1) {
    return sentence ;
  }
  else {
      sentence = sentence.replace('x', 'y');
      return letterChanger(sentence);
  }
}

console.log(letterChanger('MontxPxthon'));