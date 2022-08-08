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

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }
//

// Do not edit below this line
module.exports = removeFromArray;
