/*
Sean Walsh
SDI 1507 Section 01
Expressions Worksheet
7/16/2015
 */

//alert("Okay, this works.");


//Dog Years.
console.log     ("** Dog Years. **");
alert           = ("Dogs age faster then people. To find Sparky's age, click \"OK\" "); //engages the user
var age         = prompt("How old is your dog? \n Enter his or her age below.");//let's ask for the dog's age.
var dogAge      = 7 * Number(age);//calculates dog's age and stores it.
console.log     ("Sparky is "+age+" in human years, which is "+dogAge+ " in dog years.");
//entered 2 for Sparky's age, and was returned a value of 14 for dog years.

//Slice of Pie Part 1
console.log("** Slice of Pie Part 1. **");
//engages user and counts heads.
var people          = prompt("Hey, it's a party! \n How many people are here?\n Enter the total number below:");
alert = ("Let's get some pizza!");//offers a bright idea.
//Prompts for a number of pies to be ordered.
var pizzas          = prompt("How many pizza pies do we order? \nEach pie has 8 slices. \nEnter the number below:");
//variable for the slices per pie.
var pieSlices       =pizzas * 8;
//Divides the pizza for the party goers and stores the result.
var slicesEach      = pieSlices / people;
//informs the user as to the number a slices per person.
console.log("There are "+people+" people here. If we order "+pizzas+" pies, everyone gets "+slicesEach+" slices each!");
//Entered 8 people and 2 pies. Everyone gets two slices.

//Slice of Pie 2.
console.log         ("** Slice of Pie Part2.**");
console.log         ("What about Sparky? Let's give him whatever is left over!");
//using  modulo to see how many slices are left for Sparky.
var sparkyEats      = pieSlices % people;
//outputting data to the user.
console.log         ("The are "+people+" people here and we ordered "+pizzas+" pies. Sparky will get "+sparkyEats+" slices.");