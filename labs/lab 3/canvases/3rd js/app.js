// 3 - Circles inside Circles

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
