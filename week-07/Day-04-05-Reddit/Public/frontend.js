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
    mainTextHolder.innerHTML = `<div class="mainTextHolder"><p class="title_text">${element.post_title}</p><a href="${element.post_url}" class="url_text">${element.post_url}</a><p class="owner_name">Posted by: ${element.post_owner}</p></div>`
    voteButton.innerHTML = `<div class="voteUpButton" id="${element.post_id}"><p>UP</p></div><div class="voteDownButton" id="${element.post_id}"><p>DOWN</p></div>`

    tr.appendChild(scoreHolder);
    tr.appendChild(mainTextHolder);
    tr.appendChild(voteButton);
  });
};

http.onload = () => {
  renderPage();
};

http.send();

const downVote = document.querySelectorAll('.voteDownButton');
downVote.forEach(element => {
  element.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `${host}/posts/${element.id}/downvote`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    document.querySelector(`#score${element.id}`).innerText -= 1;
    element.preventDefault();
  });
});

const upVote = document.querySelectorAll('.voteUpButton');
upVote.forEach(element => {
  element.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `${host}/posts/${element.id}/upvote`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    let upVotedScore = document.querySelector(`#score${element.id}`).innerText;
    upVotedScore = parseInt(upVotedScore) + 1;
    document.querySelector(`#score${element.id}`).innerText = upVotedScore;
    element.preventDefault();
  });
});

const addNewPostButton = document.querySelector('.addNewPostButton');
let titleInput = document.querySelector('.titleInput');
let urlInput = document.querySelector('.urlInput');

function ButtonCheck() {
  if (titleInput.value && urlInput.value) {
    addNewPostButton.disabled = false;
  } else {
    addNewPostButton.disabled = true;
  }
};

let postOwnerInput = document.querySelector('.posterNameInput');
if (!postOwnerInput.value) {
  postOwnerInput.value = "";
}

addNewPostButton.addEventListener('click', () => {

  const xhr = new XMLHttpRequest();
  xhr.open("POST", `${host}/posts`, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    const resp = JSON.parse(xhr.responseText);
    console.log(resp);
  }
  xhr.send(JSON.stringify({
    post_title: titleInput.value,
    post_url: urlInput.value,
    post_owner: postOwnerInput.value
  }));

  const xhrget = new XMLHttpRequest();
  xhrget.open("GET", `${host}/posts`, true);
  xhrget.setRequestHeader('Content-Type', 'application/json');
  const table = document.querySelector('table');
  table.innerHTML = '';
  console.log(`${table.innerHTML}`);
  titleInput.value = '';
  urlInput.value = '';
  postOwnerInput.value = '';
  renderPage();
});
