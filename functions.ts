// named function 
function add(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(add(5, 4));


// arrow function 
const subtract = (num1: number, num2: number): number => num1 - num2;
console.log(subtract(3, 1));

// anonymous function
const multiply = function (num1: number, num2: number): number {
    return num1 * num2;
}
console.log(multiply(3, 4));