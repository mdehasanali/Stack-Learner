// `What is pure Function ?`

// `* It Returns the same result if the same arguments`
// `It does not cause any observble side effects`


// pure function
function sqr(number) {
    return number * number
}
console.log(sqr(5));






// pure function nah 
var a = 20;

function add() {
    a = 50
}
add()
console.log(a)






// pure function nah 

var obj = {
    fname: 'Md Ehasan Ali',
    roll: 416875,
    technology: `Computer`
}

function myBio(obj) {
    obj.fname = 'Ehasan'
    obj.roll = 4165458
    obj.technology = 'CMT'
    console.log(obj);
}
myBio(obj)

console.log(obj);