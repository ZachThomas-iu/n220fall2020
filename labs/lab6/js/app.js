/*
1 - DATA DRIVEN DISPLAY - COMPLETE

Make an object with all the properties for a graphic 
on the screen - width, height, color, position. 

In your create or draw function draw that object using the data in your object.
*/

/*
//Create our object. 
var theseObjects = {
    x: 150,
    y: 150,
    w: 100, 
    h: 100,
    color: 100
}

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
*/

/*
2 - ANIMATED OBJECT - COMPLETE

Create an object with properties for the x, y, and size of a circle. 

In the draw function, add 1 to one or more of these properties, 
and then draw the circle described by the object to the screen.



//Create the object. 
var movingCircle = {

    //Set the circle's initial position and size.
    r: 15,
    x: 20,
    y: 30,

    //Set the circle's color. We can do this with an array. 
    color: [73, 137, 227],
};


//Create the canvas. 
function setup() {
    createCanvas(400, 300);
}

//Create the draw function. 
function draw() {

    //Create the background each frame to remove the trail.
    background(220);

    //Borders are yucky. No borders. 
    noStroke();

    //Retrieve the color from within the movingCircle object and put it in "fill()".
    //We'll be retrieving the properties using this syntax.  
    fill(movingCircle.color);

    //Increace the circle's X and Y positions by 1 every frame. 
    //It can be manipulated the same way we manipulated the variables before. 
    movingCircle.x += 1;
    movingCircle.y += 1;

    //Draw the circle. 
    circle(movingCircle.x, movingCircle.y, movingCircle.r);
}

*/

/*
4 - CHARACTER CONTROLLER - COMPLETE

Create an object with a custom update function that draws a circle to the screen.

This object should have properties for its x and y location.

In the custom update function, move the object 2 pixels to the right 
if the right key is held down. 2 pixels to the left if the left key is held down, 
2 pixels up if the up key is held down, and 2 pixels down if the down 
key is held down.

var myCircle = {
    r: 15,
    x: 200,
    y: 200,
    color: [224, 129, 70],

    //Everything that used to be in the "draw" function related to the circle is now here. 
    //NOTE: All the previous relations to "myCircle" inside "update" are replaced with "this". 
    update: function() {

        background(200);

        fill(this.color);

        if(keyIsDown(LEFT_ARROW)){
            this.x -= 2;
        }

        if(keyIsDown(RIGHT_ARROW)){
            this.x += 2;
        }

        if(keyIsDown(DOWN_ARROW)){
            this.y += 2;
        }

        if(keyIsDown(UP_ARROW)){
            this.y -= 2;
        }

        circle(this.x, this.y, this.r);
    }
};

function setup(){
    createCanvas(400, 400);
}

function draw(){
    myCircle.update();
}
*/