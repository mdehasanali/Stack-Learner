var number1 = "10";
var number2 = '10' // string literal

// console.log(number1);
// console.log(number2);



//////////////////////////////////////////////////
////////////// Literal Constructor ///////////////
//////////////////////////////////////////////////

var fulName = 'Md. Ehasan Ali' // String literal 
var fulName2 = String('Md. Ehasan Ali') // String Constructor\
var fullName3 = fulName.toString()

// console.log(fulName);
// console.log(fulName2);

var hobby = 'My fav game\'s is Cricket, Footboll, Carram, Programing '
    // console.log(hobby);

var hobby = 'This is a \'String\''
    // console.log(hobby);


// new line create
var hobby = 'This is a \n String'
    // console.log(hobby);

// backcelas print
var hobby = 'This is a \\ String'
    // console.log(hobby);




//////////////////////////////////////////////////
////////////// String Comparison /////////////////
//////////////////////////////////////////////////


var a = 'abc'
var b = 'bcd'
    // console.log(a == b);

// console.log(a > b);
// console.log(a < b);
// console.log('a' > 'Z');

// console.log('aaaaaZ' < 'aaaaaz');


// console.log('001' == 1);




/////////////////////////////////////////////////
////////////// String Methods ///////////////////
/////////////////////////////////////////////////

var a = 'My name is'
var b = 'Md. Ehasan Ali'
var c = a.concat(' ', b)
console.log(c);
// console.log(c.anchor());

// akti word show korbo
console.log(c.charAt(11));

console.log(c.startsWith('My name is'));
console.log(c.endsWith('Ehasan Ali'));
console.log(c.toUpperCase());
console.log(c.toLowerCase());

//1 theke 10 bad dia 11 index theke sob dhekabe
console.log(c.substr(11));

// space er por je word thakbe segulo array te rupantorito korbe
console.log(c.split(' '));


// auto space delete
console.log('       Ehasan       ');
console.log(('       Ehasan       '.trim()));