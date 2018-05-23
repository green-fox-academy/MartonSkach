'use strict';

import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}

let dominoes = initializeDominoes();

function arrangeDominoes() {
  let arrangedOrder: any[] = [];
  arrangedOrder.push(dominoes[0]);
  for (let i: number = 1; i <= dominoes.length - 1; i++) {
    dominoes.forEach(element => {
      if (element.values[0] === arrangedOrder[i - 1].values[1]) {
        arrangedOrder.push(element);
      }
    });
  }
  print(arrangedOrder);
}

arrangeDominoes();