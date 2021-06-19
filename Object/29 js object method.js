var details = {
    fName: 'Md. Ehasan Ali',
    age: 18,
    cgpa: 2.81,
    department: 'Computer',
    shift: '1st'
}

// console.log(Object.keys(details));
// console.log(Object.values(details));
// console.log(Object.entries(details));


// dutai change hoiye jabe
// var details2 = details
// details2.fName = 'Ehasan Ali'
// console.log(details);
// console.log(details2);



// new Object create korbe [ var objName =  Object.assign({}, objName)   ]

var details2 = Object.assign({}, details)
details2.fName = 'Ehasan';
details2.age = 19;
details2.cgpa = 2.82;
console.log(details);
console.log(details2);