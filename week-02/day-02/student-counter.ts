'use strict';

let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];


// create a function that takes a list of students and logs: 
// - how many candies are owned by students

function candyCount(students) {
    return students.map(students => {
        return `${students.name} has ${students.candies} candies`;
    });
}

// create a function that takes a list of students and logs:
// - Sum of the age of people who have less than 5 candies

function sumAge(students) {
    const longNames = students.filter(name => (name.length > 5));
    console.log(longNames);
}

console.log(candyCount(students));
console.log(sumAge(students));