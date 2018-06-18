'use strict';

export class Carrier {
  name: string;
  hitPoints: number;
  storedAmmo: number;

  constructor (name: string, hitPoints: number, initialAmmo: number) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.storedAmmo += initialAmmo;
  }

  add() {

  }

  fill() {

  }

  fight() {

  }

  getStatus() {

  }

  isPriority() {
    
  }
}

let carrier1 = new Carrier('Tassadar', 6000, 3000);
let carrier2 = new Carrier('Fenix', 4500, 2000);