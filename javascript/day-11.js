// Function as a Variable.

let a = function(b,c){
    console.log("Addition is :",b+c);
}
a(10,20);


// Arrow Function : (anonymous function)

const  x = () => {
    console.log("Hello World!!!");
}
x();

const y = () => {
    console.log("Hello World!!!");
}
y();



// IIFE :- IMEDITALY INVOKING FUNCTION EXPRESSION
(function(m,n){
    console.log(m+n);
})(12,34);



// // CLOUSER FUNCTION :-
function outerFun(){
    function  innerFun(){
        return("This is a innerFunction...");
    }
    console.log("This is a outerFunction...");
    return innerFun;
}
let c = outerFun();
console.log(c());
