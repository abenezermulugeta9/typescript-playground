interface User {
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
