'use strict'

const http = new XMLHttpRequest();
http.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=jVZ7tA6JPDF89UJtBn392kvvwY6taLzz&q=kitten&limit=16&offset=0&rating=G&lang=en', true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  const container = document.querySelector('#pics');

  response.data.forEach((element) => {
    const div = document.createElement('div');
    const image = document.createElement('img');

    image.src = element.images.fixed_width_still.url;
    image.addEventListener('click', () => {
      image.setAttribute('src', element.images.fixed_width.url)
    });

    container.appendChild(image);
  });
}

const button = document.querySelector('#get-images');
button.addEventListener('click', () => {
  http.send();
})