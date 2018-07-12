'use strict'

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));
app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'quiz',
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/game', (req, res) => {
  let sql = `SELECT
    questions.id,
    questions.question,
    answers.answer,
    answers.is_correct 
    from answers
    join questions
    on
    questions.id = answers.question_id;`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      rows,
    });
  });
});

app.get('/questions', (req, res) => {
  let sql = `SELECT * from questions;`;
  conn.query(sql, (err, questions) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      questions,
    });
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});