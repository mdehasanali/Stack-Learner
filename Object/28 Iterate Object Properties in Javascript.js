var details = {
    fulName: 'Md. Ehasan Ali',
    age: 19,
    cgpa: 2.81,
    technology: 'Computer',
    phoneNumber: '017521258520'
}

// console.log('age' in details);
// console.log('lastName' in details);


for (const key in details) {
    // console.log(key);
    console.log(`${key} : ${details[key]}`);
}