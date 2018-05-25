

let str: string = 'This is my original string.';

console.log(str.indexOf('original'));       // Returns the position of a string
    // 11
console.log(str.indexOf('!'));              // Returns -1, as ! is not in the original string
    // -1
console.log(str.indexOf('is', 4));          // Starting the search from the 4th index only
    // 5

console.log(str.replace('original', 'new'));    // Replaces 'original' with 'new' and creates a new string (no overwrite)
console.log(str);                               // The original remains the same

let appleStr: string = 'apple';
console.log(appleStr.split(''));            // Split the string to its letters
console.log(str.split(' '));                // Splits the sentence by spaces
console.log(str.split(' ', 3));             // Can also declaere, how many chunks are needed (this time it's the 3 first words only)

console.log(str.slice(8, 19));              // Creates a slice from the 8th character to the 19th.
console.log(str.slice(8, -3));              // Slice from 8th to the end -3rd. - Can't give negative value for the starting character

console.log(str.substring(8, 19));          // Does the same, but we can swap the parameters and it would still work (like (19, 8)).
                                            // Negative starting number is replaced with a zero, but it works for counting from the end.

console.log(str.charAt(11));                // Shows the character at the position 11.
console.log(str[11]);                       // Does the same, works like an array.

console.log(str.concat(' I like it.'));     // Extends the string with another one at the end.
console.log(`${str} I like this one`);