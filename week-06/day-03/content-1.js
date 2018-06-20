'use strict';

const lastOne = document.querySelector('.animals');
console.log(lastOne);

const paragraph = document.querySelectorAll('p');
console.log(paragraph);

paragraph[0].onclick = function () {
  paragraph.forEach(element => {
    element.innerHTML = lastOne.innerHTML;
  });
}