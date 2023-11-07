const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce((acc, num) => acc + num, 0);
};

const multiply = function(nums) {
  return nums.reduce((acc, num) => acc * num, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	let fa = reversefac(num);
  return multiply(fa);
};

function reversefac(num)
{
  let arr = [];
  for (let f = num; f > 1; f--) {
    arr.push(f)    
  }
  return arr; 
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};