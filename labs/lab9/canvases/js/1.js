/*

1 - Peak Pixels - COMPLETE

Write the markup and CSS to place a square div on the page. 100px by 100px, green background.
Make it so that when the div its clicked, it increases its size by 10% every time.

Hints:

Make a variable to store the height and with of the object
to set the height and width, set to varName + "px"
10% is .1 bigger,or 1.1 * the original size

*/

//Set the height and width of our div in one variable so we can manipulate it later. 
let divSize = 100;

//Retrieve the div's ID from the HTML page. 
let newDiv = document.getElementById("newDiv");

//Make the background color green. 
newDiv.style.backgroundColor = "#35b835";

//Create a function that increases the height and width of the div. 
//Every time the div is clicked, its size increases by 10%. 
function makeBig(){
    divSize *= 1.1;

    newDiv.style.height = divSize + "px";
    newDiv.style.width = divSize + "px";
    console.log(newDiv.style.height);
}

//set the div's initial height and width. 
newDiv.style.height = divSize + "px";
newDiv.style.width = divSize + "px";


