/**
 * Returns Random Number Between Minimum And Maximum
 * @param {Number} max The Maximum Output 
 * @param {Number} min The Minimum Output
 */
function rand(min,max) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}

module.exports = rand;