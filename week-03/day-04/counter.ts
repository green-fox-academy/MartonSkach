'use strict';

function factorialIterative(n: number) {
  let fact = 1;
  for(var i = n; i >= 1; i--){
    fact = i;
    console.log(fact);
  }
}

factorialIterative(6);