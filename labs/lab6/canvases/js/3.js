/*
4 - CHARACTER CONTROLLER - COMPLETE

Create an object with a custom update function that draws a circle to the screen.

This object should have properties for its x and y location.

In the custom update function, move the object 2 pixels to the right 
if the right key is held down. 2 pixels to the left if the left key is held down, 
2 pixels up if the up key is held down, and 2 pixels down if the down 
key is held down.
*/

var player = {
    r: 15,
    x: 200,
    y: 200,
    color: [224, 129, 70],

    //Everything that used to be in the "draw" function related to the circle is now here. 
    //NOTE: All the previous relations to "myCircle" inside "update" are replaced with "this". 
    update: function() {

        background(200);

        fill(this.color);

        if(keyIsDown(LEFT_ARROW)){
            this.x -= 2;
        }

        if(keyIsDown(RIGHT_ARROW)){
            this.x += 2;
        }

        if(keyIsDown(DOWN_ARROW)){
            this.y += 2;
        }

        if(keyIsDown(UP_ARROW)){
            this.y -= 2;
        }

        circle(this.x, this.y, this.r);
    }
};

function setup(){
    createCanvas(400, 400);
}

function draw(){
    player.update();
}
