//Number 2 - Puck Slide

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(232, 232, 232);
    noStroke();
        if ( mouseX > 200) {
            fill(176, 46, 12);
        } else {
            fill (41, 115, 115);
        }

        circle(mouseX, mouseY, 30);
    }
