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