const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((total, a) => total + a, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, a) => total * a, 1);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
	if (x === 0) return 1;
  let answer = 1;
  for (let i = 1; i <= x; i++) {
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
