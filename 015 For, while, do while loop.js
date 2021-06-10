// ************** For Loop ************

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
var sum = 0;
for (let index = 1; index <= 100; index++) {
    console.log(`${index} + ${sum} = ${sum+index}`);
    // sum += index
    sum = sum + index
}
console.log(`Result :- ${sum}`);



// Even Number jogfoll
var sum = 0;
for (let index = 1; index <= 100; index++) {
    if (index % 2 === 0) {
        console.log(`${index} + ${sum} = ${sum+index}`);
        sum += index
    }
}
console.log(`Result :- ${sum}`);