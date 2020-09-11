
//Number 1 - Counter

/*
let counter = 0;

function draw() {
    counter++;
    console.log(counter);
}
*/

//Number 2 - Puck Slide

//Trying to make canvases appear by pressing a key.

//let canvasX = 0;
//let canvasY = 0;


/*
function setup() {
    createCanvas(400, 300);
}

function draw() {
    background("gray");

        if ( mouseX > 200) {
            fill(176, 46, 12);
        } else {
            fill (41, 115, 115);
        }

        circle(mouseX, mouseY, 30);
    }
*/

//Number 3 - World Wrap

/*
function setup() {
    createCanvas(800, 600);
}

let xPos = 0;

function draw(){
    background(232, 232, 232);
    xPos = xPos + 5;
    fill("orange");
    noStroke();
    circle(xPos, 200, 30);

    if(xPos == 800){
        xPos = 0;
    }
}
*/

//Number 4 - Ball Bounce

/*
function setup(){
    createCanvas(800, 600);
}

let xPos = 5;
let yPos = 5;

let xSpeed = 5;
let ySpeed = 5;


function draw(){
    background (232, 232, 232);
    xPos = xSpeed + xPos;
    yPos = yPos + ySpeed;
    fill("orange");
    noStroke();
    circle(xPos, yPos, 30);

    if(xPos == 800 || xPos == 0){
        xSpeed = xSpeed * -1;
    }

    if(yPos == 600 || yPos == 0){
        ySpeed = ySpeed * -1;
    }
}
*/


//Number 5 - Ever Larger, Until Not

/*
let diameter = 1;

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(232, 232, 232);
    fill("orange");
    noStroke();
    circle(200, 200, diameter);
    diameter++;

    if(diameter == 200){
        diameter = 1;
    }
}
*/