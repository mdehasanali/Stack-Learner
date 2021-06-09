var nam = ''
var fulName = '';
if (nam.length === 0) {
    fulName = 'Md. Ehasan Ali'
} else {
    fulName = nam
}
console.log(fulName);


// ( || ) or operator used

var nam = ''
var fulName = nam || "Md. Ehasan Ali";
console.log(fulName);





// ( && ) and operator used

var nam = true
if (nam) {
    console.log('Every Thing is okk ');
}

// ( && ) and operator short used
nam && console.log('Every Thing is okk ');