const sumAll = function(x,y) { 
    const sumXY = function(x,y) {min = Math.min(x,y);
        max = Math.max(x,y);
        let val = 0;
        for(i=min;i<=max;i++){
            val += i
        }
        return val;}
    
    if(Math.sign(x)==1 && Math.sign(y)==1){
        if(Number.isInteger(x) && Number.isInteger(y)){
        return sumXY(x,y)}
        else {return "ERROR"};
    }
    else {return "ERROR"};
    
    }
    


// Do not edit below this line
module.exports = sumAll;
