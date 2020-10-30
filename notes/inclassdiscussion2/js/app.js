let dvLine = document.getElementById("line");
let counter = 1;

function previousLyric() {
    counter--;
    console.log(counter);
}

function nextLyric() {
    counter++;
    console.log(counter);
    
    if(counter == 1){
        dvLine.innerHTML = "Blue canary in the outlet by the light switch";
    } else if (counter == 2) {
        dvLine.innerHTML = "Who watches over you?";
    }
}

