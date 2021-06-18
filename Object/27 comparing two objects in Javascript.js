var data1 = {
    a: 10,
    b: 20
}
var data2 = {
    a: 10,
    b: 20
}

// console.log(data1 === data2);

if (data1.a === data2.a && data1.b === data2.b) {
    console.log(true);
} else {
    console.log(false);
}



//json file object comparijon

console.log(JSON.stringify(data1) === JSON.stringify(data2));