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