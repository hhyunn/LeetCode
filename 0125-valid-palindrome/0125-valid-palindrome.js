/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    return str.split('').reverse().join('') === str ? true : false;
};