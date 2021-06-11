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



// Infinity while to for loop 

for (;;) {
    var rand = Math.round(Math.random() * 10)
    if (rand === 10) {
        console.log(`Yes! I am Winner`);
        break
    } else {
        console.log(`This is random number ${rand}`);
    }
}