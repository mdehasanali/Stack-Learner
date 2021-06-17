// litaral object
var obj = {}
obj.x = 10;
obj.y = 20;
obj.z = 30;
console.log(obj);
console.log(typeof obj);


var prints = {
    fulName: 'Md. Ehasan Ali',
    rollNumber: 416875,
    cgpa: 2.81,
    phoneNumber: '01752128520'
}

prints.semester = 'Computer'

console.log(prints);
console.log(prints.fulName);
console.log(prints.cgpa);
console.log(prints.rollNumber);
console.log(prints.phoneNumber);
console.log(prints.semester);



for (const x in prints) {
    if (Object.hasOwnProperty.call(prints, x)) {
        const element = prints[x];
        console.log(element);
    }
}






//////////////////////////////////////
///////////// Consturctor ////////////
//////////////////////////////////////


var obj1 = Object()
obj1.name = 'Ehasan'
obj1.roll = 416875
obj1.cgpa = 2.81

console.log(obj1);
console.log(obj1.name);
console.log(obj1.roll);
console.log(obj1.cgpa);




var obj2 = new Object()
obj2.name = 'Ehasan'
obj2.roll = 416875
obj2.cgpa = 2.81

console.log(obj2);
console.log(obj2.name);
console.log(obj2.roll);
console.log(obj2.cgpa);