/*
Sean Walsh
 SDI Section 01
 Output Assignment
 7/8/15.
 */

//alert ("Surprise! These files are linked.");

//Engage the user.

//variables
var user              =  prompt("What is thy name, Sir?");//ask his or her name.
//letting the user assign a value for Dragon Root.
var dragonRoot        =  prompt("Please enter the number of Dragon Root you have found on your journey below.");
//adding another ingredient.
var blackBerryThorns  =  prompt("How many Black Berry Thorns do you have?");
//setting the boolean variable.
 blackBerryThorns = false;

//casting the ingredients as numbers.
dragonRoot            =  Number(dragonRoot);//Changed variable to a number.


//Outputs.
console.log ("Welcome, "+user+" to\n \"The House of Potions.\"");//Outputting name.
console.log (user+", you have found "+dragonRoot+" Dragon Root.");//outputs number of dragon root the user has as a number.
//outputting the Boolean variable.
console.log ("Your Black Berry thorns are "+blackBerryThorns+". They are Boysen Berry thorns.\n Please return with Blackberry thorns.");

