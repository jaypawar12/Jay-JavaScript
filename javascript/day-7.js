// continue statement => for, while, do while, for in, for of.
/*

    initialize = Normally you will initialize the variable used in the loop (let i = 0). (for starting loop)
    condition = Often is used to evaluate the condition of the initial variable(let i < n) / (let i > n). (for break loop)
    increments/ decrements/ Expression => Often expression increments the value of the initial variable. (for continues loop)
*/


// For Loop Program :-

// for(initialize; condition; increments/ decrements/ Expression){
//     statement.....
// }


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
//             console.log("The Sum of Even Numbers from 1 to " + i + " is : " + evenSum);
//         }
//     }
//     else {
//         console.log('Error! Please Enter a Positive Number.');
//     }
// }

// -------------------------------------------------------------------------------------------------


// 15.Enter n and print out sum of digit of a number.(E.g => 741 => 7 + 4 + 1);

// let n = +prompt("Enter a Number :");
// let sum = 0;

// while (n > 0) {
//     let digits = n % 10;
//     sum += digits;
//     n = (n - (n % 10)) / 10;
// }
// console.log("Sum of Digits :", sum);


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------


/* 
    While Loop Program :-

    while (condition) {
        Statement...
    }

*/

// 1.Print Out 10 to 1.

// let i = 10;
// while(i >= 1){
//     console.log(i);
//     i--;
// }
// -------------------------------------------------------------------------------------------------


// 2.Print Out 51 to 79.

// let i = 51;
// while(i <= 79){
//     console.log(i);
//     i++;
// }
// -------------------------------------------------------------------------------------------------


// 3. Enter n and print out 1 to n.

// let i = +prompt("Enter n Number :");
// let z = 1;
// while(z <= i){
//     console.log(z);
//     z++;
// }
// -------------------------------------------------------------------------------------------------


// 4. Enter n and print out -n to 1.

// let n = +prompt("Enter n Number :");
// let i = -n;

// while(i <= 1){
//     console.log(i);
//     i++;
// }
// -------------------------------------------------------------------------------------------------


// 5. Enter n and print out -n to n.

// let a = +prompt("Enter a Number :");
// let i = -a;

// while(i <= a){
//     console.log(i);
//     i++;
// }
// -------------------------------------------------------------------------------------------------


// 6. Enter n and print out odd num upto n.

// let i = 1;
// let b = +prompt("Enter a Number :");

// while(i <= b){
//     console.log(i);
//     i+=2;
// }
// -------------------------------------------------------------------------------------------------


// 7. Enter n and print out even num upto n.

// let c = +prompt("Enter a Number :");
// let i = 0;

// while(i <= c){
//     console.log(i);
//     i+=2;
// }
// -------------------------------------------------------------------------------------------------


// 8. series print out 1, 4, 3, 16, 5, .....

// let i = 1, j = 2; 
// let n = +prompt("Enter a Number :");
// let count = 0; 

// while (count < 10) { 
//     if (count % 2 === 0) {
//         console.log(i);
//         i += 2;
//     } else {
//         console.log(j * j);
//         j += 2; 
//     }
//     count++;
// }
// -------------------------------------------------------------------------------------------------


// 9. series print out 1, 1, 2, 3, 5, 8 .....

// let e = +prompt("Enter a Number :");
// let x = 0; y = 1, i = 0;
// let z;

// Method : 1
// while(i <= e){
//     console.log(x);

//     z = x + y;
//     x = y;
//     y = z;

//     i++;
// }


//Method : 2
// while(i <= e){
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
//     i++;
// }

// -------------------------------------------------------------------------------------------------


// 10. series print out 1, 4, 12, 32, .....

// let f = +prompt("Enter a Number :");
// let g = 2, h = 0, a = 1, i = 1;

// Method : 1

// while(i <= f){
//     console.log(i * (g ** h));
//     i++;
//     h++;
// }


//Method : 2

