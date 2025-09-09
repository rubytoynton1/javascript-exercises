const findTheOldest = function(arr) {
    let oldest = {age:0};
    arr.forEach(item => {
        if (!Object.hasOwn(item,"yearOfDeath")) {
            let date = new Date().getFullYear()
            item.age = (date - item.yearOfBirth)
        } else {
            item.age = item.yearOfDeath - item.yearOfBirth;
        }
        if (item.age > (oldest.age)) {
            oldest = item;
        }
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
