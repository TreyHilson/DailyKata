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
