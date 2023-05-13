const fs = require("fs");
/** 
*
* @param {String} from The Name Of The Volume Unit.
* @param {String} to The Name Of The Converted Volume Unit.
* @param {Number} value The Number To Be Converted.
* @description Example : calo.volume("L", "mL", 1) 
*/
function convert(from,to,value){
    const data = fs.readFileSync('./data/config/volume.json');
    const volumes = JSON.parse(JSON.stringify(JSON.parse(data)));
    if(from !== "mL" || from !== "milliLiter"){
        value = value / volumes[from]
    }
    return value * volumes[to];
}
module.exports = convert;