'use strict';

class DigestiveSystem {
  private belly: number;
  private hungryLevel: number;

  constructor(hungryLevel: number) {
    this.belly = 0;
    this.hungryLevel = hungryLevel;
  }

  public eat(): void {
    this.belly++;
  }

  public poop(): boolean {
    if (this.belly > 0) {
      this.belly--;
      return true;
    }
    return false;
  }

  public isHungry() {
    return this.belly < this.hungryLevel;
  }
}

class Dog {
  private digestiveSystem: DigestiveSystem;

  constructor() {
    this.digestiveSystem = new DigestiveSystem(20);
  }

  public eat(): void {
    this.digestiveSystem.eat();
  }

  public poop(): boolean {
    return this.digestiveSystem.poop();
  }

  public isHungry(): boolean {
    return this.digestiveSystem.isHungry();
  }

  public reactToCucumber() {
    console.log('snif-snif');
  }
}

let dog: Dog = new Dog();

dog.reactToCucumber();
console.log(dog.isHungry());