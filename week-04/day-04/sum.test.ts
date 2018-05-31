'use strict';

import { test } from 'tape';
import { sumResult } from './sum';

test('test with standard list', t => {
  let sum = sumResult([5, 36, 70]);
  t.equal(sum, 5 + 36 + 70);
  t.end();
});

test('test with empty list', t => {
  let sum = sumResult([]);
  t.equal(sum, 0);
  t.end();
});

test('test with one element', t => {
  let sum = sumResult([320]);
  t.equal(sum, 320);
  t.end();
});

test('test with multiple elements', t => {
  let sum = sumResult([320, 23, 64, 945, 84, 667, 82]);
  t.equal(sum, 320 + 23 + 64 + 945 + 84 + 667 + 82);
  t.end();
});

test('test with null', t => {
  let sum = sumResult([null]);
  t.equal(sum, null);
  t.end();
});

test('test with string', t => {
  let sum = sumResult(['not a number']);
  t.equal(sum, 'not a number');
  t.end();
});