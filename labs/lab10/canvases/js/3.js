/*
MAKE DIVS - COMPLETE

Given the array

let objects = [

    { color: "#FF0000", height: 100, width: 300 },

    { color: "#FFFF00", height: 200, width: 200 },

    { color: "#ff0000", height: 300, width: 100 },

];

Write a loop that creates three divs based on the data in the array. 
You should only have one document.createElement in your code.
*/

//Create the object.
let objects = [

    { color: "#FF0000", height: 100, width: 300 },

    { color: "#FFFF00", height: 200, width: 200 },

    { color: "#ff0000", height: 300, width: 100 },

];

//Create a for loop that will create each element one by one. 
for( i = 0; i < objects.length; i++) {

    //Make a new element. 
    var newEl = document.createElement("div");

    //Customize it.
    //This will retrieve specific elements from each object based on the value of the i variable. 
    newEl.style.backgroundColor = objects[i].color;
    newEl.style.height = objects[i].height + "px";
    newEl.style.width = objects[i].width + "px";
    newEl.style.float = "left";

    //Add it to the page.
    document.body.appendChild(newEl);
}
