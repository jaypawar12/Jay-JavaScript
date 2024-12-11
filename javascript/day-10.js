// Recursion Function => A Function Call It Self Again an Again.

// function sayHello(n){
//     console.log("Inside Function called :",n);
//     if(n < 5){
//         sayHello(++n);
//     }
//     console.log("Function Finished.",n);
// }
// sayHello(1);

// Factorial Number with Recursion Function.

// function factorial(a){
//     if(a==1){
//         return 1;
//     }
//     else{
//         return a * factorial(a-1);
//     }
// }
// console.log(factorial(5));

// Febonacci Number with Recursion Function. 1 1 2 3 5 8 13...

// function febonacci(x,y,z){
//     for(let i = 1; i <= 10; i++){
//             if(i == 1){
//                 console.log(x);
//             }else if(i == 2){
//                 console.log(y);
//             }else{
//                 z = febonacc(x + y);
//                 x = y;
//                 y = z;
//                 console.log(z);
//             }
//         }
// }
// console.log(febonacci(0,1));


function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2); 
}

function printFibonacciSeries(count) {
    for (let i = 1; i < count; i++) {
        console.log(fibonacci(i));
    }
}
printFibonacciSeries(10);