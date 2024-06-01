const repeatString = function(word, num) {
    if (num < 0) return "ERROR";
    let myString = "";
    for (let i=1; i<=num; i++) {
        myString += word
    }
    return myString;
};

// Do not edit below this line
module.exports = repeatString;
