"use strict";
class Person {
    getNameWithAddress() {
        return `${this.name} lives at ${this.address}`;
    }
    // getters and setters 
    get empId() {
        return this.id;
    }
    set empId(id) {
        this.id = id;
    }
}
class Employee extends Person {
    getNameWithAddress() {
        return `${this.name} works at ${this.address}`;
    }
    static getAge() {
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
    constructor(isbn, title, author) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
    }
}
let book1 = new Book(1231423, 'You\'re a badass!', 'Jen Sincero');
console.log(book1);
