"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
let user = { name: "John", age: 12, id: 234, email: "john@email.com" };
let employee = { name: "John", age: 12, id: 234, email: "john@email.com", salary: 1200 };
// object destructuring
let { name, email } = { name: "Bob", age: 17, id: 237, email: "bob@email.com" };
console.log(name);
// user1 and user2 get the first two values from the array - return single objects
// ...users is a rest operator, it will get the remaining elements from the array - returns array of objects
let [user1, user2, ...users] = [
    { name: "Christian", age: 27, id: 123, email: "christian@email.com" },
    { name: "Amber", age: 32, id: 678, email: "amber@email.com" },
    { name: "Jennifer", age: 23, id: 567, email: "jennifer@email.com" }
];
console.log(user1);
console.log(user2);
console.log(users);
