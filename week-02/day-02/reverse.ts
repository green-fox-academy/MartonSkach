'use strict';

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverse (reversed) {
  return reversed.split('').reverse().join('');
}

console.log(reverse(reversed));

export = reverse;