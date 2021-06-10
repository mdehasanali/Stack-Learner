// **************************************
// ************** For Loop **************
// **************************************


// name print 
// for (let index = 0; index < 10; index++) {
//     console.log(index + " Md. Ehasan Ali");
// }

// Odd Number Print
// for (let index = 0; index < 100; index++) {
//     if (index % 2 === 1) {
//         console.log(index + " is odd number");
//     }
// }


// jog kora
// var sum = 0;
// for (let index = 1; index <= 100; index++) {
//     console.log(`${index} + ${sum} = ${sum+index}`);
//     // sum += index
//     sum = sum + index
// }
// console.log(`Result :- ${sum}`);



// Even Number jogfoll
// var sum = 0;
// for (let index = 1; index <= 100; index++) {
//     if (index % 2 === 0) {
//         console.log(`${index} + ${sum} = ${sum+index}`);
//         sum += index
//     }
// }
// console.log(`Result :- ${sum}`);






// **************************************
// ************** While Loop ************
// **************************************

// var index = 0
// while (index < 10) {
//     console.log(`${index} Md. Ehasan Ali`);
//     index++
// }


// var index = true;
// while (index) {
//     var rand = Math.floor(Math.random() * 10 + 1)
//     if (rand === 9) {
//         console.log("I am Winner");
//         index = false
//     } else {
//         console.log(`there are random Number ${rand}`);
//     }
// }






// **************************************
// *********** Do While Loop ************
// **************************************

var isRunning = false
while (isRunning) {
    console.log(`I am Running`);
}

do {
    console.log(`I am Running`);
} while (isRunning);