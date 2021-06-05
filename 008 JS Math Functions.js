var m = 4.65421;

console.log(Math.E); // E er man 
console.log(Math.PI); // pai er man
console.log(Math.floor(Math.PI)); // pai er man floot chera
console.log(Math.abs(m)); // m er man ja ache tai
console.log(Math.floor(m));
console.log(Math.ceil(m)); // m er theke 1 +
console.log(Math.round(m)); // m er value theke

console.log(Math.max(10, 20, 30, 40, 90, 80, 70, 60));
console.log(Math.min(10, 20, 30, 40, 90, 80, 70, 60));

console.log(Math.pow(2, 4)); // power ber koror jonno
console.log(Math.sqrt(64)); // square korar jonno

var randomNumber = ["Ehasan", "Rohim", "Korim", "Rahul", "Sumon", "Ahad", "Sakib", "Maruf", "Tuhin", "Nuru", ]

console.log(Math.floor(Math.random() * 100 + 1)); //  random Number create 

// console.log(Math.random(randomNumber) * randomNumber.length);

for (const name of randomNumber) {
    // console.log(name);
}
for (let x = 0; x <= randomNumber.length - 1; x = x + 1) {
    // console.log(randomNumber[x]);
}