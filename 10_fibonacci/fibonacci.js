const fibonacci = function(position) {
    // Convert string inputs to numbers
    position = parseInt(position);

    // Handle edge cases
    if (position < 0) return "OOPS";
    if (position === 0) return 0;

    // Create an array with the first two Fibonacci numbers
    let array = [0, 1];

    // Push numbers in a Fibonacci way until position is matched
    for (let i = 2; i <= position; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }

    // Return number in the position which Fibonacci sequence is requested
    return array[position];
};


// Do not edit below this line
module.exports = fibonacci;
