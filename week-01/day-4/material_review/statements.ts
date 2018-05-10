let iLikeCats: boolean = true;
let iLikeDogs: boolean = true;
iLikeCats = false;
if (iLikeCats) {
    console.log('I like cats');
} else if(iLikeDogs) {
    console.log('I like dogs');
} else {
    console.log('I hate animals');
}

let newNumber: number = 0;
for (let i: number = 0; i < 10; i++) {
    console.log(`${newNumber += 2}`);
}

let i: number = 0;
while (i < 10) {
    console.log(`${i}`);
    i++; 
}

let o: number = 0;
do {
    console.log(`${o}`);
    o++;
} while (o < 10)

let somethingNew: number = 4;
let someString: string = 'a';
switch(somethingNew) {
    case 1:
        console.log('Hello');
        break;
    case 2:
        console.log('Ciao');
        break;
    case 3:
        console.log('Oh no');
        break;
    default: 
        console.log('This is false');
}

for (let i: number = 0; i < 3; i++) {
    if (i === 2) {
        continue;
    }
    console.log(`${i}`)
}