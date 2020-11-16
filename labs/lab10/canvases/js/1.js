/*

1 - IT'S JUST AVERAGE - COMPLETE

Create an application that:


    Takes in a list of comma-separated numbers from the user
    
    Splits that list into an array of numbers
    
    Converts the string version of the numbers into number versions
    
    Loops through the array and sums up the values
    
    Calculates the average of the array
    
    Displays to the user
        The average
        The sum

Removes the text from the input so the user can type in new numbers

*/

//Create variables that allow us to easily access these elements from our HTML file. 
var userInput = document.getElementById("userInput");
var dvOutput = document.getElementById("dvOutput");

//Set the initial values of "average" and "sum". 
var average = 0;
var sum = 0;

//This will activate when the button is pressed. 
function doMaths() {

    //Retrieve the info from the text box. 
    var inputString = userInput.value;

    //Split the user's input wherever there are commas. 
    var splitString = inputString.split(",");

    //Create a for loop that will convert each index from our array into integers. 
    for( i = 0; i < splitString.length; i++){

        //Convert each index from the splitString array into integers.
        var integers = parseInt(splitString[i]);

        //Add each index together to get the sum of the values. 
        sum += integers;
    }

    //Get the average from the sum and the length of the array. 
    average = sum/splitString.length;

    //Output the results from the sum operation and the average operation. 
    dvOutput.innerHTML = "The total sum is " + sum + " and the average is " + average + ".";
}