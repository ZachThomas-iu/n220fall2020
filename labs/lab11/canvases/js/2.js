/*

2 - COLOR MIXER - COMPLETE

This is an application that will start a div at a black color, 
and as a user presses buttons associated with RGB, 
the div will change to new colors. 

The button presses should affect additively - that is. 
If a div is currently blue, pressing +red buttons will change the div 
to a purple color.

9 buttons (associated with red green and blue). 
There should be a +1, +5, and +10 button for each color.
1 div that will change colors to the rgb color calculated

1 div that shows the current calculated rgb color

You must use attributes on the buttons for the values to change the colors by.

*/

//Create the initial color values. 
let redColor = 0;
let greenColor = 0;
let blueColor = 0;

//Create an array we'll use for the different buttons. 
let colorArray = [1, 5, 10];

//Create rectangle.
let monstahRect = document.getElementById("monstah");
let rectStyle = document.createElement("div");

//Style the rectangle
rectStyle.style.height = 200 + "px";
rectStyle.style.width = 300 + "px";
rectStyle.style.backgroundColor = "rgb(" + redColor + "," + greenColor + "," + blueColor + ")";

//Apply the rectangle. 
monstahRect.appendChild(rectStyle);


//Display the current colors.

let displayColors = document.getElementById("currentColor");

let displayDiv = document.createElement("div");

displayDiv.innerHTML = "Red: " + redColor + " Green: " + greenColor + " Blue: " + blueColor;

displayColors.appendChild(displayDiv);

//Create the red buttons.

for(i = 0; i < 3; i++){

    //Set the variable to retrieve the div id. 
    let redColorDivs = document.getElementById("addRed");

    //Create the divs. 
    let createRed = document.createElement("div");

    //Style them. 
    createRed.style.height = 50 + "px";
    createRed.style.width = 70 + "px";
    createRed.style.float = "left";
    createRed.style.backgroundColor = "#999";
    createRed.style.margin = 5 + "px";
    createRed.innerHTML = "Red +" + colorArray[i];

    //Create data values in each of the boxes.  
    createRed.setAttribute("data-color", colorArray[i]);

    //Each div will respond to this event when clicked on. 
    redColorDivs.addEventListener("click", changeColorRed);   

    //Place them. 
    redColorDivs.appendChild(createRed);
}

//This function will activate when any of the red color buttons are clicked. 
function changeColorRed(event) {
    let addRed = Number(event.target.getAttribute("data-color"));
    redColor += addRed;
    rectStyle.style.backgroundColor = "rgb(" + redColor + "," + greenColor + "," + blueColor + ")";
    displayDiv.innerHTML = "Red: " + redColor + " Green: " + greenColor + " Blue: " + blueColor;
    console.log(redColor);
}


//Create the green buttons.

for(i = 0; i < 3; i++){

    //Set the variable to retrieve the div ids. 
    let greenColorDivs = document.getElementById("addGreen");

    //Create the divs. 
    let createGreen = document.createElement("div");

    //Style them. 
    createGreen.style.height = 50 + "px";
    createGreen.style.width = 70 + "px";
    createGreen.style.float = "left";
    createGreen.style.backgroundColor = "#999";
    createGreen.style.margin = 5 + "px";
    createGreen.innerHTML = "Green +" + colorArray[i];

    //Create data values in each of the boxes.  
    createGreen.setAttribute("data-color", colorArray[i]);

    //Each div will respond to this event when clicked on. 
    greenColorDivs.addEventListener("click", changeColorGreen);   

    //Place them. 
    greenColorDivs.appendChild(createGreen);
}

//This function will activate when any of the green buttons are activated. 
function changeColorGreen(event) {
    let addGreen = Number(event.target.getAttribute("data-color"));
    greenColor += addGreen;
    rectStyle.style.backgroundColor = "rgb(" + redColor + "," + greenColor + "," + blueColor + ")";
    displayDiv.innerHTML = "Red: " + redColor + " Green: " + greenColor + " Blue: " + blueColor;
    console.log(greenColor);
}


//Create the blue buttons.

for(i = 0; i < 3; i++){

    //Set the variable to retrieve the div ids. 
    let blueColorDivs = document.getElementById("addBlue");

    //Create the divs. 
    let createBlue = document.createElement("div");

    //Style them. 
    createBlue.style.height = 50 + "px";
    createBlue.style.width = 70 + "px";
    createBlue.style.float = "left";
    createBlue.style.backgroundColor = "#999";
    createBlue.style.margin = 5 + "px";
    createBlue.innerHTML = "Blue +" + colorArray[i];

    //Create data values in each of the boxes.  
    createBlue.setAttribute("data-color", colorArray[i]);

    //Each div will respond to this event when clicked on. 
    blueColorDivs.addEventListener("click", changeColorBlue);   

    //Place them. 
    blueColorDivs.appendChild(createBlue);
}

//This function will activate when any of the blue buttons are clicked. 
function changeColorBlue(event) {
    let addBlue = Number(event.target.getAttribute("data-color"));
    blueColor += addBlue;
    rectStyle.style.backgroundColor = "rgb(" + redColor + "," + greenColor + "," + blueColor + ")";
    displayDiv.innerHTML = "Red: " + redColor + " Green: " + greenColor + " Blue: " + blueColor;
    console.log(blueColor);
}