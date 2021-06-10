// nested loops
/**
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 4
 * 1 2 3 4 5
 */

// var user = 50;
// for (var i = 1; i <= user; i++) {
//     var result = ''
//     for (let index = 0; index <= i; index++) {
//         result = result + index + " "
//     }
//     console.log(result);
// }




/**
 *    * * * * *
 *    * * * * *
 *    * * * * *
 *    * * * * *
 *    * * * * *
 */

var user = 5;
for (let i = 1; i <= user; i++) {
    var result = ''
    for (let index = 1; index <= user; index++) {
        result = result + index + '* '
    }
    console.log(result);
}


var user = 5;
for (let i = 1; i <= user; i++) {
    var result = ''
    for (let index = 1; index <= user; index++) {
        result = result + '* '
    }
    console.log(result);
}