const add = (a,b) => {return a+b};

const subtract = (a,b) => {return a-b};

const sum = function(array){
  total = 0;
  for(i=0; i<array.length; i++){
    total += parseInt(array[i]);
  }
  return total;
  };

const multiply = function(array) {
  initial = 1;
  for(i=0;i<array.length;i++){
    initial = initial * array[i];
  }
  return initial;
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(number) {
	let output = number;
  if(number<0){
    return -1;
  } else if(number==0||number==1) {
    return 1;}
  while (number>1){
    number--;
    output = output * number;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
