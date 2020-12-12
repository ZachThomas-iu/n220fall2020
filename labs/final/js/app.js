/*

FINAL - THE GOOD BIRD

*/

//Set the inital stats of the bird in an object.  
var bird = {
    exercise: 70,
    food: 70,
    happy: (this.food + this.exercise) / 2
}

//Create a timer.
let timer = setInterval(statTimer, 1000);

//Create a timer that will have the below functions. 
function statTimer() {

    //Update the bird's individual stats. 
    bird.exercise--;
    bird.food--;
    bird.happy = (bird.happy + bird.exercise) / 2;

    //bird.food will not go below 0. 
    if (bird.food < 0) {
        bird.food = 0;
    }

    //bird.exercise will not go below 0.
    if(bird.exercise < 0) {
        bird.exercise = 0;
    }

    //Update the bird's status in the arrays. 
    birdHungerArrayIndex = Math.floor(bird.food / 25);
    birdExerciseArrayIndex = Math.floor(bird.exercise / 25);

    //Display the values of the bird on the screen.
    birdStatusStyle.innerHTML = "Bird is at " + bird.exercise + " exercise and " + bird.food + " hunger.";
}

//Create hunger reports that will represent how hungry the bird is. 
let birdHungerReport = [
    "Birb is very hungry.",
    "Birb feels hungry.",
    "Birb doesn't need more food, but would not refuse it.",
    "Birb is full!",
    "Birb is full!"
];

//Create exercise reports that will represent how much exercise the bird has gotten. 
let birdExerciseReport = [
    "Birb feels sick from lack of exercise.",
    "Birb would like to get some exercise.",
    "Birb has exercised plenty, but would not be opposed to more playtime.",
    "Birb has had enough exercise for now. Birb would prefer not to overexert itself.",
    "Birb has had enough exercise for now. Birb would prefer not to overexert itself."    
];

//Create thoughtful wisdom for the bird to say. 
let birdWisdom = [
    "Birb is a birb. Let no other birb say otherwise.",
    "Birb is a birb. Let no other birb say otherwise.",
    "If Birb no smile, human no happy. It human's responsibility to keep Birb smiling.",
    "The seed human give to Birb is delicious, but only to Birb. Human stick to bagel.",
    "Birb hate avocado. No guac pls, but will accept bird-safe chip.",
    "Beep boop. Am drone.",
    "Birb not know if Earth is flat. Birb no understand physics and Birb can't fly to space.",
    "Birb is trapped in a simulation, but Birb not care. Birb love you anyways.",
    "Birb can cri. Don't let birb cri pls.",
    "Birb horoscope say that today will be good day.",
    "Birb's real name is Arthur Exellius Esquire Ottoman III/II. Birb doesn't know how to spell it.",
    "Birb's favorite color is orange. Like fruit!",
    "Birb not have shoulders, but Birb will still over shoulder to cry on if human need it.",
    "Birb not have monies, so birb no have chair for human to sit on. Birb apologizes.",
    "Birb is classy, but can't drink wine.",
    "Birb wishes he could be advanced AI so he could understand complexities of human mind.",
    "Human should remember to drink water. Birb cannot drink, so Birb not need to hydrate.",
    "Birb exercises by flying. Birb is just so quick that human cannot see Birb when Birb exercise.",
    "Birb sometimes bench presses. Birb has some serious pecks!",
];


//Retrieve status of bird from the array.  
let birdHungerArrayIndex = Math.floor(bird.food / 25);
let birdExerciseArrayIndex = Math.floor(bird.exercise / 25);


//Create a div that show's the bird's numerical stats.
let birdStatus = document.getElementById("birdStatus");
let birdStatusStyle = document.createElement("div");

//Show the player the bird's happiness and exercise stats. 
birdStatusStyle.innerHTML = "Bird is at " + bird.exercise + " exercise and " + bird.food + " hunger.";

//Apply the div. 
birdStatus.appendChild(birdStatusStyle);


//Display the bird's exercise status.
let workoutText = document.getElementById("exerciseStatus");
let workoutTextStyle = document.createElement("div");

//Style the div. 
workoutTextStyle.innerHTML = birdExerciseReport[birdExerciseArrayIndex];

//Apply the div. 
workoutText.appendChild(workoutTextStyle);


//Display the bird's hunger status.
let foodText = document.getElementById("foodStatus");
let foodTextStyle = document.createElement("div");

