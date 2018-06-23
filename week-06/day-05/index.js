'use strict';

const imageGallery = [
  { title: 'Sleepy cat', url: './img/pic1.jpg', description: 'Cat ipsum dolor sit amet, scratch leg; meow for can opener to feed me. Your pillow is now my pet bed purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table scratch me there, elevator butt yet chase the pig around the house so the dog smells bad or instantly break out into full speed gallop across the house for no reason.' },
  { title: 'Cat with sunrays and flowers', url: './img/pic2.jpg', description: `Cat ipsum dolor sit amet, howl uncontrollably for no reason. Play time sleep on dog bed, force dog to sleep on floor for scream at teh bath but brown cats with pink ears. Run around the house at 4 in the morning rub whiskers on bare skin act innocent lie in the sink all day so give me some of your food give me some of your food give me some of your food meh, i don't want it.` },
  {
    title: 'Snowy cat', url: './img/pic3.jpg', description: `Nietzsche ipsum mountains faithful fearful chaos will sexuality evil abstract pious justice merciful. Good mountains pinnacle ubermensch intentions. Pinnacle mountains convictions madness dead hatred virtues eternal-return convictions love. Society victorious derive moral hatred disgust free convictions. Self convictions christianity sea disgust law.
  ` },
  { title: 'Round cat', url: './img/pic4.jpg', description: `Samuel L. ipsum now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.` },
  { title: 'Photogenic cat', url: './img/pic5.jpg', description: `Lórum ipse az egyik baladalmas görkező kultság. Innentől kezdve már minden végtelenül hányos és műszakilag potrányos. A vitehézekbe öltelnek egy-egy éreplőt a fogtatott vermössel.. Közvetlenül az andázlan lemzények vétkezete előtt fánccal homorítnak a helyes lemzényre. Nem kell torányomnia, nincs cécó nyitos almaságra!` },
  { title: 'Cat and evil intruder', url: './img/pic6.jpg', description: 'Social good ipsum bandwidth vibrant contextualize thought leadership leverage social intrapreneurship impact investing our work. Innovate green space collaborate NGO natural resources granular move the needle effective altruism. Mass incarceration social return on investment inclusion replicable peaceful mass incarceration shared unit of analysis' },
  { title: 'Devilcat', url: './img/pic7.jpg', description: `Metaphor ipsum we can assume that any instance of an argument can be construed as a manlike mark. To be more specific, the wrecker is a decade. Far from the truth, a labile frog without bikes is truly a maria of unbid golds. A horsy corn's rhythm comes with it the thought that the kosher pan is a rise.` }
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

function renderThumbnail() {
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


function RenderSite() {
  document.querySelector('.mainImage').setAttribute('src', `${imageGallery[i].url}`);
  document.querySelector('h2').innerText = `${imageGallery[i].title}`;
  document.querySelector('.description').innerText = `${imageGallery[i].description}`;

  renderThumbnail();
}

const leftButton = document.querySelector('.scrollLeft');
leftButton.onclick = function () {
  i--;
  if (i < 0) {
    i = imageGallery.length - 1;
  }
  document.querySelector('.mainImage').setAttribute('src', `${imageGallery[i].url}`);
  document.querySelector('h2').innerText = `${imageGallery[i].title}`;
  document.querySelector('.description').innerText = `${imageGallery[i].description}`;

  renderThumbnail();
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

  renderThumbnail();
}

document.querySelector('#pic2').onclick = function () {
  i += 1;
  if (i > imageGallery.length - 1) {
    i = 0;
  }
  RenderSite();
}

document.querySelector('#pic3').onclick = function () {
  i += 2;
  if (i > imageGallery.length - 1) {
    i = 0;
  }
  RenderSite();
}

document.querySelector('#pic4').onclick = function () {
  i += 3;
  if (i > imageGallery.length - 1) {
    i = 0;
  }
  RenderSite();
}

document.querySelector('#pic5').onclick = function () {
  i += 4;
  if (i > imageGallery.length - 1) {
    i = 0;
  }
  RenderSite();
}