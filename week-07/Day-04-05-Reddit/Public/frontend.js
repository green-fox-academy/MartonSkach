'use stict'
const http = new XMLHttpRequest();
const host = 'http://localhost:3000'
http.open('GET', `${host}/posts`, true);

const renderPage = () => {
  const response = JSON.parse(http.responseText);
  const table = document.querySelector('table');
  console.log(response);
  response.rows.forEach((element) => {

    const tr = document.createElement('tr');
    tr.classList.add('tableRow');
    table.appendChild(tr);

    const scoreHolderTd = document.createElement('td');
    scoreHolderTd.classList.add('scoreHolderTd');
    const mainTextHolder = document.createElement('td');


    scoreHolderTd.innerHTML = `<div class='voteBar'>
    <div class="voteUpButton" id="${element.post_id}"></div>
    <div class="scoreHolder"><p id="score${element.post_id}">${element.post_score}</p></div>
    <div class="voteDownButton" id="${element.post_id}"></div>
    </div>`;

    mainTextHolder.innerHTML = `<div class="mainTextHolder">
    <a href="${element.post_url}" class="url_text"><p class="title_text">${element.post_title}</p></a>
    <p class="owner_name">Submitted by: ${element.post_owner}</p>
    <div class='postFunctions'>
    <p class='deleteFunction' id='${element.post_id}'>delete</p>
    <p class='modifyFunction'id='${element.post_id}'>modify</p>
    </div>
    </div>`;

    tr.appendChild(scoreHolderTd);
    tr.appendChild(mainTextHolder);

  });

  const downVote = document.querySelectorAll('.voteDownButton');
  downVote.forEach(element => {
    element.addEventListener('click', () => {
      const xhr = new XMLHttpRequest();
      xhr.open("PUT", `${host}/posts/${element.id}/downvote`, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send();
      document.querySelector(`#score${element.id}`).innerText -= 1;
      event.preventDefault();
    });
  });

  const upVote = document.querySelectorAll('.voteUpButton');
  upVote.forEach(element => {
    element.addEventListener('click', () => {
      const xhr = new XMLHttpRequest();
      xhr.open("PUT", `${host}/posts/${element.id}/upvote`, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send();
      let upVotedScore = document.querySelector(`#score${element.id}`).innerText;
      upVotedScore = parseInt(upVotedScore) + 1;
      document.querySelector(`#score${element.id}`).innerText = upVotedScore;
      event.preventDefault();
    });
  });

  const deletePostButton = document.querySelectorAll('.deleteFunction');
  console.log(deletePostButton);
  deletePostButton.forEach(element => {
    element.addEventListener('click', () => {
      if (confirm('Are you sure you want to delete this post?')) {
        const xhr = new XMLHttpRequest();
        xhr.open("DELETE", `${host}/posts/${element.id}`, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();
        event.preventDefault();
      };
    });
  });

};

http.onload = () => {
  renderPage();
};

http.send();

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
  }
  xhr.send(JSON.stringify({
    post_title: titleInput.value,
    post_url: urlInput.value,
    post_owner: postOwnerInput.value
  }));
  const xhrget = new XMLHttpRequest();
  xhrget.open("GET", `${host}/posts`, true);
  xhrget.setRequestHeader('Content-Type', 'application/json');
  titleInput.value = '';
  urlInput.value = '';
  postOwnerInput.value = '';
});


