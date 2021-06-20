// // add korbe 
// function add(a, b) {
//     var result = a + b
//     console.log(result);
// }


// // sub korbe 
// function sub(a, b) {
//     var result = a - b
//     console.log(result);
// }


//////////////////////////////////////////////////
//////////////// Array add function //////////////
//////////////////////////////////////////////////


var array1 = [1, 2, 5, 8, 5, 7, 8, 4]
var array2 = [8, 5, 2, 3, 6, 9, 4, 4]
var array3 = [9, 8, 7, 1, 2, 3, 4, 5]

// var sum = 0
// for (let i = 0; i < array1.length; i++) {
//     sum += array1[i]
// }
// console.log(sum);


// var sum = 0
// for (let i = 0; i < array2.length; i++) {
//     sum += array2[i]
// }
// console.log(sum);


// var sum = 0
// for (let i = 0; i < array3.length; i++) {
//     sum += array3[i]
// }
// console.log(sum);


function arrayAdd(arr) {
    var sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum);
}
arrayAdd(array1)
arrayAdd(array1)
arrayAdd(array3)