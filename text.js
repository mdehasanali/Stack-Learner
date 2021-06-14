const ehasan = (number) => {
    if (number % 2 === 0) {
        if (2 < number < 5) {
            return `Not Weird`
        } else if (6 < number < 20) {
            return `Weird`
        } else {
            return `Not Weird`
        }
    } else {
        return `Weird`
    }
}

console.log(ehasan(19));

// function condition(number) {
//     if (number % 2 == 0) {
//         const a = 2 < number < 5;
//         const b = 6 < number < 20;
//         const c = 20 < number;
//         if (a) return 'Not Weird'
//         if (b) return ' Weird'
//         if (c) return ' Not Weird'
//     } else {
//         return 'Weired'
//     }
// }
// console.log(condition(111));