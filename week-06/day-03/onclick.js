'use strict';

const partyButton = document.querySelector('button');
const bodyAtr = document.querySelector('body');

partyButton.onclick = function () {
  if (bodyAtr.classList.contains('party')) {
    bodyAtr.classList.remove('party');
  } else {
    bodyAtr.classList.add('party');
    //bodyAtr.setAttribute('class','party');
  }
}
