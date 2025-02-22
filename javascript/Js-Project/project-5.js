// 1 Write a simple JavaScript program to print expected Output using the following array.

// Sample array: myColor = ["Red", "Green", "White", "Black"];
// Red, Green, White, Black
// Red+Green+White+Black
// Red, Green, White
// Red
// Green, White
// Red, Green, White, Black, orange

let myColor = ["Red", "Green", "White", "Black"];

console.log("Question :-",1);
// 1)
console.log(myColor.join(", ")); // Output :- Red, Green, White, Black

// 2)
console.log(myColor.join("+")); // Output :- Red + Green + White + Black

// 3)
console.log(myColor.slice(0, 3).join(", ")); // Output :- Red, Green, White

// 4) 
console.log(myColor[0]); // Output :- Red

// 5)
console.log(myColor.slice(1, 3).join(", ")); // Output :- Green, White

// 6)
myColor.push("Orange");
console.log(myColor.join(", ")); // Output :- Red, Green, White, Black, orange

// ---------------------------------------------------------!..Thank You..!--------------------------------------------------------------//


// 2.Write a JavaScript program to get the sum of all array elements using for loop and foreach loop.
console.log("Question :-",2);

let arr = [11, 12, 13, 14, 15];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Using for loop:", sum); //Output :- Using for loop: 65

let foreach = 0;
arr.forEach((ele) => {
    foreach += ele;
});
console.log("Using forEach loop:", foreach); // Output :- Using forEach loop: 65 

// ---------------------------------------------------------!..Thank You..!--------------------------------------------------------------//


// 3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic).
console.log("Question :-",3);

let array = [1, 2, 3, 4, 5];

function findMaxMin(array, max, min) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        else if (array[i] < min) {
            min = array[i];
        }
    }

    console.log("Maximum value :", max); // Output :- Maximum value: 5
    console.log("Minimum value :", min); // Output :- Minimum value: 1
}

findMaxMin(array, array[0], array[0]);

// ---------------------------------------------------------!..Thank You..!--------------------------------------------------------------//


// 4.Write a JavaScript program to convert all array elements into ASCII values.
console.log("Question :-",4);

let char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function charToAscii(arr) {
    return arr.map(char => char.charCodeAt(0));
}
let ASCII = charToAscii(char);

console.log("ASCII Value in Array :-", ASCII);

// Output :- ASCII Value in Array :- (26) [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]


// ---------------------------------------------------------!..Thank You..!--------------------------------------------------------------//


// 5.Write a JavaScript program to remove negative values using the filter array function.
console.log("Question :-",5);

let numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
let filterArray = numbers.filter((ele) => {
    return ele >= 0;
});
console.log("Filter in Array :-", filterArray); // Output :- Filter in Array :- (6) [0, 1, 5, 12, 19, 20]

// ---------------------------------------------------------!..Thank You..!--------------------------------------------------------------//


// 6. Write a JavaScript program using array map() method and return the square of the array element.
// arr[2, 5, 6, 3, 8, 9];
console.log("Question :-",6);

let mapArray = [2, 5, 6, 3, 8, 9];
let square = mapArray.map((ele, index) => {
    return ele ** 2;
})
console.log("The Square of The Array :-",square); // Output :- The Square of The Array :- (6) [4, 25, 36, 9, 64, 81]

// ---------------------------------------------------------!..Thank You..!--------------------------------------------------------------//


// 7.Write a JavaScript program for sorting an array in ascending descending.
// numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];
// myColor = ["Red", "Green", "White", "Black"];
console.log("Question :-",7);

let number = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];

let ascending = number.sort((a, b) => a - b);
console.log("Ascending value:", ascending); // Output :- Ascending value: (11) [0, 1, 5, 5, 12, 12, 17, 19, 20, 20, 23]
let descending = number.sort((a, b) => b - a);
console.log("Descending value:", descending); // Output :- Descending value: (11) [23, 20, 20, 19, 17, 12, 12, 5, 5, 1, 0]

