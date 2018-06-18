'use strict';

import { Bird } from './zoo';

interface Flyable {
  land();
  fly();
  takeOff();
}

abstract class Vehicle {
  name: string;
  numberOfPassengers: number;
  fuelLeft: number;
  constructor(name: string, numberOfPassengers?: number, fuelLeft?: number) {
    this.name = name;
    this.numberOfPassengers = numberOfPassengers;
    this.fuelLeft = fuelLeft;
  }
}

class Helicopter extends Vehicle implements Flyable {
  constructor(name: string, numberOfPassengers: number, fuelLeft: number) {
    super(name, numberOfPassengers, fuelLeft);
  }
  takeOff() {
    return `The ${this.name} is taking off.`;
  }
  land() {
    return `The ${this.name} is landing.`;
  }
  fly() {
    return `The ${this.name} is flying.`;
  }
}
//------------------------------------------------------------------
let helicopter = new Helicopter('AH-64 Apache', 1, 30);
let bird = new Bird("Parrot");

console.log(helicopter);
console.log(helicopter.fly());
console.log(bird);
console.log(bird.fly());

export { Flyable };