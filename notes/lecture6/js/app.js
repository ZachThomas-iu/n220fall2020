/*
OBJECTS
-   They're a way of storing a set of related variables that describe one thing. 
-   For instance, objects might be used to describe:
    -   A single chair
    -   A piece of fruit
    -   A planet
    -   A character in a video game
    -   A fall jacket
*/

/*
//Making an object
///Use curly brackets to define an object
///Place values in name: value pairs

///NOTE: THE SYNTAX IS IMPORTANT. NOTE THE COLONS, COMMAS, AND LOCATION OF THE SEMICOLON. 

let ridleyMetroid = {
    height: 300,
    color: "purple",
    weight: 2000,
    numLimbs: 6
};

//To retrieve the properties, use this. 

console.log(ridleyMetroid.height); //300 will be displayed

//To edit the properties, use this. 

ridleyMetroid.height = "Too big for Smash.";
console.log(ridleyMetroid.height);

//These can basically be manipulated like the variables we've worked with before. 

ridleyMetroid.weight += 1;
console.log(ridleyMetroid.weight);


//Here's how this can be used to draw a circle. 
//This is basically what we've been doing before, just in a different syntax. 

var myCircle = {
    r: 15,
    x: 20,
    y: 30,

    //This is just using an array to store the RGB numbers.
    color: [156, 0, 250]
};

function setup() {
    createCanvas(400, 300);
}

function draw() {

    fill(myCircle.color);
    myCircle.x += 2;
    circle(myCircle.x, myCircle.y, myCircle.r);
}
*/


/*
OBJECT METHODS
-   Functions that exist inside of an object
-   Can affect the object's properties
-    Access properties inside of a method using this keyword

*/

/*
var myCircle = {
    r: 15,
    x: 20,
    y: 30,
    color: [156, 0, 250],

    //Everything that used to be in the "draw" function related to the circle is now here. 
    //NOTE: All the previous relations to "myCircle" inside "update" are replaced with "this". 
    update: function() {
        fill(this.color);
        this.x += 2;
        circle(this.x, this.y, this.r);
    }
};

function setup() {
    createCanvas(400, 300);
}

function draw() {

    //This replaces everything that used to be in the "draw" function. 
    myCircle.update();
}
*/

//THIS WAS THE END OF WHAT HE SAID COULD BE DONE FOR THE HOMEWORK.
//EVERYTHING AFTER THIS IS MORE PRACTICAL USES FOR THESE CONCEPTS. 

/*
ARRAYS OF OBJECTS
-   It's possible to make more complex data structures consisting of objects inside of an array. 
    -   Or vice versa, but this won't be important until later. 
*/
let pants = [
    { type: "jeans", condition: "fair", age: 2 },
    { type: "khakis", condition: "good", age: 0.1 },
    { type: "sweats", condition: "gross", age: 12 }
];

let pencils = [
    { type: "wood", sharpen: "yes, it's a wood pencil you dumb" },
    { type: "mechanical", sharpen: "yes, if you want to ruin your sharpener"}
];

pencils[1].type = "mega";
console.log(pencils[1].type);


/*
var circles = [
    { x: 100, y: 20, r: 5 },
    { x: 20, y: 50, r: 50 },
    { x: 150, y: 200, r: 25 },
    { x: 300, y: 250, r: 100 },
]

//To retrieve a very specific value, write array[indexvalue].name 
///NOTE: Remember that the first index is always 0
console.log(circles[2].y);

function setup() {
    createCanvas(400, 300);
}

function draw() {
    noStroke();

    for(var i = 0; i < circles.length; i++) {

        //This will loop through all the lines in the array, over and over again. 
        console.log(circles[i]);

        let currentCircle = circles[i];
        circle(currentCircle.x, currentCircle.y, currentCircle.r);

        //This is how the syntax normally looks above without the variable
        //circle(circles[i].x, circles[i].y, circles[i].r);

        //The circles will move down the screen at 2 pixes per frame. 
        currentCircle.y += 2;

        //This resets the y positions back to 0 when they reach the bottom, on top of some FUNK
        if(currentCircle.y > 300) {
            currentCircle.y = 0;

            //This puts the circle randomly anywhere on the canvas. The 400 corresponds to the canvas length. 
            currentCircle.x = Math.random() * 400;

            //This makes the circles random gray colors.
            fill(Math.random() * 255);
        }
    }
}
*/