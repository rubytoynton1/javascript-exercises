const add = function(a, b) {
	return (a+b);
};

const subtract = function(a,b) {
	return (a-b);
};

const sum = function(arr) {
	let result = arr.reduce((sum, number) => sum + number, 0);
  return result;
};

const multiply = function(arr) {
  let result = arr.reduce((multiply, number) => multiply * number);
  return result;
};

const power = function(a,b) {
	return (a**b);
};

const factorial = function(x) {
	current = x;
  for (i=current-1; i > 0; i--) {
    current = (current * i)
  }
  return current;
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
