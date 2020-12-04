/*

THIS LECTURE COVERS:

    Review of object literal syntax
    Object constructor functions
    Class format
    Application of formats to iteractive media - making self-controlled objects

*/

/*

CREATE AN OBJECT

let kitty = {
    name: "Meows",
    kind: "Calico",
    age: 0.5
}

//Reaches the property and adds to it.
kitty.age++;

*/

/*

OBJECT CONSTRUCTOR FUNCTIONS

    Functions can be used as a "template" for objects. 
    use the "this" keyword to place attributes into the template. 
    Use the "new" keyword to create a new object. 
    A template is only what an object could be - is not itself an object.

function Bike() {
    this.wheels = 2;
    this.speeds = 10;
    this.name = "Huffy";
}


MAKING AN OBJECT FROM A TEMPLATE

    Use the new keyword along with an "invocation" of the template. 
    Assign this new object to a variable using "=". 
    This is called makeing a new "instance" of the object. 

let myBike = new Bike();


function Drink() {
    this.type = "monster";
    this.calories = 220;
    this.price = 2.75;
}

let myDrink = new Drink();
console.log(myDrink);


//NOTE: This is a function, so you can add arguements into it like before. 

function Characters(main, secondary) {
    this.main = main;
    this.secondary = secondary;
}

let fennCharacters = new Characters("Isabelle", "Ridley");
console.log(fennCharacters);

*/

/*

METHODS

    Funtions that exist inside of an object. 
    Can affect the object's properties. 
    Access properties inside of a method using the "this" keyword. 


DEFINING A METHOD

    Assign a  property to an anonymous function (function with no name). 

    function Bike(type) {
        this.type = type;
        this.wheels = 2;
        this.speeds = 10;
        this.ride = function() {
            let randomDistance = Math.round(Math.random() * 10);
            console.log(`The ${this.type} bike rode ${randomDistance} miles.`);
        }
    }

let sch = new Bike("Schwinn");
sch.ride();

let hfy = new Bike("Huffy");
hfy.ride();

*/

/*

CLASS SYNTAX

    Anotehr way of defining an object template. 
    Uses the "class" keyword. 
    Puts all the methods inside of the class as functions without keywords. 
    The "Constructor" function is a special one that is called when the "new"
    keyword is used to make a new instance of the class. 


//This is basically the same as the other bike function, just written with a class. 
//He doesn't care which type you use, just as long as the code works.
//This is just a demonstration in the instance that you want to go into another programming script. 

class Bike {

    //Define class level variables here. 
    wheels = 2;
    type = "Huffy";
    speeds = 10;

    constructor(type) {
        this.type = type;
    }

    ride() {
        let randomDistance = Math.round(Math.random() * 10);
        console.log(`The ${this.type} bike rode ${randomDistance} miles.`);
    }
}

let sch = new Bike("Schwinn");
sch.ride();

let hfy = new Bike("Huffy");
hfy.ride();

*/

/*

This next stuff might not be important for the assignment, but it's neat nonetheless. 
NOTE: This uses p5. 

*/

class Particle {

    x = Math.random() * 600;
    y = Math.random() * 400;
    velocity = { x: 1 - Math.random() * 1.5, y: -2 };
    gravity = .05
    color = [ Math.random() * 255, 100, 100];

    update() {
        noStroke();
        fill (this.color);
        circle(this.x, this.y, 10);

        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.velocity.y += this.gravity;

        if (this.y >= 400) {
            this.velocity.y *= -.5;
        }
    }

}

//P5 stuff
let p = new Particle();
let particles = [];

function setup() {
    createCanvas(600, 400);

    for(var i = 0; i < 123; i++){
        particles[i] = new Particle();
    }
}

function draw() {
    for(var i = 0; i < particles.length; i++) {
        particles[i].update();
    }
}