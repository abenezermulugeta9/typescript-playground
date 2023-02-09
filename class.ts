class Person {
    // you can use '#' or 'private' keyword to decalre 
    // private variables, using none will make the visibility 
    // public. There is also a 'protected' visibility
    protected id!: number;
    protected name!: string;
    protected address!: string;

    getNameWithAddress(): string {
        return `${this.name} lives at ${this.address}`;
    }
}

class Employee extends Person {
    id!: number;
    name!: string;
    address!: string;

    getNameWithAddress(): string {
        return `${this.name} works at ${this.address}`;
    }

    static getAge(): number {
        return 50;
    }
}

let john = new Employee();
john.id = 1;
john.name = 'John';
john.address = 'Highway 5';

console.log(john);
console.log(john.getNameWithAddress());

// accessing static method
console.log(Employee.getAge());

class Book {
    isbn: number;
    title: string;
    author: string;

    constructor(isbn: number, title: string, author: string) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
    }
}

let book1 = new Book(1231423, 'You\'re a badass!', 'Jen Sincero');
console.log(book1); 