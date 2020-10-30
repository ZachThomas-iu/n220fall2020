/*
CSS SELECTORS AND PROPERTIES

In CSS, you write something to SELECT a tag on your page,
then a series of PROPERTIES to change how that tag looks. 

selector {
    property: value;
}


SELECTING VIA TAG NAMES

Write the name of the tag as the selector.
The style will apply to all the tags. 

//All the "p" tags will receive these properties and values. 
p {

}

//All the "h1" tags will receive these properties and values. 
h1{

}


SELECTING VIA CLASS

Add a class atribute to an element. 
Use a dot "." before the class name. 

<div class="byline"></div>

//Any element with the class="byline" will have this style applied to it. 
.byline {

}


SELECTING VIA ID

Give an HTML tag an id atribute. 
NOTE: There can only ever be ONE element one the page with this id. 
Write a CSS selector with a # before the id. 
This will be the one we use the most often in this. 

<div id="heroimage"></div>

//The element with the id="heroimage" will have this style applied to it. 
#heroimage{

}


HEIGHT AND WIDTH

Specifies the height and width of the element. 
We will always use pixels as a measurement in this class. 

#namecard {
    height: 100px;
    width: 200px;
}


BACKGROUND-COLOR

Specifies the background color. 
Uses hex or rgb. 

#content {
    background-color: #00FF00;
}


POSITION (STATIC AND ABSOLUTE)

Static - Web browser positions it automatically. 
Absolute - Developer specifies position. TOP LEFT CORNER IS 0, 0. 

NOTE: Any positioning tags will NOT WORK if the object is not positioned as absolute. 

#player{
    position: absolute;

    //Think of this as the Y position. This will position the object 100px from the top.  
    top: 100px;

    //Think of this as the X position. This will position the object 100px from the left. 
    left: 100px;
}    


MARGIN

This is the space between this element and the ones around it. 
NOTE: Add however many pixels you put in the margin tag to the object's position. 

#shy {
    margin: 10px;
}


FLOAT

This was touched on a little bit, but still consider it. 
Everthing will be aligned from top to bottom unless you want it left-right. 
This can be accomplished with the float tag. 

.gridSquares{
    float: left;
}


MANIPULATING STYLE USING JAVASCRIPT

.STYLE PROPERTY

Needs a reference to an HTML element. 
Then write .style after that reference. 
You can access all of the CSS styles with ".stylename". 
Styles with a dash are instead camel cased. 

Note the syntax for backgroundColor. There's a "-" in CSS, but not in JavaScript. 

let dvTostyle = document.querySelector("#myDiv");
dvTostyle.style.backgroundColor = "#00FF00";
dvTostyle.style.height = "210px";
*/

/*

//This code will give either heads or tails.
//We sorta use this later, so it's commented out for now. 

let dvCoin = document.getElementById("coin");

dvCoin.innerHTML = "tails";
dvCoin.style.backgroundColor = "#ebcf34";
dvCoin.style.width = "100px";
dvCoin.style.height = "100px";

function flipCoin() {
    let flip = Math.random();
    let side = "heads";
    if (flip > .5) side = "tails";
    dvCoin.innerHTML = side;

    if(side == "tails") {
        dvCoin.style.backgroundColor = "#eb5634";
    } else {
        dvCoin.style.backgroundColor = "#ebcf34";
    }
}
*/

/*
CREATING NEW ELEMENTS

ELEMENT CREATION PROCESS

Create the element in JS. 
    let el = document.createElement("elementType");

Customize the element.
    el.style.width = "200px";

Place the element on the page. 
    document.body.appendChild(el);


CREATE THE ELEMENT

document.createElement() lets you create new HTML elements. 
    This can be any of them - paragraphs, divs, links
    It just needs to have that tag name as a string between the (). 

You need to store this element in a variable for future manipulations. 

let newPara = document.createElement("p");
let newDiv = document.createElement("div");


MANIPULATE THE ELEMENT

Use either .innerHTML or .style to change the elements in some way. 

let el = document.createElement("div");
el.style.backgroundColor = "#aaa";
el.innerHTML = "solar rays";


PUT THE ELEMENT ON THE PAGE

Use .appendChild on an element reference to add your new element to the page. 
The an easy place for this is document.body.appendChild (idk what that typo is). 

let el = document.createelement("div");
el.style.backgroundcolor = "#aaa";
el.innerHTML = "solar rays";

document.body.appendChild(el);
*/

/*
//This will create a yellow div with the word "Testing" in it. 

//Make an element.
let newEl = document.createElement("div");

//Customize the object.
newEl.innerHTML = "Testing";
newEl.style.backgroundColor = "#ebcf34";

//Place the object. 
//NOTE: Prior to this, the element does indeed exist, it's just not on the page yet.
//This line HAS to be in the code for this element to display. 
document.body.appendChild(newEl);
*/

let dvCoin = document.getElementById("coin");

dvCoin.innerHTML = "tails";
dvCoin.style.backgroundColor = "#ebcf34";
dvCoin.style.width = "100px";
dvCoin.style.height = "100px";

function flipCoin() {

    //Do a coin flip. 
    let flip = Math.random();
    let side = "heads";
    if (flip > .5) side = "tails";

    //Set the results in innerHTML. 
    dvCoin.innerHTML = side;

    //Change the background color based on result. 
    if(side == "tails") {
        dvCoin.style.backgroundColor = "#eb5634";
    } else {
        dvCoin.style.backgroundColor = "#ebcf34";
    }

    //Record the result in a result list. 
    //Make an element. 
    let newEl = document.createElement("div");

    //Customize it.
    newEl.innerHTML = side;
    newEl.style.backgroundColor = "#999";
    newEl.style.width = "40px";
    newEl.style.float = "left";
    newEl.style.margin = "3px";

    //Place the object on the page. 
    document.body.appendChild(newEl);
}