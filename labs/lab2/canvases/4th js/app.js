//Number 4 - Ball Bounce

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