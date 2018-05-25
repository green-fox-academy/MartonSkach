'use strict';

let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];



function makingMatches(girls, boys) {
    girls.forEach(outputGirls);
    boys.forEach(outputBoys);   
    function outputGirls(item); {
    }
    function outputBoys(item); {
    }
    console.log(`${outputGirls(item)} and ${outputBoys(item)}`);

}
console.log(makingMatches(girls, boys));

export = makingMatches;