// while(i <= f){
//     console.log(a * i);
//     i++;
//     a*=2;
// }

// -------------------------------------------------------------------------------------------------


// 11. Find Out Factorial of Given Number. 

// let j = +prompt("Enter a Number :");
// let k = 1, i = 1;

// while(i <= j){
//     if (j < 0) {
//         console.log('Error! Factorial for negative number does not exist.');
//     }
//     else if(j === 0){
//         console.log("The Factorial Number is : 1")
//     }
//     else{
//         k *= i;
//         console.log(k);
//         i++;
//     }
// }

// -------------------------------------------------------------------------------------------------


// 12. Enter n and Print Out Total Number's of Sum.

// let l = +prompt("Enter a Number :");
// let sum = 0;
// let i = 1; 

// while(i <= l) {
//     if (l > 0) {
//         sum += i;
//         console.log("The sum of numbers from 1 to " + i + " is : " + sum);
//         i++;    
//     }
//     else {
//         console.log("Error! Please Enter a Positive Number.");
//     }
// }

// -------------------------------------------------------------------------------------------------


// 13. Enter n and Print Out Total Odd Number's Sum.

// let m = +prompt("Enter a Number :");
// let oddSum = 0;
// let i = 1;

// while ( i <= m) {
//     if (m > 0) {
//         if (i % 2 == 1) {
//             oddSum += i;
//             console.log("The Sum of Odd Numbers from 1 to " + i + " is : " + oddSum);
//         }
//         i++;
//     }
//     else {
//         console.log('Error! Please Enter a Positive Number.');
//     }
// }
// -------------------------------------------------------------------------------------------------


// 14. Enter n and Print Out Total Even Number's Sum.

// let n = +prompt("Enter a Number :");
// let evenSum = 0;
// let i = 1;

// while(i <= n) {
//     if (n > 0) {
//         if (i % 2 == 0) {
//             evenSum += i;
//             console.log("The Sum of Even Numbers from 0 to " + i + " is : " + evenSum);
//         }
//         i++;
//     }
//     else {
//         console.log('Error! Please Enter a Positive Number.');
//     }
// }

// -------------------------------------------------------------------------------------------------


// 15.Enter n and print out sum of digit of a number.(E.g => 741 => 7 + 4 + 1);

// let n = +prompt("Enter a Number :");
// let sum = 0;

// while (n > 0) {
//     let digits = n % 10;
//     sum += digits;
//     n = (n - (n % 10)) / 10;
// }
// console.log("Sum of Digits :", sum);


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------


/* Do While Loop Program :-

    do {
        Statement...
    } while (condition);

*/


// 1.Print Out 10 to 1.

// let i = 10;
// do{
//     console.log(i);
//     i--;
// }while(i >= 1);

// -------------------------------------------------------------------------------------------------


// 2.Print Out 51 to 79.

// let i = 51;
// do{
//     console.log(i);
//     i++;
// }while(i <= 79);

// -------------------------------------------------------------------------------------------------


// 3. Enter n and print out 1 to n.

// let i = +prompt("Enter n Number :");
// let z = 1;

// do{
//     console.log(z);
//     z++;
// }while(z <= i);

// -------------------------------------------------------------------------------------------------


// 4. Enter n and print out -n to 1.

// let n = +prompt("Enter n Number :");
// let i = -n;

// do{
//     console.log(i);
//     i++;
// }while(i <= 1);

// -------------------------------------------------------------------------------------------------


// 5. Enter n and print out -n to n.

// let a = +prompt("Enter a Number :");
// let i = -a;

// do{
//     console.log(i);
//     i++;
// }while(i <= a);

// -------------------------------------------------------------------------------------------------


// 6. Enter n and print out odd num upto n.

// let i = 1;
// let b = +prompt("Enter a Number :");

// do{
//     console.log(i);
//     i+=2;
// }while(i <= b);

// -------------------------------------------------------------------------------------------------


// 7. Enter n and print out even num upto n.

// let c = +prompt("Enter a Number :");
// let i = 0;

