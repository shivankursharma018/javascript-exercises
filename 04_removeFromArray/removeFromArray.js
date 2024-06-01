const removeFromArray = function(arr, ele) {
    eleIndex = arr.indexOf(ele);
    arr.splice(eleIndex, 1);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
