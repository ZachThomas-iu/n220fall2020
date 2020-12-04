/*

1 - COLOR CHANGER - COMPLETE

Create an application with three grey, square divs, in a row. 
They should be 200px by 200px, and all floated left. Give them a margin of 5px.

Using only one event handler, write event listeners to respond to a click on each element. 
Each element should change to a different color: one red, one green, and one blue.
Use a data attribute on the elements to store the color to be changed to.

*/

//Create the element.
let element = document.getElementById("divs");

let colorArray = ["#FF0000", "#00FF00", "#0000FF"];

//Create a for loop that will create four individual divs. 
for(var i= 0; i < 3; i++) {

    //Create the div. 
    let divs = document.createElement("div");

    //Style the divs. 
    divs.style.height = 200 + "px";
    divs.style.width = 200 + "px";
    divs.style.backgroundColor = "#999";
    divs.style.float = "left";
    divs.style.margin = 5 + "px";

    //Retrieve the data values from our array. 
    divs.setAttribute("data-color", colorArray[i]);

    //Place the divs on the page. 
    element.appendChild(divs);

    //Each div will respond to this event when clicked on.
    divs.addEventListener("click", changeColor);
}

//When each div is clicked on, they will change color. 
function changeColor(event) {
    event.target.style.backgroundColor = event.target.getAttribute("data-color");
}