/*
2 - ANIMATED OBJECT - COMPLETE

Create an object with properties for the x, y, and size of a circle. 

In the draw function, add 1 to one or more of these properties, 
and then draw the circle described by the object to the screen.
*/


//Create the object. 
var movingCircle = {

    //Set the circle's initial position and size.
    r: 15,
    x: 20,
    y: 30,

    //Set the circle's color. We can do this with an array. 
    color: [73, 137, 227],
};


//Create the canvas. 
function setup() {
    createCanvas(400, 300);
}

//Create the draw function. 
function draw() {

    //Create the background each frame to remove the trail.
    background(220);

    //Borders are yucky. No borders. 
    noStroke();

    //Retrieve the color from within the movingCircle object and put it in "fill()".
    //We'll be retrieving the properties using this syntax.  
    fill(movingCircle.color);

    //Increace the circle's X and Y positions by 1 every frame. 
    //It can be manipulated the same way we manipulated the variables before. 
    movingCircle.x += 1;
    movingCircle.y += 1;

    //Draw the circle. 
    circle(movingCircle.x, movingCircle.y, movingCircle.r);
}
