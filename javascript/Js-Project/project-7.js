
/* 
    1) Create a School class and create a student and faculty method. The Student method gives the student name, 
email and contact number as arguments and prints all details the same as faculty using class & object. 
*/

class School {
    student(name, email, contact) {
        console.log(`Student Name : ${name}`);
        console.log(`Student Email : ${email}`);
        console.log(`Student Contact No : ${contact}`);
    }

    faculty(name, email, contact) {
        console.log(`Faculty Name : ${name}`);
        console.log(`Faculty Email : ${email}`);
        console.log(`Faculty Contact No : ${contact}`);
    }
}

let school = new School();
school.student("Jay Pawar", "jay01@example.in", "6352842488");
school.faculty("Girish Sir", "girish01@example.in", "1234567890");

/*
    OutPut :- 
    Student Name : Jay Pawar
    Student Email : jay01@example.in
    Student Contact No : 6352842488
    Faculty Name : Girish Sir
    Faculty Email : girish01@example.in
    Faculty Contact No : 1234567890
*/

/*
    2) Create a Person class with an argument name and age. create an Employee class through print out details of Person Class.
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    constructor(name, age) {
        super(name, age);
    }

    PersonDetails() {
        console.log(`Hello, My Name is ${this.name} and I'm ${this.age} Years Old.`);
    }
}

let empDetails = new Employee("Jay", 20);
empDetails.PersonDetails();      // OutPut : Hello, My Name is Jay and I'm 20 Years Old.


/*
    3) Employee class creates a constructor called print a simple message. 
*/

class EmpObj {
    constructor(){
       console.log("Employee object created.");
    }
}
let employee = new EmpObj();    // outPut : Employee object created.

/*
    4) Create a shape class and create a rectangle and circle method find circle area(3.14 * r * r) and rectangle area(width height)
    using with argument. 
*/

class shape {
    rectangle(width, height){
        const rectangle = width * height
        console.log(`The Rectangle Area is ${rectangle}.`);
    }

    circle(radius){
        const circle = radius * radius * 3.14;
        console.log(`The Circle Area is ${circle}.`);
    }
}

let Area = new shape();
Area.rectangle(10, 10);    // Output: The Rectangle Area is 100.
Area.circle(10);           // Output: The Circle Area is 314.