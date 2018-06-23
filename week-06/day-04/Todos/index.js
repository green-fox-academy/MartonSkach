'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const todos = [
    'get up',
    'survive',
    'go back to bed',
  ];
  
  res.render('home', {
    text: `Things to do today:`,
    list: todos
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
