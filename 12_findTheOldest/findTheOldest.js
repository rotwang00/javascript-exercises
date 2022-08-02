// const findTheOldest = function(people) {
//     const curentYear = new Date().getFullYear();
//     const oldest = people.reduce(function(a, b) {
//         const ageA = ('yearOfDeath' in a) ? a.yearOfDeath - a.yearOfBirth : currentYear - a.yearOfBirth;
//         const ageB = ('yearOfDeath' in b) ? b.yearOfDeath - b.yearOfBirth : currentYear - b.yearOfBirth;
//         console.log(ageA, ageB);
//         if (ageA > ageB) return a;
//         return b
//         })
// };

const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    })    
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
    
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
