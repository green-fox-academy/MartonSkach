'use strict';

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

url = url.slice(0, -4);
url = url.concat('odds/');

url = url.slice(5);
url = (`https:${url}`);  

console.log(url);