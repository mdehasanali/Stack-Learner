// Frist Look in Closure

// var b = 10;

// function a() {
//     console.log(b)
// }



var b = 10;

function a() {
    // console.log(b);
    var x = 10;
    return function() {
        console.log(x);
    }
}

var abc = a()

console.dir(abc);