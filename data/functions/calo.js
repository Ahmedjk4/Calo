const re = /(?:(?:((?:(?:[ \t]+))))|(?:((?:(?:\/\/.*?$))))|(?:((?:(?:(?<![\d.])[0-9]+(?![\d.])))))|(?:((?:(?:[0-9]+\.(?:[0-9]+\b)?|\.[0-9]+))))|(?:((?:(?:(?:\+)))))|(?:((?:(?:(?:\-)))))|(?:((?:(?:(?:\*)))))|(?:((?:(?:(?:\/)))))|(?:((?:(?:(?:%)))))|(?:((?:(?:(?:\()))))|(?:((?:(?:(?:\)))))))|(?:((?:(?:(?:\x)))))|(?:((?:(?:(?:\÷)))))/gm;

/**
 * Example: cc("1 + 1")
 * @param {String} mathexp The Mathmatical Expression
 */
function cc(mathexp){
    if(re.test(mathexp) == true) {
        var ans;
        try{
           ans = eval(mathexp.replace("x","*").replace("÷","/").replace("X","*"))
        } catch {
            throw new Error("Please Enter Valid Expression (x,*,-,+,-,%,÷)")
        }
        return ans;
    } else {
        throw new Error("Please Enter Valid Expression (x,*,-,+,-,%,÷)")
    }
}


module.exports = cc;
