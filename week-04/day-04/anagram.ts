'use strict';

export function anagram (firstWord: string, secondWord: string ): Object {
  let a: string[] = firstWord.toLocaleLowerCase().split('').sort();
  let b: string[] = secondWord.toLocaleLowerCase().split('').sort();
  if (a.length === b.length) {
    let i: number = 0;
    while (i < a.length) {
      if (a[i] === b[i]) {
        i++;
      } else {
        return `Not an anagram`;
      }
    }
    return `It's an anagram!`;
  }
  return `Not an anagram`;
}

