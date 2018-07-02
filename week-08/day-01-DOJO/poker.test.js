'use strict'

const checkCards = require('./poker');

const test = require('tape');

test('Card test', function (t) {

  let whiteHand = [6, 'T', 9, 'Q', 5];
  let blackHand = ['K', 'T', 9, 8, 8];

  const actual = checkCards(whiteHand, blackHand);
  const expected = `Black wins the round`
  t.equal(actual, expected); 
  t.end();
});

