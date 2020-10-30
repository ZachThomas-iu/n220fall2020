//Set up the object "ball".
var ball = {
    
    //Set its initial position.
    x: 100, 
    y: 100, 
   
    //Set the ball's initial velocity.
    velocityX: 2, 
    velocityY: 2,

    //Create the update function.
    //Basically everything in this should be treated like it's in "function draw()". 
    update: function() {

        //Remove the fill color from all shapes below this code.  
        noFill();

        //Set the stroke color of all shapes below this code. 
        stroke(255, 238, 130);

        //Create a circle to function as our "ball".   
        //We can use "this" in place of the object name. 
        circle(this.x, this.y, 10);

        //The ball's velocity is added to its X and Y positions so that it "moves". 
        //Since this update function will be put in a "draw" function, this will happen every frame, making it look like the ball is moving. 
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
};

//Set up the object "paddle". 
var paddle = {

    //Set the paddle's initial position, width, and height. 
    x: 100, 
    y: 350, 
    w: 150, 
    h: 20,

    //Create the update function like we did in the "ball" object.
    update: function() {

        //No fills in any shapes below this line. 
        noFill();

        //Set the stroke color of all shapes below this code. 
        stroke(143, 251, 255);

        //Create the rectangle that will function as our "paddle". 
        rect(this.x, this.y, this.w, this.h);

        //Create an "if" statement to move the rectangle to the left when the left-arrow key is pressed. 
        //"If the left-arrow key is pressed, subtract 2 from paddle.x every frame the key is held."
        if(keyIsDown(LEFT_ARROW)) {
            this.x -= 2;
            }
    
        //Create an "if" statement to move the rectangle to the right when the right-arrow key is pressed. 
        //"If the right-arrow key is pressed, add 2 from paddle.x every frame the key is held."
        if(keyIsDown(RIGHT_ARROW)) {
            this.x += 2;
            }
        }
    };

//Create an array we can manipulate to create breakable blocks. 
var blocks = [];

//Create a "for" loop that will create six breakable blocks. 
//"Variable "i" = 0. When "i" is less than 6, increase "i" by 1."
//The loop will stop when "i" reaches six. 
for(var i = 0; i < 6; i++) {

    //Create a block at this position when the for loop is true.
    //Each block will be created at x = "i" * 60, y = 10. 
    blocks[i] = {
        x: i * 60, 
        y: 10 
    };
}

//Create the "setup" function for our canvas to be drawn in. 
function setup() {

    //Create the canvas.
    //It will be 400 by 400 pixels. 
    createCanvas(400, 400);
}

//Create the "draw" function.
//The "draw" function updates every frame the program is active, meaning everything in this function will be run over and over. 
function draw() {

    //Create a background. 
    //This background will be drawn every frame, removing any trails left behind from the shapes constantly being drawn. 
    background(70);
    
    //Run the "update" function we created in the "ball" object. 
    ball.update();

    //Run the "update" function we created in the "paddle" object. 
    paddle.update();
    
    //Create an "if" statement that will make the ball "bounce" when it hits the right side of the canvas. 
    //"If the ball's X position is greater than 400, set the ball's X position to 400 and multiply its velocity by -1."
    if(ball.x > 400) {
        ball.x = 400;
        ball.velocityX *= -1;
    }
    
    //Create an "if" statement that will make the ball "bounce" when it hits the left side of the canvas.
    //"If the ball's X position is less than 0, set the ball's X position to 0 and multiply its velocity by -1."
    if(ball.x < 0) {
        ball.x = 0;
        ball.velocityX *= -1;
    }
    
    //Create an "if" statement that will make the ball "bounce" when it hits the top of the canvas. 
    //"If the ball's Y position is less than 0, set the ball's Y position to 0 and multiply its velocity by -1."
    if(ball.y < 0) {
        ball.y = 0;
        ball.velocityY *= -1;
    }

    //Create a hitTest function that we'll manipulate later. We're using six values in this one. 
    function hitTestPoint(px, py, bx, by, bw, bh) {
        
        //This hitTest is looking to see if the values from "px" or "py" are inside a certain area.
        //If "px" or "py" are within the area set by "bx", "by", "bw", and" bh", return true. Otherwise, return false. 
        //This creates a boolean.  
        if(px > bx && px < bx + bw) {
            if(py > by && py < by + bh) {
                return true;
            }
        }
            
        return false;
    
    }

    //Using the hitTestPoint function we created earlier, we're going to take the values from our objects and insert them into the function.
    //"px" is replaced by "ball.x", "py" is replaced by "ball.y", so on and so forth. 
    //We're going to put the "hitTestPoint" funtion in an "if" statement, which will activate if the function returns true. When it does, the ball will "bounce" off of the paddle. 
    //"If the function "hitTestPoint" is true under these parameters, apply the below operations."
    if(hitTestPoint(ball.x, ball.y, paddle.x, paddle.y, paddle.w, paddle.h) ) {

        //Multiply the ball's Y velocity by -1 so it "bounces". 
        ball.velocityY *= -1;
    }
        
    //Draw the blocks on the page using a "for" loop. 
    //"Variable "i" = 0. When i is less than the length of the array in the blocks object, increase i by 1."
    for(var i = 0; i < blocks.length; i++) {

        //This variable just simplifies the code so we don't constantly have to write "blocks[i] in the code."
        var b = blocks[i];

        //Draw a rectangle at this position.
        //When the "for" loop stops looping, no more rectangles will be drawn. 
        rect(b.x, b.y, 60, 20);
        
        //Using the hitTestPoint function we created earlier, we're going to take the values from the "ball" object and the current "for" loop and insert them into the function.
        //"If the function "hitTestPoint" is true under these parameters, apply the below operations."
        if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) {

            //Multiply the ball's Y velocity by -1 so it "bounces". 
            ball.velocityY *= -1;
        
            //Remove the block from the array. 
            blocks.splice(i, 1);
        }
    }
        
}

