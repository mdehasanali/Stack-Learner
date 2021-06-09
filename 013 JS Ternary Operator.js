var number = 0;
var check = '';

if (number % 2 === 0) {
    check = "Even"
} else {
    check = "Odd"
}
console.log(check);



// ternary oparator
var number = 2
var result = (number === 0) ? "Zero" : (number % 2 === 1) ? "Odd" : "Even";
console.log(result);