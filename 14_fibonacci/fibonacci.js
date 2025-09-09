const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    num = parseInt(num);
    let first = 0;
    let second = 1;
    let result = 0;
    if (num == 1) return second;
    for (i=0; i < num-1 ; i++){
        result = first + second;
        first = second;
        second = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
