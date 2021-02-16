/** 
*
* @param {Max Of Random Number} max
* 
*/

async function random(max) {
    const number = Math.floor(Math.random() * max)
    return number;
    }
    module.exports = random;