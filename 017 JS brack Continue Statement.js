// *********************************************
// *********** break statements *************
// *********************************************

while (true) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9) {
        console.log(`I am winner`);
        break
    } else {
        console.log(`the random number is ${rand}`);
    }
}


for (let index = 1; index < 10; index++) {

    if (index % 5 === 0) {
        break
    } else {
        console.log(`${index}`);
    }
}