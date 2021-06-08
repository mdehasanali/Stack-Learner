/*************** If condition *************** */
var a = 20;
var b = 100;
if (a > b) {
    console.log("a boro b er theke");
}
if (a < b) {
    console.log("a choto b er theke");
}


// even and odd
var number = 401;
if (number % 2 === 0) {
    console.log('This is a Even number');
}
if (number % 2 === 1) {
    console.log('This is a odd number');
}

// number % 2 === 0 ? console.log("even") : console.log("odd");

var newPassword = "1234587458Ehasan!@#$%^&*()";
var confromPassword = "1234587458Ehasan!@#$%^&*()";

if (newPassword === confromPassword) {
    console.log("Passowrd Match");
}
if (newPassword !== confromPassword) {
    console.log("Password is not match");
}




/*************** if else condition *************** */

var a = 20;
var b = 100;

if (a > b) {
    console.log("a boro b er theke");
} else {
    console.log("a choto b er theke");
}

// even and odd
var number = 401;
if (number % 2 === 0) {
    console.log('This is a Even number');
} else {
    console.log('This is a odd number');
}

// number % 2 === 0 ? console.log("even") : console.log("odd");


var newPassword = "1234587458Ehasan!@#$%^&*()";
var confromPassword = "1234587458Ehasan!@#$%^&*()";

if (newPassword === confromPassword) {
    console.log("Passowrd Match");
} else {
    console.log("Password is not match");
}





/*************** else if condition *************** */


var a = 20;
var b = 20;

if (a > b) {
    console.log("a boro b er theke");
} else if (a < b) {
    console.log("a choto b er theke");
} else {
    console.log("this number is same");
}

// even and odd
var number = 0;
if (number === 0) {
    console.log("This is Zero");
} else if (number % 2 === 0) {
    console.log('This is a Even number');
} else {
    console.log('This is a odd number');
}

// number % 2 === 0 ? console.log("even") : console.log("odd");

var userId = Math.floor(prompt("Enter your grad number"));
if (userId > 100) {
    console.log("this number is not found")
} else if (userId <= 100 && userId >= 80) {
    console.log("A+");
} else if (userId < 80 && userId >= 70) {
    console.log("A");
} else if (userId < 70 && userId >= 60) {
    console.log("A-");
} else if (userId < 60 && userId >= 50) {
    console.log("B");
} else if (userId < 50 && userId >= 40) {
    console.log("C");
} else if (userId < 40 && userId >= 33) {
    console.log(`D`);
} else {
    console.log("Your are fail");
}