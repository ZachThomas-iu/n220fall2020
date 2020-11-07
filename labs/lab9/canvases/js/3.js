/*

3 - Over and Out - COMPLETE

Write the markup and JavaScript to place a square div 
on the page (100px x 100px), with a blue background. 

Using onmouseover and onmouseout (instead of "onclick"), 
change the div's color to black when the mouse is over the div, 
and back to blue when the mouse leaves.

*/

//Retrieve the div's ID from the HTML page. 
let myDiv = document.getElementById("changingDiv");

//Set the div's height and width. 
myDiv.style.height = "100px";
myDiv.style.width = "100px";

//Set the div's initial background color. 
myDiv.style.backgroundColor = "#1d20d1";

//Create a function that changes the div's color to black. 
function changeBlack(){
    myDiv.style.backgroundColor = "#000000";
}

//Create a function that changes the div's color to blue. 
function changeBlue(){
    myDiv.style.backgroundColor = "#1d20d1";
}