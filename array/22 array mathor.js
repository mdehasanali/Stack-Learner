var number = [1, 2, 3, 4, 5, 6, 7, 8]

// copy korbe
// number.copyWithin(3, 1, 4)
// console.log(number);


//laste akti number add korbe
// number.push(9)
// console.log(number);


//laste akti number delete korbe
// number.pop()
// console.log(number);


// first a akti number add korbe
// number.unshift(0)
// console.log(number);


// first a akti number delete korbe
// number.shift()
// console.log(number);


// number.splice(3, 0, 4, 5)
// number.splice(8, 0, 9)
// console.log(number);


// number.splice(5, number.length)
// console.log(number);


// fill methods a ja dibo tai sob index a show korbe
// var array = [1, 5, 4, 9, 3, 7, 8, 6, 2]
// console.log(array.fill(true));
// console.log(array.fill(0));


// array index er por ja show korabo tai show korbe
// var array = [1, 5, 4, 9, 3, 7, 8, 6, 2]
// console.log(array.join());
// console.log(array.join(''));
// console.log(array.join(', '));
// console.log(array.join(' '));
// console.log(array.join(' | '));


// array1 theke array2 jog kora
// var array1 = [1, 5, 4, 9, 3, 7, 8, 6, 2]
// var array2 = [1, 5, 4, 9, 3, 7, 8, 6, 2]
// console.log(array1.concat(array2));


// array kina check korbe 
var array = [1, 5, 4, 9, 3, 7, 8, 6, 2]
var array2 = Array.isArray(array);
console.log(array2);






// var a = [1, 2]
// var b = a
// b[0] = 5
// console.log(a[0]);



//  from methods holo clone kora
// var a = [1, 2]
// var b = Array.from(a)

// b[0] = 5

// console.log(a);
// console.log(b);