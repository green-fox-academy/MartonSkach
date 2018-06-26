'use strict'

for (let i = 1; i <= 100; i++) {
  document.getElementsByTagName('section')[0].innerHTML += `<div>${i}</div>`;
}

let j = 1;
const primeValidator = (number) => {
  if (number === 2 ||
    number === 3 ||
    number === 5 ||
    number === 7
  ) {
    document.getElementsByTagName('div')[number - 1].classList.add("prime");
  } else if (number === 1 ||
    number % 2 === 0 ||
    number % 3 === 0 ||
    number % 5 === 0 ||
    number % 7 === 0
  ) {
    document.getElementsByTagName('div')[number - 1].classList.add("not-prime");
  } else {
    document.getElementsByTagName('div')[number - 1].classList.add("prime");
  }
  if (j < 100) {
    setTimeout(() => primeValidator(j), 400);
  }
  clearInterval(blinker);
  j++
}


let blinker = setInterval(() => primeValidator(j), 400);
/*
for (let j = 1; j <= document.getElementsByTagName('section')[0].childNodes.length; j++) {
}
*/
console.log(document.getElementsByTagName('section')[0].childNodes);

