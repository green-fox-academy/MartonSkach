'use strict'

const host = 'http://localhost:3000';

const questionInput = document.querySelector('#questionInput');

const answer1Input = document.querySelector('#answer1Input');
const answer2Input = document.querySelector('#answer2Input');
const answer3Input = document.querySelector('#answer3Input');
const answer4Input = document.querySelector('#answer4Input');

const answer1RadioButton = document.querySelector('#answer1RadioButton');
const answer2RadioButton = document.querySelector('#answer2RadioButton');
const answer3RadioButton = document.querySelector('#answer3RadioButton');
const answer4RadioButton = document.querySelector('#answer4RadioButton');

const submitNew = document.querySelector('#submitNew');


submitNew.addEventListener('click', () => {
  event.preventDefault();

  if (questionInput.value !== '' &&
    answer1Input.value !== '' &&
    answer2Input.value !== '' &&
    answer3Input.value !== '' &&
    answer1RadioButton.checked ||
    answer2RadioButton.checked ||
    answer3RadioButton.checked ||
    answer4RadioButton.checked) {

    let radio1 = 0;
    let radio2 = 0;
    let radio3 = 0;
    let radio4 = 0;

    if (answer1RadioButton.checked) {
      radio1 = 1;
    } else {
      radio1 = 0
    }
    if (answer2RadioButton.checked) {
      radio2 = 1;
    } else {
      radio2 = 0
    }
    if (answer3RadioButton.checked) {
      radio3 = 1;
    } else {
      radio3 = 0
    }
    if (answer4RadioButton.checked) {
      radio4 = 1;
    } else {
      radio4 = 0
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${host}/questions`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      const resp = JSON.parse(xhr.responseText);
    }
    xhr.send(JSON.stringify({
      question: questionInput.value,
      answer1: answer1Input.value,
      answer2: answer2Input.value,
      answer3: answer3Input.value,
      answer4: answer4Input.value,
      is_correct1: radio1,
      is_correct2: radio2,
      is_correct3: radio3,
      is_correct4: radio4
    }));
  }
})