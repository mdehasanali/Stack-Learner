var array = [4, 2, 13, 6, 14, 7, 11, 16, 8, 15, 19, 20, 3, 1, 17, 19, 12, 5]
var find = 20
var isfound = false

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === find) {
        console.log(`This is find index Number ${index}`);
        isfound = true
        break
    }
}
if (!isfound) {
    console.log(`Array is Not Found`);
}