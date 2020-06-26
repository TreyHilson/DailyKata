// Ayah's Students
// Ayah wants to display the names of all the students who need an adult ticket to the museum.
//
// An adult ticket is needed for each student that is over 12 years old.
//
// INSTRUCTIONS
// Complete the needsAdultTicket() function declaration so that it takes an array of students and prints the names of all the students who need an adult ticket.

import { studentList } from 'class.students';
function needsAdultTicket(arr, ___) {
  for (var element of arr) {
    if (element['age'] > 12) {
      console.log(element['name']);
    }
  }
};
needsAdultTicket(studentList);


// ___________________________-

// Bhaj's Crossword Helper
// Bhaj is working on an app to help him solve crossword puzzles. The app will need the ability to check the last letter of a word.
//
// For example: The function would take 'birdie' as an input, and return 'e', as that is the last letter.

import { randomWord } from 'cross.words';
function lastLetter(str, ___) {
  let endLetter = str.length - 1;
  return str[endLetter];
};
console.log(randomWord);
console.log(lastLetter(randomWord));
___
