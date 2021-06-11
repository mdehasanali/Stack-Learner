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







// *********************************************
// *********** continue statements *************
// *********************************************


// odd number create for if statement

for (let index = 0; index < 10; index++) {
    if (index % 2 === 0) {
        continue
    } else {
        console.log(index);
    }
}


// 3 or 7 sikp koror jonno is program

for (let index = 0; index < 10; index++) {
    if (index === 3 || index === 7) {
        continue
    } else {
        console.log(`This Number is ${index}`);
    }
}