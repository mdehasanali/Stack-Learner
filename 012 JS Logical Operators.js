/**
 ******* logical operators *******
 *    &&   ||   !
 * 
 * 
 *  (&&) and operators condition
 * 
 * true && true = true
 * true && false = false
 * false && true = false
 * false && false = false
 * 
 * 
 * (||) or operators condition
 * 
 * true || true = true
 * true || false = true
 * false || true = true
 * false || false = false
 * 
 */

// (&&) and operators

var a = 10;
var b = 20;
var c = 30;
var d = 40;

if (a < b && c > d) {
    console.log(`a geterthan b and c geterthan d`);
} else {
    console.log(`At least one condition false`);
}


if (a < b || c > d) {
    console.log(`a geterthan b and c geterthan d`);
} else {
    console.log(`At least one condition false`);
}



var check1 = a < b; // true is true
var check2 = !a < b; // true is true
console.log(check1);
console.log(check2);


var check1 = (a < b); // true is true
var check2 = !(a < b); // true is false
console.log(check1);
console.log(check2);