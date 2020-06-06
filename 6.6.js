// The main idea is to count all the occurring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
//
// What if the string is empty ? Then the result should be empty object literal { }
//
// For C#: Use a Dictionary<char, int> for this kata!


function count (string) {
  let strLength = string.length;
  let result = {};
  if(strLength != 0) { // Check the string's length whether it is equals to 0
    for (let i = 0; i < strLength; i++) { // Iterate the string
      let char = string.charAt(i);
       if (result.hasOwnProperty(char)) { // Check whether the character is already in the object
        result[char]++; // If yes, we augment the occurrence times
      } else {
        result[char] = 1; // If not, we add it to the "return" object's property
      }
    }
  }
  return result;
}
