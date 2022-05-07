reverseArray = (array) => {
    newArray = [];
    for (let i = array.length - 1; i>=0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(reverseArray([1,2,3,4]));

reverseArrayInPlace = (array) => {
    for (let i = 0; i < Math.floor(array.length/2); i++) {
        let orig = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = orig;
    }
    return array;
}