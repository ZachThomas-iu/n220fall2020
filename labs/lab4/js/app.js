/*
1 - Neapolitan - COMPLETE

Create an array with strings for three different colors.

Looping through that array, draw a rectangle for each of those 
colors to the screen horizontally, like neapolitan ice cream.
*/

/*
//Set up the array.
let colorArray = ["red", "orange", "yellow"];

//Create a variable for the X position of the squares.
//We will manipulate this later. 
let xPos = 0;

//Create the canvas. 
function setup(){
    createCanvas(400, 300);
    background(200, 200, 200);

    //The incrementing value "i" will call upon each position in colorArray. 
    //When "i" is larger then the length of colorArray, the "for" loop will stop. 
    for( let i = 0; i < colorArray.length; i++ ){
        
        //"xPos" will get larger by 20 each frame. 
        xPos = xPos + 20;

        //Fill each of the squares based on what "i" will call upon in the colorArray. 
        fill(colorArray[i]);

        //Draw the squares. 
        rect(xPos, 20, 20, 20);

        console.log(colorArray);
    }
}
*/

/*
2 - Dripping water

Build an application that, every ten frames, draws a circle at the 
top center of the screen. This circle should move down the screen 
at 5 pixels / frame. 

Done properly, there will be multiple circles on the screen at once. 
Thus, you will need to use an array to store, at a minimum, the 
Y location of each circle.
*/

/*
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
            console.log(yPos);
        }
    }
}
*/



/*
3 - Click to drop

Build an application where, when a user clicks on the screen, a 'brick' 
is created at that x and y location, and falls down to the bottom of the 
screen at a speed of 5 pixels / frame. 

There can be multiple bricks in this application, so you will need to use 
two arrays and a loop to draw all of the bricks.
*/

/*
4 - Snake

Build an application that draws a circle at the current position of the 
mouse, and the last ten positions of the mouse. 

You will need to use two arrays for this positions, along with the 
push / shift methods of arrays.
*/

/*
//Set up the arrays. 
let xPos = [ 0,0,0,0,0,0,0,0,0,0 ];
let yPos = [ 0,0,0,0,0,0,0,0,0,0 ];

//Create the canvas.
function setup(){
    createCanvas(400, 300);
}

//Set up the draw function. 
function draw() {

    //Draw the background. 
    background(200, 200, 200);

    //The values in the xPos array will be replaced by the mouse's X position.
    //New arrays will be created after the 10th value has been set in each array.
    xPos.push( mouseX );
    xPos.shift();

    //The values in the yPos array will be replaced by the mouse's Y position. 
    //New arrays will be created after the 10th value has been set in each array. 
    yPos.push( mouseY );
    yPos.shift();

    //The "for" loop has an incrementing value "i".
    //"i" will call out each position in the array up to position 10 in each. 
    //The array will draw circles at each X and Y position based on the values written in the arrays. 
    //When "i" reaches a value of 11, the loop ends. 
    for( var i = 0; i < xPos.length; i++ ){
        circle( xPos[i], yPos[i], 20);
    }

    console.log(xPos);
}
*/

/*
5 - Personal Composition

Using at least one array and one loop that iterates through that array 
and uses the data within to affect graphics that are drawn to the screen, 
make your own P5 composition.
*/