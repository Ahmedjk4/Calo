/** 
*
* @param {Max Of Random Number} max
* 
*/

async function rand(max) {
const number = Math.floor(Math.random() * max)
return number;
}
module.exports = rand;