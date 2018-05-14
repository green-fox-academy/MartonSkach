'use strict';

let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];

drinks = drinks.map(function(e) {
    return e + e;
});

console.log(drinks);