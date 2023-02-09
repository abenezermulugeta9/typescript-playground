class Employee {
    id!: number;
    name!: string;
    address!: string;

    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    }
}

let john = new Employee();
john.id = 1;
john.name = 'John';
john.address = 'Highway 5';

console.log(john);
console.log(john.getNameWithAddress());

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