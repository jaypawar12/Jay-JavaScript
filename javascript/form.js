let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let gender = document.querySelector("#gender");
let hobby = document.querySelector("#hobby");
let date = document.querySelector("#date");
let form = document.querySelector("#registration");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (validateForm()) {
        alert("Form is Submited.");
    } else {
        alert("Form has errors. Please fix them.");
    }
});



function validateForm() {
    let isValid = true;

    // Validate First Name
    if (fname.value === "") {
        document.querySelector("#fnameErr").innerHTML = "First Name is required";
        isValid = false;
    } else if (fname.value.length < 3) {
        document.querySelector("#fnameErr").innerHTML = "First Name must be at least 3 characters long";
        isValid = false;
    } else {
        document.querySelector("#fnameErr").innerHTML = "";
    }

    // Validate Last Name
    if (lname.value === "") {
        document.querySelector("#lnameErr").innerHTML = "Last Name is required";
        isValid = false;
    } else if (lname.value.length < 3) {
        document.querySelector("#lnameErr").innerHTML = "Last Name must be at least 3 characters long";
        isValid = false;
    } else {
        document.querySelector("#lnameErr").innerHTML = "";
    }

    // Validate Email
    if (email.value === "") {
        document.querySelector("#emailErr").innerHTML = "Email is required";
        isValid = false;
    } else if (!email.value.includes('@')) {
        document.querySelector("#emailErr").innerHTML = "Please enter a valid email address";
        isValid = false;
    } else {
        document.querySelector("#emailErr").innerHTML = "";
    }

    // Validate Password
    if (pass.value === "") {
        document.querySelector("#passErr").innerHTML = "Password is required";
        isValid = false;
    } else if (pass.value.length < 6 || pass.value.length > 15) {
        document.querySelector("#passErr").innerHTML = "Password must be between 6 and 15 characters long";
        isValid = false;
    } else {
        document.querySelector("#passErr").innerHTML = "";
    }

    // Validate Gender
    let genderSelected = document.querySelector("input[name='gender']:checked");
    if (!genderSelected) {
        document.querySelector("#genderErr").innerHTML = "Gender is required";
        isValid = false;
    } else {
        document.querySelector("#genderErr").innerHTML = "";
    }

    // Validate Hobbies
    if (hobby.value === "" || hobby.selectedIndex === 0) {
        document.querySelector("#hobbyErr").innerHTML = "Please select a hobby";
        isValid = false;
    } else {
        document.querySelector("#hobbyErr").innerHTML = "";
    }

    // Validate Date
    if (date.value === "") {
        document.querySelector("#dateErr").innerHTML = "Date is required";
        isValid = false;
    } else {
        document.querySelector("#dateErr").innerHTML = "";
    }

    return isValid;
}
