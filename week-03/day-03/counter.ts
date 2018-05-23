'use strict';

class Counter {
  integer: string;
  value: any;
  initialValue: number;

  constructor(integer: string, value?: number) {
    this.integer = integer;
    if (value !== undefined) {
      this.value = value;
    } else {
      this.value = 0;
    }
    this.initialValue = this.value;
  }
  
  add(number?: number) {
    if (number !== undefined) {
      this.value += number;
    } else {
      this.value++
    }
    console.log(`The new value is: ${this.value}`);
  }

  get() {
    this.value = `"${this.value.toString()}"`;
    console.log(this.value);
  }

  reset() {
    this.value = this.initialValue;
    console.log(`${this.integer}'s value has been set back to ${this.value}`);
  } 
}

let firstInteger = new Counter('First integer', 36);
let secondInteger = new Counter('Second integer');

console.log(firstInteger);
firstInteger.add();
firstInteger.add(24);
firstInteger.get();
firstInteger.add();
firstInteger.reset();
console.log(secondInteger);
