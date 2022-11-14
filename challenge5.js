// Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!"
// Main Goal:
// 1. Create an array filled with strings of the name of travel destinations. New York City, Chicago, etc.
// 2. Print array to console to see original, unsorted.
// 3.  Create a statement that takes the entire array and sorts it alphabetically (the method .sort() can do this neatly for arrays full of string values). If you want to keep the original data intact, you could set this equal to a new variable.
// 4. Print array to console to see sorted result.
// 5. Create a for loop structure that begins at index position 0 within the array (i = 0), that runs until each value of the array has been iterated through (until i is larger than array.length, or (i < array.length) resolves to false)), and that iterates through each index position 1 at a time(i++).
// 6. Within this loop, create a statement that will print out a customized phrase for each travel destination, by using interpolation alongside console.log:
//console.log(`"Statement here for ${array[i]}"!`)
// PSEUDOCODE:
//
// var places = ["Chicago", "Sydney", "New York City", "Los Angeles", "San Antonio"]
// console.log(places)
// places.sort()
// console.log(places) 
// for (i =0; i < places.length; i++) {
//      console.log(`"The next place I want to visit is ${places[i]}!"`)
//}
// Final Solution:

// var places = ["Chicago", "Sydney", "New York City", "Los Angeles", "San Antonio", "Austin", "Juno", "London"]
// console.log(places)
// places.sort()
// console.log(places)
// for (i=0; i<places.length; i++) {
//     console.log(`"The next place I want to visit is ${places[i]}!"`)
// }

// Refactor and Revise! Make it a function!
var places2 = ["Egypt", "Tblisi", "Kyiv", "Jerusalem", "Zion", "Amsterdam"]
// Show Original before sorting:
console.log(places2)

function alphPlace(array) {
    array.sort();
    for (i=0; i<array.length; i++) {
        console.log(`"The next place I want to visit is ${array[i]}!"`)
    }
}
// Run function, this returns a sorted version of line in interpolated phrases, fufilling our original main goal!
alphPlace(places2);