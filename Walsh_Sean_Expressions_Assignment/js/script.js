/*
  Sean Walsh
  SDI 1507 Section 01
  Expressions Assignment
  7/14/15
*/


//alert("See, yes. Works this file does.");


//variables
var         customerName;
var         chocolatePrice;
var         vanillaPrice;
var         strawberryPrice;
var         scoopTotal;
var         scoopSubTotal;
var         tax;
var         taxCost;
var         totalCost;

//arrays
var         flavors   = ["chocolate", "vanilla", "strawberry"];



//Alerts and Prompts
customerName  = prompt("Welcome to Flips Ice Cream vending machine. \n What's your name, friend?");
alert                 ("Today we have chocolate, vanilla, and strawberry ice cream at $1.25 per scoop.\n Please press \"ok\" to begin your order.");
flavors[0]    = prompt("How many scoops of chocolate ice cream would you like?");
flavors[1]    = prompt("How many scoops of vanilla ice cream would you like?");
flavors[2]    = prompt("How many scoops of strawberry ice cream would you like?");


//casting the strings to numbers.
flavors[0]  = Number(flavors[0]);
flavors[1]  = Number(flavors[1]);
flavors[2]  = Number(flavors[2]);




//math
chocolatePrice  = flavors[0] * 1.25;
vanillaPrice    = flavors[1] * 1.25;
strawberryPrice = flavors[2] * 1.25;
scoopTotal      = flavors[0] + flavors[1] + flavors[2];
scoopSubTotal   = chocolatePrice + vanillaPrice + strawberryPrice;




//outputs
console.log("Welcome "+customerName+", to Flip's.");
console.log("That's "+flavors[0]+" Scoops of chocolate ice cream for $"+chocolatePrice+".");
console.log("That's "+flavors[1]+" Scoops of vanilla ice cream for $"+vanillaPrice+".");
console.log("That's "+flavors[2]+" Scoops of strawberry ice cream for $"+strawberryPrice+".");
console.log("That's "+scoopTotal+" scoops of ice cream");
console.log("That's a sub total of "+scoopSubTotal+" for ice cream.");
//calculating the total.
tax           = scoopSubTotal * .06;
taxCost           = Math.round(tax * 100)/100;
totalCost     = scoopSubTotal += taxCost;

//outputting the total to the user.
console.log("Plus 6% sales tax is $"+taxCost+".");
console.log("For a grand total of $"+totalCost+".");
console.log("How would you like to pay?");
console.log("Thank you for your payment and enjoy your ice cream, "+customerName+".");