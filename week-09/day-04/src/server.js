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

app.get('/questions', (req, res) => {
  res.sendFile(__dirname + '/views/questions.html');
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

app.get('/api/questions', (req, res) => {
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

app.post('/questions', (req, res) => {
  let answer1 = req.body.answer1;
  let answer2 = req.body.answer2;
  let answer3 = req.body.answer3;
  let answer4 = req.body.answer4;
  let is_correct1 = req.body.is_correct1;
  let is_correct2 = req.body.is_correct2;
  let is_correct3 = req.body.is_correct3;
  let is_correct4 = req.body.is_correct4;
  let sql = `INSERT INTO questions (question) VALUES ('${req.body.question}');`;
  conn.query(sql, (err, response) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    };
    sql = `INSERT INTO answers (question_id, answer, is_correct) VALUES ('${response.insertId}', '${answer1}', '${is_correct1}');`;
    conn.query(sql, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      };
    });
    sql = `INSERT INTO answers (question_id, answer, is_correct) VALUES ('${response.insertId}', '${answer2}', '${is_correct2}');`;
    conn.query(sql, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      };
    });
    sql = `INSERT INTO answers (question_id, answer, is_correct) VALUES ('${response.insertId}', '${answer3}', '${is_correct3}');`;
    conn.query(sql, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      };
    });
    sql = `INSERT INTO answers (question_id, answer, is_correct) VALUES ('${response.insertId}', '${answer4}', '${is_correct4}');`;
    conn.query(sql, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      };
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});