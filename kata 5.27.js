// Write a function called repeatString which repeats the given String src exactly count times.
//
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


// My solution:


function repeatStr (n, s) {
 return n > 0 ? s.repeat(n) : "";
}
repeatStr(28, "yup");
