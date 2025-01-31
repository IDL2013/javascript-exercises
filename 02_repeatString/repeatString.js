const repeatString = function(string,count) {
    if(!string){string=""};
    count = parseInt(count);
    if(count>0){let fullString = string;
    for (i=1;i<count;i++) {
    fullString += string};
    return fullString;
}
else if (count === 0) {return ""}
else {return "ERROR"};
};

// Do not edit below this line
module.exports = repeatString;
