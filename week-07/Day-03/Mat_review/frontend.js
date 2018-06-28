'use strict'

console.log('kiscica1');

const http = new XMLHttpRequest();
http.open('GET', 'http://localhost:3000/api/task1', true);
http.onload = () => {
  console.log('kiscica2');
  const response = JSON.parse(http.responseText);
  console.log(response);
  console.log('kiscica3');
  const base = document.querySelector('#base');
  const div = document.createElement('div');
  base.appendChild(div);
  
  const p = document.createElement('p');
  p.innerHTML = 'Kiscica';

  div.appendChild(p.innerHTML)
};

http.send();