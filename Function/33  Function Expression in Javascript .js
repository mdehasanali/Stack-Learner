function add(a, b) {
    return a + b
}


// Expression function
var addition = (a, b) => {
    return a + b
}
console.log(addition(10, 20));


setTimeout(() => {
    console.log(`This is a setTimeout Function`);
}, 3000)


var another = addition

console.log(another(10, 50));