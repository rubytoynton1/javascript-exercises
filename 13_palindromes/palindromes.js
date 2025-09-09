const palindromes = function (str) {
    let newStr = str.replace(/[^\w_]|_/g, '').toLowerCase().split("");
    let x = (newStr.length - 1);
    for (i=0 ; i < (newStr.length /2) ; i++) {
        if (newStr[i] != newStr[x]){
            return false;
        }
        x--;
    }
    return true;
    
}
// Do not edit below this line
module.exports = palindromes;
