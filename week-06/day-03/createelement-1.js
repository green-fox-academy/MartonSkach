'use strict';

const asteroidList = document.querySelector('ul.asteroids');

const newAsteroid = document.createElement('li');
newAsteroid.textContent = 'The Green Fox';
const newerAsteroid = document.createElement('li');
newerAsteroid.textContent = 'The Lamplighter';

asteroidList.appendChild(newAsteroid);
asteroidList.appendChild(newerAsteroid);

const newImage = document.createElement('img');
newImage.setAttribute('src', 'https://i.ytimg.com/vi/M2K3hTSrE5Y/maxresdefault.jpg');
newImage.setAttribute('width', '500px');

const head = document.querySelector('.container');
head.textContent = 'I can add elements to the DOM!';
head.appendChild(newImage);