// String = Collection of Characters.

let a = "Hello"; // Double Inverted Commas. 
let b = 'Red & White'; // Single Inverted Commas.
let c = `JavaScript`; // String Literal || Template Literal.

console.log(a);
console.log(b);
console.log(c);
console.log("Total Length of String :-",c.length);
console.log("Type of Data Type :-",typeof c);

// Higher Order Method / Function in String.

// 1. Split = "The split method allows you to split the string into an array of substrings based on a given pattern." 
// The split() function takes one or two optional parameters, the first one being the separator, and the second the
// maximum number of elements to be included in the resulting array.

let string = "abcdefghijklmnopqrstuvwxyz";

let split = string.split("");
console.log(split);

// 2. Slice = The slice() method in JavaScript "returns a portion of an array into a new array."
//  It provides a way to copy an array without modifying its original values. 

let slice = string.slice(10,15);
console.log(slice);

// 3. SubString = The substr() method extracts a part of a string. The substr() method begins at a specified position, 
// and returns a specified number of characters. The substr() method does not change the original string. 
// To extract characters from the end of the string, use a negative start position.

let substring = string.substring(0,15);
console.log(substring);

let substr = string.substr(10,15);
console.log(substr);

// 4. ToUpperCase = The toUpperCase() method "converts a string to uppercase letters". 
// The toUpperCase() method does not change the original string.

let toUpperCase = string.toUpperCase();
console.log(toUpperCase);

// 5. Trim = The trim method in JavaScript is a built-in string method that removes
// whitespace characters from the beginning and end of a string. 
// The whitespace characters include spaces, tabs, and newline characters.

let trim = string.trim();
console.log(trim);


// Math Method 

// 1. Math.floor = The Math.floor() method in JavaScript rounds a number down to the nearest integer: 
let floor = Math.floor(15.6);
console.log(floor);

// 2. Math.ceil = The Math.ceil() function in JavaScript rounds a number up to the smallest integer that is greater than or equal to the given number: 
let ceil = Math.ceil(15.6);
console.log(ceil);

// 3. The Math.round() method in JavaScript rounds a number to the nearest integer: 
let round = Math.round(15.2);
console.log(round);

// 4. The Math.random() function in JavaScript returns a random floating-point number between 0 (inclusive) and 1 (exclusive). 
// It is a built-in function that is often used to simulate randomness or generate random values. 
let random = Math.random();
console.log(random);

