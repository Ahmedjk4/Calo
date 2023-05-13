/** 
*
*@param {Number} input
*@param {String} type
*@param {String} type2
*
*/
function time(type,type2,input) {
    if(type.toLowerCase() === "m" && type2.toLowerCase() === "h"){
        return input / 60;
    }
    if(type.toLowerCase() === "h" && type2.toLowerCase() === "m"){
        return input * 60;
    }
    if(type.toLowerCase() === "s" && type2.toLowerCase() === "m"){  
        return input / 60;
    }
    if(type.toLowerCase() === "m" && type2.toLowerCase() === "s"){
        return input * 60;
    }
    if(type.toLowerCase() === "s" && type2.toLowerCase() === "h"){
        return input / 3600;
    }
    if(type.toLowerCase() === "h" && type2.toLowerCase() === "s"){
        return input * 3600;
    }
}

module.exports = time;