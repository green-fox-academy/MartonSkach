'use strict';

const theList = document.querySelector('.asteroids');
console.log(theList);
const theKing = document.querySelector('li');
console.log(theKing);

theList.removeChild(theKing);

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]

planetData.forEach(element => {
  if (element.asteroid) {
    console.log('eddig jo');
    const htmlElement = document.createElement('div');
    htmlElement.innerText = element.content;
    theList.appendChild(htmlElement);
  }
});