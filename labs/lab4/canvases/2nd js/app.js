/*
2 - Dripping water

Build an application that, every ten frames, draws a circle at the 
top center of the screen. This circle should move down the screen 
at 5 pixels / frame. 

Done properly, there will be multiple circles on the screen at once. 
Thus, you will need to use an array to store, at a minimum, the 
Y location of each circle.
*/

//Set up the array. 
let yPos = [];

//Set up the canvas. 
function setup() {
    createCanvas (400, 300);
}

function draw() {
    fill("blue");
    background(200, 200, 200);

    //Create a 0 at the beginning of the array. 
    yPos.push(0);

    //The variable "i" will continue increasing by 1 as long as it's less than the 
    for(let i = 0; i < yPos.length; i++ ){

        //Circles will be drawn when "i" is divisible by 10. 
        //They will move down the screen at 5 pixels per second. 
        if(i % 10 == 0){
            yPos[i] += 5;
            circle (width/2, yPos[i], 10);
        }

        //If one of the circles reaches 300, the circle is removed from the array.
        if(yPos[i] > 300){
            yPos.splice();
        }
    }
}
