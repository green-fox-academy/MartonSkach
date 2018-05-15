'use strict';

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'

console.log(quote.indexOf('It'));

console.log(quote.slice(0, quote.indexOf('It')+3) + 'always takes longer than' + quote.slice(quote.indexOf('you')-1));
