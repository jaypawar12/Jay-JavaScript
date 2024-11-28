/*
    Switch Case :

    switch(Condition){
        case : 
            break;
        defaault :
            break;
    }
*/

let num1 = 10, num2 = 20, choice = "Sub"; 

switch(choice){
    case "Add":
        console.log("Addition is :",num1 + num2); 
        break;
    case "Sub":
        console.log("Subtraction is :",num1 - num2); 
        break;
    case "Pro":
        console.log("Product is :",num1 * num2); 
        break;
    case "Div":
        console.log("Divion is :",num1 / num2); 
        break;
    default :
        console.log("Wrong choice !!!"); 
        break;
}

// Grade
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let marks = prompt("Enter a Marks");

if (marks >= 90 && marks <= 100) {
    console.log("Your Grade is A");
}
else if (marks >= 80 && marks <= 89) {
    console.log("Your Grade is B");
}   
else if (marks >= 70 && marks <= 79) {
    console.log("Your Grade is C");
}
else if (marks >= 60 && marks <= 69) {
    console.log("Your Grade is D");
}
else if (marks >= 50 && marks <= 59) {
    console.log("Your Grade is E");
}
else if (marks <= 49 && marks <= 33) {
    console.log("Your Grade is F");
}
else if(marks < 33 && marks >= 0){
    console.log("Sorry, Better Luck Next Time.!:",marks); 
}
else {
    console.log("Enter Valid Number...")
}