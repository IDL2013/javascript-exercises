const palindromes = function (input) {
    let regEx = /[^A-Za-z0-9_]/g;
    let arrForward = input.toLowerCase().replace(regEx,'');
    let arrReverse = arrForward.split('').reverse().join('');

    if(arrForward === arrReverse){
        return true
    } else if (arrForward != arrReverse){return false};
    }
;

// Do not edit below this line
module.exports = palindromes;
