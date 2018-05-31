'use strict';

export function sumResult(list: any[]): Object {
  let summedResult: any = 0;

  if (typeof (list[0]) === 'number') {
    for (let i: number = 0; i < list.length; i++) {
      summedResult += list[i];
    }
  }
  else {
    for (let j: number = 0; j < list.length; j++) {
      summedResult = list[j];
    }
  }
  return summedResult;
}