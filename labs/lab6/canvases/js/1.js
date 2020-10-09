/*
1 - DATA DRIVEN DISPLAY - COMPLETE

Make an object with all the properties for a graphic 
on the screen - width, height, color, position. 

In your create or draw function draw that object using the data in your object.
*/

var featherlessBiped = [
    //Body
    { x: 150, y: 150, w: 100, h: 100 },

    //Left leg
    { x: 150, y: 150, w: 30, h: 130 },

    //Right leg
    { x: 220, y: 150, w: 30, h: 130 }
]



//Create the canvas. 
function setup(){
    createCanvas(400, 400)
}

//Set up our function.draw(). 
function draw(){

    //Create the background. 
    background(200);

    //No strokes, please. 
    noStroke();

    //Fill in the rectangles. 
    fill(100);

    //We'll use a "for" loop to create our man. 
    for(var i = 0; i < featherlessBiped.length; i++) {

        //The variable isn't really necessary, but it can make the code easier to read. 
        let currentPart = featherlessBiped[i];

        //Create the man using by retrieving the body parts in the arrays inside the object.
        rect(currentPart.x, currentPart.y, currentPart.w, currentPart.h);
    }
};
