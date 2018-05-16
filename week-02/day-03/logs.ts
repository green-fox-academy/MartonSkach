'use strict';
export{};

declare function require(path: string): any;
const fs = require('fs');

function ipLister(filePath: string) {
    try {
        let tempArray: string[] = fs.readFileSync(filePath, 'utf-8').split('\r\n');
        let containerArray: string[] = [];
        for (let i: number = 0; i < tempArray.length; i++) {
            containerArray.push(tempArray[i].substr(27,11));
        } 
        console.log(containerArray);
    } catch(error) {
        console.log(`File unreachable`);
    }
}

function ratioCounter(filePath: string) {
    try {
        let tempArrayRatio: string[] = fs.readFileSync(filePath, 'utf-8').split('\r\n');
        let containerPost: string[] = [];
        let containerGet: string [] = [];
        for (let j: number = 0; j < tempArrayRatio.length; j++) {
            if (tempArrayRatio[j].substr(41, 4) === 'POST') {
                containerPost.push(tempArrayRatio[j].substr(41, 4));
            } else if ((tempArrayRatio[j].substr(41, 4) === 'GET ')) {
                containerGet.push(tempArrayRatio[j].substr(41, 4));
            } 
        } 
        console.log(containerGet.length / containerPost.length);

    } catch(error) {
        console.log(`File unreachable`)
    }
}

ipLister('log.txt');
ratioCounter('log.txt');
