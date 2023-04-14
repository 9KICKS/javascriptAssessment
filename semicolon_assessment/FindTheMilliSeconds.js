function calculateMilliSeconds(age) {
    const milliSecondsPerYear = 31536000000;
    return age * milliSecondsPerYear;
}

user_age = 69;
console.log(calculateMilliSeconds(user_age));