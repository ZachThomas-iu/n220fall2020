/*

BAD WORD CATCHER WITH LOOPS - COMPLETE

 
For the purposes of this exercise, bad words are: clear, water, tires.


Create an application that:

Takes input from a user using a simple text input field.
Splits the string on spaces
Loops through  the array looking for bad words in the array
Adds 1 to a tally count when a bad word is found
Outputs to the document
If any bad words were found (found / not found)
How many bad words, in total, were found
Clears out the text field so the user can input a new string
 

For example, if the user input "clear water is clear", there are 3 bad words in the string.

*/

var userInput = document.getElementById("userInput");

//This variable will later increase every time a bad word is found. 
var wordCounter = 0;

//This is a flag that will switch to true when a bad word is found.
var wordFound = false;

//Create a function that will find any "bad" words in the user's input.
function findWords() {

    //Create a variable that houses the user's input.
    var inputString = userInput.value;

    //Split the user's input into strings in arrays at the spaces. 
    var splitString = inputString.split(" ");

    //Create a for loop that will check every word in array. 
    for ( i = 0; i < splitString.length; i++) {

        //If the words "clear", "water", or "tires" are found in the array, the word counter will increase by 1. 
        if (splitString[i] == "clear" || splitString [i] == "water" || splitString [i] == "tires"){
            wordCounter++;
        }
    }

    //Display a specific message depending on how many bad words are said. 
    if( wordCounter > 10 ){
        dvOutput.innerHTML = "Grumbo count " + wordCounter + " bad word. Shame, human, shame!";
    } else if ( wordCounter > 0 && wordCounter <= 10) {
        dvOutput.innerHTML = "Grumbo count " + wordCounter + " bad word. Human should watch mouth.";
    } else {
        dvOutput.innerHTML = "Grumbo Count " + wordCounter + " bad word. Good human!";
    }

    //Reset the word counter and the user input. 
    wordCounter = 0;
    userInput.value = "";
}