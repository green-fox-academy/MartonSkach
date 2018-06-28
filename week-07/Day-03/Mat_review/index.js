'use strict'

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});


app.get('/api/task1', (req, res) => {
  let sql = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price
  FROM book_mast
  LEFT JOIN author
  ON book_mast.aut_id = author.aut_id
  LEFT JOIN category
  ON book_mast.cate_id = category.cate_id
  LEFT JOIN publisher
  ON book_mast.pub_id = publisher.pub_id;`;
  
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      books: rows,
    }); 
  });
});

app.listen(PORT, () => {
  console.log(`It's on, on PORT:${PORT}`);
});



