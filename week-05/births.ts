'use strict';

// Create a function that
// - takes a filename as a parameter,
// - reads a csv file which rows contains data in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
// - returns the year when the most births happend.
// You can find such a csv file in this directory: births.csv
// If you pass births.csv to your function, the result should be 2006.

declare function require(path: string): any;
const fs = require('fs');

function yearWithMostBirths(filePath: string): Object {
  let birthCount: Object = {};
  let fileContent: string[] = (fs.readFileSync(filePath, 'utf-8').split('\r\n'));
  let yearsFiltered: string[] = [];
  for (let i: number = 0; i < fileContent.length; i++) {
    yearsFiltered.push(fileContent[i].substring(fileContent[i].indexOf(';') + 1, fileContent[i].indexOf(';') + 5));
  }

  for (let j: number = 0; j < yearsFiltered.length; j++) {
    let year = yearsFiltered[j];
    if (birthCount[year]) {
      birthCount[year]++;
    } else {
      birthCount[year] = 1;
    }
  }

  let highestNumber: number = birthCount[Object.keys(birthCount)[0]];
  let highestYear: string = Object.keys(birthCount)[0];
  for (let k: number = 1; k < yearsFiltered.length; k++) {
    if (highestNumber < birthCount[Object.keys(birthCount)[k]]) {
      highestNumber = birthCount[Object.keys(birthCount)[k]];
      highestYear = Object.keys(birthCount)[k];
    }
  }
  console.log(highestYear);
  return birthCount;
}

yearWithMostBirths('birthr.csv');
