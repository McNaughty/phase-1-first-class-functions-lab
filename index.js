// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//should return a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = (drivers) => {return drivers.slice(0,2)};

console.log (returnFirstTwoDrivers(drivers));

//should return a new array containing the last two drivers from the passed-in array
const returnLastTwoDrivers = (drivers) => {return drivers.slice(-2)};

//has the arrays as elements of a new array
const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]


function createFareMultiplier(value){
    function fareMultiplier(value){
        return value * value;
    };
    return fareMultiplier;
}


// Doubles fare

function fareDoubler(value){
    let newfare = value * 2;
    return newfare;
}

// Triples fare

function fareTripler(value){
    let newfaret = value * 3;
    return newfaret;
}

//returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//returns the last two drivers when passed returnLastTwoDrivers() as the second argument

function selectDifferentDrivers(value,value2=returnLastTwoDrivers()) {
    return value2(value);
}

selectDifferentDrivers(drivers,returnFirstTwoDrivers());