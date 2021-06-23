// function something(message, name) {
//     function another() {
//         console.log(message, name);
//     }
//     another()
// }
// something('Good Morning', 'Ehasan Ali')



// const something = (grest, name) => {
//     const another = () => {
//         console.log(grest, name)
//     }
//     another()
// }
// something('Good morning', 'Md. Ehasan Ali')




// function something(greet, name) {
//     function firstName() {
//         if (name) {
//             return name.split(' ')[0]
//         } else {
//             return ''
//         }
//     }
//     var message = greet + ' ' + firstName()
//     console.log(message);
// }
// something('Good bye', 'Md. Ehasan Ali')
// something('Good bye', 'Ehasan Ali')




const something = (greet, name) => {
    const fristName = () => {
        if (name) {
            return name.split(' ')[0]
        } else {
            return ''
        }
    }
    var message = greet + ' ' + fristName()
    console.log(message);
}
something('Good bye', 'Md. Ehasan Ali')
something('Good bye', 'Ehasan Ali')