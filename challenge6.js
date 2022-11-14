// Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. For example, if you were given "Turing is the best", return "Turing Is The Best" instead!
// Main Goal:
// 1. Given a string containing a sentence with only lowercase letters, provide prgrammatically a way of passing the string through logic that will check the value of each character within that string. We will need to pass through each and every value one at a time, so a loop would be the structure we create. 
// 2. We will initialize our loop at index position 0 within the given string(i =0), run it through the entire string (i < string.length), and increment it by 1 to go through each letter sequentially without missing any(i++).
// 3. When the loop evaluates something as equivalent to " " within that string, initiate another statement that affects the value after it, running the .toUpperCase() method upon that value after " ". The value that follows " " must be the beginning of a new word.
// 4. Print to console the statement again, hopefully showing the new values within the string.
// PSEUDOCODE: 
// var testPhrase = "Turing is the best!"
//console.log(testPhrase)
// for (i=0; i <testPhrase.length; i++) {
//      if (testPhrase[i] === " ") {
//          (testPhrase[i+1].toUpperCase())
//          }
//}
//console.log(testPhrase)
//
//
//
var testPhrase = "Turing is the best!"
console.log(testPhrase)
function badGrammar(phrase) {
    for (i = 0; i < phrase.length; i++) {
        if (phrase[i-1]=== " ") {
           (phrase[i] = phrase[i].toUpperCase())
        }
    }
}
badGrammar(testPhrase)
console.log(testPhrase)

// This is about where I am getting stuck! NO FINAL SOLUTION FOR THIS CHALLENGE AT THE TIME OF ASSIGNMENT TURN IN, but I will keep looking at this before evals.