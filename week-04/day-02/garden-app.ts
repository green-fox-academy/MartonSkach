'use strict';

import { Tree } from './trees';
import { Flower } from './flowers';

abstract class Garden {
  private name: string;
  private currentWaterAmount: number;
  private neededWaterAmount: number;

  constructor (name: string, neededWaterAmount: number) {
    this.name = name;
    this.currentWaterAmount = 0;
    this.neededWaterAmount = neededWaterAmount;
  }

  public watering(): void {
    this.currentWaterAmount++;
  }

  public needWater() {
    return this.currentWaterAmount < this.neededWaterAmount;
  }

  public reportStatus() {
    if (this.needWater() === true) {
      console.log(`The ${this.name} needs water.`);
    } else {
      console.log(`The ${this.name} doesn't need water`);
    } 
  }
}


let plants = [];

let yellowFlower = new Flower('yellow flower');
plants.push(yellowFlower);
let blueFlower = new Flower('blue flower');
plants.push(blueFlower);
let purpleTree = new Tree ('purple tree');
plants.push(purpleTree);
let orangeTree = new Tree('orange tree');
plants.push(orangeTree);

console.log(plants);
