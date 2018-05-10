'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let secondsInADay: number = 60 * 60 * 24;

console.log('Seconds remaining from the day: ' + (secondsInADay - currentHours * 60 * 60 + currentMinutes * 60 + currentSeconds));