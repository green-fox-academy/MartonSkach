'use strict';

class Animal {
  name: string;
  hunger: number;
  thirst: number;

  constructor(name: string) {
    if (name === 'Dodo bird') {
      this.name = name;
      this.hunger = 10;
      this.thirst = 10;
    } else if (name === 'Penguin') {
      this.name = name;
      this.hunger = 20;
      this.thirst = 20;
    }
    this.name = name;
    this.hunger = 50;
    this.thirst = 50;
  }

  eat(foodQuantity: number) {
    this.hunger -= foodQuantity;
  }

  drink(drinkAmount: number) {
    this.thirst -= drinkAmount;
  }

  play(playAmount: number) {
    this.thirst += playAmount;
    this.hunger += playAmount;
  }
}

let polarbear = new Animal('Polar bear');
let tiger = new Animal('Tiger');
let penguin = new Animal('Penguin');
let dodobird = new Animal('Dodo bird');

console.log(polarbear);
console.log(tiger);
console.log(penguin);
console.log(dodobird);
dodobird.play(5);
console.log(`*Dodo bird plays for 5 time intervals.*\r\n It's stats have changed to:`);
console.log(dodobird);
tiger.eat(15);
console.log(`*Tiger eats Dodo bird for 15 amounts of food.*\r\n It's stats have changed to:`);
console.log(tiger);
polarbear.drink(10);
console.log(`*Polar bear drinks 10 amounts of water.*\r\n It's stats have changed to:`);
console.log(polarbear);