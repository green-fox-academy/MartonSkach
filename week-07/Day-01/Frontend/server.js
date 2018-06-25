'use strict'

const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use('/assets', express.static('assets'));

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: '.' });
});

//-----DOUBLING------

app.get('/doubling', (req, res) => {
  if (input) {
    res.json({
      received: input,
      result: input * 2
    });
  } else {
    res.json({
      error: 'Please provide an input!'
    });
  }
});

//-----GREETER------

app.get('/greeter', (req, res) => {
  if (name && title) {
    res.json({
      welcome_message: `Oh, hi there ${name}, my dear ${title}!`
    });
  } else if (name && title === undefined) {
    res.json({
      error: 'Please, provide a title!'
    });
  } else if (name === undefined && title) {
    res.json({
      error: 'Please, provide a name!'
    });
  } else {
    res.json({
      error: 'Please, provide a name and title!'
    });
  }
});

//-----APPENDA------

app.get('/appenda/:appendable', (req, res) => {
  if (req.params.appendable) {
    res.json({
      appended: `${req.params.appendable}a`,
    });
  }
});

//-----DO UNTIL------

app.post('/dountil/:what', (req, res) => {
  let until = parseInt(req.body.until);
  let sum = 0;
  let factor = 1;
  //-----SUM-----
  if (req.params.what === 'sum') {
    if (until) {
      while (until > 0) {
        sum += until;
        until--;
      }
      res.json({
        sum
      });
    } else {
      res.json({
        error: 'Please provide a number!'
      });
    }
    //-----FACTOR-----
  } else if (req.params.what === 'factor') {
    if (until) {
      while (until > 0) {
        factor *= until;
        until--;
      }
      res.json({
        factor
      });
    } else {
      res.json({
        error: 'Please provide a number!'
      });
    }
    //-----ERROR-----
  } else {
    res.json({
      error: 'Please, define a function!',
    });
  }
});

//-----ARRAY HANDLER------

app.post('/array', (req, res) => {
  let what = req.body.what;
  let result = 0;
  
  if (what === 'sum') {
    req.body.numbers.forEach(element => {
      result += element;
    });
  } else if (what === 'multiply') {
    result = 1;
    req.body.numbers.forEach(element => {
      result *= element;
    });
  } else if (what === 'double') {
    result = []
    req.body.numbers.forEach(element => {
      result.push(element * 2);
    });
  } else {
    res.json({
      error: 'Please provide what to do with the numbers!'
    });
  }
  res.json({
    result
  });
});