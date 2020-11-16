/*
THIS LECTURE WILL COVER:

    Splitting strings into arrays

    Searching arrays (old-fashioned)

    Condensing arrays

    Adding to and removing from arrays

    Displaying compaound array day
*/




/*
SPLITTING STRINGS INTO ARRAYS

    It's possible to divide strings into arrays. 
    This is done with the line .split();
*/

/*
//This is our test string. We will be dividing it. 
var testString = "Persona four is coming to PC this weekend (presumably).";

//This will divide our string into an array with 3 indexes.
//NOTE: This divides the string wherever "is" is located. He refers to these splits as "tokens".
//NOTE2: "is" will not be present in the array. Imagine we are drawing lines over them.
var splitString = testString.split("is");

//["Persona four ", " coming to PC th", " weekend (presumably)."]
console.log(splitString);
*/

/*
//Now we're retrieving info from what the user puts in the input. 
var txtSentence = document.getElementById("txtSentence");

//This applies to the div that will display the output. 
var txtOutput = document.getElementById("txtOutput");

//This will activate when the button is pressed. 
function breakString() {

    //Retrieve the info from the text box. 
    var inputString = txtSentence.value;

    //Split the user's input wherever there are spaces. 
    var splitString = inputString.split(" ");

    //Output the first value in the array. 
    txtOutput.innerHTML = splitString[0];
}
*/




/*
SEARCHING ARRAYS (OLD-FASHIONED)

    This is apparently not the best way to do it but we're learning it anyways. 

    We can look for values within an array and return a string/value.
*/

/*
//Set up the array. 
var guesses = [ 12, 7, 18, 5, 2 ];

//This is called a "flag". This will be manipulated later. 
var foundFlag = false;

//Set up a for loop that checks if a value is in the array. 
for (var i = 0; i < guesses.length; i++) {

    //Create a variable that checks each individual index. 
    var curGuess = guesses[i];

    //Create an if statement that will run when it is true. 
    if(curGuess == 3) {

        //This is our flag from earlier. It will change to true if the if statement is true. 
        foundFlag = true;

        //This line will stop the for loop from looping any more. 
        break;
    }
}

//true
console.log(foundFlag);
*/




/*
CONDENSING ARRAYS

    We can perform operations on the values within arrays. 
*/

/*
//Set up the array. 
var guesses = [ 12, 7, 18, 5, 2 ];

//Set up the sum's initial value. Nothing has been added yet, so it is at 0. 
var sum = 0;

//Set up a loop that will add the indexes together. 
for( var i = 0; i < guesses.length; i++) {

    //Retrieve the indexes one at a time. 
    var curGuess = guesses[i];

    //Add those indexes together. 
    sum += curGuess;

    /*
    12
    19
    37
    42
    44
    console.log(sum);
}
*/




/*
DISPLAYING COMPUND ARRAY DATA

    I don't know if he said this is a "compound array", but that's what I'm assuming these are. 

    We can display arrays of objects by creating divs that display the elements inside. 
*/

/*
//Create an array of objects. 
var pizzas = [
    { name: "Pepperoni", price: 12 },
    { name: "Cheese", price: 9 },
    { name: "Mushroom", price: 11 },
    { name: "The Works", price: 19 },
]

//Create a loop that will retrieve each object. 
for( var i = 0; i < pizzas.length; i++) {

    //Retrieve each object at their indexes. 
    var curPizzas = pizzas[i];

    //Make a new element in the pizzas array. 
    var newEl = document.createElement("div");

    //Customize it.
    newEl.innerHTML = curPizzas.name + ": $" + curPizzas.price;
    newEl.backgroundColor = "#FFFF00";

    //Add it to the page.
    document.body.appendChild(newEl);
}

//This is to retrieve one item from an object without taking the whole line. 
console.log(pizzas[1].name);
*/




/*
ADDING TO ARRAYS   

    We can add indexes to arrays using .push();
*/

/*
//Retrieve the user input from the text box. 
var txtSentence = document.getElementById("txtSentence");

//Output the user input. 
var dvOutput = document.getElementById("dvOutput");

//Create the initial array. We will manipulate this later. 
var allWords = [];

//Create a function that will add words to the array and change the color of certain words. 
function breakString() {

    //Simplify some more code. 
    //newWord = user's input
    var newWord = txtSentence.value;
    
    //When a new word is typed into the box, add that word to the end of the array.
    allWords.push(newWord);

    //Display the array on the page in the dvOutput div. 
    dvOutput.innerHTML = "";

    //Create a for loop that will retrieve each object and display them on the page. 
    for( var i = 0; i < allWords.length; i++) {

        //Create the element. 
        var newEl = document.createElement("div");

        //Customize the element. 
        newEl.innerHTML = allWords[i];

        //Display the element. 
        dvOutput.appendChild( newEl );

        
        //If the new word says "cloud" -> display in blue. 
        if(allWords[i] == "cloud") {
            newEl.style.color = "#4287f5";
        }
    }
}
*/




/*
DEBUGGING TIPS

    You can add breakpoints within the console sources by clicking the number on the left. 
    The code will stop looping at that point you clicked. 
*/