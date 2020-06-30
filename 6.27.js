// Bhaj wants a function that checks if a word fits inside a space on a crossword puzzle. For example:
//
// If the space has room for 3 letters, and the 2nd letter is 'a', it could be represented by the string, '-a-'.
//
// Any word that matches '-a-' will have exactly 3 letters and 'a' as the 2nd character.

import { randomWord } from 'cross.words';
function check(space, word, ___) {
  if (space.length !== word.length) {
    return false;
  }
  for (let i = 0; i < space.length; i++) {
    if (space[i] !== '-' && space[i] !== word[i]) {
      return false;
    }
  }
  return true;
};
console.log('-a-t');
console.log(randomWord);
console.log(check('-a-t', randomWord));


// The Longest Word
// INSTRUCTIONS
// Complete the longestWord function so it takes an array of subsequences and finds the longest subsequence in the array.
//
// For example, longestWord(['able', 'ale', 'apple']) would return 'apple'.

import { subsequences, stringSequence } from 'subsequence.words';
function longestWord(array, ___) {
  let longest = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
};
console.log(stringSequence);
console.log(subsequences);
console.log(longestWord(subsequences));
