//Number 3 - World Wrap

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
