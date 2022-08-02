const fibonacci = function(term) {
    term = parseInt(term);
    if (term < 1) return 'OOPS';
    let series = [1, 1];
    for (let i = 2; i <= term + 1; i++) {
        let next = series[i - 2] + series[i - 1];
        series.push(next);
    };
    return series[term - 1];
};

// Do not edit below this line
module.exports = fibonacci;
