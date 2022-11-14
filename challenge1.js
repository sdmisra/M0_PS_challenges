 // "Given an array of strings, return the strings that have exactly four characters."

 // Overall goal - 
 // 1. Define a new array, populate it with multiple strings - some of which have exactly four characters and others that do not.
 // 2. Begin a 'for loop structure', initializing it at the beginning of the array and run it until it loops through each index position within the array(find this end with the .length method), with each cycle progressing through the array by an increment of 1. 
 // 3. Create an if statement within this for loop that compares the length attribute (use .length) of the value at the current index position within the array to the number 4. If the value is strictly equal to 4 (=== operator), use that boolean value to:
 // If true, print the string to the console.
 // If false, do nothing and continue looping through the statement until the array has been cycled through fully.


// Pseudocode:
// var array = ["words1", "words2","words3", "words4", "words5", ]

// for (var i = 0; i < array.length; i++) {
//  if (array[i].length === 4) {
//    console.log(array[i])
//}

//FINAL SOLUTION //

var names = ["Shane", "Steve", "Gary", "Jonas", "Mike", "Mary", "John", "Bill", "Ariadne", "Aretha", "Gerhardt",]
for (var i = 0; i<names.length; i++) {
    if (names[i].length ===4) {
        console.log(names[i])
    }
}

// TO TURN INTO FUNCTION?: LOOK BACK AT PSEUDO! Generic == reusable.

function checkFour(array) {
    for (var i = 0; i<array.length; i++) {
        if (array[i].length ===4) {
            console.log(array[i])
        }
    }    
}

checkFour(names);

// Refactor - Try it with a new set of data, and if it works, try to make a similar function that checks for a diff condition before printing it to console!

var names2 = ["Tony", "Jeremy", "Earl", "Cletus", "Abraham", "Vivienne", "Bono",]

checkFour(names2)

function fourOrMore(array) { 
    for (var i = 0; i<array.length; i++) {
    if (array[i].length >= 4) {
        console.log(array[i])
        }
    }   
}
fourOrMore(names)

fourOrMore(names2)