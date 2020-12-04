/*

3 - FLASH CARDS - COMPLETE

An application with 3 buttons that ask questions. 
For instance, they might ask "What is the capital of Indiana?". 
Each button should have a data-answer attribute that lists the answer.

When a button is clicked, display the answer to the button's 
question in a div. 

Use only one function, and that function must make use of the 
button's data-attribute.

*/


//Create the element.
let element = document.getElementById("divs");

let questionArray = [
    "Is wine vegan?", 
    "What word is a noun, a proper noun, and a verb?", 
    "How many different meanings does the word 'run' have?"
];

let answerArray = [
    "Surprisingly, no. Wine is clarified through fining, which uses different animal products, like isinglass (fish bladder, tasty).", 
    "Buffalo! The sentence 'Buffalo buffalo buffalo buffalo buffalo buffalo buffalo buffalo.' is a complete sentence.",
    "It will supposedly have 645 different meanings in the next Oxford English Dictionary."
];

//Create a for loop that will create four individual divs. 
for(var i= 0; i < 3; i++) {

    //Create the div. 
    let divs = document.createElement("div");

    //Style the divs. 
    divs.style.height = 200 + "px";
    divs.style.width = 200 + "px";
    divs.style.backgroundColor = "#777";
    divs.style.float = "left";
    divs.style.margin = 5 + "px";
    divs.innerHTML = questionArray[i];

    //Retrieve the data values from our array. 
    divs.setAttribute("data-answer", answerArray[i]);

    //Place the divs on the page. 
    element.appendChild(divs);

    //Each div will respond to this event when clicked on.
    divs.addEventListener("click", changeColor);
}

//When each div is clicked on, they will change color. 
function changeColor(event) {
    event.target.innerHTML = event.target.getAttribute("data-answer");
    event.target.style.backgroundColor = "#999";
}