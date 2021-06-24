var a = 'abc'

// if (true) {
//     if (true) {
//         if (true) {
//             var b = 10
//             console.log(a);
//         }
//     }
// }
// console.log(b);


function x() {
    var a = 100

    function y() {
        // var a = 50
        console.log(a);
    }
    y()
}
// a is not defined
// console.log(a);
// x()




function text(number) {
    function a() {
        return number % 3 === 0
    }

    function b() {
        return number % 5 === 0
    }

    if (a() && b()) {
        console.log(`${number} is divisible by both 3 and 5`);
    } else {
        console.log(`Not a valid Number`);
    }

}
text(30)