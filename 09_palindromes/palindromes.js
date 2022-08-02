const palindromes = function (orig) {
    let chars = orig.split('');
    letters = chars.filter(char => /^[A-Z]$/i.test(char));
    lowerLetters = letters.map(char => char.toLowerCase());
    return lowerLetters === lowerLetters.reverse();
};

// Do not edit below this line
module.exports = palindromes;
