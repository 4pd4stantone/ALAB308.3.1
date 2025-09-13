// Objectives

// Use for loops to iterate a specific number of times.
// Use for of loops to iterate through iterable data-like strings.
// Use while loops to iterate based on a condition.
// Use the break and continue statements to control loop flow.


// Part 1. 

let x = 1;

while (x <= 100) {
    // console.log(x)
    
    if (x % 3 === 0 && x % 5 === 0){
        console.log(`Fizz Buzz`)
    } else if (x % 3 === 0) {
        console.log(`Fizz`)
    } else if (x % 5 === 0) {
        console.log(`Buzz`)
    } else {
        console.log(x)
    }
    

    x++;
}





