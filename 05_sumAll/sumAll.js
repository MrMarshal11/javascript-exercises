const sumAll = function(num1, num2) {
    // Check if both parameters are numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";
    }

    // Check if both parameters are integers
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    // Determine the minimum and maximum values
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);

    // Check for negative numbers
    if (min < 0) {
        return "ERROR";
    }

    // Calculate the sum of all numbers between min and max (inclusive of min and max)
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
