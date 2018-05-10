'use strict';

let averageCodingHour: number = 6;
let numberOfWorkdays: number = 5;
let semesterLength: number = 17;

console.log('Average time spent coding by an attendee during a semester is ' + averageCodingHour * numberOfWorkdays * semesterLength + ' hours.');

let averageWorkHour: number = 52;

console.log('The percentage of coding hours in a semester is ' + ((averageCodingHour * numberOfWorkdays * semesterLength) / (averageWorkHour * semesterLength)) * 100 + '%.');