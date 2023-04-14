function reaArrange(array) {
    const negative = [];
    const positive = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negative.push(array[i]);
        } else {
            positive.push(array[i]);
        }
    }
    return negative.concat(positive);
}

const user_array = [10, -1, 20, 4, 5, -9, -6];
console.log(reaArrange(user_array));