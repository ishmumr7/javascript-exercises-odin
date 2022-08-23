const palindromes = function (str) {
    var punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

    var finalStr = punctuationless.replace(/\s+/g, "");

    var str_rev = [...finalStr].reverse().join("");

    return (finalStr.toLowerCase() === str_rev.toLowerCase());
};

// Do not edit below this line
module.exports = palindromes;
