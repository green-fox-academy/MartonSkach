'use strict';


let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Saturn"

function putSaturn(planetList) {
    return planetList.concat('Saturn');
}

console.log(putSaturn(planetList));

export = putSaturn;