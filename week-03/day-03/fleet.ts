import { Thing } from "./thing";

class Fleet {
  private things: Thing[] = [];
  constructor() { }
  add(thing: Thing) {
    this.things.push(thing);
  }

  print() {
    for (let i: number = 0; i < this.things.length; i++) {
      if (this.things[i].sortCompleted()) {
        console.log(`${i + 1}. [x] ${this.things[i].identify()}`);
      } else {
        console.log(`${i + 1}. [ ] ${this.things[i].identify()}`);
      }
    }
  }
}

export { Fleet };