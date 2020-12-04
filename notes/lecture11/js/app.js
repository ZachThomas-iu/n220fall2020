/*

EVENTS LECTURE

*/




/*

EVENTS

    Occurences during an application that can happen at any time (or never). 
    Asynchronous - Can't control when they will happen. 
    Can be listened for and responded to. 

    Examples:
        Buttons, mouse movements, key presses, image loads onto page. 

*/

/*

Example AAAA (also in HTML):

function handleClick(event) {
    console.log("I've been hit!!");
}

*/




/*

LISTENING FOR EVENTS IN JAVASCRIPT

    Use addEventListener on an HTMLElement reference. 
    Specify the type of event. 

    Examples:

        "click"
        "mouseover"
        "mousedown"

*/

/*

EXAMPLE BBBB:

Adding a listener in JS

let someDiv = document.querySelector("#myDiv");

//What event is it listening for, and what function will it activate?
someDiv.addEventListener("click", onMouseClick);

function onMouseClick(event) {
    console.log ("I've been hit!!");
}

//This is basically the same thing as example AAAA. 

*/

/*

EXAMPLE CCCC:

let element = document.getElementById("eventTest");
element.addEventListener("click", itsClicked);

function itsClicked() {
    console.log("Yes");
}

*/




/*

TARGETS

    All events have a 'target'. 

    Targets are, in general, the item that was listening for the event.
    
    For instance, inside of a mouse event click handler on a div, you
    may get a reference to the div that was clicked. 

function handleClick(event) {
    //A reference to whatever was clicked. 
    let targDiv = event.target;
}
*/

/*

EXAMPLE DDDD (on HTML):

let element = document.getElementById("eventTest");
element.addEventListener("click", itsClicked);

//After the div has been clicked, it will change color and display the text.
//All divs with this event will respond to this. 
function itsClicked(event) {
    event.target.innerHTML = "I've been clicked";
    event.target.style.backgroundColor = "#999";
}

*/




/*

HTML Attributes

    HTML Atributes are the name=value pairs that are in our HTML tags. 

    For instance, the tag below has an attribute of "id" and one of "value".

    Example:

        <input id="animal" value="wolf" />

*/

/*

CUSTOM ATTRIBUTES

    It's entirely acceptable to write other attributes on our tags as well. 

    Often these non-standard tags are preceded by "data-". 

    Here is a tag with "data-xxy" attribute. 

        <div id="bigDog" data-xxy="Test" />

    This "data-xxy" attribute does not affect the HTML in any way. 
        It's just silently ignored. 

*/

/*

GETTING ATTRIBUTE DATA

    DOMElementReference.getAttribute("attributeName");
        This will return the string value of whatever is that current attribute.

    Think of this as adding another id or class to a div. 
*/

/*

EXAMPLE EEEE (also in HTML):

let bigDog = document.querySelector("#bigDog");
let attrString = bigDog.getAttribute("data-xxy");

*/



//EXAMPLE FFFF:

let element = document.getElementById("eventTest");
element.addEventListener("click", itsClicked);

function itsClicked(event) {
    event.target.style.backgroundColor = "#999";

    //Get the attribute. 
    //NOTE: This is specifically for STRINGS.
    //NOTE 2: If you want a number, use Number(element.getAttribute("data-response"));
    let response = event.target.getAttribute("data-response");
    event.target.innerHTML = response;
}






/*

USING ATTRIBUTE DATA

    It's a string, so it can be used anywhere you'd use a string. 

*/

/*

Example GGGG:

    let bigDog = document.querySelector("#bigDog");
    let attrString = bigDog.getAttribute("data-xxy");

    let olDiv = document.querySelector("#olDiv");
    olDiv.innerHTML = "Big dog said: " + attrString;

*/

let gameBody = document.getElementById("gameBody");

//Make 4 'enemies'. 
for(var i= 0; i < 4; i++) {
    let newEn = document.createElement("div");
    
    newEn.style.width = "30px";
    newEn.style.height = "30px";
    newEn.style.position = "absolute";
    newEn.style.top = (Math.random() * 150) + "px";
    newEn.style.left = (Math.random() * 400) + "px";
    newEn.style.borderRadius = "15px";
    newEn.style.backgroundColor = "#222";

    gameBody.appendChild(newEn);

    newEn.addEventListener("click", removeEnemy);
}

function removeEnemy(event) {
    event.target.remove();
}




/*

PERSONAL AFTERTHOUGHTS (THIS ISN'T IN THE LECTURE)

You could probably make a tic, tac, toe board with these functions.

Create a for loop with empty arrays. 

With the 
When the left mouse button is pressed, place an X. 
When the right mouse button is pressed, place an O. 

*/