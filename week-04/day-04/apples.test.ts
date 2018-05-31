'use strict';

import { test } from 'tape';
import { getApple } from './apples';

test('is it apple?', t => {
  let string = getApple('apple');
  t.equal(string, 'apple');
  t.end();
});

test('is it appleasdas?', t => {
  let string = getApple('apple');
  t.equal(string, 'appleasdas');
  t.end();
});

test('is it apple(again)?', t => {
  let string = getApple('apple');
  t.equal(string, 'apple');
  t.end();
});