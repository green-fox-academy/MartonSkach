'use stict'
const http = new XMLHttpRequest();
const host = 'http://localhost:3000'
http.open('GET', `${host}/posts`, false);

const renderPage = () => {
  const response = JSON.parse(http.responseText);
  const table = document.querySelector('table');
  console.log(response);
  response.rows.forEach((element) => {

  const tr = document.createElement('tr');
  table.appendChild(tr);

    const scoreHolder = document.createElement('td')
    const mainTextHolder = document.createElement('td')
    const voteButton = document.createElement('td')
  
    scoreHolder.innerHTML = `<div class="scoreHolder"><p id="score${element.post_id}">${element.post_score}</p></div>`
    mainTextHolder.innerHTML = `<div class="mainTextHolder"><p class="title_text">${element.post_title}</p><a href="${element.post_url}" class="url_text">${element.post_url}</a></div>`
    voteButton.innerHTML = `<div class="voteUpButton" id="${element.post_id}"><p>UP</p></div><div class="voteDownButton" id="${element.post_id}"><p>DOWN</p></div>`

    tr.appendChild(scoreHolder);
    tr.appendChild(mainTextHolder);
    tr.appendChild(voteButton);
  });
};

http.onload = () => {
  renderPage();
}

http.send();

const downVote = document.querySelectorAll('.voteDownButton');
downVote.forEach(element => {
  element.addEventListener('click', () => {
    console.log(element.id);
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `${host}/posts/downvote`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      id: element.id
    }));
    document.querySelector(`#score${element.id}`).innerText -= 1; 
    element.preventDefault();
  });
});

const upVote = document.querySelectorAll('.voteUpButton');
upVote.forEach(element => {
  element.addEventListener('click', () => {
    console.log(element.id);
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `${host}/posts/upvote`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      id: element.id
    }));
    let upVotedScore = document.querySelector(`#score${element.id}`).innerText;
    upVotedScore = parseInt(upVotedScore) + 1;
    document.querySelector(`#score${element.id}`).innerText = upVotedScore;
    element.preventDefault();
  });
});