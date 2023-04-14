function getArrayElementLengths(array) {
    if (Array.isArray(array)) {
        length = array.map(element => element.length);
        return length;
    }
}

const user_array = ['12326624', '1234', '3784', '28394'];
console.log(getArrayElementLengths(user_array));