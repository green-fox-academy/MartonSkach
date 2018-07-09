'use strict';

function Animal() {
  this.name = `sheep`,
  this.hunger = 5,
  this.thirst = 5,
  this.eat = function () {
    this.hunger -= 1;
  },
  this.drink = function () {
    this.thirst -= 1;
  },
  this.play = function () {
    this.hunger += 1;
    this.thirst += 1;
  }
};

function Farm(number) {
  this.slots = 20,
  this.animals = [],
  this.breed = function () {
    if (this.animals.length <= this.slots) {
      let sheep = new Animal();
      this.animals.push(sheep);
    }
  },
  this.slaughter = function () {
  let leastHungry = this.animals[0];
  let indexOfLeastHungry = 0;
  this.animals.forEach(element => {
    if (element.hunger > leastHungry.hunger) {
      leastHungry = element;
      indexOfLeastHungry = this.animals.indexOf(element);
    }
  });
  this.animals.splice(indexOfLeastHungry - 1, 1);
  },
  this.progress = function () {
    this.animals.forEach(element => {
      let randomRoll = Math.floor(Math.random() * 2) + 1;
      switch (randomRoll) {
        case 1: element.eat();
        break;
      }
      randomRoll = Math.floor(Math.random() * 2) + 1;
      switch (randomRoll) {
        case 1: element.drink();
        break;
      }
      randomRoll = Math.floor(Math.random() * 2) + 1;
      switch (randomRoll) {
        case 1: element.play();
        break;
      }
    });
    this.slaughter();
    this.breed();
    if (this.animals.length > 0 && this.animals.length < this.slots) {
      return 'OK';
    } else if (this.animals.length === this.slots) {
      return 'Full';
    } else if (this.animals.length === 0) {
      return 'In our stupidity we overconsumed and the balance of life irreversably changed';
    }
  };
  for (let i = 0; i < number; i++) {
    this.breed();
  };
};

// Create a sheep farm with 20 slots
const SheepFarm = new Farm(20);



console.log(SheepFarm.animals.length); // Should log 20 Animal objects
console.log(SheepFarm.progress());

const button = document.querySelector('button');
const numberOfAnimals = document.querySelector('.numberOfAnimals');
const farmState = document.querySelector('.farmState');

button.addEventListener('click', function() {
  SheepFarm.progress();
  numberOfAnimals.innerText = SheepFarm.animals.length;
  farmState.innerText = SheepFarm.progress();
})

// Add a click event to the button and call 'progress'

// The progress function should log the following to the console:
//  -  The farm has 20 living animals, we are full