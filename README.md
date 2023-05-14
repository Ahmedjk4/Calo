### Finally, Calo 2.0.1 Is Here
![GitHub license](https://img.shields.io/badge/license-ISC-green.svg) ![npm version](https://img.shields.io/npm/v/calo.svg?style=flat)
---
# Installation
```cmd
npm i calo
```

##### Thanks For Downloading 💖
---
# Importing
```js
//using nodejs require
const calo = require('calo');
//using ES6 imports 
import cc from calo
```
---
# Usage
## Calculating : Substract, Adding, Multiplying, Dividing
```js
//Example
const calo = require('calo');
const answer = calo.cc("1 + 1 / 2 x 3");
console.log(answer);
// Output : 2.5
```
---
## Random Numbers
```js
// calo.random(minimum,maximum)
//Example
const calo = require('calo');
const answer = calo.rand(1,10)
//or
const answer2 = calo.random(1,10)
console.log(answer);
//gives a random number betseen 1 and 10.
```
---
## Time Converting (Including Hours,Minutes,Second)
```js
/*
* Parameter type (String, M or H)
* Parameter type2 (String, M or H)
* Parameter Input (Number To Convert)
*/
// Note : H = Hours , M = Minutes , S = Seconds
// Example 
const calo = require('calo');
const answer = calo.time('h','m',1)
console.log(answer)
// Output : 60
```
---
## Powers Converting
```js
const calo = require('calo');
const answer = calo.power('W','cW',1)
console.log(answer) //100
```
#### You can check the available unit and edit them at _node_modules/calo/data/config/power.json_
---
## Volumes Converting
```js
const calo = require('calo');
const answer = calo.volume("L","mL",1)
console.log(answer) //1000
```
#### You can check the available unit and edit them at _node_modules/calo/data/config/volume.json_
---
## Currency Converting
```js
const calo = require('calo');
const answer = calo.convert("usd", "gbp",1)
console.log(answer) // 0.8 Approximately
```
### USE THIS TO UPDATE THE CURRENCY DATABASE:

##### Needs Internet Connection
```js
const calo = require('calo')
calo.updateRates() // Updated Or Error When No Internet
```
---
## Note:
This NPM pkg is part of AMEIA Group,
and Developed By Single Developer.

**If you will use it you will need this minified version :** https://github.com/Ahmedjk4/Calo/releases/download/MinifiedVersionLatest/calo.min.js

```html
<script src="calo.min.js"></script>
<script>console.log(calo.cc("2 - 1 + 3"))</script>
```
