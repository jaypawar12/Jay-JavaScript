// continue statement => for, while, do while, for in, for of.
/*
    for(initialize; condition; increments/ decrements/ Expression){
        statement.....
    }

    initialize = Normally you will initialize the variable used in the loop (let i = 0). (for starting loop)
    condition = Often is used to evaluate the condition of the initial variable(let i < n) / (let i > n). (for break loop)
    increments/ decrements/ Expression => Often expression increments the value of the initial variable. (for continues loop)
*/


// For Loop Program :-

// 1.Print Out 10 to 1.

// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }
// -------------------------------------------------------------------------------------------------


// 2.Print Out 51 to 79.

// for(let i = 51; i <= 79; i++){
//     console.log(i);
// }
// -------------------------------------------------------------------------------------------------


// 3. Enter n and print out 1 to n.

// let i = +prompt("Enter n Number :");
// for(i = 1; i <= n; i++){
//     console.log(i);
// }
// -------------------------------------------------------------------------------------------------


// 4. Enter n and print out -n to 1.

// let n = +prompt("Enter n Number :");
// for(let i = -n; i <= 1; i++){
//     console.log(i);
// }
// -------------------------------------------------------------------------------------------------


// 5. Enter n and print out -n to n.

// let a = +prompt("Enter a Number :");
// for(let i = -a; i <= a; i++){
//     console.log(i);
// }
// -------------------------------------------------------------------------------------------------


// 6. Enter n and print out odd num upto n.

// let b = +prompt("Enter a Number :");
// for(let i = 1; i <= b; i+=2){
//     console.log(i);
// }
// -------------------------------------------------------------------------------------------------


// 7. Enter n and print out even num upto n.

// let c = +prompt("Enter a Number :");
// for(let i = 0; i <= c; i+=2){
//     console.log(i);
// }
// -------------------------------------------------------------------------------------------------


// 8. series print out 1, 4, 3, 16, 5, .....

// let d = +prompt("Enter a Number :");
// for(let i = 0; i <= d; i++){
//     if(i % 2 == 1){
//         console.log(i);
//         i++;
//         console.log(i**2);  
//     }
// }
// -------------------------------------------------------------------------------------------------


// 9. series print out 1, 1, 2, 3, 5, 8 .....

// let e = +prompt("Enter a Number :");
// let x = 0; y = 1;
// let z;

//Method : 1
// for(let i = 0; i <= e; i++){
//     console.log(x);

//     z = x + y;
//     x = y;
//     y = z;
// }


//Method : 2
// for(let i = 1; i <= e; i++){
//     if(i == 1){
//         console.log(x);
//     }else if(i == 2){
//         console.log(y);
//     }else{
//         z = x + y;
//         x = y;
//         y = z;
//         console.log(z);
//     }
// }
// -------------------------------------------------------------------------------------------------


// 10. series print out 1, 4, 12, 32, .....

// let f = +prompt("Enter a Number :");
// let g = 2, h = 0, a = 1;

//Method : 1

// for(let i = 1; i <= f; i++){
//     console.log(i * (g ** h));
//     h++;
// }


//Method : 2

// for (i=1; i<=f; i++){
//     console.log(a*i);
//     a*=2;
// }

// -------------------------------------------------------------------------------------------------


// 11. Find Out Factorial of Given Number. 

// let j = +prompt("Enter a Number :");
// let k = 1;

// for(let i = 1; i <= j; i++){
//     if (j < 0) {
//         console.log('Error! Factorial for negative number does not exist.');
//     }
//     else if(j === 0){
//         console.log("The Factorial Number is : 1")
//     }
//     else{
//         k *= i;
//         console.log(k);
//     }
// }

// -------------------------------------------------------------------------------------------------


// 12. Enter n and Print Out Total Number's of Sum.

// let l = +prompt("Enter a Number :");
// let sum = 0;

// for (let i = 1; i <= l; i++) {
//     if (l > 0) {
//         sum += i;
//         console.log("The sum of numbers from 1 to " + i + " is : " + sum);
//     }
//     else {
//         console.log("Error! Please Enter a Positive Number.");
//     }
// }

// -------------------------------------------------------------------------------------------------


// 13. Enter n and Print Out Total Odd Number's Sum.

// let m = +prompt("Enter a Number :");
// let oddSum = 0

// for (let i = 1; i <= m; i++) {
//     if (m > 0) {
//         if (i % 2 == 1) {
//             oddSum += i;
//             console.log("The Sum of Odd Numbers from 1 to " + i + " is : " + oddSum);
//         }
//     }
//     else {
//         console.log('Error! Please Enter a Positive Number.');
//     }
// }
// -------------------------------------------------------------------------------------------------


// 14. Enter n and Print Out Total Even Number's Sum.

// let n = +prompt("Enter a Number :");
// let evenSum = 0

// for (let i = 1; i <= n; i++) {
//     if (n > 0) {
//         if (i % 2 == 0) {
//             evenSum += i;
//             console.log("The Sum of Odd Numbers from 1 to " + i + " is : " + evenSum);
//         }
//     }
//     else {
//         console.log('Error! Please Enter a Positive Number.');
//     }
// }

// -------------------------------------------------------------------------------------------------


// 15.Enter n and print out sum of digit of a number.(E.g => 741 => 7 + 4 + 1);

let o = +prompt("Enter a Nummber :");   
let sumDigit = 0;

for (let i = 0; i < o.length; i++) {
    sumDigit += o[i];
}   
console.log("Sum of Digits: " + sumDigit);

