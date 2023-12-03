/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    let dateArr = date.split('-').map(Number);
    let daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeapYear(dateArr[0])) {
        daysOfMonth[1]++;
    }
    let count = 0;
    for (let i = 0; i < dateArr[1] - 1; i++) {
        count += daysOfMonth[i];
    }
    count += dateArr[2];
    return count;
};

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) return true;
        } else {
            return true;
        }
    }
    return false;
}

// test
const date = "2019-02-10";
console.log(dayOfYear(date));
