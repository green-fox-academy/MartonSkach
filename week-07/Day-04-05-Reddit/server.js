'use strict'

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000

app.use(express.static(__dirname));

app.use(express.json());

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/hello', (req, res) => {
  res.send('Hello')
})

app.get('/posts', (req, res) => {
  let sql = `SELECT * from posts`;
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

app.post('/posts', (req, res) => {
  let postOwner = req.body.post_owner;
  if (req.body.post_owner === "") {
    postOwner = 'Anonymous';
  }
  let sql = `INSERT INTO posts (post_title, post_url, post_timestamp, post_score, post_owner, owner_vote) VALUES ("${req.body.post_title}", "${req.body.post_url}", unix_timestamp(), "0", "${postOwner}", "0");`;
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    sql = `SELECT * from posts WHERE post_id = ${rows.insertId}`;
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
});

app.put('/posts/:id/upvote', (req, res) => {
  let id = req.params.id;
  let sql = `UPDATE posts SET post_score = post_score + 1 WHERE post_id = ${id};`;
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    sql = `SELECT * from posts WHERE post_id = ${id};`;
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
});

app.put('/posts/:id/downvote', (req, res) => {
  let id = req.params.id;
  let sql = `UPDATE posts SET post_score = post_score - 1 WHERE post_id = ${id};`;
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    sql = `SELECT * from posts WHERE post_id = ${id};`;
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
});

app.delete('/posts/:id', (req, res) => {
  let id = req.params.id;
  let sql = `SELECT * from posts WHERE post_id = ${id};`;;
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    let deletedRow = rows[0];
    sql = `DELETE FROM posts WHERE post_id = ${id};`;
    conn.query(sql, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.json({
        deletedRow,
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Dr. Frankenserver: "IT'S ALIVE on port:${PORT}"`);
});