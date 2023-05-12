const calo = require('../index');
//const calo = require('calo'); -> use this
//-----------------------------------------------------
// const answer = calo.cc("1 + 1 / 2 x 3");
// console.log(answer);
// This Works On All Methods.
// Or You Can Use The Following :
console.log(calo.cc("1  + (1 / 2) * (2)"));
calo.ccold(1,"+",2).then(a => console.log(a));
console.log(calo.rand(1,100));
console.log(calo.random(1,100));
console.log(calo.time('h','s',1));
