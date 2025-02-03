const removeFromArray = function(array,...entryToRemove) {
    const filtered =  array.filter(array => !entryToRemove.includes(array));
    return filtered;
}
// Do not edit below this line
module.exports = removeFromArray;
