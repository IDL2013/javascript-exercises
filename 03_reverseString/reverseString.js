const reverseString = function(string) {
    stringArray = Array.from(string);
    let revString = [];
    for(i=0; i<string.length; i++){
        revString += stringArray.pop()
    }
    if(string.length<1){return ''};
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
