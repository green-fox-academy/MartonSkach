'use strict';

class Sharpie {
  name: string;
  color: string;
  width: number;
  inkAmount: number;

  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }

  use() {
    this.inkAmount -= this.width * 1;
    if (this.inkAmount < 0) {
      console.log(`The ${this.color} sharpie is out of ink`)
    } else {
      console.log(`Using the ${this.color} sharpie drained it's ink amount to ${this.inkAmount}`);
    }
  }
}

let blue = new Sharpie('Blue', 40);
let red = new Sharpie('Red', 5);

console.log(blue);
console.log(red);
blue.use();
blue.use();
blue.use();
red.use();