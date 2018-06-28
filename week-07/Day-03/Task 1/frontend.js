'use strict'
const http = new XMLHttpRequest();
http.open('GET', 'http://localhost:8080/api/task1', true);

const renderPage = () => {
  const response = JSON.parse(http.responseText);
  const table = document.querySelector('table');
  table.innerHTML = '';

  response.authors.forEach((element) => {

    const tr = document.createElement('tr');
    table.appendChild(tr);

    const book_name = document.createElement('td');
    const aut_name = document.createElement('td');
    const cate_descrip = document.createElement('td');
    const pub_name = document.createElement('td');
    const book_price = document.createElement('td');

    book_name.innerHTML = element.book_name;
    book_name.setAttribute('class', 'book_name');
    aut_name.innerHTML = element.aut_name;
    cate_descrip.innerHTML = element.cate_descrip;
    pub_name.innerHTML = element.pub_name;
    book_price.innerHTML = element.book_name;

    tr.appendChild(book_name);
    tr.appendChild(aut_name);
    tr.appendChild(cate_descrip);
    tr.appendChild(pub_name);
    tr.appendChild(book_price);
  });
}

http.onload = () => {
  renderPage();
}

http.send();

let tableElement = []
tableElement.push(document.getElementsByClassName('book_name'));
console.log(tableElement);
console.log(tableElement[0]);

tableElement.forEach(element => {
  element.td.addEventListener('click', () => {
    console.log('kiscica');
  });
});
