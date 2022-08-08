const sumAll = function(startNum, finalNum) {
    if (startNum < 0 || finalNum < 0) {
        return "ERROR";
    }

    if (typeof startNum != 'number' || typeof finalNum != 'number') {
        return "ERROR";
    }

    let sum = 0;
    if (startNum < finalNum) {
        for (let i = startNum; i <= finalNum; i ++) {
            sum += i;
        }
    } else if (startNum >= finalNum) {
        for (let i = startNum; i >= finalNum; i --) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
