const leapYears = function(year) {
    if (year < 0) {
        return "ERROR";
    }

    if (year % 4 === 0) {
        if (year % 100 != 0) {
            return true;
        } else if (year % 100 === 0 && year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

//EASIER WAY:
//return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);

// Do not edit below this line
module.exports = leapYears;
