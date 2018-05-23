'use strict';

class PostIt {
  name: string;
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(name: string) {
    this.name = name;
    if (name === 'orangeAndBlue') {
      this.backgroundColor = 'orange';
      this.text = 'Idea 1';
      this.textColor = 'blue';
    } else if (name === 'pinkAndBlack') {
      this.backgroundColor = 'pink';
      this.text = 'Awesome';
      this.textColor = 'black';
    } else if (name === 'yellowAndGreen') {
      this.backgroundColor = 'yellow';
      this.text = 'Superb!';
      this.textColor = 'green';
    }
  }
}

let orangeAndBlue = new PostIt('orangeAndBlue');
let pinkAndBlack = new PostIt('pinkAndBlack');
let yellowAndGreen = new PostIt('yellowAndGreen');

console.log(orangeAndBlue);
console.log(pinkAndBlack);
console.log(yellowAndGreen);
