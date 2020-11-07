/*

2 - Thats a lot of div - COMPLETE

Write a loop that puts 100 square divs (20px x 20px) on the page, 
each with a different background color. 

Set their float CSS attribute to left.

*/

//Create a "for" loop that will loop 100 times.
for (i = 0; i < 100; i++){

    //Make the divs. 
    let manyDiv = document.createElement("div");

    //Set a variable for our random colors. 
    let randomNumber = Math.floor(Math.random() * 999999);

    //Give the divs random colors. 
    manyDiv.style.backgroundColor = "#" + randomNumber;

    //Set the height and width of the divs. 
    manyDiv.style.height = "20px";
    manyDiv.style.width = "20px";

    //Make them float left so they'll all fit in the window. 
    manyDiv.style.float = "left";

    //Give them a margin of 3 pixels so we can see them. 
    manyDiv.style.margin = "3px";

    //Place the divs on the page. 
    document.body.appendChild(manyDiv);
}
