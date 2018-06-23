'use strict';

const imageGallery = [
  { title: 'moon', url: './img/moon.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor consequatur impedit, laborum veniam facilis aliquam maxime inventore excepturi natus voluptatem error modi vitae ratione exercitationem minus labore nulla expedita?' },
  { title: 'Some water', url: './img/sea.jpg', description: 'Something else' },
  { title: 'Some rocks', url: './img/rocks.jpg', description: 'This is a third content' },
  { title: 'waterfall', url: './img/waterfall.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor consequatur impedit, laborum veniam facilis aliquam maxime inventore excepturi natus voluptatem error modi vitae ratione exercitationem minus labore nulla expedita?' },
  { title: 'Some water', url: './img/hill.jpg', description: 'Something else' },
  { title: 'Some rocks', url: './img/ship.jpg', description: 'This is a third content' }
]


let i = 0;
let j = 0;
document.querySelector('.mainImage').setAttribute('src', `${imageGallery[i].url}`);
document.querySelector('h2').innerText = `${imageGallery[i].title}`;
document.querySelector('.description').innerText = `${imageGallery[i].description}`;
document.querySelector('#pic1').setAttribute('src', `${imageGallery[i].url}`);
document.querySelector('#pic2').setAttribute('src', `${imageGallery[i + 1].url}`);
document.querySelector('#pic3').setAttribute('src', `${imageGallery[i + 2].url}`);
document.querySelector('#pic4').setAttribute('src', `${imageGallery[i + 3].url}`);
document.querySelector('#pic5').setAttribute('src', `${imageGallery[i + 4].url}`);

const leftButton = document.querySelector('.scrollLeft');
leftButton.onclick = function () {
  i--;
  if (i < 0) {
    i = imageGallery.length - 1;
  }
  document.querySelector('.mainImage').setAttribute('src', `${imageGallery[i].url}`);
  document.querySelector('h2').innerText = `${imageGallery[i].title}`;
  document.querySelector('.description').innerText = `${imageGallery[i].description}`;

  j = i;
  document.querySelector('#pic1').setAttribute('src', `${imageGallery[j].url}`);
  j++;
  if (j > imageGallery.length - 1) {
    j = 0
  }
  document.querySelector('#pic2').setAttribute('src', `${imageGallery[j].url}`);
  j++;
  if (j > imageGallery.length - 1) {
    j = 0
  }
  document.querySelector('#pic3').setAttribute('src', `${imageGallery[j].url}`);
  j++;
  if (j > imageGallery.length - 1) {
    j = 0
  }
  document.querySelector('#pic4').setAttribute('src', `${imageGallery[j].url}`);
  j++;
  if (j > imageGallery.length - 1) {
    j = 0
  }
  document.querySelector('#pic5').setAttribute('src', `${imageGallery[j].url}`);
}

const rightButton = document.querySelector('.scrollRight');
rightButton.onclick = function () {
  i++;
  if (i > imageGallery.length - 1) {
    i = 0;
  }
  document.querySelector('.mainImage').setAttribute('src', `${imageGallery[i].url}`);
  document.querySelector('h2').innerText = `${imageGallery[i].title}`;
  document.querySelector('.description').innerText = `${imageGallery[i].description}`;

  j = i;
  document.querySelector('#pic1').setAttribute('src', `${imageGallery[j].url}`);
  j++;
  if (j > imageGallery.length - 1) {
    j = 0
  }
  document.querySelector('#pic2').setAttribute('src', `${imageGallery[j].url}`);
  j++;
  if (j > imageGallery.length - 1) {
    j = 0
  }
  document.querySelector('#pic3').setAttribute('src', `${imageGallery[j].url}`);
  j++;
  if (j > imageGallery.length - 1) {
    j = 0
  }
  document.querySelector('#pic4').setAttribute('src', `${imageGallery[j].url}`);
  j++;
  if (j > imageGallery.length - 1) {
    j = 0
  }
  document.querySelector('#pic5').setAttribute('src', `${imageGallery[j].url}`);
}