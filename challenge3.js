// Given an array of strings, return only the words that begin with the letter "t".
// Overall Goal:
// 1. Define a new array, populate it with strings of words that either begin with the letter "t" or do not.
// 2. Begin a for loop structure, initialized at the beginning of the array (index position 0, or var i = 0) continuing until the end of the array (by checking until  i < array.length evaluates to false) and increasing the increment for i by 1 each cycle (i++). 
// 3. Create an if statement that triggers on each iteration / cycle that checks for whether or not the value at position i within the array "begins with the letter 't'". This can be done with the .startsWith('x') method.
// 4. Using the boolean value that is returned from above, the code block attached to the if statement will use console.log(array[i]) to print the value (at index position i) on true results and will do nothing on false results.
//
// PSEUDOCODE!
//
// var array = ["tword", "word", "tword", "word", "tword", "word"]
// for (i =0; i < array.length, i++) {
//     if (array[i].startsWith("t")) {
//          console.log(array[i])
//     }
//}
//
// FINAL SOLUTION:

var words = ["train", "backyard", "tooth", "garden", "house", "turntable", "topknot", "yesterday", "tuba", "Theory", "Table",]

for (i = 0; i < words.length; i++) {
    if (words[i].startsWith("t")) {
        console.log(words[i])
    }
}
// Refactor / Revise : Turn it into a function, try it with new data!
var words2 = ["tablesaw", "tunnel", "plane", "shoes", "socks", "service", "tuna",]

function tCheck(array){
    for (i = 0; i < array.length; i++) {
    if (array[i].startsWith("t")) {
        console.log(array[i])
        }
    }
}

tCheck(words2)