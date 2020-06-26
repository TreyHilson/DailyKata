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
