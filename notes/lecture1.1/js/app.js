//NOTE: It's good to have the console open when coding, it'll help point out errors
//Create the canvas using "function setup()" and then add a "{}" after
function setup() {
    createCanvas(800, 600);

//Give the background a color, make sure to draw this first or it'll draw over everything
    background("gray")

//Everything inside the "{}" gets drawn in the canvas
//For circles, the values go (x, y, radius); the x and y values correspond to the location of the center point
//NOTE: The y axis is inverted, + is down, - is up
    circle(0, 30, 50);

//For rectangles, (x, y, w, h)
//NOTE: Notice that the rectangle is over the circle, remember that the code goes from top to bottom
    rect(0, 50, 300, 30);

//Now we'll draw some shapes and add some colors
    fill("red");
    circle(100, 100, 10);

//A color picker on Google makes it easy to get specific colors using rgb or hex
    fill(214, 41, 67);
    circle(140, 100, 10);

    fill("#3b574d");
    circle(180, 100, 10);

//Fills can also color entire sections of shapes should you want that
//NOTE: This will color anything below the "fill" tag unless it get interupted by another one
    fill("blue");
    circle(100, 140, 10);
    circle(140, 140, 10);
    circle(180, 140, 10);

//Chance the colors of the strokes using the "stroke" command and width using "strokeweight"
    fill("red");
    stroke("blue");
    strokeWeight(10);
    circle(100, 180, 10);

//Strokes can be removed using the "noStroke" command
    fill("red");
    noStroke();
    circle(140, 180, 10);

//NOTE: DO NOT FORGET, everything below any "fill" or "stroke" related command will carry over the effects
//Reset the stroke and fill command
    strokeWeight(100);
    fill("white");

//Drawing lines happens between multiple verticies, each one must be plotted
    line(70, 70, 70, 200)

//Variables can be used in place of colors and coordinates, makes it easy to access rgb and hex numbers
    let myred = "#fc3003";
    let myx = 180;
    fill(myred);
    circle(myx, 180, 10);
}