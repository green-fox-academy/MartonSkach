'use strict';

import {Carrier} from './carrier';

class Aircraft {
  name: string;
  baseDamage: number;
  currentAmmo: number;
  ammoCapacity: number;

  constructor (name: string, baseDamage: number, ammoCapacity: number) {
    this.name = name;
    this.baseDamage = baseDamage;
    this.ammoCapacity = ammoCapacity;
    this.currentAmmo = 0;
  }

  fight() {
    let damageDealt: number = this.currentAmmo * this.baseDamage;
    this.currentAmmo = 0;
    return damageDealt;
  }

  refill(ammunition: number) {
    let refillAmount: number = (this.ammoCapacity - this.currentAmmo);
    if (ammunition <= refillAmount) {
      this.currentAmmo += ammunition;
      return 0;
    } else {
      this.currentAmmo += refillAmount;
      return ammunition - refillAmount;
    }
  }

  getType(input) {
    return typeof(input)
  }

  getStatus() {
    return `Type ${this.name}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.baseDamage * this.currentAmmo}`;
  }

}

let f16 = new Aircraft('F16', 30, 8);
let f35 = new Aircraft('F35', 50, 12);

console.log(f16);
//console.log(f16.fight());
console.log(f16.refill(20));
console.log(f16.fight());
console.log(f16.getStatus());
console.log(f16.getType(f16));
console.log(f16);