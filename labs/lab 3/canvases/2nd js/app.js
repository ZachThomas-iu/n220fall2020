// 2 - Pyramid

let xPos = 25;
let yPos = 25;

function setup(){
    createCanvas(500, 500);
}

function draw(){
    background (200, 200, 200);
    fill("red");
    noStroke();

    //The "for" loops are basically creating a grid. The squares where x is less than or equal to y will not appear.

    for ( let x = 1; x < 5; x++){
        for ( let y = 1; y < 5; y++){
            if( x <= y ){
                rect(xPos * x, yPos * y, 23, 23);
            }
        }
    }
}