'use strict';

import { test } from 'tape';
import { anagram } from './anagram';

test('testing an anagram', t => {
  let counter = anagram('O Draconian Devil Oh lame saint', 'Leonardo da Vinci The Mona Lisa');
  t.equal(counter, `It's an anagram!`);
  t.end();
});

test('adding different characters', t => {
  let counter = anagram('O Draconian Devil! Oh lame saint', 'Leonardo da Vinci: The Mona Lisa');
  t.equal(counter, `Not an anagram`);
  t.end();
});

test('a is longer', t => {
  let counter = anagram('O Draconian Devil Oh lame saint and stuff', 'Leonardo da Vinci The Mona Lisa');
  t.equal(counter, `Not an anagram`);
  t.end();
});

test('b is longer', t => {
  let counter = anagram('O Draconian Devil Oh lame saint', 'Leonardo da Vinci The Mona Lisa and stuff');
  t.equal(counter, `Not an anagram`);
  t.end();
});