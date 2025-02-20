const getAge = function(death,birth){
    if(!death){
        const todayDate = new Date();
        death = todayDate.getFullYear();
    }
    death = parseInt(death);
    birth = parseInt(birth);
    return death - birth;
}

const findTheOldest = function(people) {

    // REDUCE array to the highest age
    return people.reduce((previous, current) => { 
        const previousAge = getAge(previous.yearOfDeath,previous.yearOfBirth);
        const currentAge = getAge(current.yearOfDeath,current.yearOfBirth);
    return previousAge < currentAge ? current : previous;
    })
}

// Do not edit below this line
module.exports = findTheOldest;
