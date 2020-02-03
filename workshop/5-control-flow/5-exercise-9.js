// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q9
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.
//
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#

let odd = "#_#_#_#_";
let even = "_#_#_#_#";

for (i = 1; i < 9; i++) {

    if (i % 2 === 0) {
        console.log(even);

    } else console.log(odd);

}