let color = ["Red", "Green", "White", "Black"];
let ascendingColors = [...color].sort();
console.log("Colors Ascending:", ascendingColors); // Output :- Colors Ascending: (4) ['Black', 'Green', 'Red', 'White']
let descendingColors = [...color].sort().reverse();
console.log("Colors Descending:", descendingColors); // Output :- Colors Descending: (4) ['White', 'Red', 'Green', 'Black']

// ---------------------------------------------------------!..Thank You..!--------------------------------------------------------------//


// 8. Write a JavaScript program which filters out any string which is less than 8 characters.
console.log("Question :-",8);

let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
let filterString = words.filter((ele) => {
    return ele.length >= 8; 
});
console.log(filterString); // Output :- ['Javascript']

// ---------------------------------------------------------!..Thank You..!--------------------------------------------------------------//


// 9. write a JavaScript program to print expected output for the following string.
console.log("Question :-",9);

// 1) x = "airplane"; 
let x = "airplane";
console.log(x[2]); // Output :- r

// 2)  x = "oxoxoxox";
let y = "oxoxoxox";
let result = "";

for (let i = 0; i < x.length; i++) {
    result += (i % 2 === 0) ? y[i].toLowerCase() : y[i].toUpperCase();
}
console.log(result);  // Output: "oXoXoXoX"

// 3) x = "A New Java Book";
let z = "A New Java Book";
console.log(`"${z.toLowerCase()}", "${z.toUpperCase()}"`); // Output :- "a new java book", "A NEW JAVA BOOK"

// ---------------------------------------------------------!..Thank You..!--------------------------------------------------------------//


// 10. write a JavaScript program for array reverse.
console.log("Question :-",10);

let reverseArray  = [10,11,12,13,14,15];
console.log("Array is Reverse Ordering :",reverseArray.reverse()); // Output :- Array is Reverse Ordering : (6) [15, 14, 13, 12, 11, 10]

// ---------------------------------------------------------!..Thank You..!--------------------------------------------------------------//


// 11. write a JavaScript program to check if a value is found or not?
console.log("Question :-",11);

let fruits = ["apple", "banana", "cherry"];
console.log(`${fruits.includes("banana")}, 'This is found in the array.'`); // Output :- true, 'This is found in the array.'
console.log(`${fruits.includes("orange")}, 'This is not found in the array.'`); // Output :- false, 'This is not found in the array.'

// ---------------------------------------------------------!..Thank You..!--------------------------------------------------------------//


// 12. write a JavaScript program to print your name and write the number of total characters.
console.log("Question :-",12);

let Name = prompt("Enter Your Name :-");
console.log("The Total Number of Character is :-",Name.length); // Output :- The Total Number of Character is :- 3

// ---------------------------------------------------------!..Thank You..!--------------------------------------------------------------//


// 13. write a JavaScript program given this output using replace concept.
// Input: "I often take a walk with my dog in the evening. 
// His dog follows him everywhere. I don't feed my dog in the morning";
console.log("Question :-",13);

let str = `I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning`;
console.log("String Before Replace :-",str);
let newStr = str.replace(/dog/g, "cat");
console.log("String After Replace :-",newStr); 

// Output: "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"

// ---------------------------------------------------------!..Thank You..!--------------------------------------------------------------//

// 14. write a JavaScript program convert string to array.
// Input :- "Hire the top 1% freelance developers";
console.log("Question :-",14);

let string = "Hire the top 1% freelance developers";
let stringToArray = string.split(" "); 

console.log("Array : ", stringToArray);
// Output:- Array : ["Hire", "the", "top", "1%", "freelance", "developers"]

// ---------------------------------------------------------!..Thank You..!--------------------------------------------------------------//


// 15. write a JavaScript program to convert an array to string.
// Input:- ['5', 32, 'Daniel'];
console.log("Question :-",15);

let Arr = ['5', 32, 'Daniel'];
let arrayToString =  Arr.join(",");
console.log(arrayToString)
// Output: 5,32,Daniel

// ---------------------------------------------------------!..Thank You..!--------------------------------------------------------------//
