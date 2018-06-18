import { Printable } from './printable'
import { dominoes } from './dominoes-for-printable';

class Domino implements Printable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }
  printAllFields() {
    dominoes.forEach(element => {
      console.log(element);
    });
  }
}

export { Domino };