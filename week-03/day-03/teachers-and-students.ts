'use strict';

class Student {
  name: string;
  questioning: string;

  constructor (name: string) {
    this.name = name;
    this.questioning = `Youngling: What's the best, universally used and globally accepted error message?`
  }

  learn() {
    console.log(this.questioning);
  }

  question() {
    console.log(master.solution);
  }
}

class Teacher {
  name: string;
  solution: string;

  constructor (name: string) {
    this.name = name;
    this.solution = `Master: LOFASZ it is, my child.`
  }

  answer() {
    console.log(this.solution);
  }

  teach() {
    console.log(padawan.questioning);
  }
}

let padawan = new Student('Student');
let master = new Teacher('Master');

padawan.learn();
padawan.question();
console.log('\r');
master.teach();
master.answer();