'use strict';

import { test } from 'tape';
import { getFibonacci } from './fibonacci';

test('testing number', t => {
  let counter = getFibonacci(10);
  t.equal(counter, 55);
  t.end();
});

test('testing 0', t => {
  let counter = getFibonacci(0);
  t.equal(counter, 0);
  t.end();
});

test('testing null', t => {
  let counter = getFibonacci(null);
  t.equal(counter, `The given parameter is not a number!`);
  t.end();
});

test('testing string', t => {
  let counter = getFibonacci('give me fibonacci number 5');
  t.equal(counter, `The given parameter is not a number!`);
  t.end();
});