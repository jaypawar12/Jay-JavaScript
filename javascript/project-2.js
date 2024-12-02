/* 
1. Enter Electricity UNIT and Calculate amount to pay

   - For first 50 units, Rs: 1/unit
   - For next 100 units, 2/unit
   - For next 100 units, 3/ units
   - For units above 250, 4/units    
   - For all bills above 150 units an additional surcharge of 20% of total bill amount is added.

*/

// let unit = Number(prompt("Enter Electricity Consumption in Units:"));
// let bill = 0;
// if (unit >= 0 && unit <= 50){
//     bill = unit * 1;
// }else{
//         if (unit <= 150) {
//             bill = (50 * 1) + ((unit - 50) * 2);
//         }
//         else if (unit <= 250) {
//             bill =  (50 * 1) + (100 * 2) + ((unit - 150) * 3);
//         }
//         else if (unit >= 250) {
//             bill = (50 * 1) + (100 * 2) + (100 * 3) + ((unit - 250) * 4);
//         }
//         else {
//             console.log("Invalid input. Please enter a positive number for units.");
//         }
//     }
// if (unit > 150){
//     bill += (bill * 0.20); 
// }

// console.log(`The Electricity Bill For ${unit} Unit is Rs.${bill}`);

// -----------------------------------------------------------------------------------------


// 2. Write a JAVASCRIPT Program to print season according user input using switch case. 
// (eg. 1 to 4 for "Winter", 5 to 8 for "Summer", 9 to 12 "Monsoon" then add any number print 
//"Invalid season" etc.)

// let Season = +prompt("Enter a Number (1-12): ");

// switch (Season) {
//     case 1:
//         console.log("This is a Winter Season (1)");
//     case 2:
//         console.log("This is a Winter Season (2)");
//     case 3:
//         console.log("This is a Winter Season (3)");
//     case 4:
//         console.log("This is a Winter Season (4)");
//         break;

//     case 5:
//         console.log("This is a Summer Season (5)");
//     case 6:
//         console.log("This is a Summer Season (6)");
//     case 7:
//         console.log("This is a Summer Season (7)");
//     case 8:
//         console.log("This is a Summer Season (8)");
//         break;

//     case 9:
//         console.log("This is a Monsoon Season (9)");
//     case 10:
//         console.log("This is a Monsoon Season (10)");
//     case 11:
//         console.log("This is a Monsoon Season (11)");
//     case 12:
//         console.log("This is a Monsoon Season (12)");
//         break;

//     default:
//         console.log("Please enter a valid number (1-12).");
// }

// -----------------------------------------------------------------------------------------



// 3. Write a JAVASCRIPT Program to find rate based on year and calculate total interest using
// nested if (IPRN/100) Principal Amount (P) Interest Rate No. of Years (N) (if 3<N-5 then R is 
// 3 | if 5<N-8 then R is 5 | if 8<N<=12 then R is 12 else R is 15)

// let principal, year;

//         principal = +prompt("Enter Principal Amount :",principal);
//         year = +prompt("Enter a year",year);
//         let rate;

//         if (year > 3 && year <= 5){
//             rate = 3;
//         } 
//         else if (year > 5 && year <= 8){
//             rate = 5;
//         } 
//         else if (year > 8 && year <= 12){
//             rate = 12;
//         } 
//         else{
//             rate = 15;
//         }

//         let totalInterest = (principal * rate * year) / 100;

//         console.log("Principal Amount : " + principal);
//         console.log("Interest Rate No. : " + rate +"%");
//         console.log("Year : " + year);
//         console.log("Total Interest : ₹" + totalInterest);

// -----------------------------------------------------------------------------------------



// 4. Write a JAVASCRIPT Program to check Voting Eligibility

// let ages = +prompt("Enter Your Ages :");
//     if(ages < 18 && ages >= 0){
//         console.log("You Can't Eligible For Vote :",ages);
//     }
//     else if(ages >= 18){
//         console.log("You Can Eligible For Vote :",ages);
//     }
//     else{
//         console.log("Invalid Input. Please Enter a Positive Number :",ages);
//     }

// -----------------------------------------------------------------------------------------



// 5. Write a JAVASCRIPT Program to Classify Age Groups

// let age = 61;

// if(age >= 0 && age <= 12)
// {
//     console.log(age," You Are a Child...");
// }
// else
// {
//     if(age >= 13 && age <= 19)
//     {
//         console.log(age," You Are a Teen..."); 
//     }
//     else if(age >= 20 && age < 60)
//     {
//         console.log(age," You Are a Adult...");
//     }
//     else if(age >= 60)
//     {
//         console.log(age," You Are a Senior...");
//     }
// }


// -----------------------------------------------------------------------------------------