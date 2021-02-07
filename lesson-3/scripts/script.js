//Lesson 3

/* Question 1
  - Write an if statment that checks whether firstNumber is smaller than 
  secondNumber. If its it, log the message "The first number is smaller
  than the second number."
*/

var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
  console.log("The first number is smaller than the second number");
}

/* Question 2
  - write code that checks whether age meets the minimumAge requirement.
  Log a message if it passes the test and use an else block to log a 
  message if it doesn't.
  NB remember to convert string values to number values when dealing with
  numbers and strict operators
*/

var age = 11;
var minimumAge = "12";

if (parseInt(age) === minimumAge) {
  console.log("You are old enough.");
} else {
  console.log("You are not old enough.");
}

/* Question 3 - write code that checks whether income meets the 
  maximumIncome requirement. Log a message if it passes the test
  and use an else block to log a message if it doesn't.
*/

var income = 11.050;
var maximumIncome = 13.075;

if (parseFloat(income) <= parseFloat(maximumIncome)) {
  console.log("Maximum Income requirement meet.");
} else {
  console.log("Maximum Income requirement not meet.");
}

/* Question 4
  -Create a variable called studentAge and give it a value between 6 and 19.
  Write code that does the following, using an if..else if statement.
  - if studentAge is between (and including) 6 and 13, log "Barneskole"
  - if studentAge is between 14 and 16, log "Ungdomsskole"
  - if studentAge is between 17 and 19, log "Videregående skole"
  If the studentAge is not within any of those ranges, log the message "Invalid age".
*/

var studentAge = 9;
if (studentAge >= 6 && studentAge <= 13) {
  console.log("Barneskule");
} else if (studentAge >= 14 && studentAge <= 16) {
  console.log("Ungdomsskule");
} else if (studentAge >= 17 && studentAge <= 19) {
  console.log("Vidergående skule");
} else {
  console.log("Invalid");
}

/* Question 5
  -Fix this code
    if ((colour = "orange")) {
      console.log("This colour is a bit rubbish");
}
*/

var colour = "orange";
if (colour === "orange") {
  console.log("This colour is a bit rubbish");
}

/* Question 6
  - Given the following variable
    var invoicePaid = false;
  - write code that logs the message "Not paid" if the invoice has not been paid.
*/

var invoicePaid = false;

if (invoicePaid === true) {
  console.log("Has paid");
} else {
  console.log("Not paid");
}

/* Question 7
  - Given these two variables
    var selectedNumber = 11;
    var winningNumber = "15";
  write code that checks if the winning number hasn't been selected.
  If it hasn't, log the message "You lose again".
  Use the strict inequality operator.
*/

var selectedNumber = 11;
var winningNumber = "15";

if (winningNumber !== selectedNumber) {
  console.log("You lose again");
}

/* Question 8
  - Given this variable
    var dayOfTheWeek = 2;
  Write a switch statement that log the weekday name depending
  on the value of dayOfTheWeek. If dayOfTheWeek is 1, log "Monday",
  if it is 2 log "Tuesday".If the dayOfTheWeek is not a number 
  between 1 and 7, log the message "Invalid day number".
*/

var dayOfTheWeek = 2;

switch (dayOfTheWeek) {
  case 1:
    console.log("Monday");
    break
  case 2:
    console.log("Tuesday");
    break
  case 2:
    console.log("Wednesday");
    break
  case 2:
    console.log("Thursday");
    break
  case 2:
    console.log("Friday");
    break
  case 2:
    console.log("Saturday");
    break
  case 2:
    console.log("Sunday");
    break
  default:
    console.log("Invalid day number");
}
