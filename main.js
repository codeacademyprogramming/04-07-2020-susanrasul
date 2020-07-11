// Write a JavaScript function to calculate the sum of values in an array

var array = [1, 2, 3];
var sum = array.reduce(function (a, b) {
    return a + b;
});
console.log(sum);


// Write a JavaScript function to round a number to a specified number of digits and strip extra zeros (if any)

var a = 5.014060024790;
var result = parseFloat(a.toFixed(4));
console.log(result);


// Write a JavaScript function to round up an integer value to the next multiple of 5

function round(x) {
    return Math.ceil(x / 5) * 5;
}
var n = 39;
console.log(round(n));


// Write a JavaScript function to get difference between given birth date and current date.It should return number of years, months and days

d1 = new Date(2020, 7, 11);
d2 = new Date(1998, 11, 22);
diff = new Date(
    d1.getFullYear() - d2.getFullYear(),
    d1.getMonth() - d2.getMonth(),
    d1.getDate() - d2.getDate()
);
console.log(diff.getYear(), " Year(s),",
    diff.getMonth(), "Month(s), and",
    diff.getDate(), "Days.");