// Change Password

/*
    1. oldPassword, newPassword, confirmPassword
    2. oldPass == newPass => "Password Already Used."
    3. newPass == confPass => "Successfully Changed."
    4. newPass != confPass => "New password & Confirm Password Not Matched."
*/

// let oldPass = prompt("Enter Your Old Password...");
// let newPass = prompt("Enter Your New Password...");
// let confPass = prompt("Enter Your Confirm Password...");

// if(oldPass == newPass){
//     console.log("This Password is Already Used.");
// }else{
//     if(newPass == confPass){
//         console.log("Password Successfully Changed.");
//     }else{
//         console.log("New password & Confirm Password Not Matched.");
//     }
// }


/*
    1. An electricity board charges the following rates to domestic users
    to discourage large comsumption of energy for the first 100 units 60p
    per unit for the next 200 units 80p per unit for the next 300 units 90p 
    per unit All users are charged a minimun of Rs.50. if the total amount
    is more than 300.00 then an additional surcharge of 15% is added.

    i)   0 - 100 = 60p     
    ii)  100 - 300 = 80p
    iii) 300+  = 90p

*/

// let unit = Number(prompt("Enter Electricity Consumption in Units:"));
// let bill = 0;

// if (unit >= 0 && unit <= 100){
//     bill = unit * 0.60;
// }else{
//     if (unit <= 300) {
//         bill = (100 * 0.60) + ((unit - 100) * 0.80);
//     }
//     else if (unit >= 300) {
//         bill = (100 * 0.60) + (200 * 0.80) + ((unit - 300) * 0.90);
//     }
//     else {
//         console.log("Invalid input. Please enter a positive number for units.");
//     }
//         bill = Math.max(bill, 50);
//     }

// if (bill > 300){
//     bill += (bill * 0.15); 
// }

// console.log("Total Electricity Bill : ₹" + bill);


// 2. Javascript program to check whether a person is eligible for voting or not? 

// let age = +prompt("Enter Your Age :");

// if(age < 18 && age >= 0){
//     console.log("You Can't Eligible For Vote :",age);
// }

// else if(age >= 18){
//     console.log("You Can Eligible For Vote :",age);
// }
// else{
//     console.log("Invalid Input. Please Enter a Positive Number :",age);
// }

/*
    3. Write a C program to accept the basic salary of an employee from the user. 
Calculate the gross salary on the following basis: 

Basic           HRA      DA  

Up to 5000      8%       20% 
5000 to 10000   12%      30% 
10000 to 15000  15%      40% 
15000 above     20%      50% 

*/

// let baseSalary = +prompt("Enter Your Base Salary :"), grossSalary;
// let HRA = +prompt("Enter Your HRA :");
// let DA = +prompt("Enter Your DA :");

// HRA = (baseSalary * HRA) / 100;
// DA = (baseSalary * DA) / 100;

// if(0 >= baseSalary && 5000 <= baseSalary){
//     grossSalary = baseSalary + HRA + DA;
// }
// else if(5000 > baseSalary && 10000 <= baseSalary){
//     grossSalary = baseSalary + HRA + DA;
// }
// else if(10000 > baseSalary && 15000 <= baseSalary){
//     grossSalary = baseSalary + HRA + DA;
// }
// else if(15000 > baseSalary){
//     grossSalary = baseSalary + HRA + DA;
// }
// else{
//     console.log("Invalid Input. Please Enter a Positive Number");
// }

// console.log("Your Gross Salary is : ₹"+grossSalary);



/*
        4. Compute taxes for a given income with tax slab rates as follows... 

        a. slab 1... 0-2500: 0% 
        b. slab 2... 2500-5000: 10% 
        c. slab 3... 5000-10000: 20% 
        d. slab 4... 10000+: 30% 

        (for each range of a given income, the tax rate is different)
        e.g. input: x = 5200 divisions are 0-2500, 2500-5000, 5000-5200 
        calculation: 0-2500 of x: 0% of 2500 = 0 2500-5000 of x: 10% of 2500 250 5000-1000 of x: 20% of 200 = 40 output: 290 

*/

// let slab = +prompt("Enter Your Slab :");
// let taxCount = 0;

// if(slab > 0 && slab < 2500){
//     taxCount += (slab * 0);
// }
// else if(slab >= 2500 && slab < 5000){
//     taxCount += (slab - 2500) * 0.10;
// }
// else if(slab >= 5000 && slab <= 10000){
//     taxCount += (slab - 5000) * 0.20; 
//     taxCount += 2500 * 0.10; 
// }
// else if(slab >= 10000){
//     taxCount += (slab - 10000) * 0.30; 
//     taxCount += 5000 * 0.20;
//     taxCount += 2500 * 0.10; 
// }
// else{
//     console.log("Invalid Input. Please Enter a Positive Number");
// }

// console.log("Total Tax : ₹", taxCount);


/*
    5. Write a program to evaluate the Total, Percentage, Grade of a student for the following constraints: 

    a. If marks > 75 - grade A 
    b. If 60 < marks < 75 – grade B 
    c. If 45 < marks<60 – grade C 
    d. If 35 marks<45 - grade D 
    e. If marks < 35 - Fail 

*/

// let marks = prompt("Enter Your Marks :");

// if(marks > 75 && marks <= 100){
//     console.log("Your Grade is A.")
// }else if(marks > 60 && marks <= 75){
//     console.log("Your Grade is B.")
// }else if(marks > 45 && marks <= 60){
//     console.log("Your Grade is C.")
// }else if(marks > 35 && marks <= 45){
//     console.log("Your Grade is D.")
// }else if(marks <= 35){
//     console.log("Sorry!! Are You Fail, Better Luck For Next Time.")
// }
// else{
//     console.log("Invalid Input. Please Enter a Positive Number.");
// }

/*
    6. Declare two variables x and y. Assign values to these variables. Number x 
    should be printed only if it is less than 2000 or greater than 3000, and number
    y should be printed only if it is between 100 and 500. 
*/

let x = 5500, y = 200;

if (x < 2000 || x > 3000) {
    console.log("The Value of x is:", x);
} else if (y >= 100 && y <= 500) {
    console.log("The Value of y is:", y);
} else {
    console.log("Invalid Input. Please Enter a Positive Number.");
}
