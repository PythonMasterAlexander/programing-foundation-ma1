/*
  When creating a variable its important to give them meaningful names, the
  variable name should indicate which type of information or data the variable
  is having.

*/

//Question 1 Create two variables, one integer variable and one floating variable

var integer = 666;
var float = 5.78;

//Question 2 Declare and initialise one variable with all working days in a week seperate by hyphens -

var stringOfWorkDayInAWeek = "Monday-Tuesday-Wednesday-Thursday-Friday";

//Question 3 Create four variable that demonstrate the following operations

/* - addition
   - subtraction
   - multiplication
   - division
*/

var resultOfAddition = 5 + 5;
console.log(resultOfAddition);

var resultOfSubtraction = 10 - 9;
console.log(resultOfSubtraction);

var resultOfMultiplication = 10 * 10;
console.log(resultOfMultiplication);

var resultOfDevision = 10 / 2;
console.log(resultOfDevision);

//Question 4 Declare a Boolean value of false

var falseBoolean = false;

//Question 5 Console the number of strings in this string "The frogs are angry"

console.log("The Frogs are angry".length);

/*
  Question 6 Convert the following variables to camelCase
  - time_elapsed
  - totalprice
*/

var timeElapsed;
var totalPrice;

/*
 Question 7 Convert the following string values to numbers
  - number1 = "53";
  - number2 = "44.6";
*/

var number1 = "53";
convertedNumber1 = parseInt(number1);

var number2 = "44.6";
convertedNumber2 = parseFloat(number2);

//Question 8 Check the type of the following variables and log the result

var pet = "donkey";
var typeOfPet = typeof pet;
console.log(typeOfPet);

var age = 89;
var typeOfAge = typeof age;
console.log(typeOfAge);

var discountApplied = true;
var typeOfDiscountApplied = typeof discountApplied;
console.log(typeOfDiscountApplied);

var timeleft;
var typeOfTimeLeft = typeof timeleft;
console.log(typeOfTimeLeft);

/*Question 9 Declare and initialise a variable with the value "Updating heading"
  Select the h1 on the page and set it's inner html value to the variable you declared
*/

var headingH1Replacement = "Updating heading";

var headingElementH1 = document.querySelector("h1");
headingElementH1.innerHTML = headingH1Replacement; 

//Question 10 Select the body element on the page and change the colour to lightblue

var bodyElement = document.querySelector("body");
bodyElement.style.backgroundColor = "lightskyblue";
