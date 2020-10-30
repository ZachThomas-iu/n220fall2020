/*
//This will retrieve the element under the appropriate id. 
let txtName = document.getElementById("txtName");

// " <input id="txtName" /> "
console.log(txtName);

function rollDie() {

    //NOTE: "Math" is ALWAYS capitalized!
    let randRoll = 1 + Math.floor(Math.random() * 6);
    console.log(randRoll);
}
*/

/*
Here's a common mistake to watch out for. 

Students will set global variables at the top to retrieve values from the text box,
but that doesn't work since the page will only look for the values in the text box
when it first loads onto the page. 

What you need to do instead is write that code in the function so the page retrieves it
when the button is pressed. 


//This will retrieve the element under the appropriate id. 
let txtName = document.getElementById("txtName");

// " <input id="txtName" /> "
console.log(txtName);

function rollDie() {

    let dieSize = txtName.value;
    console.log(dieSize);
}
*/

/*
Up until now, everything in the text box has been treated as a string
by the code.

For a dice roll, that's a no-go, we need a numerical value, and we
can do that through something called "type casting". 

Note the new format where "Number" was put in. 


//This will retrieve the element under the appropriate id. 
let txtName = document.getElementById("txtName");

// " <input id="txtName" /> "
console.log(txtName);

function rollDie() {

    let dieSize = Number(txtName.value);
    let randRoll = 1 + Math.floor(Math.random() * dieSize);
    console.log(randRoll);

    //If you want the text box to refresh after each input, use this tag. 
    //" variable.value = ""; "
    txtName.value = "";
}
*/

/*
This is where we add the number so it shows up on the page. 

We're making a div. 
*/

//This will retrieve the element under the appropriate id. 
let txtName = document.getElementById("txtName");

//This will retrieve whatever's input in "randRoll" and display it on the page. 
let dvResult = document.getElementById("dvResult");

// " <input id="txtName" /> "
console.log(txtName);

function rollDie() {

    let dieSize = Number(txtName.value);
    let randRoll = 1 + Math.floor(Math.random() * dieSize);

    //"innerHTML" will display the value right on the page. 
    //This tag will display any text on screen after the "=".
    dvResult.innerHTML = randRoll;
}