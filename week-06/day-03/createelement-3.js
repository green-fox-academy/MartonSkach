'use strict';

const body = document.querySelector('body');

const kids = [{ "pet_name": "Wattled crane", "owner": "Bryant" },
{ "pet_name": "Devil, tasmanian", "owner": "Alejandro" },
{ "pet_name": "Mynah, common", "owner": "Nelie" },
{ "pet_name": "Dolphin, common", "owner": "Mariele" },
{ "pet_name": "Gray duiker", "owner": "Maddalena" },
{ "pet_name": "Crab (unidentified)", "owner": "Lucine" },
{ "pet_name": "Ant (unidentified)", "owner": "Lorianna" },
{ "pet_name": "Bison, american", "owner": "Tommie" },
{ "pet_name": "Yellow mongoose", "owner": "Vivyan" },
{ "pet_name": "Carpet snake", "owner": "Veda" },
{ "pet_name": "Lesser mouse lemur", "owner": "Isidor" }];

kids.forEach(element => {
  const htmlElement = document.createElement('article');
  body.appendChild(htmlElement);
});

const createdArticles = document.querySelectorAll('article');

for (let i = 0; i < createdArticles.length; i++) {
  const pet = document.createElement('p');
  pet.innerText = kids[i].pet_name;
  const owner = document.createElement('h3');
  owner.innerText = kids[i].owner;
  createdArticles[i].appendChild(owner);
  createdArticles[i].appendChild(pet);
}

/*
htmlElement.innerText = element.content
body.appendChild(htmlElement);
*/