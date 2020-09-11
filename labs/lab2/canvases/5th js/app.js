//Number 5 - Ever Larger, Until Not

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