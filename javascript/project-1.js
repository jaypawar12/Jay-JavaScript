// 1. write a JavaScript program to find the area of a triangle.

let base = 10;
let height = 15;
let triangle = 1 / 2 * (base * height);

console.log("The Area of Triangle is :",triangle);

// outPut = The Area of Triangle is : 75

// -----------------------------------------------------------------------------------------------------------------------------



// 2 write a javascript programe to convert temperatures to and from celsius, fahrenheit.

let celsius = 20;
let fahrenheit = (celsius * 9/5) + 32;

console.log( celsius,"Celsius Is Equal To",fahrenheit,"Fahrenheit.");

// outPut = 20 'Celsius Is Equal To' 68 'Fahrenheit.'

// -----------------------------------------------------------------------------------------------------------------------------



// 3. write a javascript programe to find the area of rectangle.

let length = 15;
let width = 10;
let rectangle = length * width;

console.log("The Area of Rectangle is :",rectangle);

// outPut = The Area of Rectangle is : 150

// -----------------------------------------------------------------------------------------------------------------------------



// 4. write a javascript programe to find the area of circle.

let pi = 3.14;
let radius = 5;
let circle = pi * (radius ** 2);

console.log("The Area of Circle is :",circle);

// outPut = The Area of Circle is : 78.5

// -----------------------------------------------------------------------------------------------------------------------------



// 5. write a javascript programe to convert to feet into inches.

let feet = 5;
let inches = feet * 12;

console.log( feet,"Feet Is Equal To",inches,"Inches.");

// outPut = 5 'Feet Is Equal To' 60 'Inches.'

// -----------------------------------------------------------------------------------------------------------------------------



// 6. write a javascript programe to calculate given formula.

// 1) a**2 - b**2 = (a-b)(a+b)
let a = 3, b = 5; 
let formula1 = (a ** 2) - (b ** 2);
let formula2 = (a - b) * (a + b);
console.log("The Formula is :",formula1,"Is Equal To",formula2, formula1 === formula2);

// outPut = The Formula is : -16 Is Equal To -16 true

// -----------------------------------------------------------------------------------------------------------------------------



// 2) (a-b)**2 = a**2 - 2ab + b**2
let a1 = 3, b1 = 5;
let formula3 = (a1 - b1) ** 2;
let formula4 = (a1 ** 2) - (2 * a1 * b1) + (b1 ** 2);

console.log("The Formula is :",formula3, "Is Equal To",formula4, formula3 === formula4);

// outPut = The Formula is : 4 Is Equal To 4 true

// -----------------------------------------------------------------------------------------------------------------------------


// 3) (a+b+c)**2 = a**2 + b**2 + c**2 + 2ab + 2ac + 2bc
let a2 = 3, b2 = 5, c = 7;
let formula5 = (a2 + b2 + c) ** 2;
let formula6 = (a2 ** 2) + (b2 ** 2) +(c ** 2) + (2 * a2 * b2) + (2 * a2 * c) + (2 * b2 * c);

console.log("The Formula is :",formula5, "Is Equal To",formula6, formula5 === formula6);

// outPut = The Formula is : 225 Is Equal To 225 true

// -----------------------------------------------------------------------------------------------------------------------------

// 4) (a-b-c)**2 = a**2 + b**2 + c**2 - 2ab - 2ac + 2bc

let a3 = 3, b3 = 5, c3 = 7;
let formula7 = (a3 - b3 - c3) ** 2;
let formula8 = (a3 ** 2) + (b3 ** 2) + (c3 ** 2) - (2 * a3 * b3) - (2 * a3 * c3) + (2 * b3 * c3);

console.log("The Formula is :",formula7, "Is Equal To",formula8, formula7 === formula8);

// outPut = The Formula is : 81 Is Equal To 81 true

// -----------------------------------------------------------------------------------------------------------------------------

// 5) (a-b)**3 = a**3 -3a**2b + 3ab**2 - b**3

let a4 = 3, b4 = 5;
let formula9 = (a4 - b4) ** 3;
let formula10 = (a4 ** 3) - (3 * (a4 ** 2) * b4) + (3 * a4 * (b4 ** 2)) - (b4 ** 3);

console.log("The Formula is :",formula9, "Is Equal To",formula10, formula9 === formula10);

// outPut = The Formula is : -118 Is Equal To -118 true

// -----------------------------------------------------------------------------------------------------------------------------
