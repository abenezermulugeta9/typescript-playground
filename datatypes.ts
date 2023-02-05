// string
let lname: string = 'John';

lname.toUpperCase();

console.log(typeof (lname));

// number
let age: number = 23;

// arrays
let names: string[];

names = ["John", "Mary", "Bob"];

console.log(names);

// enum
const enum Color {
    Green,
    Blue,
    Red
};

let c: Color = Color.Red;

// boolean
let isValid: boolean = true;

// any
// not recommended to use any especially in production ready code
let department: any;

