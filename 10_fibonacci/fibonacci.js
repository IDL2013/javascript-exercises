const fibonacci = function(input) {

    input = parseInt(input);
    if(input<0){return "OOPS"}
    else if (input>0){
        let goldenRule= ((1.618034**input) - ((1-1.618034)**input))/Math.sqrt(5)
        return Math.round(goldenRule);
    }
    else if (input === 0){return 0;}
    else {return "OOPS"};
};

// Do not edit below this line
module.exports = fibonacci;
