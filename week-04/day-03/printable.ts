'use strict';

import { Domino } from "./domino-for-printable";
import { dominoes } from "./dominoes-for-printable";

interface Printable {
  printAllFields();
}

for (let domino of dominoes) {
  domino.printAllFields();
}

export { Printable };