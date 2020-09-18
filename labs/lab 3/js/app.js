// 1 - "FizzBuzz" COMPLETE

/*
let xPos = 50;
let mycolor = "black";

function setup(){
    createCanvas(750, 500);
}

function draw(){
    noStroke();
    background(200, 200, 200);

    for ( let i = 1; i < 26; i++ ){

        xPos = xPos * i;
    


        if( i % 3 == 0 && i % 5 == 0 ){
            fill("blue");
            rect((i * 20) - 10, 38, 25, 25);
        }

        else if( i % 3 == 0){
            fill("purple");
            circle( i * 20, 50, 10);
        }

        else if( i % 5 == 0){
            fill("green");
            rect((i * 20) - 10, 38, 25, 25);
        }
            //If the modulo3 results in a 0, the fill color becomes purple
            
    
            //If the modulo5 results in 0, the fill color becomes green and a square is drawn.
            
    
            //If the modulo both result in 0, the fill color becomes blue and rectangles are drawn.
            
            //This is basically the default, the least complicated one
            else{
                fill("black");
                circle(i * 20, 50, 10);
            }
    
        }
        
        
    }
*/

/*
// 2 - Pyramid COMPLETE

let xPos = 25;
let yPos = 25;

function setup(){
    createCanvas(500, 500);
}

function draw(){
    background (200, 200, 200);
    fill("red");
    noStroke();

    for ( let x = 1; x < 5; x++){
        for ( let y = 1; y < 5; y++){
            if( x <= y ){
                rect(xPos * x, yPos * y, 23, 23);
            }
        }
    }
}
*/

// 3 - Circles inside Circles COMPLETE

/*
function setup(){
    createCanvas(500, 500);
}

function draw(){
    background (200, 200, 200);
    noFill();

    //The "for" loop will draw one circle every time it initiates. 
    //The "thingy" variable will decrease by 1 at the end, creating smaller circles.

    for( let thingy = 50; thingy > 0; thingy-- ){
	    circle(250, 250, thingy * 5)
    }

}
*/