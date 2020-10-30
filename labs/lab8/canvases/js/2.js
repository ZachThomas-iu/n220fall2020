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
    console.log(numberOutput = "Tip: $" + tax + " Total: $" + total);
}