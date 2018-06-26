'use strict'

const http = new XMLHttpRequest();
http.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=549d4204a691414c9b40247d90b6b7aa&q=apollo+11+moon+landing', true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  const articles = document.querySelector('#articles');
  console.log(response);

  response.response.docs.forEach((element) => {

    const ul = document.createElement('ul');
    articles.appendChild(ul);

    const headline = document.createElement('li');
    const snippet = document.createElement('li');
    const pub_date = document.createElement('li');

    headline.innerHTML = '<a href="' + element.web_url + '">' + element.headline.main + '</a>';
    snippet.innerHTML = element.snippet;
    pub_date.innerHTML = element.pub_date;

    ul.appendChild(headline);
    ul.appendChild(snippet);
    ul.appendChild(pub_date);

  });
}

http.send();
