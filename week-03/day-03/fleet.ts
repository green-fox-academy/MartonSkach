import {Thing} from "./thing";

class Fleet {
    private things: Thing[];

    constructor(){}
    add(thing: Thing){
        this.things.push(thing);
    }
}

export {Fleet};