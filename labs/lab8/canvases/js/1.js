// -------------------- PART 1 ----------------------

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