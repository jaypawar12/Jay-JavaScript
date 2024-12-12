// 1. Write a JAVASCRIPT Program to print a greeting message using with argument no return type function when call a function without argument at that
//  time print message Good Morning.

function greetingMessage(Hi) {
    if(Hi){
        console.log(Hi);
    }
    else{
        console.log("Good Morning...");
    }
}
greetingMessage();
// OutPut : Good Morning...

// ---------------------------------------------------------------------------------------------------------------------------------------------

// 2. Write a JAVASCRIPT Program to find Circle area (area pi*r*r) using return type with argument function.


function areaCircle(pi, radius, circle) {
    circle = pi * (radius ** 2);
    return circle;
}

console.log(areaCircle(3.14, 5));
// OutPut : The Area of Circle is : 78.5.

// ---------------------------------------------------------------------------------------------------------------------------------------------

// 3. Write a JAVASCRIPT Program to find Triangle area (area = (1*h)/2) using return type with argument function.

function areaTriangle(base, height, triangle) {
    triangle = 1 / 2 * base * height;
    return triangle;
}

console.log(areaTriangle(5, 5));
// OutPut : The Area of Triangle is : 12.5


// 4. Write a JAVASCRIPT Program to find Rectangle area = 1 h using return type with argument function.

function areaRectangle(length, width, rectangle) {
    rectangle = length * width;
    return rectangle;
}

console.log(areaRectangle(10, 10));
// OutPut : The Area of Rectangle is : 100.


// 5. Write a JAVASCRIPT Program to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function.

function calculation(a, b, c) {
    let result = (b * b * (4 * a * c)) / (2 * a);
    return result;
}

console.log(calculation(10, 10, 10));
// OutPut : The Total Answer is : 2000.

// 6. Write a JAVASCRIPT Program to find ans of (a*a) + (2*a*b)+(b*b) using return type with argument function.

function calculate(x, y) {
    let result = (x * x) + (2 * x * y) + (y * y);
    return result;
}

console.log(calculate(10, 10));
// OutPut : The Total Answer is : 400.

// 7. Write a JAVASCRIPT Program to convert Fahrenheit to Celsius (c = (f-32)/1.8) using return type with argument function.

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;
    return fahrenheit + "°F is Equal to " + celsius + "°C";
}

console.log(fahrenheitToCelsius(100));
// OutPut : 100°F is equal to 37.77777777777778°C

// 8. Write a JAVASCRIPT Program to convert Celsius to Fahrenheit (f= (c*1.8)+32) using return type with argument function.

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;
    return celsius + "°C is Equal to " + fahrenheit + "°F";
}

console.log(celsiusToFahrenheit(100));
// OutPut : 100°C is equal to 212°F

// 9. Write a JAVASCRIPT Program to find if a given number is odd or even using an argument with no return type.

function evenOddChecker(n) {
    if (n % 2 == 1) {
        console.log(n,"This is Number is oddNumber.");
    } else {
        console.log(n,"This is Number is evenNumber.");
    }
}
evenOddChecker(11);

// OutPut : 11 'This is Number is evenNumber.'

// 10. Write a JAVASCRIPT Program to swap a value without third variable using with argument no return type.

function swappingNumber(i,j){
    console.log("Swapping Before Number : i : " + i +" j : "+ j);
    
    i = i + j;
    j = i - j;
    i = i - j;

    console.log("Swapping After Number : i : " + i +" j : "+ j);

}
swappingNumber(10,20);

// OutPut : 
// Swapping Before Number : i : 10 j : 20
// Swapping After Number : i : 20 j : 10
