// 'Start with an array of strings. Print only the words that include the letter combination "ing".'
// Main Goal:
// 1. Create an array, populate it with strings, some of which contain "ing" and others do not.
// 2. Start a for loop structure, initialize it at index position 0 (i = 0), limit it by the end of the array (run until i < array.length is false), increment the position by 1 each cycle (i++).
// 3. Within that loop, begin a conditional statement (if statement) that will check for whether or not "ing" is present within the value at index position i within the array (the method .includes can check for this condition and return a boolean value).
// 4. If that if statement returns true, the code block for that conditional check will print the value at index position i to the console (console.log(array[i])).
//
// PSEUDOCODE:
//
// var array = ["words", "wordsing", "ingwords", "woingrds", "wingords", "wordings", ]
//
// for (i = 0; i <array.length; i++) {
//      if (array[i].includes("ing")) {
//          console.log(array[i])
//          }
//}
var ingWords = ["laughing", "talking", "bowing", "laughs", "talks", "bows", "swing", "ingvar", "singing", "varingable"]

for (i = 0; i <ingWords.length; i++) {
    if (ingWords[i].includes("ing")) {
        console.log(ingWords[i])
    }
}
// REFACTOR / REVISE - Turn it into a function!
//
var ingWords2 = ["jumping", "jumped", "jumps", "runs", "running", "ran", "rooted", "rooting", "king", "cole", "knitting"]

function ingCheck(array) {
    for (i = 0; i<array.length; i++) {
        if(array[i].includes("ing")) {
            console.log(array[i])
        }
    }
}

ingCheck(ingWords2)