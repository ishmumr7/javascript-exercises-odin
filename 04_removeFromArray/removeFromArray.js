const removeFromArray = function(arr, ...args) {
    newArr = arr;
    args.forEach(element => {
        for (let i = newArr.length - 1; i >= 0; i --) {
            if (element === newArr[i]) {
                newArr.splice(i, 1);
            }
        }
    });

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
