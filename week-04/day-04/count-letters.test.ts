'use strict';

import { test } from 'tape';
import { letterCount } from './count-letters';

test('I just copied the material review example', t => {
  let counter = letterCount('a');
  t.deepEqual(counter, { a: 1 });
  t.end();
});

test('handle uppercase', t => {
  let counter = letterCount('aAb');
  t.deepEqual(counter, { a: 2, b: 1 });
  t.end();
});

test('handle space', t => {
  let counter = letterCount('a B');
  t.deepEqual(counter, { a: 1, ' ': 1, b: 1});
  t.end();
});

test('empty string', t => {
  let counter = letterCount('');
  t.deepEqual(counter, {});
  t.end();
});
