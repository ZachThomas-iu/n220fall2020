/*
DEBUGGING LECTURE

You will always encounter errors in your code. 
 - Don't get discouraged by the errors.
 - There's steps to get around them.

Part of programming is learning how to fix your errors. 

Planning and debugging are key to fixing said errors. 

At least 50% of Travis' programming work is spent fixing code. 


TWO TYPES OF ERRORS:

 - SYNTAX
    - You wrote something wrong.
    - You'll get better at the syntax over time.
    - Having code samples at your disposal is a good fix. 

 - LOGICAL
    - You thought about it wrong. 
    - Plan. Your. Code. That's how to get around it. 
    - Follow the algorithm and see if it's doing what you expect it to do. 


BREAKING THE PROBLEM DOWN

Most programming problems are made up of smaller problems

Break the problem down int o sub-problems that can be solved. 

A bouncing ball exercise, for instance, is the combination of several different problems: 
 - How to write the code. 
 - How to draw the circle. 
 - How to make the circle move. 
 - How to make the circle bounce. 
 - How to detect when to make the circle bounce. 


*/

var dog = "dog has been pet";
console.log(dog);

/*
DESIGN THE ALGORITHM FIRST

Write out the steps to the solution to your problem in English. 

Include these steps as comments in your code. 


TEST OFTEN

Test after adding each line of code every now and then. 

Keep the dev console open. 


START SMALL

Don't write the code for the entire project right away. 

Write the code for the first thing and then test it. 
 - Draw the circle first, test, make it move, test, make it bounce, test. 

That's how you catch errors easily. 


FIND REFERENCES FOR THE (SMALL) PROBLEMS

Don't just look up "bouncing ball example", you might not "get" how said example works.
 - Look up how to do things like "how to make a shape move". 


COMMENT OR DELETE CODE

Comment out lines of code until the code suddenly works. 
 - Whatever you just commented out is where your no-no is.
 

CONSOLE.LOG 

Console log will help you figure out outputs and statuses of variables in certain points in the code. 
*/

/*
TEXTBOOK

ARRAYS

array.push();
 - Adds values to the end of an array. 

array.pop();
 - Removes values at the end of the array and returns it
 - Basically removes it. 

array.slice();
 - Uses two numbers inside of it (2, 4);
 - Will return the values between those indexes. 
   - It will return the first index, but not the last one. 
   - If no last index is given, it will just display the indexes after the given one. 

Math.round();
 - Rounds to the nearest whole number on the result of math.random(). 
   - console.log(Math.round(Math.random() * 10)); //2
   - Math.ceil() rounds UP always.
   - Math.floor() rounds DOWN always.


DEBUGGING

"use strict";
 - Revisit Chapter 8 of the text for this, it's a little weird.

Sometimes, the error comes up only in the first place a weird value is produced. 
 - Something may be wrong in the code elsewhere. 
*/