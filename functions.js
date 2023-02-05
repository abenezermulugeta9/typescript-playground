"use strict";
// named function 
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 4));
// arrow function 
const subtract = (num1, num2) => num1 - num2;
console.log(subtract(3, 1));
// anonymous function
const multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(3, 4));
