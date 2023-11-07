function CalcAge(deathYear, birthYear)
{
    if(!deathYear) deathYear = new Date().getFullYear();
    return deathYear - birthYear;
}

const findTheOldest = function(people) {
    return people.sort((curr, next) => {
        let currAge = CalcAge(curr.yearOfDeath, curr.yearOfBirth);
        let nextAge = CalcAge(next.yearOfDeath, next.yearOfBirth);

        if(currAge < nextAge){
            return 1;
        }
        else if(currAge > nextAge){
            return -1;
        }

        return 0;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
