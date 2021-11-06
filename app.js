
const allEvens = function(numArray) {
    return numArray.every(function(element) {
        return element % 2 === 0;
    });
};

function lastElement(array) {
    if (array.length === 0) return null;
    return array[array.length - 1];
}

function amountTotal(amount) {
    var total = 0;
    for (i = 0; i < amount.length; ++i) {
         total += amount[i]; // add each element in an array to total
    }
    return total;// return sum of elements in array
}


function sumArray() {
    let i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i]
    }
    return sum;
}

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function returnDay(day) {
    if(day < 1 || day > 7) {
        return null;
    }
    else {
        return week[day-1]
    }
}