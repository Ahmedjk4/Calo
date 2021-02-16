## Installition
```cmd
npm i calo
```
Thanks For Downloading 💖

## Importing
```js
//using nodejs require
const calo = require('calo');
//using ES6 imports 
import cc from calo
```
## Usage
### Calculating : Substract, Adding, multiplying, Dividing
```js
/*
Parameter Sum1 (Number)
Parameter Type (String,Ex: - + x X / etc)
Parameter Sum2 (Number)
*/
//Example
const calo = require('calo');
const answer = calo.cc(11,'-',10)
console.log(answer);
```
### Random Numbers
```js
/*
Parameter Max (Number)
*/
//Example
const calo = require('calo');
const answer = calo.rand(10)
//or
const answer2 = calo.random('10')
console.log(answer);
//gives a random number of max parameter
```
