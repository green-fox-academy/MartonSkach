'use strict';

let newSentence: string = '';
let i: number = 0;

function letterChanger(sentence: string): string {
  newSentence = sentence;
  
  if (newSentence.lastIndexOf('*') === sentence.length - 2) {
    return newSentence
  }
  else {
    if ((sentence.indexOf('*') === - 1)) {
      sentence = newSentence.slice(0, 1) + '*' + newSentence.slice(1, newSentence.length);
      return letterChanger(sentence);
    } else {
      i += 2;
      sentence = (newSentence.slice(0, newSentence.indexOf('*') + i)) + '*' + (newSentence.slice(newSentence.indexOf('*') + i, newSentence.length + i));
      return letterChanger(sentence);
    }
  }
}

console.log(letterChanger('MontyPython'));