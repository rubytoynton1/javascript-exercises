const sumAll = function(a,b) {
    var finalSum = 0;
    if ((a < 0) || (b<0)) return "ERROR";
    if ((!Number.isInteger(a)) || (!Number.isInteger(b))) return "ERROR";
    
    if (a<b) {
        for (let i = a; a <= b ; i++) {
            finalSum += a;
            a++;
        }}
    else {
        for (let i = b; b <= a ; i++) {
            finalSum += b;
            b++;
    }}
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
