// Frist Function

function add(a, b) {
    return a + b
}

// 1. A Function can be stared in a Variable

var sum = add
console.log(sum(10, 20));

// 2. A Function can be stared in an Array

var arr = []
arr.push(add)
console.log(arr);
console.log(arr[0](10, 50));

// 3. A Function can be stared in an Object

var obj = {
    sum: add

}
console.log(obj);
console.log(obj.sum(20, 60));

// 4. We can Create Function as Need

setTimeout(() => {
    console.log(`This is a set Time Function `);
}, 500)


// 5. We can Pass Function as an Arguments

function add(a, b) {
    return a + b
}


function manipulate(a, b, func) {
    var c = a + b
    var d = a - b

    function multiply() {
        var m = func(a, b)
        return c * d * m;
    }

    return multiply
}
var multiply = manipulate(5, 10, add)
console.log(multiply());


// 6. We can return functions from Another Function