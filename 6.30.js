// String Cartography
// INSTRUCTIONS
// Write a function that takes a string and returns an object.
//
// The object should have a property for each of the string's characters.
//
// Each property should store an array of indices where the characters are located.
//
// For example: mapString('boohoo') would return:
//
// { b: [0], o: [1, 2, 4, 5], h: [3] }

import { word } from 'grasshopper.wordList';
console.log(word);
function mapString(string, ___) {
  let pojo = {
    ___: ___
  };
  for (let i = 0; i < string.length; i++) {
    let currentCharacter = string[i];
    if (pojo[currentCharacter]) {
      pojo[currentCharacter].push(i);
    } else {
      pojo[currentCharacter] = [
        i,
        ___
      ];
    }
  }
  return pojo;
};
let stringMap = mapString(word);
for (let letter in stringMap) {
  console.log(letter + ': ' + stringMap[letter]);
}
