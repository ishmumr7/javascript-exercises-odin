const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        
        if (oldestAge > currentAge) {
            return oldest;
        } else {
            return current;
        }
    })
}

const getAge = function(birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }

    return death - birth;
}



// const findTheOldest = function (people) {
//     let today = new Date();
//     let currentYear = today.getFullYear();
//     let highestAge = 0;
//     let oldest;

//     people.forEach(person => {
//         if (person.yearOfDeath - person.yearOfBirth > highestAge) {
//             highestAge = person.yearOfDeath - person.yearOfBirth;
//             oldest = person;
//         }
//     });

//     return oldest;
// };

// Do not edit below this line
module.exports = findTheOldest;
