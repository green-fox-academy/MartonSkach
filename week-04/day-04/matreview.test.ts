'use strict';

import { test } from 'tape';
import { letterCount } from './matreview';

test('simple single letter word', t => {
  let counter = letterCount('a');
  t.deepEqual(counter, { a: 1 });
  t.end();
});

test('simple multiple same letter word', t => {
  let counter = letterCount('aab');
  t.deepEqual(counter, { a: 2, b: 1 });
  t.end();
});

test('empty string', t => {
  let counter = letterCount('');
  t.deepEqual(counter, {});
  t.end();
});
