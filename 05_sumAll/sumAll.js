const sumAll = function(x,y) { 
    min = Math.min(x,y);
    max = Math.max(x,y);
    let val = 0;
    for(i=min;i<=max;i++){
        val += i
    }
    return val;}


// Do not edit below this line
module.exports = sumAll;
