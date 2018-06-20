'use strict';

const king = document.getElementsByClassName('asteroid');
console.log(king[0]);

const businessLamp = document.querySelectorAll(".big");
console.log(businessLamp);

const conceitedKing = document.querySelectorAll('.container');
console.log(conceitedKing[0]);

const noBusiness = document.querySelectorAll(".asteroid");
noBusiness.forEach(element => {
console.log(element);  
});