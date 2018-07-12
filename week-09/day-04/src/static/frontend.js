'use strict'

const host = 'http://localhost:3000';

const h1 = document.querySelector('h1');
let scoreCount = 0;

const renderQuestionArea = () => {
  
  const formDiv = document.querySelector('.formDiv');
  formDiv.innerHTML = ``;
  formDiv.innerHTML = `<span class="questionText"></span>
  <button type="radio" id="answer1"></button>
  <button type="radio" id="answer2"></button>
  <button type="radio" id="answer3"></button>
  <button type="radio" id="answer4"></button>`;
}

const renderQuizPage = () => {
  const http = new XMLHttpRequest();
  http.open('GET', `${host}/game`, true);
  http.onload = () => {
    const response = JSON.parse(http.responseText);
    
    h1.innerText = `SCORE: ${scoreCount}`;
    
    let randomNumber = Math.floor(Math.random() * (response.rows.length / 4) + 1);
    console.log(randomNumber);
    
    const questionText = document.querySelector('.questionText');
    const answer1 = document.querySelector('#answer1');
    const answer2 = document.querySelector('#answer2');
    const answer3 = document.querySelector('#answer3');
    const answer4 = document.querySelector('#answer4');
    
    questionText.innerText = response.rows[randomNumber * 4 - 1].question;
    answer1.innerText = response.rows[randomNumber * 4 - 3 - 1].answer;
    answer2.innerText = response.rows[randomNumber * 4 - 2 - 1].answer;
    answer3.innerText = response.rows[randomNumber * 4 - 1 - 1].answer;
    answer4.innerText = response.rows[randomNumber * 4 - 1].answer;
    
    answer1.setAttribute('class', `isCorrect${response.rows[randomNumber * 4 - 3 - 1].is_correct}`);
    answer2.setAttribute('class', `isCorrect${response.rows[randomNumber * 4 - 2 - 1].is_correct}`);
    answer3.setAttribute('class', `isCorrect${response.rows[randomNumber * 4 - 1 - 1].is_correct}`);
    answer4.setAttribute('class', `isCorrect${response.rows[randomNumber * 4 - 1].is_correct}`);
    
  };
  http.send();
};

function answerCheck() {
  const buttons = document.querySelector('.formDiv');
  
  buttons.addEventListener('click', (e) => {
    event.preventDefault();
    console.log(e.target.type);
    if (e.target.type === 'submit') {
      if (e.target.className === 'isCorrect1') {
        scoreCount++;
        h1.innerText = `SCORE: ${scoreCount}`;
      }
      clearInterval(interval);
      interval = setInterval(renderQuizPage, 10000);
      setTimeout(renderQuestionArea, 500);
      setTimeout(renderQuizPage, 500);
    }
  });
};

renderQuizPage();
answerCheck();
let interval = setInterval(renderQuizPage, 10000);