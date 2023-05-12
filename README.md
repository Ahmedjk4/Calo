### Finally, I'm Back With Calo 2.0.0 Beta 
---
## Installation
```cmd
npm i calo
```

##### Thanks For Downloading 💖
---
## Importing
```js
//using nodejs require
const calo = require('calo');
//using ES6 imports 
import cc from calo
```
---
## Usage
### Calculating : Substract, Adding, Multiplying, Dividing
```js
//Example
const calo = require('calo');
const answer = calo.cc("1 + 1 / 2 x 3");
console.log(answer);
// Output : 2.5
```
---
### Random Numbers
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
### Time Converting (Including Hours,Minutes,Second)
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
## Update 2.0 Full
### Coming On 
Very Soon 💖
### Features
### Includes Money Converting
### Includes Electricity Converting
### Includes Liquad Converting
---
## Note:
This NPM pkg is part of AMEIA Group,
and Developed By Single Developer.

**If you will use it you will need this minified version :**

```html
<script src="calo.min.js"></script>
<script>console.log(calo.cc("2 - 1 + 3"))</script>
```
