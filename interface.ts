export interface User {
    name: string,
    age?: number,
    id: number,
    email: string
};

let user: User = { name: "John", age: 12, id: 234, email: "john@email.com" };

interface Employees extends User {
    salary: number;
}

let employee: Employees = { name: "John", age: 12, id: 234, email: "john@email.com", salary: 1200 };

// export keyword exports the class/ interface into a module
// where it can be imported somewhere within the same module
export interface Login {
    login(): User;
}

// object destructuring
let { name, email }: User = { name: "Bob", age: 17, id: 237, email: "bob@email.com" };
console.log(name);

// user1 and user2 get the first two values from the array - return single objects
// ...users is a rest operator, it will get the remaining elements from the array - returns array of objects
let [user1, user2, ...users]: User[] = [
    { name: "Christian", age: 27, id: 123, email: "christian@email.com" },
    { name: "Amber", age: 32, id: 678, email: "amber@email.com" },
    { name: "Jennifer", age: 23, id: 567, email: "jennifer@email.com" }
]

console.log(user1);
console.log(user2);

console.log(users);





