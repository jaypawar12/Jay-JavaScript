// OOPS = Object Oriented Programming Statement...(classes and instances, inheritance, and encapsulation)

/*  1. 
    Class Declaration :- With Class Keyword (Properties & Methods)
    Class Definition :- Logical Entity of a Object. / a class is a template that defines the shared characteristics of a group of objects.
*/

class test {
    sayHello(){
        console.log("Hello, Good Bye, !..2024..!");
    }
    addition(x,y){
        console.log("Addition of x and y is :", x + y);
    }
};

let obj = new test();
obj.sayHello();
obj.addition(10,20);


// Constructor Definition :- a special function that creates and initializes an object instance of a class (Automatically call when object is creating). 
// Two Type of Constructor :- i) Default Constructor  ii) Parameters Constructor

// i) Default Constructor :-

class Demo {
    constructor(){
        console.log("Default Constructor...")
    }
}
let demo = new Demo();


// ii) Parameters Constructor :-

class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        return `Hello, My Name is ` + this.name;
    }
}

let name = new Person("Jay.!");
console.log(name.introduce());
