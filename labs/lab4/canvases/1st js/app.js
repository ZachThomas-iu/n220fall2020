/*
1 - Neapolitan - COMPLETE

Create an array with strings for three different colors.

Looping through that array, draw a rectangle for each of those 
colors to the screen horizontally, like neapolitan ice cream.
*/

//Set up the array.
let colorArray = ["red", "orange", "yellow"];

//Create a variable for the X position of the squares.
//We will manipulate this later. 
let xPos = 0;

//Create the canvas. 
function setup(){
    createCanvas(400, 300);
    background(200, 200, 200);

    //The incrementing value "i" will call upon each position in colorArray. 
    //When "i" is larger then the length of colorArray, the "for" loop will stop. 
    for( let i = 0; i < colorArray.length; i++ ){
        
        //"xPos" will get larger by 20 each frame. 
        xPos = xPos + 20;

        //Fill each of the squares based on what "i" will call upon in the colorArray. 
        fill(colorArray[i]);

        //Draw the squares. 
        rect(xPos, 20, 20, 20);

        console.log(colorArray);
    }
}
