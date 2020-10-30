//Set a variable as the "document.getElementyById" for the input from the text box. 
let nameInput = document.getElementById("nameInput");

//Set a variable as the "document.getElementById" to display things in the div. 
let dvNameOutput = document.getElementById("dvNameOutput");

//Now that we've set our variables to make our code easier to read, we'll put them together. 

//Retrieve whatever was written in the text box and insert it into the console log. 
function sayHello() {

    //Output = "Hello" + user input + "!";
    console.log(dvNameOutput = "Hello " + nameInput.value + "!");
}

// -------------------- PART 2 ----------------------

//Set a variable as the "document.getElementyById" for the input from the text box. 
let numberInput = document.getElementById("numberInput");

//Set a variable as the "document.getElementById" to display things in the console log. 
let numberOutput = document.getElementById("numberOutput");

//Now that we've set our variables to make our code easier to read, we'll put them together. 

//Retrieve whatever was written in the text box and insert it into the console log. 
function calculateTax() {

    let userInput = Number(numberInput.value);
    let tax = userInput * 0.2;
    let total = tax + userInput;

    //Output = "Tip: $" + (user input * 0.2) + " Total: $" ((user input * 2) + user input);
    console.log(numberOutput = "Tip: $", tax + " Total: $" + total);
}

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