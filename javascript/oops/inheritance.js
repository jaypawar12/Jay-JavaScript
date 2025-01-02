/*
    Inheritance :- " a mechanism that allows a class to inherit properties and behaviors from another class. " 

    Type of Inheritance :-

    1. Single Inheritance = " only a single class inherits the properties of another class. "
    2. Multilevel Inheritance = " A type of inheritance where a class is derived from a class which is also derived from another class. Essentially, it's a “grandparent-parent-child” relationship. "
    3. Multiple Inheritance = " a feature of some object-oriented computer programming languages in which an object or class can inherit features from more than one parent object or parent class "
    4. Hierarchical Inheritance = " The method through which the objects inherit the properties and the methods from the other objects. "

*/

/*  !!!........................... Single Inheritance ...........................!!!  */

// /* ...WithOut Parameters... */

// class parent {
//     sayParent() {
//         console.log("This is a Parent Class...!")
//     }
// }
// class child extends parent {
//     sayChild() {
//         console.log("This is a Child Class...!")
//     }
// }

// let single = new child();
// single.sayParent();
// single.sayChild();



// /* ...With Parameters... */

// class Parent {
//     constructor(a, b, Parent) {
//         this.a = a;
//         this.b = b;
//         this.Parent = Parent;
//     }
//     sayParent() {
//         console.log(`Parent Name is ${this.Parent}`);
//     }
//     sayAddition() {
//         console.log(`Addition is: ${this.a + this.b}`);
//     }
// }

// class Child extends Parent {
//     constructor(a, b, ParentName, child) {
//         super(a, b, ParentName);
//         this.Child = child;
//     }
//     sayChild() {
//         console.log(`Child Name is ${this.Child}`);
//     }
// }

// let singleWithPara = new Child(10, 20, "Jackie Shroff", "Tiger Shroff");
// singleWithPara.sayParent();
// singleWithPara.sayChild();
// singleWithPara.sayAddition();


// More Example :

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return 'I have a ' + this.carname;
//     }
// }

// class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
//     }
//     show() {
//         return this.present() + ', it is a ' + this.model;
//     }
// }

// let mycar = new Model("Ford", "Mustang");
// console.log(mycar.show());



/*  !!!........................... Multilevel Inheritance ...........................!!!  */

/* ...WithOut Parameters... */

// class Grandparent {
//     GrandParent() {
//         console.log("This is a Grand Parent Class...!")
//     }
// }
// class Parent extends Grandparent {
//     Parent() {
//         console.log("This is a Parent Class...!")
//     }
// }
// class Child extends Parent {
//     Child() {
//         console.log("This is a Child Class...!")
//     }
// }

// let Multilevel = new Child();
// Multilevel.GrandParent();
// Multilevel.Parent();
// Multilevel.Child();



/* ...With Parameters... */

class GrandParent {
    constructor(grandParent) {
        this.grandParent = grandParent;
    }
    gParent() {
        console.log(`Grand Parent Name is "${this.grandParent}"`);
    }
}

class Parent extends GrandParent {
    constructor(grandParent, parentName) {
        super(grandParent);
        this.parentName = parentName;
    }
    parent() {
        console.log(`Parent Name is "${this.parentName}"`);
    }
}

class Child extends Parent {
    constructor(grandParent, parentName, childName) {
        super(grandParent, parentName);
        this.childName = childName;
    }
    Child() {
        console.log(`Child Name is "${this.childName}"`);
    }
}

let MultilevelInPara = new Child("Ramesh Tendulkar", "Sachin Tendulkar", "Arjun Tendulkar");
MultilevelInPara.gParent();
MultilevelInPara.parent();
MultilevelInPara.Child();


// /*  !!!........................... Hierarchical Inheritance ...........................!!!  */


/* ...WithOut Parameters... */

// class parent {
//     parent() {
//         console.log("This is a Parent Class...!")
//     }
// }
// class child1 extends parent {
//     firstChild() {
//         console.log("This is a First Child Class...!")
//     }
// }
// class Child2 extends child1 {
//     SecondChild() {
//         console.log("This is a Second Child Class...!")
//     }
// }
// class Child3 extends Child2 {
//     ThirdChild() {
//         console.log("This is a Third Child Class...!")
//     }
// }

// let Multilevel = new Child3();
// Multilevel.parent();
// Multilevel.firstChild();
// Multilevel.SecondChild();
// Multilevel.ThirdChild();


/* ...WithOut Parameters... */

class parent {
    constructor(parentName){
        this.parentName = parentName
    }
    parent() {
        console.log(`${this.parentName} Have 3 Childs...!`)
    }
}
class child1 extends parent {

    constructor(parentName,child1){
        super(parentName)
        this.child1 = child1
    }
    firstChild() {
        console.log(`The First Child Name ${this.child1}...!`)
    }
}
class child2 extends child1 {

    constructor(parentName,child1,child2){
        super(parentName,child1)
        this.child1 = child1
        this.child2 = child2
    }
    secondChild() {
        console.log(`The Second Child Name ${this.child2}...!`)
    }
}
class child3 extends child2 {

    constructor(parentName,child1,child2,child3){
        super(parentName,child1,child2)
        this.child1 = child1
        this.child2 = child2
        this.child3 = child3
    }
    thirdChild() {
        console.log(`The Third Child  Name ${this.child3}...!`)
    }
}

let Multilevel = new child3("Dharmendra","Sunny Deol","Bobby Deol ","Esha Deol");
Multilevel.parent();
Multilevel.firstChild();
Multilevel.secondChild();
Multilevel.thirdChild();



// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     introduce() {
//         return `Hello, My Name is ` + this.name;
//     }
// }
// class FullName extends Person {
//     constructor(name, jp) {
//         super(name);
//         this.fullName = jp;
//     }

//     Name() {
//         return this.name + this.fullName;
//     }
// }

// let fullname = new FullName("Jay ", "Ashokbhai Pawar");
// console.log(fullname.Name());
