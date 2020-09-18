//Loops run code multiple times

//While loops

/*
    These are if statements taht keep going

    If statements only execute once. "While" loops will constantly
    loop blocks of code until the conditions come up false.

    All the code in the block is executed then re-evaluated if it
    still fits the condition.
   
    The code below will continue running until "thing" is greater than 5.
    During that time, it will continue to add 1 to "thing".

        The code will then continue down the page. The "while" loop has to finish
        before the code will continue.

        Infinite loops are possible, just don't do them. 
*/


/*

thing = 0;

while (thing < 5) {
    console.log(thing);
    thing++;
}

*/


//For loops

/*
    These are basically shorter versions of "while" loops.
    Travis uses this a lot. 

    It goes ( variable, conditional, change).

    The "for" loop below will give the same output as the while loop
    above. 

        There's only four circles since the first one has a radius of 0.
        
        Don't forget that the code will always PEMDAS. 
        
        The circles will also always draw from smallest to largest. 
        If you want a bunch of circles filled in with color, you've gotta
        do largest to smallest and go down with "var--;" or something decreasing
        the variable. 
*/

/*
for( let thingy = 0; thingy < 5; i++ )
{
	circle(100, 100, thingy * 10)
console.log(thingy);
}
*/


//Random Numbers

/*
    Using the "math.random()" line will generate a number between 0 and 1. 

        Nothing needs to be between the "()" to geta  result, think of the 
        line itself as the number

        "math.random()" * 100 can get you values between 0 and 100.
        Make sure to multiply this by 100 to get those numbers high enough.
*/