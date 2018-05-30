'use strict';

abstract class Instrument {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract play();
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
  constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings || 6;
  }
  abstract sound();
  play() {
    this.sound();
  }
}

class ElectricGuitar extends StringedInstrument {
  soundOfStrings: string;
  constructor(numberOfStrings?: number, name?: string) {
    super(name = 'Electric Guitar', numberOfStrings);
    this.soundOfStrings = 'Twang';
    this.numberOfStrings = numberOfStrings || 6
  }
  sound() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.soundOfStrings}`);
  }
}

class BassGuitar extends StringedInstrument {
  soundOfStrings: string;
  constructor(numberOfStrings?: number, name?: string) {
    super(name = 'Bass Guitar', numberOfStrings);
    this.soundOfStrings = 'Duum-duum-duum';
    this.numberOfStrings = numberOfStrings || 4
  }
  sound() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.soundOfStrings}`);
  }
}

class Violin extends StringedInstrument {
  soundOfStrings: string;
  constructor(numberOfStrings?: number, name?: string) {
    super(name = 'Violin', numberOfStrings);
    this.soundOfStrings = 'Screech';
    this.numberOfStrings = numberOfStrings || 4
  }
  sound() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.soundOfStrings}`);
  }
}
//----------------------------------------------------------
console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();
