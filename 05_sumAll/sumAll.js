const sumAll = function(n1, n2) {
    let sum = 0;

    if (n1 < n2) {
        for (let i=n1; i<=n2; i++) {
            sum += i;
        }
        return sum;
    }
    else if (n1 > n2) {
        for (let j=n2; j<=n1; j++) {
            sum += j;
        }
        return sum;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
