function setup() {
    createCanvas(400, 300)
}


//Draw function
///Called Repedately
///Default 60 times per second
///Used for animation and time-based coding
function draw() {

}

//Changing a value over time
///This increases the value of the variable "spices" by 1 every tick (or whatever it's called)
let spices = 0;

function draw() {
    spices = spices + 1;
    console.log(spices);
}


/*
//Now we're making things MOVE
///Use global variables
///Change values over time
///Use that variable to control drawing position
////In this function, the circle is drawn over 1 x position every tick
function setup() {
    createCanvas(400, 300)
}

let xPos = 0;
let yPos = 0;
console.log(xPos);
console.log(yPos);

function draw () {
    xPos++;
    circle(xPos, 200, 30);
}
//NOTE: "++" is the same as writing "(var) + 1"

//function draw() {
    yPos++;
    circle(200, yPos, 30)
}

//function draw() {
    xPos = xPos + 2;
    yPos = xPos * 1.5;
    circle(xPos, yPos, 30);
}
*/

/*
//Clearing the screen
///The previous example looked more like a stroke of a brush
///Clearning the background will fix that
let xPos = 0;
function draw() {
    background(0);
    xPos++;
    circle(xPos, 200, 30);
}
*/

/*
//Velocity
///This'll make the ball go three times as fast
///It's best to keep the "speed" as its own variable for the sake of keeping things neat
///Fun little aside, the "ySpeed" gives the ball some gravity

let xPos = 0;
let yPos = 0;

let xSpeed = 3;
let ySpeed = 0;

function draw() {
    background(0); //clear to black
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    ySpeed = ySpeed + .1;

    circle(xPos, yPos, 30);
}
*/

/*
//Booleans pt. 1 ("if")
///Refer to the lecture2.2 notes for info on conditionals and "if" statements
///This function will come up false until the xPos variable is 100 or above
let xPos = 0;
let yPos = 40;

let xSpeed = 2;
let ySpeed = 0;

function draw() {
    background(0);
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    //var myBool = xPos > 100;
    //console.log(xPos, myBool);

    //While it's possible to write it the way it is above, it's inefficient; this is where "if" statements shine

    if ( xPos > 100 ) {
        console.log("Greater than!")
        fill("red");
    }

    circle(xPos, yPos, 30);
}
*/


//Booleans pt. 2 ("else")
///If the "if" statement comes up true, the code checks the "else" side and attempts to perform that code
let xPos = 0;
let yPos = 40;

let xSpeed = 2;
let ySpeed = 0;

let counter = 0;

function draw() {
    background(0);
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;
    ySpeed = ySpeed + counter;

    if (keyIsDown(LEFT_ARROW)) {
        fill("red");
        xSpeed = -1;
    } else {
        fill("blue");
    }

    if ( xPos == 400) {
        xSpeed = -2;
        counter++;
    }

    if(keyIsDown(RIGHT_ARROW)) {
        xSpeed = 2;
    }

    circle(xPos, yPos, 30);
}


/*
//Input "keyIsDown("key number or key_name")"
///Can check to see if a key is down using keyIsDown (Baba is YOUUUUUUUUUU)
///Every key has a number associated with it, use "https://keycode.info/"
function draw() {
    if(keyIsDown(LEFT_ARROW)) {
        fill(0);
    } else {
        fill(255);
    }
    rect(25, 25, 50, 50);
}
*/