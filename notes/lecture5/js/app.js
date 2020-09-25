///Functions

/*
Functions are a way to package up a block of code to run on command. 
The code inside the curly brackets is not executed until the function is called/invoked/run. 


//This console.log() will show up because it's not inside a function.
console.log("Hello from the other siiiiiiiiiiiiide")

//This is a function definition.
//Imagine this as basically setting a string inside a variable. 
function sayHello() {
    console.log("Hello from the insiiiiiiiiiiiide");
}

//To make function sayHello() work, you have to call on the function. 
//You have to make sure to put the () in. It won't get called on otherwise.
sayHello();
*/


//Parameters

/*
Functions are machines, and, like some machines, can taek inputs called arguements/parameters. 
Arguements become variables inside of the function. 


function sayHelloName(name){
    //name is now a variable in this function
    //we can do anything we want with it

    //even something boring like say hello to the name
    console.log("Hello " + name + "!");
}

//Imagine the variable in the () as what you want the new variable to be. 
//Whatever new thing you put in there will automatically replace the variable in the string with that new line.

sayHelloName("Fenn");
//Hello Fenn!

//This also works with multiple variables, you just have to add commas. 

function listMains(main1, main2){
    console.log("Fenn mains " + main1 + " and " + main2 + ".");
}

listMains("Isabelle", "Ridley");
//Fenn mains Isabelle and Ridley.
*/


//Drawing with functions

/*

//This code will draw a sun and 20 rays. The sun will not move. 

function setup(){
    createCanvas(400, 300);
    background(100);

    //drawSun is the function below. 
    //The hex inside the () is replacing the variable "sunColor". 
    //The "20" applies to the number of rays the sun has (how many times the "for" loop will loop). 
    //The "200" applies to where the circle and lines will be drawn on the Y axis.
    drawSun("#ffcb3d", 20, 200);
}

function drawSun(sunColor, numRays, yHeight) {

    fill(sunColor);
    stroke(sunColor);

    for(var i = 0; i < numRays; i++) {
        line(200, yHeight, i * 20, 300);
    }

    circle(200, 200, 40);
}
*/

/*
//This code adds an incrementing variable to the position of the sun, making it move.

//We're going to be using a variable in place of one of the parameters for the drawSun function. 
let sunX = 40;

function setup(){
    createCanvas(400, 300);
    background(100);
}

function draw(){
    background(100);

    //This varaible will increase by 1 every frame.
    sunX ++;

    //sunX is placed on one of the parameters.
    //You can also use things like mouseX and mouseY for this.
    drawSun( "#ffcb3d", 20, sunX, 30 );

    //Now let's take what we've got and add another sun behind this one. 
    //The operation for sunX in this doesn't work. He was able to do this with mouseX though. 
    drawSun( "blue", 10, sunX - 0.5, 20 );
}

function drawSun(sunColor, numRays, yHeight, radiusSize) {

    fill(sunColor);
    stroke(sunColor);

    for(var i = 0; i < numRays; i++) {
        line(200, yHeight, i * 20, 300);
    }

    circle(200, yHeight, radiusSize);
}
*/


//Return

/*
Functions return variables. 
Can store the result in a variable or use in a calculation.


function makeHello() {
    var aString = "hello";
    return aString;
}

//Use the funtion.
let aHello = makeHello(); //ahello now contains "hello".

//this would do the same thing as above. 
let aHello = "Hello";


//We're setting up a function that allows us to determine whether or not a number is even. 

function setup(){

    //The isEven funtion is called on and "2" replaces the "amount". It will show up as "true".
    isEven(2);

    //Now it's called on again with a "3" instead. This will show up "false".
    isEven(3);
}

function isEven(amount) {
    let result = amount % 2 == 0;
    console.log(result);
}
*/

/*
//The only issue with this code is the fact that the variable "result" will only work within that block of code. 
//To use it outside of that block requires the "return" statement. 

function setup(){

    //We're writing the previous line as a variable.
    var functionResult = isEven(2);
    console.log(functionResult);
}

function isEven(amount) {
    let result = amount % 2 == 0;

    //Whatever is stored in "return" is then appliled to the "isEven" which is then applied to functionResult. 
    return "My boy, this number is even.";
}

//Apparently we won't use it much. 
*/


//Scope

/*
//Now that we have functions, we need to start worrying about variable scope. 
//There are two types of scope:
/// Local : Variables created inside of a function. Only accessible inside that function. 
/// Global : Variables created outside of a function. Accessible from anywher inside the program. 

//Global variables are what we've been using before. It can be accessed in any function. 
let age = 10;

//Local variables are just created inside functions. 
function dogYears(amt) {
    let dogAge = amt * 7;
}

//Just to give you an idea of what will and won't work. 

var thatVariable = "YAH HOO";

function myFunc() {
    var thisVariable = "HOO HAH";

    console.log(thatVariable);
    //"YAH HOO" will show up in the console.log. 

    console.log(thisVariable);
    //"HOO HAH" will show up in the console.log. 
}

function newFunc() {

    console.log(thatVariable);
    //"YAH HOO" will show up in the console.log. 

    console.log(thisVariable);
    //No result will display
}

console.log(thatVariable);
//"YAH HOO" will show up in the console.log. 

console.log(thisVariable);
//No result will display. 
*/

function thisMath(x) {
    return x * 3;
}

var myExample = thisMath(5);

console.log(myExample);