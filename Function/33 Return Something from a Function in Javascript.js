function addAll() {
    var sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
var result = addAll(1, 2, 3)
console.log(result);




function details(name, email) {
    return {
        name: name,
        email: email
    }
}
var ehasan = details('Md. Ehasan Ali', 'mdehasanali100@gmail.com');
console.log(ehasan);