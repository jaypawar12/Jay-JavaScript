document.querySelector("#registration").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
        console.log("Form submitted successfully!");

        document.querySelector("#registration").reset(); 
        clearErrors(); 

        alert("Form submitted successfully!");

    } else {
        console.log("Please fix the errors before submitting.");
    }
});

// Real-time validation
document.querySelector("#fname").addEventListener("input", validateForm);
document.querySelector("#lname").addEventListener("input", validateForm);
document.querySelector("#email").addEventListener("input", validateForm);
document.querySelector("#pass").addEventListener("input", validateForm);
document.querySelectorAll("input[name='gender']").forEach(input => {
    input.addEventListener("change", validateForm);
});
document.querySelector("#hobby").addEventListener("change", validateForm);
document.querySelector("#date").addEventListener("input", validateForm);

function validateForm() {
    let isValid = true;

    // Validate First Name
    let fname = document.querySelector("#fname");
    if (fname.value === "") {
        document.querySelector("#fnameErr").innerHTML = "First Name is required.";
        isValid = false;
    } else if (fname.value.length < 3) {
        document.querySelector("#fnameErr").innerHTML = "First Name must be at least 3 characters long.";
        isValid = false;
    } else {
        document.querySelector("#fnameErr").innerHTML = "";
    }

    // Validate Last Name
    let lname = document.querySelector("#lname");
    if (lname.value === "") {
        document.querySelector("#lnameErr").innerHTML = "Last Name is required.";
        isValid = false;
    } else if (lname.value.length < 3) {
        document.querySelector("#lnameErr").innerHTML = "Last Name must be at least 3 characters long.";
        isValid = false;
    } else {
        document.querySelector("#lnameErr").innerHTML = "";
    }

    // Validate Email
    let email = document.querySelector("#email");
    if (email.value === "") {
        document.querySelector("#emailErr").innerHTML = "Email is required.";
        isValid = false;
    } else if (!email.value.includes('@')) {
        document.querySelector("#emailErr").innerHTML = "Please enter a valid email address.";
        isValid = false;
    } else {
        document.querySelector("#emailErr").innerHTML = "";
    }

    // Validate Password
    let pass = document.querySelector("#pass");
    if (pass.value === "") {
        document.querySelector("#passErr").innerHTML = "Password is required.";
        isValid = false;
    } else if (pass.value.length < 6 && pass.value.length > 15) {
        document.querySelector("#passErr").innerHTML = "Password must be between 6 and 15 characters.";
        isValid = false;
    } else {
        document.querySelector("#passErr").innerHTML = "";
    }

    // Validate Gender
    let genderSelected = document.querySelector("input[name='gender']:checked");
    if (!genderSelected) {
        document.querySelector("#genderErr").innerHTML = "Gender is required.";
        isValid = false;
    } else {
        document.querySelector("#genderErr").innerHTML = "";
    }

    // Validate Hobby
    let hobby = document.querySelector("#hobby");
    if (hobby.value === "") {
        document.querySelector("#hobbyErr").innerHTML = "Please select a hobby.";
        isValid = false;
    } else {
        document.querySelector("#hobbyErr").innerHTML = "";
    }

    // Validate Date
    let date = document.querySelector("#date");
    if (date.value === "") {
        document.querySelector("#dateErr").innerHTML = "Date is required.";
        isValid = false;
    } else {
        document.querySelector("#dateErr").innerHTML = "";
    }

    return isValid;
}

function clearErrors() {
    // Clear all error messages
    document.querySelector("#fnameErr").innerHTML = "";
    document.querySelector("#lnameErr").innerHTML = "";
    document.querySelector("#emailErr").innerHTML = "";
    document.querySelector("#passErr").innerHTML = "";
    document.querySelector("#genderErr").innerHTML = "";
    document.querySelector("#hobbyErr").innerHTML = "";
    document.querySelector("#dateErr").innerHTML = "";
}
