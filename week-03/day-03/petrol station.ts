'use strict';

class Station {
  name: string;
  gasAmount: number;

  constructor(name: string, gasAmount: number) {
    this.name = name;
    this.gasAmount = gasAmount;
  }

  refill(Car) {
    this.gasAmount = this.gasAmount - (Car.capacity - Car.gasAmount);
    Car.gasAmount += Car.capacity - Car.gasAmount
    console.log(`Gas remaining at the station: ${this.gasAmount}`);
  } 
}

class Car {
  name: string;
  gasAmount: number;
  capacity: number;

  constructor(name: string) {
    this.name = name;
    this.gasAmount = 0;
    this.capacity = 100;
  }
  
  use(usage: number) {
    this.gasAmount = this.gasAmount - usage;
    console.log(`${this.name} has ${this.gasAmount} remaining.`)
  }
}

let carOne = new Car ('Car 1');
let carTwo = new Car ('Car 2');
let stationOne = new Station ('Station', 1200);

console.log(stationOne);
stationOne.refill(carOne);
console.log(carOne);
stationOne.refill(carTwo);
console.log(carTwo);
carOne.use(70);
stationOne.refill(carOne);
console.log(carOne);
