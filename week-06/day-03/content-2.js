'use strict'

let listElements = ['apple', 'banana', 'cat', 'dog'];

const placeholderList = document.querySelectorAll('ul li');

console.log(placeholderList);

for (let i = 0; i < listElements.length; i++) {
   placeholderList[i].innerText = listElements[i];
}

