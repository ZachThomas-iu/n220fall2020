function setup(){
    createCanvas(1000, 600)

    background("gray");

//Haku's colors
    var green = "#5fe4a0";
    var yellow = "#fcf6a7";
    var white = "#dbebea";
    var gray = "#c8cdd1";
    var pink = "#e99d9c";
    var brown = "#c5a99e";

//Haku tail fur
    fill(green);
    noStroke();
    quad(750, 375, 820, 350, 920, 350, 810, 390);

//Haku body
    fill(white);
    quad(100, 300, 150, 330, 200, 350, 280, 350);
    quad(100, 300, 50, 350, 170, 400, 280, 350);
    quad(170, 400, 370, 300, 500, 350, 300, 450);
    quad(500, 350, 600, 390, 500, 450, 390, 390);
    triangle(590, 390, 500, 450, 800, 370);

//Haku legs

//Haku underside
    fill(gray);
    quad(170, 400, 300, 450, 300, 420, 200, 390);
    quad(300, 420, 300, 450, 400, 400, 400, 370);
    quad(400, 400, 400, 370, 550, 430, 500, 450);
    triangle(500, 450, 600, 423, 550, 430);

//Haku back fur
    fill(green);
    quad(280, 350, 280, 310, 180, 310, 170, 320);
    quad(280, 350, 280, 310, 370, 250, 370, 300);
    quad(370, 300, 370, 250, 590, 360, 590, 390);
    triangle(590, 360, 590, 390, 650, 385);

//Haku horns
    fill(yellow);
    quad(190, 330, 215, 345, 250, 290, 240, 270);
    triangle(249, 290, 240, 270, 340, 270);

//Haku legs
    fill(white);
    quad(270, 410, 250, 400, 230, 450, 240, 470);
    fill(brown);
    triangle(240, 470, 230, 450, 180, 490);
    triangle(200, 480, 150, 480, 170, 500);
    fill(white);
    quad(524, 420, 544, 410, 610, 460, 590, 460);
    fill(brown);
    triangle(610, 460, 590, 460, 530, 490);
    triangle(520, 500, 560, 475, 500, 480);

//Haku eyes
    fill("white");
    circle(155, 330, 10)
    fill("black")
    circle(150, 325, 5)

//Haku nose
    fill(pink);
    quad(100, 300, 115, 310, 100, 320, 95, 305);


    //Guide lines (x then y)
    //stroke(1)

    //line(0, 100, 1000, 100)
    //line(0, 200, 1000, 200)
    //line(0, 300, 1000, 300)
    //line(0, 400, 1000, 400)
    //line(0, 500, 1000, 500)
    //line(0, 600, 1000, 600)
    //line(0, 700, 1000, 700)

    //line(100, 0, 100, 1000)
    //line(200, 0, 200, 1000)
    //line(300, 0, 300, 1000)
    //line(400, 0, 400, 1000)
    //line(500, 0, 500, 1000)
    //line(600, 0, 600, 1000)
    //line(700, 0, 700, 1000)
    //line(800, 0, 800, 1000)
    //line(900, 0, 900, 1000)
}

