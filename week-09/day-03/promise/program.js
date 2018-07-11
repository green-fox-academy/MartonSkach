
/* ---- TASK 1 ----
setTimeout(() => {
  console.log('TIMED OUT!')
},300);
*/

/* ---- TASK 2 ----
'use strict';

var promise = new Promise(function (fulfill, reject) {
  fulfill('FULFILLED!');
});
promise.then(function(fulfill) {
  setTimeout(() => {
    console.log(fulfill);
  },300);
});
 */

var promise = new Promise(function (fulfill, reject) {
  setTimeout(() => {
    console.log('FULFILLED!');
  },300);
});

function onReject (error) {
  console.log('REJECTED');
}

promise.reject(new Error('fail')).then(fulfill, reject);
// Your solution here