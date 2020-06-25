// In this puzzle, you'll use a variable with bracket notation to add properties to an object inside a classic for loop.
//
// This object will have a property named for each character in a string, with each property storing the index where the character appears.


import { obj, string } from 'grasshopper.data';
for (let i = 0; i < string.length; i++) {
  let letter = string[i];
  obj[letter] = i;
}
for (let property in obj) {
  console.log(property + ': ' + obj[property]);
}
