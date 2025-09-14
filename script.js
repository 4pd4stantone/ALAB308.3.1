// Objectives

// Use for loops to iterate a specific number of times.
// Use for of loops to iterate through iterable data-like strings.
// Use while loops to iterate based on a condition.
// Use the break and continue statements to control loop flow.

// Part 1.

// let x = 1;

// while (x <= 100) {
//     // console.log(x)

//     if (x % 3 === 0 && x % 5 === 0){
//         console.log(`Fizz Buzz`)
//     } else if (x % 3 === 0) {
//         console.log(`Fizz`)
//     } else if (x % 5 === 0) {
//         console.log(`Buzz`)
//     } else {
//         console.log(x)
//     }

//     x++;
// }

// // Part 2 Prime Time

// let n = 5;

// for (let i = n+1; i <= 20; i++) {
//   let isPrime = true;
//   if (i >=2 ) {
//     for (let j = i - 1; j >= 2; j--) {
//     if (i % j === 0) {
//         isPrime = false;
//         break; }
//   }
//   if (isPrime) {
//     console.log(i);
//     break;
//   }
//   }

// }

// Part 3 Feeling Loopy

const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

const csvData2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"



let currCell = "";
let oneCell = "";
let twoCell = "";
let threeCell = "";
let fourCell = "";
let col = 0;

for (const char of csvData) {
    if (char === "," ){
        if (col === 0) {
            oneCell = currCell;
            // console.log(oneCell)
        } else if (col === 1) {
            twoCell = currCell;
            // console.log(twoCell);
        } else if (col === 2) {
            threeCell = currCell;
            // console.log(threeCell);
        }
        currCell = "";
        col++;
    } else if (char === '\n') {
        fourCell = currCell;
        // console.log(fourCell);
        console.log(`${oneCell},${twoCell},${threeCell},${fourCell}`)
        currCell = "";
        oneCell = "";
        twoCell = "";
        threeCell = "";
        col = 0;
    } else {
        currCell+= char;
        // console.log(currCell)
    }
}
if (currCell.length || col > 0) {
  fourCell = currCell;
  console.log(`${oneCell},${twoCell},${threeCell},${fourCell}`);
}


