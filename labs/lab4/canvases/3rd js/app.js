/*
4 - Snake

Build an application that draws a circle at the current position of the 
mouse, and the last ten positions of the mouse. 

You will need to use two arrays for this positions, along with the 
push / shift methods of arrays.
*/

//Set up the arrays. 
let xPos = [ 0,0,0,0,0,0,0,0,0,0 ];
let yPos = [ 0,0,0,0,0,0,0,0,0,0 ];

//Create the canvas.
function setup(){
    createCanvas(400, 300);
}

//Set up the draw function. 
function draw() {

    //Draw the background. 
    background(200, 200, 200);

    //The values in the xPos array will be replaced by the mouse's X position.
    //New arrays will be created after the 10th value has been set in each array.
    xPos.push( mouseX );
    xPos.shift();

    //The values in the yPos array will be replaced by the mouse's Y position. 
    //New arrays will be created after the 10th value has been set in each array. 
    yPos.push( mouseY );
    yPos.shift();

    //The "for" loop has an incrementing value "i".
    //"i" will call out each position in the array up to position 10 in each. 
    //The array will draw circles at each X and Y position based on the values written in the arrays. 
    //When "i" reaches a value of 11, the loop ends. 
    for( var i = 0; i < xPos.length; i++ ){
        circle( xPos[i], yPos[i], 20);
    }
}