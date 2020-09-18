// 1 - "FizzBuzz" COMPLETE

let xPos = 50;

function setup(){
    createCanvas(750, 500);
}

function draw(){
    noStroke();
    background(200, 200, 200);

    //"i" will be our incrementing value. We'll use it to figure out what should be drawn and where.
    //"i" will start at 1 and will increase by increments of 1 until it reaches the value of 26. The loop will stop looping afterwards.
    for ( let i = 1; i < 26; i++ ){

        xPos = xPos * i;

        //This is the most complicated "if" statement. It's usually good to write the "if" and "else if" statements in order of complexity.
        //This statement will draw a blue square if both modulos result in a 0.
        if( i % 3 == 0 && i % 5 == 0 ){
            fill("blue");
            rect((i * 20) - 10, 38, 25, 25);
        }

        //These next two statements aren't as complicated, but still have an operation.
        //If the modulo results in a 0, a purple circle will be drawn.
        else if( i % 3 == 0){
            fill("purple");
            circle( i * 20, 50, 10);
        }

        //If this modulo results in a 0, a green square will be drawn
        else if( i % 5 == 0){
            fill("green");
            rect((i * 20) - 10, 38, 25, 25);
        }
            
            //This is basically the default, the least complicated one and should be written last.
            //If none of the statements above come up as "true," then a black circle will be drawn.
            else{
                fill("black");
                circle(i * 20, 50, 10);
            }
    
        }
        
        
    }