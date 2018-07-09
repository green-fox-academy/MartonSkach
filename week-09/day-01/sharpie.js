'use strict';

function Sharpie(color, width) {
  this.color = color,
  this.width = width,
  this.inkAmount = 133,
  this.use = function() {
    this.inkAmount -= this.width
  };
}

let blue = new Sharpie('blue', 5);
//console.log(blue.inkAmount);

function drainInk(sharpie) {
  //console.log(Math.round(sharpie.inkAmount / sharpie.width));
  while (0 <= sharpie.inkAmount - sharpie.width) {
    sharpie.use();
    console.log(sharpie.inkAmount);    
  }
};

drainInk(blue);