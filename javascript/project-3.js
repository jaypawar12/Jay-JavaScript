// 1. Write JS Program to check number is Palindrome or not.

let num = +prompt("Enter a Number :");
let value = num;
let revNum = 0;

while (num > 0) {
    let digit = num % 10;
    revNum = revNum * 10 + digit;
    num = (num - (num % 10)) / 10;
}

if (value === revNum) {
    console.log(`This is a ${value} Palindrome Number.`);
} else {
    console.log(`This is Not a ${value} Palindrome Number.`);
}



// -----------------------------------------------------------------------------------------------------------------------


// 2. Print Series 1, 4, 3, 16, 5, ....

let x = +prompt("Enter a Number :");
for(let i = 0; i <= x; i++){
    if(i % 2 == 1){
        console.log(i);
        i++;
        console.log(i**2);  
    }
}

// -----------------------------------------------------------------------------------------------------------------------

// 3. Print Multiplication table of n.

let y = +prompt("Enter a Number :");
for(let i = 1; i <= 10; i++){
    table = i * y;
    console.log(y +" × "+ i+" = "+table);
}


// -----------------------------------------------------------------------------------------------------------------------


// 4. find out sum of digit of given number.

let n = +prompt("Enter a Number :");
let sum = 0;

while (n > 0) {
    let digits = n % 10;
    sum += digits;
    n = (n - (n % 10)) / 10;
}
console.log("Sum of Digits :", sum);

// -----------------------------------------------------------------------------------------------------------------------


// 5. print series 1, 1, 2, 3, 5, 8, ...

let e = +prompt("Enter a Number :");
let a = 1; b = 1;
let c;

for(let i = 1; i <= e; i++){
    if(i == 1){
        console.log(a);
    }else if(i == 2){
        console.log(b);
    }else{
        c = a + b;
        a = b;
        b = c;
        console.log(c);
    }
}

// -----------------------------------------------------------------------------------------------------------------------

