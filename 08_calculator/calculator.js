const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {
	let result = 0;
  arr.forEach(item => {
    result += item;
  });
  return result;
};

const multiply = function(arr) {
  let result = 1;
  arr.forEach(item => {
    result *= item;
  });
  return result;
};

const power = function(n1, n2) {
	return n1 ** n2;
};

const factorial = function(num) {
	fact = 1;
  for (let i=1; i<=num; i++)
    fact *= i;
  return fact;
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
