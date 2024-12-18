// Higher Order Method / Function in Array.

// 1. Filter :- The filter() method "creates a new array filled with elements that pass a test provided by a function." 
// - The filter() method does not execute the function for empty elements. 
// - The filter() method does not change the original array.
// 
// Definition = creates a new array of elements that give true for a condition / filter.

let data = [11, 22, 33, 44, 55];

let filterArray = data.filter(function (ele, index){
    return ele >= 30;
});
console.log("Filter in Array =>",filterArray);


// 2. Foreach = The forEach loop is a method in JavaScript that allows you to iterate over an array and perform an operation
//  on each element of the array. It takes a callback function as an argument and applies it to each element of the array.

let foreachArray = data.forEach((ele, inndex) =>{
    console.log("Foreach in Array =>",ele);
});


// 3. Map = Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map 's collection. 
// A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration.
// 
// Definition = Create a new array with the results of some operation. The value its callBack returns are used to form new array.

let mapArray = data.map((ele, index) =>{
    return ele * 3;
});
console.log("Map in Array =>",mapArray);

// 4. Find :- In JavaScript, " the find() method is used to search for an element in an array. "
// It returns the first element in the array that matches the provided function. 
// If no element matches the provided function, it returns undefined. The syntax for using find() is as follows: javascript.

let findArray = data.find((ele, index) => {
    return ele === 44;
});
console.log("Find in Array =>",findArray);


// 5. findIndex = " The findIndex() method returns the index (position) of the first element that passes a test. "
// - The findIndex() method returns -1 if no match is found. The findIndex() method does not execute the function for empty array elements. 
// - The findIndex() method does not change the original array.

let findIndex = data.findIndex((ele, index) => {
    return ele === 22;
});
console.log("FindIndex in Array =>",findIndex);


// 6. Some = " The some() method checks if any array elements pass a test provided as a callback
//  function, returning true if any do and false if none do."
//  It does not execute the function for empty elements or alter the original array.
//  it returns true. Otherwise, it returns false.

let someArray = data.some((ele, index) => {
    return ele >= 10;
});
console.log("Some in Array =>",someArray);


// 7. Every = Every() method is "a built-in method in JavaScript that can be used on arrays to check 
// if every element of the array meets a certain condition specified by a callback function."
// It will return a boolean value indicating whether all elements in the array satisfy the condition or not.

let everyArray = data.every((ele, index) => {
    return ele <= 130;
});
console.log("Every in Array =>",everyArray);


// 8. Includes = "The includes() method returns true if an array contains a specified value."
//  The includes() method returns false if the value is not found. The includes() method is case sensitive.

console.log("Includes in Array =>",data.includes(55));


// 9. Indexof = "The indexOf() method returns the position of the first occurrence of a value in a string."
// The indexOf() method returns -1 if the value is not found. The indexOf() method is case sensitive.

console.log("Indexof in Array =>",data.indexOf(22));
