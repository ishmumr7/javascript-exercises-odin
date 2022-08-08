const ftoc = function(fahrenheit) {
  let celcius = ((fahrenheit - 32) / 9) * 5;
  return (Math.round(celcius * 10) / 10);
};

const ctof = function(celcius) {
  let fahrenheit = ((celcius / 5) * 9) + 32;
  return (Math.round(fahrenheit * 10) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
