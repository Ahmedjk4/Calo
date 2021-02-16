async function cc(sum1,type,sum2){
if (type === '+') {
    return sum1 + sum2
}
if(type === '-'){
    return sum1 - sum2
}
if(type === '/' || type === '÷'){
return sum1 / sum2
}
if (type === 'x' || type === 'X' || type === '*') {
    return sum1 * sum2
}
}
module.exports = cc;