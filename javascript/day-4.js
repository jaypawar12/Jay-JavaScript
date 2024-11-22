/*
   Conditional Statement :- if else, nested, ladder, switch, ternary operator
   
   1. if-else

   if(condition){
        statement.
    }
    else{
        statement.
    }

    5. Ternary Condition

    Condition ? true : false
*/

// Find Small No Between Two Number in if-else Statement...

// let num1 = 10, num2 = 20;

// if(num1 < num2)
// {
//     console.log("Smaller Number is :",num1)
// }    
// else
// {
//     console.log("Smaller Number is :",num2)
// }


// Find Small No Between Two Number in Ternary Condition...

// let num1 = 10, num2 = 20;

// num1 < num2 ? console.log("Smaller Number is :",num1) : console.log("Smaller Number is :",num2

// console.log("Smaller Number is :",num1 < num2 ? num1 : num2);


/*
    Swapping Two Number :-  1. Using Third Variable
                            2. Without Third Variable
*/

// 1. Using Third Variable

// let a = 10, b = 20, c;

// console.log("Before Swapping -------->");
// console.log("A ------->", a);
// console.log("B ------->", b);

// c = a;
// a = b;
// b = c;

// console.log("After Swapping ----->");
// console.log("A ----->", a);
// console.log("B ----->", b);

// 2. Without Third Variable

// let x = 10, y = 20;

// console.log("Before Swapping ----->");
// console.log("X ----->", x);
// console.log("Y ----->", y);

// x = x + y;
// y = x - y;
// x = x - y;

// console.log("After Swapping ----->");
// console.log("X ----->", x);
// console.log("Y ----->", y);

// x = x ^ y;
// y = x ^ y;
// x = x ^ y;

// console.log("After Swapping ----->");
// console.log("X ----->", x);
// console.log("Y ----->", y);