// do{
//     console.log(i);
//     i+=2;
// }while(i <= c);

// -------------------------------------------------------------------------------------------------


// 8. series print out 1, 4, 3, 16, 5, .....

// let i = 1, j = 2; 
// let n = +prompt("Enter a Number :");
// let count = 0; 

// do{ 
//         if (count % 2 === 0) {
//             console.log(i);
//             i += 2;
//         } else {
//             console.log(j * j);
//             j += 2; 
//         }
//         count++;
//     }
// while (count < 10);

// -------------------------------------------------------------------------------------------------


// 9. series print out 1, 1, 2, 3, 5, 8 .....

// let e = +prompt("Enter a Number :");
// let x = 0; y = 1, i = 0;
// let z;

// Method : 1 => "Before using this method, set i to i = 0."
// do{
//     console.log(x);

//     z = x + y;
//     x = y;
//     y = z;

//     i++;
// }while(i <= e);


//Method : 2 => "Before using this method, set i to i = 1."

// do{
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
//     i++;
// }while(i <= e);

// -------------------------------------------------------------------------------------------------


// 10. series print out 1, 4, 12, 32, .....

// let f = +prompt("Enter a Number :");
// let g = 2, h = 0, a = 1, i = 1;

// Method : 1

// do{
//     console.log(i * (g ** h));
//     i++;
//     h++;
// }while(i <= f);


//Method : 2

// do{
//     console.log(a * i);
//     i++;
//     a*=2;
// }while(i <= f);

// -------------------------------------------------------------------------------------------------


// 11. Find Out Factorial of Given Number. 

// let j = +prompt("Enter a Number :");
// let k = 1, i = 1;

// do {
//     if (j < 0) {
//         console.log('Error! Factorial for negative number does not exist.');
//     }
//     else if (j === 0) {
//         console.log("The Factorial Number is : 0")
//     }
//     else {
//         k *= i;
//         console.log(k);
//         i++;
//     }
// } while (i <= j);

// -------------------------------------------------------------------------------------------------


// 12. Enter n and Print Out Total Number's of Sum.

// let l = +prompt("Enter a Number :");
// let sum = 0;
// let i = 1;

// do {
//     if (l > 0) {
//         sum += i;
//         console.log("The sum of numbers from 1 to " + i + " is : " + sum);
//         i++;
//     }
//     else {
//         console.log("Error! Please Enter a Positive Number.");
//     }
// } while (i <= l);

// -------------------------------------------------------------------------------------------------


// 13. Enter n and Print Out Total Odd Number's Sum.

// let m = +prompt("Enter a Number :");
// let oddSum = 0;
// let i = 1;

// do{
//     if (m > 0) {
//         if (i % 2 == 1) {
//             oddSum += i;
//             console.log("The Sum of Odd Numbers from 1 to " + i + " is : " + oddSum);
//         }
//         i++;
//     }
//     else {
//         console.log('Error! Please Enter a Positive Number.');
//     }
// }while ( i <= m);

// -------------------------------------------------------------------------------------------------


// 14. Enter n and Print Out Total Even Number's Sum.

// let n = +prompt("Enter a Number :");
// let evenSum = 0;
// let i = 1;

// do {
//     if (n > 0) {
//         if (i % 2 == 0) {
//             evenSum += i;
//             console.log("The Sum of Even Numbers from 0 to " + i + " is : " + evenSum);
//         }
//         i++;
//     }
//     else {
//         console.log('Error! Please Enter a Positive Number.');
//     }
// } while (i <= n);

// -------------------------------------------------------------------------------------------------


// 15.Enter n and print out sum of digit of a number.(E.g => 741 => 7 + 4 + 1);

// let n = +prompt("Enter a Number :");
// let sum = 0;

// do{
//     let digits = n % 10;
//     sum += digits;
//     n = (n - (n % 10)) / 10;
// }while (n > 0);

// console.log("Sum of Digits :", sum);