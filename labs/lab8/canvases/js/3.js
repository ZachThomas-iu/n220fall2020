// -------------------- PART 3 ----------------------

//Set a variable as the "document.getElementyById" for the input from the text box. 
let username = document.getElementById("username");

//Set a variable as the "document.getElementById" to display things in the console log. 
let password = document.getElementById("password");

//Set a variable as the "document.getElementyById" for the input from the text box. 
let dvVerification = document.getElementById("dvVerification");

//Verify if the input in the username input is exactly "Username" and if the input in the password input is exactly "Password". 
//If both qualifications return true, say "Success!" in the div. 
//Otherwise, display "Wrong Information."
function verify() {
    if((username.value == "Username") && (password.value == "Password")) {
        dvVerification.innerHTML = "Success!";
    } else {
        dvVerification.innerHTML = "Wrong Information.";
    }
}