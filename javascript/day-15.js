// Object :- Collection of Multiple datatype.(Physical Entity)
/*
    Syntax :-

    let a = {
        Key : Value,
    }
*/

// let person = {};
// let person = new Object();
// console.log(person);

let data = {
    name: "Jay",
    age: 19,
    email: "pawarjay674@.in",
    gender: "male",
}

// 1. Dot Operator :-
/*
    Syntax :-

    object.propertyName
    console.log(data.name);
    console.log(data.age);
*/

// 2. Bracket notation :-
/*
    Syntax :-

    object[expression]
    console.log(data['name']);
    console.log(data['age']);
*/

// 1.Add Some New Property And His Value. 2.Replace Value 3.Delete Property.
/*
    1.data.address = "VIP Road Vesu, Surat, Gujarat"
    2.data.age = 20
    3.delete data.age
*/

// Object Method :-

// 1. The hasOwnProperty() method of Object instances returns a boolean indicating whether
// this object has the specified property as its own property (as opposed to inheriting it).
/*
    hasOwnProperty(prop)
    console.log(data.hasOwnProperty("name")); // true
*/

// 2. The Object.keys() static method returns an array of a given object's own enumerable
// string-keyed property names.
/*
    Object.keys(obj)
    console.log(Object.keys(data));
*/

// 3. The Object.values() static method returns an array of a given object's own enumerable 
// string-keyed property values.
/*
    Object.values(obj)
    console.log(Object.values(data));
*/
