const convertToCelsius = function(f) {
  let celsius = (f-32)*5/9;
  celsius = Math.round(celsius*10)/10
  return celsius;
};

const convertToFahrenheit = function(c) {
  let fahrenheit = (9/5*c) + 32
  fahrenheit = Math.round(fahrenheit*10)/10
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
