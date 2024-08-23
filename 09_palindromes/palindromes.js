const palindromes = function(phrase) {
    // Convert the phrase to lowercase and remove all non-alphabetic characters
    let cleanedPhrase = phrase.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Reverse the cleaned phrase
    let reversedPhrase = cleanedPhrase.split("").reverse().join("");

    // Check if the cleaned phrase is the same forwards and backwards
    return cleanedPhrase === reversedPhrase;
};

// Do not edit below this line
module.exports = palindromes;
