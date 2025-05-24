const fibonacci = function(num) {
    fib = [0, 1];

    if (num === 1)
        return 1;
    else if (num === 2)
        return fib[0] + fib[1];
    else if (num > 1) {
        for (let i=2; i<=num; i++)
            fib.push(fib[i-1] + fib[i-2])
    } else if (num < 0)
        return "OOPS";
    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
