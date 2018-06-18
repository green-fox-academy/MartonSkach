
function printPoint(point: {name: string, x: number, y: number}): void {
  console.log(`Coordinates of ${point.name}: ${point.x}, ${point.x}`);
}

let myObj = {name: 'P1', x: 10, y: 5, z: 20};

printPoint(myObj);

abstract class Car {
  brand: string;
  color: string;
  fuelAmount: number;

  constructor (brand: string, color: string) {
    this.brand = brand;
    this.color = color;
    this.fuelAmount = 0;
  }
}

class BMWFactroy extends Car {
  constructor(color: string) {
    super('BMW', color);
  }
}

const myBMW = new BMWFactroy ('blue');
console.log(myBMW);

//const myCar = new Car('BMW', 'black');
//console.log(myCar);