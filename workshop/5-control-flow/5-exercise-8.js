// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q8
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######


// let hash = "";

let hash = "";
for (i = 0; i < 7; i++) {
    hash = hash + "#";
    console.log(hash);
}

