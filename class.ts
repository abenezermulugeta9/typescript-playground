class Employee {
    id!: number;
    name!: string;
    address!: string;
}

let john = new Employee();
john.id = 1;
john.name = 'John';
john.address = 'Highway 5';

console.log(john);