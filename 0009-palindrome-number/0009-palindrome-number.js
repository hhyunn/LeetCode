/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const strX = x.toString();
    const reverseStrX = strX.split('').reverse().join('');
    return strX === reverseStrX;
};