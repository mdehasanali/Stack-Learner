// multiple array
var array = [
    [11, 12, 13, 14, 15],
    [21, 22, 23, 24, 25],
    [31, 32, 33, 34, 35],
    [41, 42, 43, 44, 45],
    [51, 52, 53, 54, 55]
]

// console.log(array);
// console.log(array[0]);
// console.log(array[0][0]);

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(`Element ${i} ${array[i][j]}`);
    }
}


// for (const iterator of array) {
//     for (const others of iterator) {
//         console.log(`Element ${others}`);
//     }
// }