/**
 * 
 * @param {Number} sum1 
 * @param {String} type 
 * @param {Number} sum2 
 */


async function cc(sum1,type,sum2){
const plus = sum1 + sum2
const minus = sum1 - sum2
const multiply = sum1 * sum2
const divide = sum1 / sum2
    switch(type) {
        case '+':
            return plus;
            break;
        case '-':
             return minus;
            break;
        case '/': 
            return divide;
            break;
        case '÷':
            return divide;
            break;
        case 'x':
            return multiply;
            break;
        case 'X':
            return multiply;
            break;
        case '*':
            return multiply;
            break;
        default:
            console.log('Type Must Be String And Be -,+,/,÷,x,X,*')
    }
}

module.exports = cc;