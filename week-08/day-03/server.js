'use strict'

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.use(express.json());

app.post('/signup', (req, res) => {
  let username = req.body.user_name;
  let email = req.body.user_email;
  res.send(`Thanks, ${username} - ${email} has been registered`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/newsletter.html')
})

app.listen(PORT, () => {
  console.log(`Megy. Port:${PORT}`);
});