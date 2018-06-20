'use strict';

const paragraphs = document.querySelectorAll('p');

paragraphs[0].classList.add('red');
paragraphs[0].classList.remove('apple');

if (paragraphs[3].textContent === 'dolphin') {
  paragraphs[0].textContent = 'pear';
}

if (paragraphs[0].classList.contains('apple')) {
  console.log('eddig jo');
  paragraphs[2].textContent = paragraphs[2].textContent.replace('cat', 'dog');
}

paragraphs[1].style.borderRadius = '0%';


