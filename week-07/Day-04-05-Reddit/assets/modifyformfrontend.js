'use stict';
const http = new XMLHttpRequest();
const host = 'http://localhost:3000'
http.open('GET', `${host}/posts`, true);

http.onload = () => {
};

http.send();

const modifySubmit = document.querySelector('.modifySubmit');
const modificationText = document.querySelector('.modifyInputField');
modifySubmit.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `${window.location.href}`, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    const resp = JSON.parse(xhr.responseText);
  }
  xhr.send(JSON.stringify({
    textContent: modificationText.value
  }));
});