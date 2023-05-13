const fs = require("fs");
/** 
*
* @param {String} from The Name Of The Power Unit.
* @param {String} to The Name Of The Converted Power Unit.
* @param {Number} value The Number To Be Converted.
* @description Example : calo.power("W", "cW", 1) 
*/
function convert(from,to,value){
    const data = fs.readFileSync('./data/config/power.json');
    const Powers = JSON.parse(JSON.stringify(JSON.parse(data)));
    if(from !== "W"){
        value = value / Powers[from]
    }
    return value * Powers[to];
}
module.exports = convert