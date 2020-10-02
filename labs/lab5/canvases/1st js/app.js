/*
Set A
Stoplight - COMPLETE

Using an array for the three colors, 
draw a stoplight using a for loop 
and only one circle() call in your code.
*/

//Set up the array.
let colorArray = ["red", "yellow", "green"];

//Create a variable for the Y position of the squares.
let yPos = 0;

//Create the canvas. 
function setup(){
    createCanvas(400, 300);
    background(200, 200, 200);

    //The incrementing value "i" will call upon each position in colorArray. 
    //When "i" is larger then the length of colorArray, the "for" loop will stop. 
    for( let i = 0; i < colorArray.length; i++ ){
        
        //"xPos" will get larger by 20 each frame. 
        yPos += 50;

        //Fill each of the squares based on what "i" will call upon in the colorArray. 
        fill(colorArray[i]);

        //Draw the squares. 
        circle(40, yPos, 20);
    }
}
