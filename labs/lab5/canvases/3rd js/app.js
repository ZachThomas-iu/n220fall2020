/*
||

Set C
Personal Composition - COMPLETE

Create a personal piece of interactive art that uses at least
one function in the interaction code. This function should
take at last one argument, and optionally may return one
value. Ensure that your code is commented to describe why 
pieces of code exist in your composition.
*/

/*
For my personal composition, I chose to create a game. 

The ball will speed up when the down key is pressed. The goal is to get the
ball between a certain height above a black ball. 

If the red ball passes the black ball, the red ball will turn black.

If the red ball manages to find the goal height, the black box on the top left
will turn blue. 

Pressing the up key will reset the ball's position and speed to 0. 
*/

//Set the variables we want to manipulate.
let yPos = 0;
let ySpeed = 0;

//Create the canvas. 
function setup(){
    createCanvas(400, 400);
    background(200);
}

//Set up the draw function with a resetting background and no strokes. 
function draw(){
    background(200);
    noStroke();

    //If the "down" key is pressed, increase the speed of the circle. 
    if (keyIsDown(DOWN_ARROW)) {
        ySpeed += .7;
        yPos = yPos + ySpeed;
    }

    //If the circle goes below y 300, turn the circle black. Otherwise, it is red. 
    function detectCircle(){
        if (yPos > 300){
            return "black";
        }
        return "red";
    }

    //Reset yPos and ySpeed to 0 to start the game over. 
    if (keyIsDown(UP_ARROW)) {  
        yPos = 0;
        ySpeed = 0;
    }

    //If the circle is between y 250 and y 300, turn a square blue. Otherwise, it is black. 
    function detectScore(){
        if (yPos > 250 && yPos < 300){
            return "blue";
        }
        return "black";
    }

    //Fill the rectangle according to the return of the function "detectScore()". 
    fill(detectScore());
    rect(10, 10, 50, 50);

    //Create a circle marking y 300. 
    fill("black");
    circle(200, 330, 10)

    //Create the circle we control. 
    fill(detectCircle());
    circle(200, yPos, 20);
}
