//Logs the variable "myName" as "Henlo"
let myName = "Henlo";
console.log(myName);

//Displays what the variable "myName" contains in the console, which is still "Henlo"
console.log(myName);

//"myName" is changed from "Henlo" to "Same variable, different name"
myName = "Same variable, different name.";
console.log(myName);

//Create variables using the "var" tag and manipulate them using math
// +, -, /, *, %, are all appropriate operators
var a = 10;
var b = 5;

var c = a + b;
console.log(c);

//Variables can be manipulated using math even if they aren't assigned numbers
//NOTE: The " " in the final equation is a space to separate the two variables
let mainCharacter = "Ridley";
let secondaryCharacter = "Isabelle";

let playerFenn = "Fenn mains" + " " + mainCharacter + " " + "and" + " " + secondaryCharacter;
console.log(playerFenn);

//This will hopefully screw with Travis if he sees this
let hiTravis = "I see you've found my notes Travis";
console.log(hiTravis);