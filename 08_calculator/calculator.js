const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  return total;
};

const multiply = function(nums) {
  let result = 1;
  nums.forEach(num => {
    result *= num;
  });

  return result;
};

const power = function(num, power) {
	return Math.pow(num, power);
};

// const factorial = function(num) {
//   if (num === 0) {
//     return 1;
//   }

//   let result = 1;
//   for (let i = num; i > 0; i--) {
//      result *= i;
//   }

//   return result;
// };

//Another implementation of factorial

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  
  return num * factorial(num - 1);
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
