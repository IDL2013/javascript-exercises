const leapYears = function(year) {
    let century = Number.isInteger(year / 100);
    let fourHundred = Number.isInteger(year / 400);

    
    if(year % 4==0 && century==false ){
        return true;
    } else if (year % 4==0 && fourHundred==true){
        return true;
    }
    else {return false;}
};

// Do not edit below this line
module.exports = leapYears;
