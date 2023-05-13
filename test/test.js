const calo = require('../index');
const calomin = require('../calo.min')
// const answer = calo.cc("1 + 1 / 2 x 3");
// console.log(answer);
// This Works On All Methods.
// Or You Can Use The Following :

console.log(calo.cc("1  + (1 / 2) * (2)")); // 2 
console.log(calo.rand(1,100)); // Random Number Between 1 and 100
console.log(calo.time('h','s',1)); // 3600
console.log(calo.convert("usd", "gbp",1)) // 0.8 Approximately
console.log(calo.power("W","cW",1)) //100 
calo.ccold(1,"+",2).then(a => console.log(a)); // 3
calo.updateRates() // Updated Or Error When No Internet
console.log(calo.volume("L","mL",1)) // 1000
