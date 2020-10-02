/*
Set B
Bounce off rectangle

Create an application with a moving circle and a rectangle 
at the bottom of the screen. Using a rectangular hit test, 
have the ball bounce when the circle collides with the rectangle.
*/

//Set the initial position of the circle. 
let xPos = 1;
let yPos = 1;

//Set the initial speed of the circle.
let ySpeed = 5;
let xSpeed = 5;

//Set the initial colors of the shapes. 
let circleColor = "red";
let barColor = "white";

//Create the canvas. 
function setup() {
    createCanvas(400, 400);
    background(200);

}

//Set up "function draw()". 
function draw(){

    //Stop the shapes from leaving trails. 
    background(200);

    //Apply the speed to the circle.
    xPos += 0.9 * xSpeed;
    yPos += ySpeed;

    //The rectangle's collision. 
    function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

        //If the circle's X position is inside the rectangle, return true.
        //Otherwise, return false. 
        if(circleX > rectX && circleX < rectX + rectW) {

            if(circleY > rectY && circleY < rectY + rectH) {

                return true;

            }

        }  

    return false;

    }

    //Fill in the parameters of collideRect in an if statement. 
    //If collideRect returns true, the if statement activates. 
    if (collideRect(xPos, yPos, mouseX, 380, 200, 50)){

        //Reverse the Y speed of the ball so it bounces in the opposite direction.
        ySpeed *= -1;

        //Increase the Y speed of the ball. 
        ySpeed--;
    }

    //Reverse the Y speed of the ball if it hits the top border so it bounces in the opposite direction.
    if (yPos < 0){
        ySpeed *= -1;
    }

    //Reverse the X speed of the ball if it hits the left or right border so it bounce sin the opposite direction. 
    if(xPos < 0 || xPos > 400){
        xSpeed *= -1;
    }

    /*
    If the ball hits the bottom border:

    Set the Y and X speed to 0, stopping the ball. 
    Set the colors of the circle and bar to black. 
    */
    if (yPos > 400){
        ySpeed = 0;
        xSpeed = 0;
        circleColor = "black";
        barColor = "black";
    }

    //Draw the circle. 
    noStroke();
    fill(circleColor);
    circle(xPos, yPos, 20);

    //Draw the rectangle and let it follow the mouse. 
    stroke("black");
    fill(barColor);
    rect(mouseX, 380, 200, 10);

}

