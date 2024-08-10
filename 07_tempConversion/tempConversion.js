const convertToCelsius = function(temperature) {
  return parseFloat((5/9 * (temperature - 32)).toFixed(1))
}; 

const convertToFahrenheit = function(temperature) {
  return parseFloat(((9/5 * temperature) + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
