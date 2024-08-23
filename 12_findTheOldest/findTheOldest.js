const findTheOldest = function(people) {  // Accept the 'people' array as a parameter
    let oldest = people.reduce((oldestPerson, currentPerson) => {
        const currentYear = new Date().getFullYear();
        const currentAge = (currentPerson.yearOfDeath || currentYear) - currentPerson.yearOfBirth;
        const oldestAge = (oldestPerson.yearOfDeath || currentYear) - oldestPerson.yearOfBirth;

        return currentAge > oldestAge ? currentPerson : oldestPerson;
    });

    return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
