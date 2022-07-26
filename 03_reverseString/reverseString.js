const reverseString = function(str) {
    let arr = str.split('');
    arr.reverse();
    let answer = arr.join('');
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
