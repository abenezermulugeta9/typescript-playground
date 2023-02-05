"use strict";
// named function 
// optional parameter: num3
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(5, 4));
// arrow function 
const subtract = (num1, num2) => num1 - num2;
console.log(subtract(3, 1));
// anonymous function
// required parameter: default value of num3 will be 1 unless value is set
const multiply = function (num1, num2, num3 = 1) {
    return num1 * num2 * num3;
};
console.log(multiply(3, 4));
