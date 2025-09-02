const removeFromArray = function(arr, ...numbers) {
    numbers.forEach(number => {
        while (arr.indexOf(number) != -1) {
            arr.splice(arr.indexOf(number),1)
        }})
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
