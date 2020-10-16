/*
Create a one player pong game. This should have:

1. A paddle/rectangle controlled by the player on the right of the screen (moves up/down)

2. A ball/circle that starts moving to the left of the screen.

3. This ball bounces off the TOP, BOTTOM, and LEFT of the screen.
4. This ball bounces off the paddle (use hitTestPoint)
5. If the ball goes beyond the right of the screen, place the ball back at the center
    of the screen and set its velocity to the left again.
7. (optional) Display a "score" number on the screen that ticks up by 1 every time
    the player catches the ball with the paddle. Resets to zero when the ball resets.

Ideally, this project would use objects for both paddle and ball.
*/

//Create the "ball" object. 
let ball = {

    //Set the ball's initial X and Y positions. 
    xPos: 200,
    yPos: 200,
    
    //Set the ball's initial X and Y speeds.
    xSpeed: -5,
    ySpeed: 4,

    //Set the ball's size. 
    r: 15,

    //Set the ball's color. 
    ballFill: "red",

    //Set the player's initial score. 
    score: 0,

    //Create the "update" function. 
    update: function() {

        //If the ball's X position is less than 0, multiply xSpeed by -1 so the ball "bounces."
        if(this.xPos < 0){
            this.xSpeed *= -1;
        }

        //If the ball goes past the canvas width, put the ball back at the center, reset its velocity, and set the player's score to 0. 
        if(this.xPos > width){
            this.xPos = 200;
            this.xSpeed = -5;

            this.score = 0;
        }

        //If the ball's Y position is outside 0 or the canvas width, multiply ySpeed by -1 so the ball "bounces."
        if(this.yPos < 0 || this.yPos > width){
            this.ySpeed *= -1;
        }

        //Add the ball's speed to its positions so that the ball "moves."
        this.xPos += this.xSpeed;
        this.yPos += this.ySpeed;

        //Remove all strokes. Strokes are yucky. 
        noStroke();

        //Color the ball.  
        fill(this.ballFill);

        //Create the ball
        circle(this.xPos, this.yPos, this.r);

    }
    
}

//Create the "paddle."
let paddle = {

    //Set the paddle's initial position. There's no paddleY, but there'll be one later. 
    paddleX: 380,

    //Set the paddle's width and height. 
    paddleW: 10,
    paddleH: 130,

    //Set the paddle's color. 
    paddleFill: "black",

    //Create the update function for the paddle. 
    update: function() {

        //Set up the hitTest. 
        function collidePaddle(ballX, ballY, paddleX, paddleY, paddleW, paddleH) {

            //If the ball is inside the paddle, return "true."
            //Return "false" if otherwise. 
            if(ballX > paddleX && ballX < paddleX + paddleW) {
    
                if(ballY > paddleY && ballY < paddleY + paddleH) {
    
                    return true;
    
                }
    
            }  
    
        return false;
    
        }

        //Replace the values in our hitTest with the values from the objects. 
        //We're using "mouseY" for paddleY. 
        if (collidePaddle(ball.xPos, ball.yPos, paddle.paddleX, mouseY, paddle.paddleW, paddle.paddleH)){

            //Reverse the X speed of the ball so it bounces in the opposite direction.
            ball.xSpeed *= -1;

            //Increase the player's score by 1 every time the ball hits the paddle. 
            ball.score += 1;
        }

        //Color the paddle. 
        fill(this.paddleFill);

        //Draw the paddle. 
        rect(this.paddleX, mouseY, this.paddleW, this.paddleH);
    }
}

//Create the canvas. 
function setup(){
    createCanvas(400, 400);
}

//Set up the draw function. 
function draw(){

    //Reset the background every frame. 
    background(200);

    //Place the "update" function from the "ball" object in the draw function so it gets run over and over. 
    ball.update();

    //Place the "update" function from the "paddle" object in the draw function so it gets run over and over. 
    paddle.update();

    //Display the player's score in the console log.
    console.log(ball.score);
}