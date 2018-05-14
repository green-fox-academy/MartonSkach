'use strict';

let animals: string[] = ['kuty', 'macsk', 'cic'];

animals = animals.map(function(e) {
    return e + 'a';
});

console.log(animals);