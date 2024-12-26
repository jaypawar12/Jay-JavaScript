let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let male = document.querySelector("#male");
let female = document.querySelector("#female");
let hobby = document.querySelector("#hobby");
let date = document.querySelector("#date");
let form = document.querySelector("#registion");

form = addEventListener("submit", (event) =>{
    event.preventDefault();
    console.log(event);
    console.log(fname.value);
    console.log(lname.value);
    console.log(email.value);
    console.log(pass.value);
    console.log(male.value);
    console.log(female.value);
    console.log(hobby.value);
    console.log(date.value);
})