//Style the div. 
foodTextStyle.innerHTML = birdHungerReport[birdHungerArrayIndex];

//Apply the div. 
foodText.appendChild(foodTextStyle);


//Create the bird image. 
var img = document.createElement("img");
var src = document.getElementById("birdimg");

//Set the initial image the bird will be at. 
img.src = "birbimages/birbhappy.png";

//Apply the image. 
src.appendChild(img);


//Create a function that will update the bird's image every second. 
let birdImgTimer = setInterval(imgTimer, 1000);

//Create the function that will change the bird's image. 
function imgTimer() {

    //Update the bird's happiness stat. 
    bird.happy = (bird.food + bird.exercise) / 2;

    //Check how happy the bird is and apply the corresponding image. 
    if (bird.happy > 75){
        img.src = "birbimages/birbveryhappy.png";
        console.log("1");
    } else if (bird.happy < 75 && bird.happy > 50) {
        img.src = "birbimages/birbhappy.png";
        console.log("2");
    } else if (bird.happy < 50 && bird.happy > 25) {
        img.src = "birbimages/birbmedium.png";
        console.log("3");
    } else if (bird.happy < 25){
        img.src = "birbimages/birbsad.png";
        console.log("4");
    }
}


//Button to feed the bird. 
let foodStyle = document.getElementById("feed");
let food = foodStyle;

//Style the button
foodStyle.innerHTML = "Give Birb seed."
foodStyle.style.textAlign = "center";
foodStyle.style.horizontalAlign = "middle";
foodStyle.style.lineHeight = 50 + "px";
foodStyle.style.height = 50 + "px";
foodStyle.style.width = 150 + "px";
foodStyle.style.float = "left";
foodStyle.style.fontFamily = "Lucida Sans";
foodStyle.style.fontSize = 12 + "px";
foodStyle.style.backgroundColor = "#999";
foodStyle.style.margin = 5 + "px";

//Add an event that will feed the bird when the div is clicked on.
food.addEventListener("click", feedBird); 

//Function to feed the bird then update the bird's status.  
function feedBird(event) {
    let feedBird = 10;
    bird.food += feedBird;

    //Document dispalys 110 instead of 100 but bird.food is at 100.
    if (bird.food > 100) {
        bird.food = 100;
    }

    //Prevent the bird's hunger stat from going below 0.
    bird.hunger = bird.hunger < 0 ? 0 : bird.hunger;

    //Figure out what index in the hunger array must display. 
    birdHungerArrayIndex = Math.floor(bird.food / 25);

    //Display the bird's hunger status. 
    foodTextStyle.innerHTML = birdHungerReport[birdHungerArrayIndex];

    //Update the bird's happiness stat. 
    bird.happy = (bird.food + bird.exercise) / 2;

    //Display the bird's current stats on the page. 
    birdStatusStyle.innerHTML = "Bird is at " + bird.exercise + " exercise and " + bird.food + " hunger.";
}


//Button to let the bird workout. 
let workoutStyle = document.getElementById("workout");
let workout = workoutStyle;

//Style the workout button. 
workoutStyle.innerHTML = "Let Birb workout."
workoutStyle.style.textAlign = "center";
workoutStyle.style.horizontalAlign = "middle";
workoutStyle.style.lineHeight = 50 + "px";
workoutStyle.style.height = 50 + "px";
workoutStyle.style.width = 150 + "px";
workoutStyle.style.float = "left";
workoutStyle.style.fontFamily = "Lucida Sans";
workoutStyle.style.fontSize = 12 + "px";
workoutStyle.style.backgroundColor = "#999";
workoutStyle.style.margin = 5 + "px";

//Add a function that will update the bird's exercise status. 
workout.addEventListener("click", workoutBird); 

