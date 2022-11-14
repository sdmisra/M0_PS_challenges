// Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.

// Overall Goal:
// 1. Define a new array, populate it with multiple strings that contain a mixture of both uppercase and lowercase letters (throughout each string).
// 2. Begin a 'for loop structure', initializing it at the beginning of the array and run it until it loops through each index position within the array (find this end with the .length method), with each cycle progressing through the array by an increment of 1.
// 3. Create a statement within this for loop that prints the string at each index position *AS* it runs the method .toLowerCase() on it. (This should just be a single line of code, and it does not need to actually change the original arrays contents, simply print each value in lowercase))
//
//
// PSUEDOCODE:
// var array = ["woRdS1", "WoRDs2", "WordS3", "WoRdS4", ]
//
// for (var i = 0; i <array.length; i++) {
//    console.log(array[i].toLowerCase())
//}
//
// Final Solution:
var oddWords = ["HelLo", "GoODBYE", "FareWELL", "ToOdleS"]

for (var i = 0; i<oddWords.length; i++) {
    console.log(oddWords[i].toLowerCase())
}

// Refactor / Revise: Turn it into a function, then test it with another set of data.
function caseFix(array) {
    for (var i = 0; i <array.length; i++) {
       console.log(array[i].toLowerCase())
    }
}
var oddWords2 = ["HuZZaH", "WoOHooO", "OMGzorzZzzzZ", "SUpErCalIfRaGiLisTICeXPeAliDocIOUs",]
console.log(oddWords2)

caseFix(oddWords2)