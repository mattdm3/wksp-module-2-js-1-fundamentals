// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q3
// Fix this program
// It should output all of the odd numbers between 1 and 25 (including 1 and 25)


for (let number = 1; number < 26; number++) {

    if (number % 2 === 1) {
        console.log(number);
    }
}