//Create the workout function
function workoutBird(event) {
    let exerciseBird = 10;

    //If the bird's exercise stat is over 100, reset the value to 100.
    //If the bird's food stat is less than 20, the bird will not exercise. 
    //If the bird can exercise, subtract 5 from bird.food and add 10 to bird.exercise. 

    //If bird.food is greater than 20, increase bird.exercise stat. 
    if (bird.food > 20){
        bird.exercise += exerciseBird;
        bird.food -= 5;
    }

    //If bird.exercise is greater than 100, set bird.exercise to 100. 
    if (bird.exercise > 100) {
        bird.exercise = 100;
    }


    //Prevent the bird's hunger stat from going below 0. 
    bird.hunger = bird.hunger < 0 ? 0 : bird.hunger;

    //Figure out which array index value corresponds with the bird's hunger. 
    birdHungerArrayIndex = Math.floor(bird.food / 25);

    //Display the status of the bird's hunger on the page. 
    foodTextStyle.innerHTML = birdHungerReport[birdHungerArrayIndex];

    //Prevent the bird's exercise stat from going below 0. 
    bird.exercise = bird.exercise < 0 ? 0 : bird.exercise;

    //Figure out which array index value corresponds with the bird's exercise stat. 
    birdExerciseArrayIndex = Math.floor(bird.exercise / 25);

    //Display the status of the bird's exercise on the page. 
    workoutTextStyle.innerHTML = birdExerciseReport[birdExerciseArrayIndex];

    //Update the bird's happiness stat. 
    bird.happy = (bird.food + bird.exercise) / 2;

    //Update the stats on the page. 
    birdStatusStyle.innerHTML = "Bird is at " + bird.exercise + " exercise and " + bird.food + " hunger.";
}


//Receive bird wisdom.
let wisdomStyle = document.getElementById("wisdom");
let wisdom = wisdomStyle;

//Style the bird wisdom button. 
wisdomStyle.innerHTML = "Receive wisdom from Birb."
wisdomStyle.style.textAlign = "center";
wisdomStyle.style.horizontalAlign = "middle";
wisdomStyle.style.lineHeight = 50 + "px";
wisdomStyle.style.height = 50 + "px";
wisdomStyle.style.width = 310 + "px";
wisdomStyle.style.float = "left";
wisdomStyle.style.fontFamily = "Lucida Sans";
wisdomStyle.style.fontSize = 12 + "px";
wisdomStyle.style.backgroundColor = "#999";
wisdomStyle.style.margin = 5 + "px";

//Add an event listener that will activate when clicked. 
wisdom.addEventListener("click", wisdomBird); 


//Create a div that show's the bird's numerical stats.
let wisdomStatus = document.getElementById("wisdomText");
let wisdomStatusStyle = document.createElement("div");

//Show the player the bird's happiness and exercise stats. 
wisdomStatusStyle.innerHTML = "Would you like to hear of Birb's wise wisdom?"

//Apply the div. 
wisdomStatus.appendChild(wisdomStatusStyle);

//Receive bird wisdom from the array.
function wisdomBird(event) {

    //Update the bird's happiness stat. 
    bird.happy = (bird.food + bird.exercise) / 2;

    //Create a variable that will give a random number based on the amount of indexes in the array. 
    let birbMath = Math.round(Math.random() * 18);

    //If the bird is not happy enough, the bird will not give wisdom. 
    //If it can exercise, remove 5 from bird.exercise, 3 from bird.food, and let the bird say a random phrase from the wisdom array.
    if (bird.happy < 25){
        wisdomStatusStyle.innerHTML = "Birb will not satisfy human's desire for knowledge if human does not satisfy Birb.";
    } else {
        bird.exercise -= 3;
        bird.food -= 3;
        wisdomStatusStyle.innerHTML = birdWisdom[birbMath];
    }

    //Prevent bird.hunger from going below 0. 
    bird.hunger = bird.hunger < 0 ? 0 : bird.hunger;

    //Figure out what index value corresponds with the hunger array. 
    birdHungerArrayIndex = Math.floor(bird.food / 25);

    //Display the bird's hunger status on the page. 
    foodTextStyle.innerHTML = birdHungerReport[birdHungerArrayIndex];

    //Prevent the bird's exercise from going below 0. 
    bird.exercise = bird.exercise < 0 ? 0 : bird.exercise;

    //Figure out what index value corresponds with the hunger array. 
    birdExerciseArrayIndex = Math.floor(bird.exercise / 25);

    //Display the bird's workout status on the page. 
    workoutTextStyle.innerHTML = birdExerciseReport[birdExerciseArrayIndex];

}

//Create a final timer that will update the status of the bird. 
let updateBirdStatus = setInterval(updateTimer, 1000);

//Create the timer function. 
function updateTimer() {

    //Display the status of the bird's workout stat. 
    workoutTextStyle.innerHTML = birdExerciseReport[birdExerciseArrayIndex];
    
    //Display the status of the bird's hunger stat. 
    foodTextStyle.innerHTML = birdHungerReport[birdHungerArrayIndex];
}