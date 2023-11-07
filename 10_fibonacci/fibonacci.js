const fibonacci = function(num) {
    if(num < 0) return "OOPS";

    let f = []
    for (let i = 0; i < num; i++) {
        if(i === 0 || i === 1) f[i] = 1;
        else f[i] = f[i - 2] + f[i - 1];
    }

    return f[num -1];
};

// Do not edit below this line
module.exports = fibonacci;
