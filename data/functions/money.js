const fs = require("fs");
/** 
*
* @param {String} from The Name Of The Initial Currency In ISO Code.
* @param {String} to The Name Of The Converted Currency In ISO Code.
* @param {Number} value The Number To Be Converted.
* @description Example : calo.convert("egp", "usd", 30) 
*/
function convert(from,to,value){
    from = from.toUpperCase();
    to = to.toUpperCase();
    const data = fs.readFileSync('./data/config/rates.json');
    const rates = JSON.parse(JSON.stringify(JSON.parse(data)));
    if(from !== "USD"){
        value = value / rates[from]
    }
    return value * rates[to];
}
async function update() {
    const response = await fetch("https://openexchangerates.org/api/latest.json?app_id=0f7b1ec200d9417f8d0b99a6cdb2731a")
    const jsonData = await response.json();
    fs.writeFileSync("./data/config/rates.json", JSON.stringify(jsonData.rates), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    })    
    console.log("Updated Succesfully, ✅🎉")
}
module.exports = convert;
module.exports.update = update;