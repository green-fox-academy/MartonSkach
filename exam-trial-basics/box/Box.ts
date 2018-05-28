// Create a class that represents a cuboid:
// It should take its three dimensions as constructor parameters (numbers)
// It should have a method called `getSurface` that returns the cuboid's surface
// It should have a method called `getVolume` that returns the cuboid's volume

class Cube {
  aSide: number;
  bSide: number;
  cSide: number;

  constructor(aSide: number, bSide: number, cSide: number) {
    this.aSide = aSide;
    this.bSide = bSide;
    this.cSide = cSide;
  }
  getSurface() {
    console.log(`The cube's volume is: ${this.aSide * this.bSide * this.cSide} square unit(s)`);
  }
  getVolume() {
    console.log(`The cube's surface is: ${(2 * (this.aSide * this.bSide + this.bSide * this.cSide + this.cSide * this.aSide))} unit(s)`);
  }
}

let firstCube = new Cube(4, 6, 8);
let secondCube = new Cube(6, 6, 6);
let thirdCube = new Cube(2, 10, 5);

firstCube.getSurface();
firstCube.getVolume();
secondCube.getSurface();
secondCube.getVolume();
thirdCube.getSurface();
thirdCube.getVolume();
