export interface User {
    name: string,
    age?: number,
    id: number,
    email: string
};

let user: User = { name: "John", age: 12, id: 234, email: "john@email.com" };

// object destructuring
let { name, email }: User = { name: "Bob", age: 17, id: 237, email: "bob@email.com" };

console.log(name);

interface Employees extends User {
    salary: number;
}

let employee: Employees = { name: "John", age: 12, id: 234, email: "john@email.com", salary: 1200 };

// export keyword exports the class/ interface into a module
// where it can be imported somewhere within the same module
export interface Login {
    login(): User;
}

